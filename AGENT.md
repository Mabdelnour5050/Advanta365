# AGENT.md

Guidance for AI coding agents working in this repository.

## Mission

Improve and maintain the Advanta365 public website without weakening its Microsoft 365 consulting positioning, accessibility, responsive polish, or SEO foundation.

## Default Workflow

1. Inspect the current files before editing.
2. Keep changes scoped to the user request.
3. Reuse existing content structures and CSS patterns.
4. Update related SEO metadata when public-facing content changes.
5. Run available verification before finalizing.

## Important Files

- `app/page.jsx` - homepage structure and structured data
- `app/layout.jsx` - global metadata and social preview configuration
- `app/seo-config.js` - shared SEO and site identity values
- `app/globals.css` - responsive visual system
- `app/site-interactions.jsx` - client-only browser interactions
- `app/sitemap.js` - sitemap endpoint
- `app/robots.js` - robots endpoint
- `app/manifest.js` - web app manifest endpoint
- `app/opengraph-image.jsx` - generated social card
- `next.config.mjs` - framework config and headers

## Implementation Rules

- Keep the homepage server-rendered except for small browser interactions.
- Do not introduce new libraries unless they clearly pay for themselves.
- Keep UI controls and content accessible.
- Keep text within responsive containers on mobile and desktop.
- Avoid fake metrics, logos, testimonials, and unverifiable trust claims.
- Prefer precise Microsoft 365 adoption language over vague marketing copy.
- Keep CSS readable and consistent with the existing token palette.

## SEO Rules

- Update `app/seo-config.js` first when changing canonical site facts.
- Keep canonical URL, Open Graph URL, sitemap URL, robots sitemap, and JSON-LD URLs in sync.
- Keep FAQ content visible on the page if it appears in FAQPage JSON-LD.
- Keep service names visible on the page if they appear in service structured data.
- Use the standard `/robots.txt` name, not `robot.txt`.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

If package tooling is unavailable, document the limitation and run whatever syntax or git checks are possible.
