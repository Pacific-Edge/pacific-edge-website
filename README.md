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
- `lib/` — nav config, motion presets
- `public/` — static assets (images, icons)

Design and content guidelines: see `CLAUDE.md`.
