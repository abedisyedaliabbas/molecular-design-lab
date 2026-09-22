"""Refresh a complete, dated Scholar snapshot with an optional API fallback."""
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path
import json
import os
import sys
import tempfile

import requests

URL = 'https://scholar.google.com/citations?user=bcqvfOUAAAAJ&hl=en'
AUTHOR_ID = 'bcqvfOUAAAAJ'
SERPAPI_URL = 'https://serpapi.com/search'
STATS_FILE = Path(__file__).resolve().parents[1] / '_data' / 'scholar_stats.json'
METRIC_KEYS = ('citations', 'h_index', 'i10_index')


class StatsTableParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_table = False
        self.in_cell = False
        self.cell = []
        self.row = []
        self.rows = []

    def handle_starttag(self, tag, attrs):
        if tag == 'table' and dict(attrs).get('id') == 'gsc_rsb_st':
            self.in_table = True
        if not self.in_table:
            return
        if tag == 'tr':
            self.row = []
        elif tag in ('td', 'th'):
            self.in_cell = True
            self.cell = []

    def handle_data(self, data):
        if self.in_table and self.in_cell:
            self.cell.append(data)

    def handle_endtag(self, tag):
        if not self.in_table:
            return
        if tag in ('td', 'th'):
            self.row.append(''.join(self.cell).strip())
            self.in_cell = False
        elif tag == 'tr':
            self.rows.append(self.row)
        elif tag == 'table':
            self.in_table = False


def parse_stats(html):
    parser = StatsTableParser()
    parser.feed(html)
    labels = {'Citations': 'citations', 'h-index': 'h_index', 'i10-index': 'i10_index'}
    stats = {}
    for row in parser.rows:
        if len(row) >= 2 and row[0] in labels:
            value = row[1].replace(',', '').replace('\xa0', '').replace(' ', '')
            if not value.isdecimal():
                raise ValueError('Scholar returned a non-numeric metric')
            stats[labels[row[0]]] = int(value)
    if stats.keys() != set(labels.values()):
        raise ValueError('Scholar did not return all three metrics; the previous snapshot is retained')
    return stats


def parse_serpapi_stats(payload):
    """Extract all-time metrics from a SerpAPI Google Scholar Author result."""
    if not isinstance(payload, dict):
        raise ValueError('SerpAPI returned an invalid response')
    if payload.get('error'):
        raise ValueError('SerpAPI returned an error')

    aliases = {
        'citations': 'citations',
        'h_index': 'h_index',
        'indice_h': 'h_index',
        'i10_index': 'i10_index',
        'indice_i10': 'i10_index',
    }
    stats = {}
    cited_by = payload.get('cited_by')
    table = cited_by.get('table') if isinstance(cited_by, dict) else None
    if not isinstance(table, list):
        raise ValueError('SerpAPI did not return a metrics table')
    for row in table:
        if not isinstance(row, dict):
            continue
        for source_key, values in row.items():
            target_key = aliases.get(source_key)
            if target_key and isinstance(values, dict):
                value = values.get('all')
                if isinstance(value, int) and not isinstance(value, bool) and value >= 0:
                    stats[target_key] = value

    if stats.keys() != set(METRIC_KEYS):
        raise ValueError('SerpAPI did not return all three Scholar metrics')
    return stats


def fetch_direct(session):
    response = session.get(URL, headers={'User-Agent': 'Mozilla/5.0'}, timeout=30)
    response.raise_for_status()
    return parse_stats(response.text)


def fetch_serpapi(api_key, session):
    response = session.get(
        SERPAPI_URL,
        params={
            'engine': 'google_scholar_author',
            'author_id': AUTHOR_ID,
            'hl': 'en',
            'api_key': api_key,
        },
        timeout=30,
    )
    response.raise_for_status()
    try:
        payload = response.json()
    except requests.exceptions.JSONDecodeError as error:
        raise ValueError('SerpAPI returned invalid JSON') from error
    return parse_serpapi_stats(payload)


def write_snapshot(path, stats, retrieved_via):
    stats.update(updated_at=datetime.now(timezone.utc).date().isoformat(),
                 source='Google Scholar', source_url=URL, retrieved_via=retrieved_via)
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    name = None
    try:
        with tempfile.NamedTemporaryFile(mode='w', dir=path.parent, delete=False, encoding='utf-8') as output:
            name = output.name
            json.dump(stats, output, indent=2)
            output.write('\n')
        os.replace(name, path)
    finally:
        if name and os.path.exists(name):
            os.unlink(name)
    return stats


def load_snapshot(path):
    """Return an existing complete snapshot, or raise if it cannot be trusted."""
    path = Path(path)
    try:
        snapshot = json.loads(path.read_text(encoding='utf-8'))
    except (OSError, json.JSONDecodeError) as error:
        raise RuntimeError('no valid previous Scholar snapshot is available') from error
    if not all(isinstance(snapshot.get(key), int) and not isinstance(snapshot[key], bool)
               and snapshot[key] >= 0 for key in METRIC_KEYS):
        raise RuntimeError('the previous Scholar snapshot is incomplete')
    return snapshot


def describe_error(error):
    """Describe a provider failure without leaking request URLs or API keys."""
    if isinstance(error, requests.HTTPError) and error.response is not None:
        return f'HTTP {error.response.status_code}'
    return type(error).__name__


def update_stats(path=STATS_FILE, session=requests, api_key=None):
    """Try Scholar, then SerpAPI; retain a valid snapshot if both fail."""
    failures = []
    try:
        return write_snapshot(path, fetch_direct(session), 'Google Scholar')
    except (requests.RequestException, ValueError) as error:
        failures.append(f'direct Scholar: {describe_error(error)}')

    api_key = api_key if api_key is not None else os.environ.get('SERPAPI_API_KEY')
    if api_key:
        try:
            return write_snapshot(path, fetch_serpapi(api_key, session), 'SerpAPI')
        except (requests.RequestException, ValueError) as error:
            failures.append(f'SerpAPI: {describe_error(error)}')
    else:
        failures.append('SerpAPI: not configured')

    snapshot = load_snapshot(path)
    detail = '; '.join(failures)
    print(
        f'::warning title=Scholar snapshot retained::{detail}. '
        f'Keeping snapshot dated {snapshot.get("updated_at", "unknown")}.',
        file=sys.stderr,
    )
    return None


if __name__ == '__main__':
    try:
        result = update_stats()
        if result is not None:
            print(json.dumps(result, indent=2))
    except (RuntimeError, OSError) as error:
        print(f'Scholar refresh failed: {error}', file=sys.stderr)
        sys.exit(1)
