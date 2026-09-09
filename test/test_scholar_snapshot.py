"""Regression checks for complete snapshots and safe failure handling."""
import importlib.util
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import Mock

spec = importlib.util.spec_from_file_location('scholar', Path(__file__).resolve().parents[1] / 'bin/update_scholar_stats.py')
scholar = importlib.util.module_from_spec(spec)
spec.loader.exec_module(scholar)

HTML = '''<table id="gsc_rsb_st"><tr><th></th><th>All</th><th>Since 2021</th></tr>
<tr><td><a>Citations</a></td><td>1,608</td><td>600</td></tr>
<tr><td><a>h-index</a></td><td>14</td><td>12</td></tr>
<tr><td><a>i10-index</a></td><td>16</td><td>14</td></tr></table>'''


class SnapshotTests(unittest.TestCase):
    def test_all_time_column_and_formatted_numbers(self):
        self.assertEqual(scholar.parse_stats(HTML), dict(citations=1608, h_index=14, i10_index=16))

    def test_incomplete_response_is_rejected(self):
        with self.assertRaises(ValueError):
            scholar.parse_stats(HTML.replace('i10-index', 'missing'))

    def test_block_page_does_not_destroy_existing_snapshot(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / 'stats.json'
            path.write_text('{"citations": 608}')
            session = Mock()
            session.get.return_value.text = '<html>Verify you are human</html>'
            with self.assertRaises(ValueError):
                scholar.update_stats(path, session)
            self.assertEqual(path.read_text(), '{"citations": 608}')

    def test_complete_update_has_source_and_date(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / 'stats.json'
            session = Mock()
            session.get.return_value.text = HTML
            scholar.update_stats(path, session)
            stats = json.loads(path.read_text())
            self.assertEqual(stats['h_index'], 14)
            self.assertEqual(stats['source_url'], scholar.URL)
            self.assertRegex(stats['updated_at'], r'^\d{4}-\d{2}-\d{2}$')
            self.assertEqual(session.get.call_args.kwargs['timeout'], 30)


if __name__ == '__main__':
    unittest.main()
