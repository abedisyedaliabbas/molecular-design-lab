---
layout: research_page
permalink: /publications/
title: Publications
description: Research on excited-state mechanisms, fluorophores, photostability, and molecular design. Explore papers, preprints, and research data.
nav: true
nav_order: 2
---

<div class="filter-bar" role="search" aria-label="Filter publications">
  <label for="publication-search">Search publications<input id="publication-search" type="search" placeholder="Title, author, journal, or keyword" autocomplete="off"></label>
  <label for="publication-year">Year<select id="publication-year"><option value="">All years</option></select></label>
  <label for="publication-type">Output type<select id="publication-type"><option value="">All outputs</option><option value="article">Journal articles</option><option value="dataset">Research data</option><option value="preprint">Preprints</option><option value="thesis">Theses</option></select></label>
</div>
<p id="publication-status" class="results-status" aria-live="polite">All research outputs. Conference activities are listed under <a href="{{ '/news/' | relative_url }}#conferences">Updates</a>.</p>
<noscript><p>The complete list is shown below. Enable JavaScript to search and filter.</p></noscript>
<div id="publication-empty" class="empty-results" hidden><p>No publications match these filters.</p><button id="publication-reset" type="button">Clear filters</button></div>
{% bibliography --template research_bib --group_by none --query @*[output_type!=event] %}
<p class="results-status">Citation metrics are available on <a href="{{ site.data.research.scholar_url }}">Google Scholar</a>. Article records are curated from the bibliography; research data and preprints are labeled separately.</p>
