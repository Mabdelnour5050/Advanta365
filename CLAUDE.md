# CLAUDE.md

This file gives Claude context for working on the Advanta365 website.

## Project Identity

Advanta365 is a public marketing site for Microsoft 365 adoption, governance, rollout strategy, and enablement. The audience is enterprise, public sector, healthcare, finance, and other organizations trying to make SharePoint Online, Microsoft Teams, OneDrive, Power Platform, and the broader Microsoft 365 ecosystem easier to adopt and govern.

## Tone and Content

- Write in clear, practical, executive-readable language.
- Emphasize structure, governance, adoption, readiness, learning, and sustainment.
- Keep claims grounded. Do not invent client names, certifications, awards, metrics, case studies, or testimonials.
- Prefer specific Microsoft 365 language over generic transformation language.
- Keep calls to action focused on a roadmap conversation or readiness review.

## Technical Notes

- Framework: Next.js App Router.
- Main page: `app/page.jsx`.
- Client behavior: `app/site-interactions.jsx`.
- Global metadata: `app/layout.jsx`.
- Shared SEO config: `app/seo-config.js`.
- Styling: `app/globals.css`.
- Sitemap, robots, manifest, icon, and Open Graph image are generated through App Router files.

## SEO Rules

- Keep `app/seo-config.js` as the source of truth for site URL, title, description, keywords, services, and section names.
- Keep the production URL aligned to `https://advanta365.com` unless the owner changes the domain.
- Update JSON-LD in `app/page.jsx` when services or FAQs change.
- Do not add SearchAction structured data unless a real site search feature exists.
- Do not add fake social profile URLs.
- Maintain `/sitemap.xml` and `/robots.txt` through `app/sitemap.js` and `app/robots.js`.

## Verification

When dependencies are available, run:

```bash
npm run lint
npm run build
```

If npm or dependencies are unavailable, at minimum run syntax and diff checks that are possible in the environment, then state what could not be verified.
