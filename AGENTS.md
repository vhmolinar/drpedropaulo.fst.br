# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Professional website for Dr. Pedro Paulo Molinar, a physiotherapist based in Uberlândia, Brazil. Live at https://drpedropaulo.fst.br.

## Commands

```bash
npm run dev       # Start local development server
npm run build     # Build for production (output: dist/)
npm run preview   # Preview production build locally
```

There are no linting, testing, or formatting commands configured.

## Architecture

Static site built with **Astro** + **Tailwind CSS**, deployed to **Firebase Hosting** via GitHub Actions.

### Key structure

- `src/pages/index.astro` — Main landing page
- `src/pages/links/` — Markdown files that define each contact/social link (frontmatter-driven)
- `src/components/` — Reusable Astro components (`Header`, `Footer`, `Link`, `Icon`)
- `src/layouts/` — Base HTML layout with all meta tags, SEO, and analytics scripts
- `public/` — Static assets (images, favicons)

### Links system

Each file in `src/pages/links/*.md` defines a link card rendered on the homepage. Link metadata lives in frontmatter (title, URL, icon, etc.). Adding a new link means adding a new Markdown file there.

### Styling

Custom Tailwind theme colors defined in `tailwind.config.cjs`:
- `primary` — `#a1a5c0` (muted lavender)
- `sweetblack` — `#2f2e2e` (charcoal)

### Deployment

Pushing to `main` automatically builds and deploys to Firebase Hosting (live channel). Pull requests deploy to a preview channel. Secrets required: `FIREBASE_SERVICE_ACCOUNT_PEDROPAULOMOLINAR`.
