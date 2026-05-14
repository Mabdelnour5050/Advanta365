# Advanta365

Advanta365 is a public-facing website for Microsoft 365 adoption, governance, rollout strategy, and enablement services. The site positions Advanta365 as a practical modern workplace partner for organizations that need SharePoint Online, Microsoft Teams, OneDrive, Power Platform, and Microsoft 365 governance to feel clear, usable, and sustainable.

The homepage is designed as a complete single-page experience: it explains the offer, shows the adoption journey, outlines engagement models, presents service capabilities, answers common questions, and gives visitors a clear path to start a roadmap conversation.

## Website Focus

- Microsoft 365 adoption and rollout strategy
- SharePoint Online implementation and information architecture
- Microsoft Teams governance and lifecycle planning
- OneDrive onboarding and sharing guidance
- Power Platform governance and responsible enablement
- Change management, communications, and learning programs
- Site owner, champion, and end-user enablement
- Adoption measurement and executive reporting

## Visitor Journey

The homepage is structured to move visitors from problem recognition to action:

1. Hero positioning for Microsoft 365 adoption and governance
2. Platform focus areas across SharePoint, Teams, OneDrive, and Power Platform
3. Readiness diagnostic prompts for common rollout risks
4. Engagement models for sprint, rollout, and sustainment work
5. Service catalog covering strategy, implementation, governance, training, and measurement
6. Adoption lifecycle from vision through sustainment
7. Methodology, learning, outcomes, deliverables, FAQ, and contact CTA

## SEO and Crawl Assets

The site includes a deeper App Router SEO foundation:

- Rich global metadata in `app/layout.jsx`
- Central SEO facts in `app/seo-config.js`
- JSON-LD structured data for Organization, WebSite, ProfessionalService, and FAQPage
- Dynamic Open Graph image route at `/opengraph-image`
- Web app manifest at `/manifest.webmanifest`
- Sitemap route at `/sitemap.xml`
- Robots route at `/robots.txt`
- Indexing and preview directives through Next headers

## Tech Stack

- Next.js App Router
- React
- CSS modules through global responsive styling
- Next Metadata API
- Next sitemap, robots, manifest, icon, and Open Graph image routes

## Run Locally

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

## Lint

```bash
npm run lint
```

## Project Structure

- `app/page.jsx` - homepage content, sections, CTA flow, and JSON-LD structured data
- `app/site-interactions.jsx` - client-side navigation, reveal states, and journey highlighting
- `app/layout.jsx` - global metadata, canonical URL, social preview, robots, icons, and viewport settings
- `app/seo-config.js` - shared site identity, keywords, services, sections, and URL helpers
- `app/sitemap.js` - generated sitemap endpoint
- `app/robots.js` - generated robots endpoint
- `app/manifest.js` - generated web app manifest
- `app/opengraph-image.jsx` - generated social sharing image
- `app/icon.svg` - site icon
- `app/globals.css` - visual system, responsive layout, and motion styling
- `eslint.config.mjs` - Next.js Core Web Vitals ESLint configuration
- `next.config.mjs` - Next.js configuration and SEO/security headers
- `CLAUDE.md` - guidance for Claude-based contributors
- `AGENT.md` - guidance for coding agents working in this repository

## Content Guidelines

Keep the writing concrete, executive-readable, and focused on Microsoft 365 adoption outcomes. Avoid inflated claims, fake metrics, unsupported testimonials, and generic SaaS language. When adding claims, make sure they can be supported by the actual site content or by a real source.

## Deployment

This repository is ready for a standard Next.js deployment on Vercel or another compatible host. Set the production domain to `https://advanta365.com` so canonical URLs, sitemap entries, robots directives, structured data, and social previews stay aligned.
