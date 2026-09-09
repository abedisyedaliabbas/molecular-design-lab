# Molecular Design Lab research site

The redesign uses the existing Jekyll/al-folio project and GitHub Pages subpath. The custom `research_*` layouts and `assets/css/research.css` form a site-specific presentation layer. Runtime gems and their build pipeline remain pinned in the Gemfile.

## Updating content

- `_data/research.yml`: affiliation, current research, links, and selected contributions.
- `_bibliography/papers.bib`: canonical research-output records. `output_type` distinguishes `article`, `dataset`, `preprint`, `thesis`, and `event`. Publications and the conference archive render directly from this file.
- `_news/`: dated news. Use `date_precision: year` when only the event year is established; an internal date controls ordering but only the year is displayed.
- `_data/cv.yml`: CV experience, education, methods, and awards. Regenerate the downloadable CV with `python3 bin/build_cv_pdf.py` (PyYAML and reportlab required). Review the rendered PDF after changing content.
- `_data/travel.json`: retained travel narratives and gallery, migrated from the old browser-only data. Relative recency labels were removed because they were static and stale. Only existing image files are included.

## Sources and editorial decisions

Current NUS I-FIM Research Fellow role and delta machine learning work on the NRF Materials Data Foundry were confirmed directly by the researcher on 9 September 2026. The August 2026 start month comes from the existing CV.

- [Official MDF announcement](https://ifim.nus.edu.sg/national-university-of-singapore-and-university-of-toronto-launch-the-materials-data-foundry-to-fast-track-discovery-of-functional-materials-with-ai-and-robotics/): institutional project context. Project-wide robotics/data ambitions are not represented as personal achievements.
- [NUS profile](https://ifim.nus.edu.sg/people/syed-ali-abbas-abedi/): linked institutional record; automated access was blocked during preparation.
- The two identical Scholar text snapshots supplied by the researcher show 608 citations, h-index 14, and i10-index 16. These seed the dated 9 September snapshot. The raw pasted text is not published.
- [Nature Chemistry](https://doi.org/10.1038/s41557-026-02228-0): added the 26 August 2026 paper, with author list verified against the publisher's Crossmark record.
- [Zenodo PET workflow](https://zenodo.org/records/17374292): the computational workflow is labeled research data, replacing an unsupported Nature Protocols journal designation. No claim of journal acceptance is made.
- [First-author TICT paper](https://doi.org/10.1021/acs.jpca.1c06263): verified DOI and mechanistic contribution.
- [Delta learning method](https://doi.org/10.1021/acs.jctc.5b00099): background method citation, not presented as the researcher's publication.

Conference attendance records are retained under Updates rather than counted as papers. The age-structured predator-prey thesis is attributed to the 2019 LUMS master's work, consistent with the supplied Scholar record and CV. Legacy numerical performance claims in CV summaries were replaced with supported qualitative descriptions. Historical news years were reconciled with the existing CV and displayed with year precision. Existing education/award details are retained from the researcher's CV and have not been independently certified. Example blog posts, teaching samples, the example book review, and the legacy HTML backup are excluded from the public build without deleting their sources.

## Freshness and deployment

The existing daily Scholar action now requires a complete set of metrics and writes atomically. HTTP failures, challenge pages, or partial results fail visibly and preserve the previous snapshot and date. It does not promise uninterrupted access to Google Scholar. Journal records and personal news remain curated rather than automatically accepting unverified search results.

The deployment workflow listens for successful completion of the Scholar workflow because commits made with GITHUB_TOKEN do not trigger another push workflow. Ordinary content pushes retain the existing deploy behavior. New Scholar JSON changes are also covered by the path filters.

GitHub Pages uses `_config.yml` and `/molecular-design-lab`. The private Sites review uses `.openai/preview.yml` and builds to `dist`. Its access policy is separate from the public GitHub Pages site; publishing a private review does not replace the live GitHub site.

## Validation

- `bundle exec jekyll build --baseurl /molecular-design-lab`
- `python3 -m unittest discover -s test -p 'test_scholar_snapshot.py'`
- `node test/test_research_filters.cjs`
- `bundle exec al-folio upgrade overrides audit`
- Formatting checks for changed Liquid, Markdown, YAML, CSS, and JavaScript.
- Generated-output checks for route assets, internal links, fragment IDs, output categories, and unresolved template syntax.
- Downloadable CV rendered and visually reviewed on all three pages.

The starter's existing `lint:style-contract` prohibits all `_layouts`, `_includes`, and `_sass` directories, including the site's pre-existing overrides. Its three directory errors therefore remain incompatible with the documented customized-site override workflow. The plugin override audit is the applicable ownership check and all detected overrides are acknowledged. Browser interaction/visual regression tests were not run; the Sites skill requires an explicit browser-testing request. Existing integration suites that exercise unrelated comment/distill/plugin toggles were not rerun for the custom presentation layer.
