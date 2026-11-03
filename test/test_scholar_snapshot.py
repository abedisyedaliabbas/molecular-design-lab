"""Regression checks for complete snapshots and safe failure handling."""
import importlib.util
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import Mock, patch

import requests

spec = importlib.util.spec_from_file_location('scholar', Path(__file__).resolve().parents[1] / 'bin/update_scholar_stats.py')
scholar = importlib.util.module_from_spec(spec)
spec.loader.exec_module(scholar)

HTML = '''<table id="gsc_rsb_st"><tr><th></th><th>All</th><th>Since 2021</th></tr>
<tr><td><a>Citations</a></td><td>1,608</td><td>600</td></tr>
<tr><td><a>h-index</a></td><td>14</td><td>12</td></tr>
<tr><td><a>i10-index</a></td><td>16</td><td>14</td></tr></table>'''

SERPAPI_RESULT = {
    'cited_by': {
        'table': [
            {'citations': {'all': 1609, 'since_2021': 600}},
            {'h_index': {'all': 15, 'since_2021': 12}},
            {'i10_index': {'all': 17, 'since_2021': 14}},
        ]
    }
}


def response(*, text='', payload=None, status=200):
    result = Mock()
    result.text = text
    result.json.return_value = payload
    if status >= 400:
        result.raise_for_status.side_effect = requests.HTTPError(
            response=Mock(status_code=status)
        )
    return result


class SnapshotTests(unittest.TestCase):
    def test_all_time_column_and_formatted_numbers(self):
        self.assertEqual(scholar.parse_stats(HTML), dict(citations=1608, h_index=14, i10_index=16))

    def test_incomplete_response_is_rejected(self):
        with self.assertRaises(ValueError):
            scholar.parse_stats(HTML.replace('i10-index', 'missing'))

    def test_serpapi_parser_accepts_complete_all_time_metrics(self):
        self.assertEqual(
            scholar.parse_serpapi_stats(SERPAPI_RESULT),
            dict(citations=1609, h_index=15, i10_index=17),
        )

    def test_serpapi_parser_rejects_incomplete_metrics(self):
        with self.assertRaises(ValueError):
            scholar.parse_serpapi_stats({'cited_by': {'table': []}})
        with self.assertRaises(ValueError):
            scholar.parse_serpapi_stats(None)

    def test_http_403_falls_back_to_serpapi(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / 'stats.json'
            session = Mock()
            session.get.side_effect = [
                response(status=403),
                response(payload=SERPAPI_RESULT),
            ]
            stats = scholar.update_stats(path, session, api_key='secret')
            self.assertEqual(stats['citations'], 1609)
            self.assertEqual(stats['retrieved_via'], 'SerpAPI')
            self.assertEqual(
                session.get.call_args.kwargs['params']['engine'],
                'google_scholar_author',
            )

    def test_all_provider_failures_retain_existing_snapshot(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / 'stats.json'
            original = '{"citations": 608, "h_index": 14, "i10_index": 16, "updated_at": "2026-09-09"}'
            path.write_text(original)
            session = Mock()
            session.get.side_effect = [response(status=403), response(status=500)]
            with patch('sys.stderr') as stderr:
                self.assertIsNone(scholar.update_stats(path, session, api_key='secret'))
            self.assertEqual(path.read_text(), original)
            warning = ''.join(call.args[0] for call in stderr.write.call_args_list if call.args)
            self.assertIn('HTTP 403', warning)
            self.assertIn('HTTP 500', warning)
            self.assertNotIn('secret', warning)

    def test_failure_without_valid_snapshot_is_fatal(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / 'missing.json'
            session = Mock()
            session.get.return_value = response(status=403)
            with self.assertRaises(RuntimeError):
                scholar.update_stats(path, session, api_key='')

    def test_missing_api_key_retains_existing_snapshot(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / 'stats.json'
            path.write_text('{"citations": 608, "h_index": 14, "i10_index": 16}')
            session = Mock()
            session.get.return_value = response(status=403)
            with patch('sys.stderr') as stderr:
                self.assertIsNone(scholar.update_stats(path, session, api_key=''))
            self.assertEqual(session.get.call_count, 1)
            warning = ''.join(call.args[0] for call in stderr.write.call_args_list if call.args)
            self.assertIn('SerpAPI: not configured', warning)

    def test_complete_update_has_source_and_date(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / 'stats.json'
            session = Mock()
            session.get.return_value = response(text=HTML)
            scholar.update_stats(path, session)
            stats = json.loads(path.read_text())
            self.assertEqual(stats['h_index'], 14)
            self.assertEqual(stats['source_url'], scholar.URL)
            self.assertEqual(stats['retrieved_via'], 'Google Scholar')
            self.assertRegex(stats['updated_at'], r'^\d{4}-\d{2}-\d{2}$')
            self.assertEqual(session.get.call_args.kwargs['timeout'], 30)


if __name__ == '__main__':
    unittest.main()
