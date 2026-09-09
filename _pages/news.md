---
layout: research_page
title: Updates
description: Recent research, publications, and conference activities.
permalink: /news/
nav: true
nav_order: 4
---

{% assign updates = site.news | sort: 'date' | reverse %}
{% for item in updates %}<article class="update-row"><time datetime="{% if item.date_precision == 'year' %}{{ item.date | date: '%Y' }}{% else %}{{ item.date | date: '%Y-%m' }}{% endif %}">{% if item.date_precision == 'year' %}{{ item.date | date: '%Y' }}{% else %}{{ item.date | date: '%b %Y' }}{% endif %}</time><div><h3>{{ item.title }}</h3>{{ item.content | markdownify }}</div></article>{% endfor %}

<section id="conferences" class="research-section"><p class="eyebrow">Research community</p><h2>Conferences & presentations</h2><p>Talks, poster presentations, meetings, and training from my research journey.</p>{% bibliography --template research_bib --group_by none --query @*[output_type=event] %}</section>
