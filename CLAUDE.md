# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hirnix is a bilingual (Ukrainian/Czech) marketing website for a web-design studio targeting Ukrainian entrepreneurs in Czechia. It is built with **Next.js 16 App Router**, deployed to **Cloudflare Workers** via `@opennextjs/cloudflare`, and uses **Supabase** for the admin backend.

## Commands

```bash
npm run dev          # Start local dev server (http://localhost:3000)
npm run build        # Next.js production build
npm run lint         # ESLint check
npm run cf:build     # Build for Cloudflare Workers (opennextjs-cloudflare)
npm run cf:preview   # Build + local Wrangler preview
npm run cf:deploy    # Build + deploy to Cloudflare Workers
```

There are no automated tests in this project.

## Architecture

### Content & Localisation

All copy lives in `config/i18n/uk.ts` (Ukrainian) and `config/i18n/cz.ts` (Czech). Both export a single typed object consumed by `app/page.tsx` via `const t = uk` (root is Ukrainian). The Czech page at `/cz` uses the `cz` export. `config/contacts.ts` holds all contact links used across components.

### Pages & Routing

- `/` — main landing page (`app/page.tsx`), composes all section components from `components/`
- `/cz` — Czech-language version of the landing
- `/admin` — protected dashboard (Supabase auth, middleware guard)
  - `/admin/login` — public auth page
  - `/admin/leads` — table of contact form submissions
  - `/admin/content` — CMS for editable site content (`site_content` Supabase table)
  - `/admin/analytics` — analytics overview

### Supabase Integration

Three clients with different scopes:
- `lib/supabase.ts` — singleton anon client for API routes (server-side, no cookies)
- `lib/supabase-server.ts` — SSR client using `next/headers` cookies (Server Components)
- `lib/supabase-browser.ts` — browser client for Client Components

`middleware.ts` guards all `/admin/*` routes: redirects unauthenticated users to `/admin/login` and authenticated users away from the login page.

### Contact Form API

`app/api/contact/route.ts` — POST handler that:
1. Inserts a lead into the Supabase `leads` table
2. Sends a Telegram notification via `TELEGRAM_BOT_TOKEN` / `TELEGRAM_CHAT_ID` env vars

Required env vars: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`.

### Cloudflare Deployment

`wrangler.jsonc` configures the Cloudflare Worker. The worker name is `hirnix`. Build output goes to `.open-next/`. The `cf:*` scripts handle the full build+deploy pipeline.

---

## Always Do First

- "Invoke the `frontend-design` skill" before writing any frontend code, every session.

## Reference Images

- If a reference image is provided: match layout, spacing, typography, and color exactly.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do not stop after one screenshot pass.

## Local Server

- **Always serve on localhost** — never screenshot a `file://` URL.
- Start the dev server: `node serve.mjs` serves the project root at `http://localhost:3000`
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow

- Puppeteer is installed at `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`
- **Always screenshot from localhost:** `node screenshot.js http://localhost:3000`
- Screenshots are saved automatically to `./temporary_screenshots/screenshot-N.png`
- Optional label suffix: `node screenshot.js http://localhost:3000 label` saves as `screenshot-[label].png`
- After screenshotting, read the PNG from `temporary_screenshots/` with the Read tool
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is too large"
- Check: spacing/padding, font size/weight/line-height, colors exact hex, alignment, visual hierarchy.

## Output Defaults

- Single `index.html` file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand Assets

- Always check the `brand_assets/` folder before designing. It may contain logos, colors, fonts, images or references.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values.

## Anti-Generic Guardrails

- **Colors:** Never use default Tailwind palette — indigo-500, blue-600, etc. Pick a custom palette.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif font with a readable body font.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states.
- **Images:** Add a gradient overlay — `bg-gradient-to-t from-black/60` — and a color treatment.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system: base → elevated → floating.

## Landing Page Quality Rules

- The page must look like a real business website, not a generic AI-generated template.
- Prioritize trust, clarity, conversion, and professional visual hierarchy.
- The first screen must clearly answer:
  - what the company does
  - where it works
  - who it helps
  - what action the visitor should take next
- CTA buttons must be visible above the fold and repeated naturally throughout the page.
- Avoid vague marketing language. Use concrete, practical benefits.
- Use real-photo style placeholders that match the business category.
- The design must feel credible for a local service business.
- Each section must have a clear purpose and support the main conversion goal.
- Do not overload the page with unnecessary effects, icons, or decorative elements.

## Conversion Rules

- Every major section should move the visitor closer to booking a consultation.
- Hero CTA should scroll to the contact section.
- Final CTA should repeat the main value proposition.
- Contact form should ask only for necessary information.
- Trust indicators should appear close to CTA buttons.
- FAQ should remove objections about price, timeline, warranty, payment, materials, and process.
- Service cards should explain what the client actually receives, not just list service names.
- The page should make the next step feel easy, low-risk, and clear.
- Avoid aggressive sales language. The tone should be confident, calm, and professional.

## Hard Rules

- Do not add sections, features, or content not in the reference.
- Do not "improve" a reference design — match it.
- Do not stop after one screenshot pass.
- Do not use `transition-all`.
- Do not use default Tailwind blue/indigo as primary color.
