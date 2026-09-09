"""Check generated research-site routes, categories, assets, and internal anchors.

Usage: python3 test/check_research_output.py OUTPUT_DIRECTORY [BASEURL]
Requires beautifulsoup4. Does not launch or inspect a browser.
"""
from pathlib import Path
from urllib.parse import urlsplit, unquote
import sys
from bs4 import BeautifulSoup

root=Path(sys.argv[1])
base=sys.argv[2] if len(sys.argv)>2 else '/molecular-design-lab'
errors=[]
routes=['index.html','projects/index.html','publications/index.html','cv/index.html','news/index.html','travel/index.html','404.html']
for route in routes:
    soup=BeautifulSoup((root/route).read_text(),'html.parser')
    if len(soup.select('h1'))!=1: errors.append((route,'heading count'))
    if '{{' in soup.get_text() or '{%' in soup.get_text(): errors.append((route,'unrendered Liquid'))
    for el in soup.select('[href],img[src],script[src]'):
        u=urlsplit(el.get('href') or el.get('src'))
        if u.scheme or u.netloc: continue
        if not u.path: target=root/route
        elif u.path.startswith(base+'/'):
            target=root/unquote(u.path.removeprefix(base+'/'))
        elif u.path.startswith('/'):
            errors.append((route,'wrong basepath',u.path)); continue
        else: target=(root/route).parent/unquote(u.path)
        if target.is_dir(): target=target/'index.html'
        if not target.exists(): errors.append((route,'missing target',str(target)))
        elif u.fragment and target.suffix=='.html':
            targetdoc=BeautifulSoup(target.read_text(),'html.parser')
            if not targetdoc.find(id=u.fragment): errors.append((route,'missing anchor',u.fragment))
    pubs=soup.select('.publication-entry')
    if route=='publications/index.html':
        assert len(pubs)==26
        assert all(p.get('data-type')!='event' for p in pubs)
        assert soup.select_one('#pub0')['data-type']=='dataset'
        assert soup.select_one('#pub26')['data-type']=='thesis'
        assert soup.select_one('#pub37')
    if route=='news/index.html':
        assert len(pubs)==12
        assert all(p.get('data-type')=='event' for p in pubs)
    print(route, 'OK' if not errors else 'CHECK ERRORS')
if errors:
    for error in errors: print(error)
    raise SystemExit(1)
print('All seven routes passed asset, internal-link, heading, and bibliography checks.')
