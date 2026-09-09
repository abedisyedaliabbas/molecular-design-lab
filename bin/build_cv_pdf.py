"""Generate the website's downloadable CV from its curated YAML data.

Requires PyYAML and reportlab. Run from any directory with Python 3.
"""
from pathlib import Path
import re
from html import escape
import yaml
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether

ROOT = Path(__file__).resolve().parents[1]
cv = yaml.safe_load((ROOT / '_data/cv.yml').read_text())['cv']
profile = yaml.safe_load((ROOT / '_data/research.yml').read_text())
INK = colors.HexColor('#122a39')
ACCENT = colors.HexColor('#a64124')
MUTED = colors.HexColor('#53626a')
styles = {
    'title': ParagraphStyle('title', fontName='Times-Roman', fontSize=29, leading=33, textColor=INK, spaceAfter=10),
    'section': ParagraphStyle('section', fontName='Times-Roman', fontSize=19, leading=23, textColor=INK, spaceBefore=18, spaceAfter=12, keepWithNext=True),
    'heading': ParagraphStyle('heading', fontName='Helvetica-Bold', fontSize=10, leading=14, textColor=INK, spaceAfter=4, keepWithNext=True),
    'body': ParagraphStyle('body', fontName='Helvetica', fontSize=9.5, leading=14, textColor=MUTED, spaceAfter=7),
    'date': ParagraphStyle('date', fontName='Helvetica', fontSize=8.5, leading=12, textColor=ACCENT, spaceAfter=4, keepWithNext=True),
}
def clean(value):
    text=str(value).replace('–','-').replace('—','-').replace('‑','-').replace('−','-').replace('·',' / ').replace('“','"').replace('”','"').replace('’',"'")
    return escape(re.sub(r'\*\*','',text))
def para(value, kind='body'):
    return Paragraph(clean(value),styles[kind])
def section(title):
    story.append(para(title,'section'))
def footer(canvas,doc):
    canvas.setStrokeColor(colors.HexColor('#d7dfe2'));canvas.line(48,40,A4[0]-48,40)
    canvas.setFillColor(MUTED);canvas.setFont('Helvetica',8)
    canvas.drawString(48,27,'Syed Ali Abbas Abedi | Curriculum vitae | September 2026')
    canvas.drawRightString(A4[0]-48,27,str(doc.page))
story=[para(profile['name'],'title'),para('Research Fellow | NUS Institute for Functional Intelligent Materials','heading'),para(profile['email']+' | Singapore'),Paragraph('<link href="'+cv['url']+'" color="#a64124">'+cv['url']+'</link>',styles['body']),Spacer(1,10),para('Computational chemistry, excited-state photophysics, molecular design, and delta machine learning. Current work: NRF Materials Data Foundry project, NUS I-FIM.')]
section('Research experience')
for job in cv['sections']['Experience']:
    story += [para(str(job['start_date'])+' - '+str(job['end_date']),'date'),para(job['position'],'heading'),para(job['company']),para(job['summary']),Spacer(1,4)]
story.append(PageBreak())
section('Education')
for degree in cv['sections']['Education']:
    story += [para(str(degree['start_date'])+' - '+str(degree['end_date']),'date'),para(degree['studyType'],'heading'),para(degree['institution']),para(degree['summary'])]
section('Methods and technical skills')
for skill in cv['sections']['Skills']:
    story += [para(skill['name'],'heading'),para('; '.join(skill['keywords']))]
story.append(PageBreak())
section('Selected publications')
for paper in profile['highlights']:
    story += [para(str(paper['year'])+' | '+paper['journal'],'date'),para(paper['title'],'heading'),Paragraph('<link href="'+paper['url']+'" color="#a64124">'+paper['url']+'</link>',styles['body'])]
section('Awards and support')
for award in cv['sections']['Awards']:
    story += [para(str(award['date'])+' | '+award['title'],'heading'),para(award['awarder'])]
section('Selected presentations and meetings')
for item in cv['sections']['Invited Presentations & Conferences'][:5]:
    story.append(para(item['bullet']))
output=ROOT/'assets/pdf/cv.pdf'
SimpleDocTemplate(str(output),pagesize=A4,leftMargin=48,rightMargin=48,topMargin=42,bottomMargin=58,title='Syed Ali Abbas Abedi - Curriculum Vitae',author=profile['name']).build(story,onFirstPage=footer,onLaterPages=footer)
print(output)
