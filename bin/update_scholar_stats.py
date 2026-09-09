"""Refresh a complete, dated Scholar snapshot; preserve it on fetch/parse failure."""
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path
import json
import os
import sys
import tempfile

import requests

URL = 'https://scholar.google.com/citations?user=bcqvfOUAAAAJ&hl=en'
STATS_FILE = Path(__file__).resolve().parents[1] / '_data' / 'scholar_stats.json'


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


def update_stats(path=STATS_FILE, session=requests):
    response = session.get(URL, headers={'User-Agent': 'Mozilla/5.0'}, timeout=30)
    response.raise_for_status()
    stats = parse_stats(response.text)
    stats.update(updated_at=datetime.now(timezone.utc).date().isoformat(),
                 source='Google Scholar', source_url=URL)
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


if __name__ == '__main__':
    try:
        print(json.dumps(update_stats(), indent=2))
    except (requests.RequestException, ValueError, OSError) as error:
        print(f'Scholar refresh failed: {error}', file=sys.stderr)
        sys.exit(1)
