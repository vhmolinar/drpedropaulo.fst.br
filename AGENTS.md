# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Professional website for Dr. Pedro Paulo Molinar, a physiotherapist based in Uberlândia, Brazil. Live at https://drpedropaulo.fst.br.

## Commands

```bash
npm run dev       # Start local development server
npm run build     # Build for production (output: dist/)
npm run preview   # Preview production build locally
npm run deploy:staging  # Build and deploy to the Firebase Hosting "staging" preview channel (expires in 7 days)
```

`deploy:staging` requires the global `firebase` CLI and a `FIREBASE_TOKEN` (from `firebase login:ci`) in `.env`, which is gitignored. Never commit `.env` or print the token.

There are no linting, testing, or formatting commands configured.

## Architecture

Static site built with **Astro** + **Tailwind CSS**, deployed to **Firebase Hosting** via GitHub Actions.

### Key structure

- `src/pages/index.astro` — Main landing page (sections: hero, services, studio gallery, about, testimonials, steps, contact/map, FAQ, CTA)
- `src/pages/404.astro` — Not-found page (noindex); Firebase serves it for unknown URLs
- `src/config.ts` — Single source for contact info, address, geo, hours and WhatsApp/Instagram URLs
- `src/data/` — Content data: `reviews.json` (Google testimonials), `faq.ts`, `media.ts` (gallery videos/images), `schema.ts` (JSON-LD graph), `links/*.md`
- `src/components/` — Astro components (`Nav`, `Header` (hero), `MediaGallery`, `Testimonials`, `Footer`, `Link`, `Icon`, `UiIcon`)
- `src/layouts/` — Base HTML layout with meta tags, SEO, analytics (incl. `contact_click` gtag events) and JSON-LD slot. The gtag script loads only on first interaction or 5s after `load`, to keep it out of the critical path
- `public/fonts/` — Self-hosted Inter and Fraunces (latin subset, preloaded); don't reintroduce Google Fonts links
- `public/media/` — Optimized WebP images and H.264 videos (no audio) used by the gallery and hero

### Links system

Each file in `src/data/links/*.md` defines a link card rendered in the contact section. Link metadata lives in frontmatter (title, href, icon). They live outside `src/pages/` so they are not published as standalone pages.

### Testimonials

`src/data/reviews.json` is maintained manually (Google Maps relative dates, e.g. "7 meses atrás"). The carousel shows up to 15 five-star reviews with text, sorted newest first by parsing the relative date; it also strips the "Editado" prefix and stray spaces before punctuation.

### SEO

FAQ answers and gallery media feed both the visible page and the JSON-LD (`FAQPage`, `VideoObject`), so edit them in `src/data/` only. Keep NAP (name, address, phone) consistent with the Google Business Profile "Molinar Fisioterapia".

### Styling

Custom Tailwind theme in `tailwind.config.cjs`, based on the studio's green wall: `primary` (`#1f6b4a`), `primary-dark`, `primary-light`, `hero-*` (light hero and final CTA), `cta` (main button), `sweetblack`, `accent` (stars), `sand` (page background), `whatsapp`. Fonts: Inter (body) and Fraunces (`font-display`, headings). Tailwind is v3.2 — stick to its default opacity scale (e.g. `/80`, not `/85`).

### Deployment

Pushing to `main` automatically builds and deploys to Firebase Hosting (live channel). Pull requests deploy to a preview channel. Secrets required: `FIREBASE_SERVICE_ACCOUNT_PEDROPAULOMOLINAR`.
