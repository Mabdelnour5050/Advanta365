# Advanta365

Marketing site for ADVANTA365 — enterprise Microsoft 365 adoption, governance, and enablement framework.

## Stack

- Next.js 16 (App Router)
- React 19, TypeScript strict
- Tailwind CSS v4
- shadcn/ui + Radix primitives
- next-themes
- pnpm

## Local development

```sh
pnpm install
pnpm dev          # http://localhost:3000
pnpm typecheck    # tsc --noEmit
pnpm lint
pnpm build
```

## Structure

```
app/              App Router pages and layout
components/       SiteLayout, ErrorBoundary, shadcn ui/*
hooks/            Custom React hooks
lib/              content.ts (centralized copy) and utils
public/           Static assets
```

## Deploy

Vercel auto-detects Next.js. No `vercel.json` required.
