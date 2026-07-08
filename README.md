# Pacific Edge AI — Website

Marketing site for [Pacific Edge AI](https://pacificedge.ai): a multi-page Next.js site for Vancouver local businesses (clinics, restaurants, salons, trades, retail).

## Stack

| Tech | Purpose |
|------|---------|
| **Next.js 16** (App Router) | React framework — routing, layouts, SSR/SSG, image/font optimization, production builds |
| **React 19** | UI components and client interactivity |
| **TypeScript** | Static typing across pages, components, and shared utilities |
| **Tailwind CSS v4** | Utility-first styling; design tokens (cream, navy, ash) live in `app/globals.css` |
| **PostCSS** | Processes Tailwind and CSS for the build pipeline |
| **next/font (Google)** | Self-hosted **Syne** (display) and **DM Sans** (UI/body) — no layout shift, no external font requests |
| **Framer Motion** | Scroll reveals, section transitions, and UI micro-interactions |
| **GSAP + ScrollTrigger** | Scroll-driven animations (e.g. pinned hero visuals, scrubbed timelines) |
| **Lenis** | Smooth scroll; synced with GSAP ScrollTrigger via `LenisProvider` |
| **Lodash** | Small utilities (e.g. debounce on interactive text effects) |
| **Lucide React** | Consistent SVG icons (nav, cards, testimonials) |
| **ESLint** | Linting via `eslint-config-next` |

## Scripts

```bash
npm run dev      # Local dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # Run ESLint
```

## Project layout

- `app/` — routes, root layout, global styles
- `components/` — nav, footer, sections, UI primitives
- `lib/` — content modules, calculators, dashboard mock data, SEO, auth
- `public/` — static assets (images, icons)

Design and content guidelines: see `CLAUDE.md`.

## Rebuild status

The old-site re-implementation is **complete** (phases 0–6): multi-page marketing site, demo client portal, Janice demos, savings calculators, dashboard preview, and SEO (meta, JSON-LD, sitemap, legacy `.html` redirects). Build passes at 34 routes.

## Pre-launch todo

- [ ] **Hero headline** — finalize copy in a workshop (layout and CTAs are in place)
- [ ] **Thomas Llamzon** — add bio and founder photo on `/about`
- [ ] **Dental sub-pages** — replace placeholder copy on `/industries/dental/single-location` and `/multi-location` (Leone)
- [ ] **Contact** — embed Cal.com on `/contact` (link works today; embed is stubbed)
- [ ] **Legal** — have `/terms` and `/privacy` reviewed by a lawyer before production
- [ ] **Visual QA** — spot-check 375 / 768 / 1024 / 1440 breakpoints before go-live (include the savings calculators at `/tools/savings/*`, now interactive)
- [ ] **Lint** — `npm run lint` reports 6 `react-hooks/set-state-in-effect` errors (Next 16 rule) on one-time init effects in `Nav`, `Hero`, `ProcessTeaser`, `AnimatedValue`, `ScriptedChatDemo`, and the portal page; build and runtime are unaffected, but clean these (or scope the rule) before wiring lint into CI
- [ ] **Deploy** — ship static export to production host; confirm legacy redirects (`public/_redirects` or `vercel.json`)

### Client login (deferred — demo only for now)

The **Client Login** nav item currently points at `/login`, a **demo-only** portal
gated by a `localStorage` session (`lib/auth/demo-session.ts`) — no real
authentication. This is intentional for now: it's a generic demo and the live
Janice product isn't built yet.

- [ ] **Client login → hosted OAuth** — replace the demo `localStorage` login with a link out to a real Pacific Edge login page (Google OAuth / OIDC, or similar). Something more secure ships alongside the live Janice backend; holding off until then.

### Optional / later

- [ ] `/industries` index page (nav links directly to each industry today)
- [ ] Live Janice backend (replace fixed conversation tree)
- [ ] Contact form backend (email + Cal.com is enough for v1)
