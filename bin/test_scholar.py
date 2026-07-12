import requests
from bs4 import BeautifulSoup
import json

url = "https://scholar.google.com/citations?user=bcqvfOUAAAAJ&hl=en"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}
response = requests.get(url, headers=headers)
soup = BeautifulSoup(response.text, 'html.parser')

stats = {}
table = soup.find('table', id='gsc_rsb_st')
if table:
    rows = table.find_all('tr')
    for row in rows[1:]:
        cols = row.find_all('td')
        if len(cols) == 3:
            label = cols[0].text.strip()
            val = cols[1].text.strip()
            if label == 'Citations':
                stats['citations'] = val
            elif label == 'h-index':
                stats['h_index'] = val
            elif label == 'i10-index':
                stats['i10_index'] = val

print(json.dumps(stats))
