# Advanta365

Premium Microsoft 365 adoption, governance, rollout, and enablement website built with the Next.js App Router.

## What's included

- Server-rendered marketing homepage with a small client interaction layer
- Microsoft 365 adoption command-center hero visual
- Readiness diagnostic, engagement models, services, lifecycle journey, framework, learning, outcomes, deliverables, FAQ, and conversion CTA
- Responsive navigation, reveal animations, reduced-motion support, and metadata for search/social previews

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Project structure

- `app/page.jsx` - Advanta365 homepage content and UI
- `app/site-interactions.jsx` - browser interactions for navigation, reveal states, and journey highlighting
- `app/layout.jsx` - site metadata and root layout
- `app/globals.css` - global responsive styling and motion design
- `eslint.config.mjs` - Next.js Core Web Vitals ESLint configuration
- `next.config.mjs` - Next.js configuration
