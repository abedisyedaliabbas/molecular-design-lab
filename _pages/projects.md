---
layout: research_page
title: Research
description: Mechanistic quantum chemistry, molecular design, and delta machine learning for materials discovery.
permalink: /projects/
nav: true
nav_order: 3
---

<section class="research-detail" id="ai-materials">
  <p class="eyebrow">Current work<br>NUS I-FIM · Research Fellow</p>
  <div><h2>Delta learning for<br>materials discovery.</h2>
  <p>I work on delta machine learning within the NRF Materials Data Foundry (MDF) project at the Institute for Functional Intelligent Materials, National University of Singapore.</p>
  <p>The MDF is a collaboration between NUS I-FIM and the University of Toronto's Acceleration Consortium. It aims to connect synthesis routes, measurements, and simulations in a unified materials dataset, supporting AI-guided discovery.</p>
  <p class="evidence">My contribution focuses on delta machine learning. This connects my background in quantum chemistry and computational workflows with the project's broader materials discovery programme.</p>
  <details class="method-note"><summary>What is delta machine learning?</summary><p>Instead of learning a target property from scratch, a model learns the correction between a lower-cost baseline and a higher-fidelity reference. A prediction combines the baseline with that learned correction.</p><p class="learning-equation">Higher-fidelity estimate = baseline prediction + learned correction</p><p>Its usefulness depends on the reference data, the baseline method, and whether the model generalizes to the materials being studied.</p><a href="https://doi.org/10.1021/acs.jctc.5b00099">Foundational Δ-ML paper ↗</a></details>
  <div class="link-row"><a class="text-link" href="{{ site.data.research.project_url }}">Official Materials Data Foundry announcement ↗</a><a class="text-link" href="{{ site.data.research.profile_url }}">NUS researcher profile ↗</a></div></div>
</section>
{% for direction in site.data.research.directions limit:2 %}
<section class="research-detail"><p class="eyebrow">{{ direction.label }}</p><div><h2>{{ direction.title }}.</h2><p>{{ direction.text }}</p><p class="evidence">{{ direction.evidence }}</p><p>{{ direction.methods }}</p><a class="text-link" href="{{ '/publications/' | relative_url }}#{{ direction.publication }}">Related publication →</a></div></section>
{% endfor %}
<section class="research-detail"><p class="eyebrow">What I bring to a collaboration</p><div><h2>Calculations that help<br>answer the chemistry.</h2><p>My strengths span electronic-structure calculations, interpretation of excited-state pathways, and the translation of computational results into molecular design questions.</p><ul><li>Investigating photoinduced electron transfer, twisted intramolecular charge transfer, and excited-state proton transfer.</li><li>Relating structure and conformation to emission, photostability, and non-radiative decay.</li><li>Building reproducible Python workflows for quantum chemical calculations, output analysis, and property prediction.</li><li>Working with experimental colleagues to connect computed mechanisms with spectroscopy and imaging.</li></ul><a class="text-link" href="{{ '/cv/' | relative_url }}">Methods, training & experience →</a></div></section>
<section class="tool-panel"><p class="eyebrow">Research resources</p><h2>A reproducible workflow for PET.</h2><p>Computational data and source code for a DFT/TD-DFT workflow investigating photoinduced electron transfer in fluorescent molecules, including inputs, outputs, and analysis scripts.</p><a class="text-link" href="https://zenodo.org/records/17374292">Explore the Zenodo record ↗</a></section>
<section class="tool-panel"><p class="eyebrow">Software</p><h2>Quantum Chemistry Input Generator</h2><p>A tool for preparing quantum chemical input files and supporting repeatable computational workflows.</p><a class="text-link" href="https://github.com/abedisyedaliabbas/Quantum-Chemistry-Software-Input-Generator">View the repository ↗</a></section>
