---
layout: research_page
permalink: /cv/
title: Curriculum vitae
description: Research experience, interdisciplinary training, and computational methods.
nav: true
nav_order: 5
---

<p><strong>{{ site.data.research.role }}</strong> · {{ site.data.research.institute }} · {{ site.data.research.institution }}</p>
<div class="link-row"><a class="text-link" href="{{ '/assets/pdf/cv.pdf' | relative_url }}">Download CV PDF ↓</a><a class="text-link" href="{{ site.data.research.orcid_url }}">ORCID ↗</a><a class="text-link" href="mailto:{{ site.data.research.email }}">Contact →</a></div>
<p class="results-status">Updated September 2026. The web profile and downloadable CV use the same research and experience records.</p>
{% assign cv = site.data.cv.cv %}
<section class="cv-section"><h2>Experience</h2><div>{% for job in cv.sections.Experience %}<article class="cv-item"><p class="cv-date">{{ job.start_date }} — {{ job.end_date }}</p><h3>{{ job.position }}</h3><p>{{ job.company }}</p>{{ job.summary | markdownify }}</article>{% endfor %}</div></section>
<section class="cv-section"><h2>Education</h2><div>{% for degree in cv.sections.Education %}<article class="cv-item"><p class="cv-date">{{ degree.start_date }} — {{ degree.end_date }}</p><h3>{{ degree.studyType }}</h3><p>{{ degree.institution }}</p>{{ degree.summary | markdownify }}</article>{% endfor %}</div></section>
<section class="cv-section"><h2>Methods & skills</h2><div>{% for skill in cv.sections.Skills %}<article class="cv-item"><h3>{{ skill.name }}</h3><ul class="skill-list">{% for keyword in skill.keywords %}<li>{{ keyword }}</li>{% endfor %}</ul></article>{% endfor %}</div></section>
<section class="cv-section"><h2>Awards & support</h2><div>{% for award in cv.sections.Awards %}<article class="cv-item"><p class="cv-date">{{ award.date }}</p><h3>{{ award.title }}</h3><p>{{ award.awarder }}</p></article>{% endfor %}</div></section>
<section class="cv-section"><h2>Presentations</h2><div><ul>{% for talk in cv.sections['Invited Presentations & Conferences'] %}<li>{{ talk.bullet }}</li>{% endfor %}</ul></div></section>
