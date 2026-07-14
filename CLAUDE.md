# Pacific Edge AI — Website

> **2026-07-13 — The original `pacificedge.ai` site was ported INTO the Next.js framework.**
> The old static HTML site (warm cream + mint + terracotta, Bebas Neue, the "Janice" AI-employee
> persona) is now rebuilt as **real Next.js App Router routes + React components**, not served as
> raw HTML from `public/`. Same tech stack, same `output: "export"` → Cloudflare Pages deploy.
> The previous electric-blue Next.js redesign was deleted from `main` (preserved on
> `origin/thomas-redesign`). The old static source lives outside the repo at
> `~/PacificEdge AI/Company Data/pacificedge-site`.

## What this is

Marketing site for **Pacific Edge AI**, a Vancouver done-for-you AI-operations software startup for
local businesses (dental/clinics, restaurants, salons, trades, retail). Content is a **faithful port
of the old site** — same copy, same "Janice" persona, same sections. Do not invent or trim content.

**Stack (fixed — do not change):** Next.js 16 App Router · React 19 · TypeScript · Tailwind CSS v4
(`@theme` in `app/globals.css`) · Framer Motion · GSAP · Lenis (`@studio-freight/lenis`) · three/ogl
(installed, not currently used). `next build` uses `output: "export"` + `images.unoptimized` and
emits `out/`, which Cloudflare Pages serves.

## Architecture

- **Marketing pages = React routes** under `app/`: `/` (home), `/dental` `/restaurants` `/salons`
  `/trades` `/retail` (industries), `/industries` (hub), `/ai-employee` (Janice), `/careers`,
  `/dental-single-location` `/dental-multi-location`. Routes are **flat, mirroring the old filenames**
  so URLs are preserved.
- **Kept-static utility pages live in `public/`** and are served verbatim (not yet ported): the 5
  `*-savings-calculator.html`, `login.html`, `app.html`, `dashboard-mock.html`. The home page and
  each industry page embed `dashboard-mock.html` via `<iframe id="idash">`.
- **`public/industry.css`, `public/industry.js`, `public/smooth-scroll.js`, `public/vendor/lenis.min.js`
  exist only to serve those kept-static pages — do NOT delete them.** (The React app has its own copies
  of the styles/behaviors; see below.)

### CRITICAL — static-export file collisions

With `output: "export"` a route `/dental` emits `out/dental.html`, the **same path** as a
`public/dental.html`. Next fails the build ("conflicting public file and page file"). **Rule: never
keep a `public/<name>.html` that matches a React route** (especially `index.html`). When porting a new
page, delete its `public/*.html` in the same step. Do **not** add `trailingSlash`. Keep `images.unoptimized`.

## Design system (warm / original — NOT the old electric-blue redesign)

`app/globals.css` `@theme` is the single source of truth. Tokens:

- **Surfaces:** `--color-bg #f4f1ea` (cream), `--color-bg2 #ebe6da`, `--color-card`.
- **Ink:** `--color-text #1e1b16`, `--color-text2`, `--color-text3`.
- **Mint accent:** `--color-accent #4af0c0`, `--color-accent-ink #0a7d5d`, `--color-accent-bright #0a9d76`,
  `--color-on-accent #04130f`. **Terracotta:** `--color-accent2 #c75d3c`.
- **Radius:** `--radius-btn 8px`, `--radius-card 20px`, `--radius-pill 100px` (rounded, not sharp).
- Bare aliases (`--bg`, `--accent`, `--grad`, `--glow`, …) are mirrored in `:root` so verbatim-ported CSS resolves.
- Textures: fixed 2% SVG-noise overlay (`body::after`), cursor-follow mint glow (`components/site/CursorGlow.tsx`),
  hero particle canvas (`#p` in `HomeContent`).

**Fonts** (via `next/font/google` in `app/layout.tsx`): **Bebas Neue** → `--font-display`, **Outfit** →
`--font-body`, **JetBrains Mono** → `--font-mono` (eyebrows/labels).

**Buttons:** `components/ui/button.tsx` — variants `primary` (mint fill), `ghost` (hairline), `calc`
(mint tint). The ported markup mostly uses the raw `.btn-primary`/`.btn-ghost`/`.btn-calc` classes from
the stylesheets below, which match.

### Stylesheets

