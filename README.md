# Molecular Design Lab

Welcome to the personal research website and computational chemistry portfolio of **Dr. Syed Ali Abbas Abedi**.

This repository contains the source code for the website hosted at [abedisyedaliabbas.github.io/molecular-design-lab](https://abedisyedaliabbas.github.io/molecular-design-lab).

## About

I am a Computational Chemist specializing in AI-driven molecular design, excited-state dynamics, and the photophysics of organic fluorophores. This website serves as a central hub for my academic CV, research projects, publications, and scientific tools.

### Features
- **Dynamic CV**: Auto-generated curriculum vitae powered by YAML data.
- **Publications Library**: Complete searchable bibliography of my peer-reviewed papers.
- **Automated Scholar Metrics**: Nightly GitHub Action updates to fetch live citation counts from Google Scholar.

## Local Development

If you are a collaborator or just looking to run this site locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/abedisyedaliabbas/molecular-design-lab.git
   cd molecular-design-lab
   ```
2. Install dependencies:
   ```bash
   npm ci
   bundle install
   ```
3. Run the local server:
   ```bash
   docker compose up -d
   # The site will be available at http://127.0.0.1:8080/molecular-design-lab/
   ```

---

*This website is built using the open-source [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme for academics.*
