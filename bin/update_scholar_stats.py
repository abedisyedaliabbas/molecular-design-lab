import requests
import re
import json
import os

url = "https://scholar.google.com/citations?user=bcqvfOUAAAAJ&hl=en"
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}

try:
    response = requests.get(url, headers=headers)
    response.raise_for_status()
    text = response.text
    
    stats = {}
    
    citations = re.search(r'Citations</a></td><td class=\"gsc_rsb_std\">(\d+)</td>', text)
    h_index = re.search(r'h-index</a></td><td class=\"gsc_rsb_std\">(\d+)</td>', text)
    i10 = re.search(r'i10-index</a></td><td class=\"gsc_rsb_std\">(\d+)</td>', text)
    
    if citations:
        stats["citations"] = int(citations.group(1))
    if h_index:
        stats["h_index"] = int(h_index.group(1))
    if i10:
        stats["i10_index"] = int(i10.group(1))
        
    if stats:
        # Save to _data/scholar_stats.json
        data_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), '_data')
        os.makedirs(data_dir, exist_ok=True)
        stats_file = os.path.join(data_dir, 'scholar_stats.json')
        
        with open(stats_file, 'w') as f:
            json.dump(stats, f, indent=2)
            
        print(f"Successfully updated {stats_file} with: {stats}")
    else:
        print("Could not find stats in the HTML.")
        
except Exception as e:
    print(f"Error fetching Google Scholar stats: {e}")