- `app/globals.css` — tokens, reset, base, `.eyebrow`, noise/glow.
- `styles/legacy.css` — the old `industry.css` (base/`:root` stripped) + page-specific inline styles.
  Styles **every sub-page** (minimal nav, `.sl/.st/.sd` section headers, `.reveal`, buttons, footer,
  `.ihero/.prob/.frow/.mock/.show/.sig/.stat/.faq/.icta`, dental `#practice-types`, etc.). Global import.
- `styles/home.css` — the old home `<style>` (base stripped), **scoped under `.pe-home`** because the
  home's `.sl/.st/.sd/.btn-*` differ from `industry.css`. Home content is wrapped in `<div className="pe-home">`.
- `components/site/chrome.css` — full mega-nav dropdown, mobile drawer, contact modal, toast.

## Shared components

- `components/site/SiteShell.tsx` — wraps every marketing page: `<Nav variant>` + `<main>` + `<Footer>` +
  `<ScrollReveal>` + `<LegacyBehaviors>`. **Home uses `variant="full"` (mega-menu); all sub-pages use
  `variant="minimal"`.**
- `components/site/Nav.tsx` (full mega-menu / minimal), `Footer.tsx`, `Logo.tsx`, `CursorGlow.tsx`,
  `ContactModalProvider.tsx` (+ `useContactModal`), `ToastProvider.tsx`, `HashScroll.tsx`.
- `components/providers/LenisProvider.tsx` — smooth scroll (reused; exposes `window.__lenis`, read via `lib/lenis.ts`).
- `components/home/HomeContent.tsx` (client — all home interactions) + `CoverageMap.tsx` (client — lazy Leaflet map).

### Ported behaviors (so sub-pages can be static server components)

`components/site/LegacyBehaviors.tsx` reimplements the old `industry.js`: count-up (`.count[data-to]`),
scripted chat (`[data-chat]`), mock feeds (`.mock[data-live]`), one-open FAQ (`<details.faq-item>`),
dashboard iframe autosize (`#idash`). `components/site/ScrollReveal.tsx` handles `.reveal`/`.r` fade-ins.
**Because of these, each industry/sub page is a plain static server component** — just the ported markup
(class→className, entities, camelCase SVG attrs, self-closed voids) wrapped in `<SiteShell variant="minimal">`.
Everything is `prefers-reduced-motion` guarded.

## Content principles

- **Verbatim to the old site.** Keep "Janice", keep every section (Before/After, stats, testimonials,
  sources). The previous redesign's "remove Janice / trim / show-don't-tell" rules **no longer apply**.
- One primary CTA: **Book a Free 15-Min Call** → `https://cal.com/pacificedge` (external). Secondary:
  **Client Login** → `/login.html`. The contact modal (email links) opens site-wide.
- Emoji ARE used (industry nav icons, dropdown, mocks) — that's the old brand; keep it.

## Routing & SEO

- Shared nav/footer anchors are **root-relative** (`/#services`, `/#faq`) so they work from sub-pages.
- Kept-static pages are linked with `.html` (`/dental-savings-calculator.html`, `/login.html`).
- `public/_redirects` maps old `.html` URLs → clean routes (ported pages only). `public/sitemap.xml`
  uses clean URLs (calculators stay `.html`).
- Home has the full JSON-LD `@graph` (`lib/seo/homeJsonLd.ts`). Metadata is per-route via `title.absolute`.

## Commands / deploy

- `npm run dev` (dev server, `.claude/launch.json` name `dev`, port 3000).
- `npm run build` → `out/` (must contain the 11 route htmls **and** the 8 kept-static pages + `_redirects`
  + `industry.css`/`industry.js`/`smooth-scroll.js`/`vendor/` + `logos/` + images). Cloudflare Pages serves `out/`.
- See `AGENTS.md` for Next-16 specifics.

## Known follow-ups (not yet done)

- **Contact form** posts nowhere (old site used Netlify Forms, dead on Cloudflare). The modal currently
  composes a `mailto:hello@pacificedge.ai` and shows a success view. Wire a real endpoint (Cloudflare
  Pages Function / Formspree) when available — see `components/site/ContactModalProvider.tsx`.
- **ai-employee**: the standard chat/mock/count animations work; any bespoke inline-JS demos from the old
  page were not ported (that content renders static).
- Per-industry JSON-LD from the old sub-pages was not ported (home carries the main graph).
- The 5 calculators, `login.html`, `app.html`, `dashboard-mock.html` are still raw static HTML — port to
  React later if desired (remember the collision rule).
