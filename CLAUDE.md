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
local businesses (dental/clinics, restaurants, salons, trades). Content is a **faithful port
of the old site** — same copy, same "Janice" persona, same sections. Do not invent or trim content.

**Stack (fixed — do not change):** Next.js 16 App Router · React 19 · TypeScript · Tailwind CSS v4
(`@theme` in `app/globals.css`) · Framer Motion · GSAP · Lenis (`@studio-freight/lenis`) · three/ogl
(installed, not currently used). `next build` uses `output: "export"` + `images.unoptimized` and
emits `out/`, which Cloudflare Pages serves.

## Architecture

- **Marketing pages = React routes** under `app/`: `/` (home), `/dental` `/restaurants` `/salons`
  `/trades` (industries), `/industries` (hub), `/ai-employee` (Janice),
  `/dental-single-location` `/dental-multi-location`, `/about` `/contact` `/faq` `/how-it-works`
  `/custom-builds` `/ai-training`, and the ported tools/pricing: `/dental-savings-calculator`
  `/restaurants-savings-calculator` `/salons-savings-calculator` `/trades-savings-calculator`
  (one `components/tools/SavingsCalculator.tsx` driven by `lib/savings-calculators.ts`) and
  `/dental-pricing`. Routes are **flat, mirroring the old filenames** so URLs are preserved.
  `/retail` and `/careers` were removed (see `public/_redirects` for where they now point).
- **Auth surface: `/login` only, and it's a placeholder.** `components/auth/LoginForm.tsx` renders
  the sign-in card with a disabled "Coming soon" submit button — no session logic, no redirect.
  `components/auth/AuthShell.tsx` is still live (minimal shared bar — site Logo + back link — NOT
  the marketing mega-nav) and wraps the login page. The real client dashboard (`/dashboard`, formerly
  `/app`) and everything backing it (session mock, mock data, the `Dashboard` component) is **archived**
  under `archive/` — see "Archived (2026-07-24)" below. The route no longer exists; `/dashboard` 404s.
- **`dashboard-mock.html` remains a kept-static page in `public/`** (nav-less iframe widget, no route).
  It is unrelated to the archived client dashboard — the home page and the dental/trades pages still
  embed it live via `components/ui/DashboardEmbed.tsx` as a marketing preview. Do not archive it.
- **`public/industry.css`, `public/industry.js`, `public/smooth-scroll.js`, `public/vendor/lenis.min.js`
  exist only to serve those kept-static pages — do NOT delete them.** (The React app has its own copies
  of the styles/behaviors; see below.)

### CRITICAL — static-export file collisions

With `output: "export"` a route `/dental` emits `out/dental.html`, the **same path** as a
`public/dental.html`. Next fails the build ("conflicting public file and page file"). **Rule: never
keep a `public/<name>.html` that matches a React route** (especially `index.html`). When porting a new
page, delete its `public/*.html` in the same step. Do **not** add `trailingSlash`. Keep `images.unoptimized`.

## Design system

**`DESIGN-SYSTEM.md` is the single source of truth for the design system** — colors, type, spacing,
radius, shadows, components, the landing-page-vs-sub-page scope split, and the enforcement guardrails.
Do not re-describe tokens here; they drift. `app/globals.css` `@theme` is the token *implementation*,
but read `DESIGN-SYSTEM.md` first. In brief: white canvas / near-black ink / one mint accent, a single
`--radius: 4px`, Bebas Neue (display) + Outfit (body) + JetBrains Mono (labels). The cream/mint/
terracotta multi-radius scheme described in older docs is **retired** — ignore any mention of it.

### Stylesheets

- `app/globals.css` — tokens, reset, base, noise/glow.
- `styles/legacy.css` — the old `industry.css` (base/`:root` stripped) + page-specific inline styles.
  Styles **every sub-page** (minimal nav, `.sl/.st/.sd` section headers, `.reveal`, buttons, footer,
  `.ihero/.prob/.frow/.mock/.show/.sig/.stat/.faq/.icta`, dental `#practice-types`, etc.). Global import.
- `styles/home.css` — the old home `<style>` (base stripped), **scoped under `.pe-home`** because the
  home's `.sl/.st/.sd/.btn-*` differ from `industry.css`. Home content is wrapped in `<div className="pe-home">`.
- `components/site/chrome.css` — full mega-nav dropdown, mobile drawer, contact modal, toast.

## Shared components

- `components/site/SiteShell.tsx` — wraps every marketing page: `<Nav>` + `<main>` + `<Footer>` +
  `<ScrollReveal>` + `<LegacyBehaviors>`. **One nav for the whole site** (a single mega-menu on every
  page); `SiteShell`/`Nav` take no `variant` prop.
- `components/site/Nav.tsx` (one mega-menu, hide-on-scroll, mobile drawer), `Footer.tsx`, `Logo.tsx`, `CursorGlow.tsx`,
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

- **Structure (sections, features, stats, testimonials, sources) stays verbatim to the old site.** Keep
  "Janice" as the AI-employee product identity, keep every section (Before/After, stats, testimonials,
  sources). Do not invent or cut sections.
- **All prose (headlines, subheads, section labels, body copy, CTAs) must follow `brand-voice.md`.**
  This supersedes any "verbatim wording" assumption — the old site's copy was written in a slogan-heavy,
  overcompensating tone (anthropomorphized one-liners, "not your average X" comparisons, pain-mirroring)
  that is retired. Port the *content* (what a section says), rewrite the *wording* to be literal,
  grounded, and concise per `brand-voice.md`. See that file's before/after table for concrete examples.
- One primary CTA: **Book a Free 15-Min Call** → `https://cal.com/pacificedge` (external). Secondary:
  **Client Login** → `/login.html`. The contact modal (email links) opens site-wide.
- Emoji ARE used (industry nav icons, dropdown, mocks) — that's the old brand; keep it. This is a visual
  convention, unrelated to prose tone.

## Brand voice (enforced)

**`brand-voice.md` is the single source of truth for tone/copywriting on this site — read it before
writing or editing any user-facing text.** One-line summary: write like you're describing the product
to a smart, skeptical customer who will notice every exaggeration. Literal, grounded, concise, confident.

Banned: anthropomorphized folksiness ("how Janice earns her keep"), slogan syntax / antithesis
("one hire, endless shifts"), defensive comparisons ("not your average bot"), pain-mirroring that
belittles the customer ("it lives in 10 spreadsheets"), absolute/superlative over-claims ("endless",
"every channel", "seamless", "effortless", "powerful"), cutesy section labels ("Three ways to put
Janice to work" instead of "Pricing"), and fragment-punchiness/wink copy.

Required: literal specific claims, confidence through restraint (not adjectives), declarative not
comparative framing, section labels that are true rather than clever, and never claiming capability
the product doesn't actually have today. Less is more — a subtitle can be one sentence, bullets beat
paragraphs, cut anything that isn't load-bearing.

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
- `dashboard-mock.html` is still raw static HTML (used only as the live `DashboardEmbed` marketing
  preview) — port to React later if desired (remember the collision rule).

## Archived (2026-07-24)

The client dashboard was a front-end-only mock (fake session, fake data, no backend) that read as
a real product demo. `/login` is now a disabled placeholder and `/dashboard` no longer resolves.
All of its code was moved out of the live app into `archive/dashboard/` rather than deleted, in
case the real dashboard gets built later:

- `archive/dashboard/page.tsx` — the former `app/dashboard/page.tsx` (`/dashboard` route, formerly `/app`)
- `archive/dashboard/Dashboard.tsx` — the former `components/app/Dashboard.tsx` (main dashboard UI: schedule/convos/reviews views)
- `archive/dashboard/dashboard-mock-data.ts` — the former `lib/dashboard-mock-data.ts` (fake calls/reviews/convos fixtures)
- `archive/dashboard/clientAuth.ts` — the former `lib/clientAuth.ts` (mock `pe_client` session, front-end only, no backend)
- `archive/dashboard/LoginForm.tsx` — the former functional `components/auth/LoginForm.tsx` (validated locally, wrote a mock session, redirected to the dashboard)
- `archive/dashboard/dashboard.css` — the former `styles/dashboard.css` (styles for `Dashboard.tsx`)

**Still live, not archived:** `components/auth/AuthShell.tsx` (shared minimal chrome, now wraps the
placeholder login page), `styles/auth.css` (styles the login card), and `public/dashboard-mock.html`
+ `components/ui/DashboardEmbed.tsx` (the unrelated marketing preview iframe embedded on the home,
dental, and trades pages — this was never part of the client dashboard and was intentionally left
untouched).

The archived files import each other with relative paths and are excluded from the Next.js route
tree (they live outside `app/`), so they don't affect the build. They're not wired to anything live.

## TODO
[] Develop and document consistent and stylish design system based on landing page style that can be propogated consistently to all subpages
[] Replace white bg colour token with cream
[] Cool Hero background 
[] Responsiveness passes
[] Develop consistent, defined product UI system for dashboard graphics and animated components – purpose is to create a unified product design so it doesn't look like we haven't built anything. We should draw on a product design system to make it look like we actually have a product we're actually showcasing and preveiwing rather htan just making up and claiming. Apply to dashboard preview, animated graphical components/elements on landing page and subpages. This is brand and product consistency enforcement.
[] Frontend Design taste pass
[] Improve font system to be more unique, less generic
