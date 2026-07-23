# Pacific Edge AI — Design System

> **Status: living reference, not a finished spec.** This document describes the system as it
> actually exists in the codebase today, cites every rule against `file:line`, and calls out the
> specific places where the codebase hasn't caught up to its own rules yet (§11). Build new pages
> against the rules in §1–§10. When you hit one of the deviations in §11, match the *rule*, not the
> drifted example — and fix the example if it's cheap to do in the same pass.
>
> This file supersedes the previous audit-report version of `DESIGN-SYSTEM.md` (the "Part 1 audit
> findings / Part 2 proposed spec" format). That document did its job — most of what it flagged is
> now fixed, per its own changelog — and its history is preserved in git (`git log -- DESIGN-SYSTEM.md`).
> This version is the forward-facing reference the rest of the site gets built against.

---

## Quickstart (TL;DR)

The whole system on one screen — everything below is detail.

- **4 colors, nothing else.** White `--color-bg`, near-black ink `--color-text`, gray (ink via
  `color-mix`), one mint `--color-accent`. Every other shade is `color-mix(in oklab, <token> X%,
  transparent)`. **Never a raw hex or `rgb()/rgba()`** for a brand color — stylelint fails the build if
  you do (§1.1).
- **3 buttons, never a 4th.** `.btn-mint` (the one primary per view) · `.btn-dark` (secondary) ·
  `EmbedLink` (tertiary). Icon-only actions use `.icon-btn` (§4.1).
- **3 shadows.** `--shadow-float` · `--shadow-float-lg` · `--shadow-mock` (§3.5). No bespoke shadows.
- **1 radius.** `--radius: 4px` everywhere; only true circles (`50%`) are exempt (§3.4).
- **Type scale** (§3.2): Bebas display (H1/H2/big numbers) · Outfit body (everything else) · JetBrains
  Mono (data/labels). Pick a heading by semantic level, never by "what looks right for this section."
- **Layout tokens** (§3.3): `--container` 1200 / `--container-wide` 1320 / `--container-narrow` 1120 /
  `--measure` 600; section rhythm `--space-section-y` 88px. Core breakpoints: 1080 / 960 / 680 / 600.
- **Two tiers** (§2): the landing page (`/`) is full-expression (shaders, gradients, `StyledContainer`);
  **every other page is restrained** — flat token fills, no gradients, no decorative primitives. ESLint
  blocks landing-only imports on sub-pages (§1.1).

**The 5 don'ts:** (1) no raw hex / `rgba()` for a brand color; (2) no 5th color — ink *is* the dark
register; (3) no two `.btn-mint` in one actions row; (4) no `StyledContainer` / shader / gradient on a
sub-page; (5) no bespoke shadow or one-off radius.

---

## 0. What this system actually is

Read this before anything else, because it corrects the two places this doc's predecessor
(and `CLAUDE.md`) get the current system wrong:

1. **This is not the cream/mint/terracotta site anymore.** At some point after the "port the old
   site into Next.js" pass, the landing page was rebuilt again into a stricter **white canvas / near-
   black ink / one mint accent** system with a **single 4px radius** everywhere. `terracotta`
   (`--accent2`) is retired. `CLAUDE.md`'s "Design system" section (cream `#f4f1ea`, radius `8px/20px/
   100px`, Bebas-everywhere) describes the *previous* revision and is stale — see §11.1.
2. **The rule this system runs on is stated in `app/globals.css:3-9`:** *exactly four colors exist —
   white, black, gray (derived from black), and mint (derived from one mint hex) — via `color-mix()`.*
   No fifth color, no standalone hex, anywhere. Everything below is a consequence of that one rule.

---

## 1. Core principles

- **Token-first, always.** Every color, radius, shadow, and font resolves to a `var(--color-*)` /
  `var(--shadow-*)` / `var(--radius)` / `var(--font-*)` token, or a `color-mix()` derived from one.
  A literal hex or `rgba()` in new CSS is a bug, not a style choice. This is the highest-priority rule
  in the whole system right now — see §2.4 for why it currently outranks a full accessibility pass.
- **One radius.** `--radius: 4px` (`app/globals.css:37`) is the only corner radius in the system.
  The single exception is true circles (`border-radius: 50%`), which have no corner to round in the
  first place. If a surface ever needs a second radius, it gets a second named token and a written
  reason — never a silent one-off number.
- **Reuse the primitive, don't hand-roll it.** Three button roles, one container engine
  (`StyledContainer`), one card-shadow trio, one type scale. New pages compose these; they don't
  invent parallel ones. If an existing primitive is *almost* right, extend it — don't fork it.
- **Match the intensity to the page.** The landing page and every other page are not the same tier of
  visual expression — see §2. Applying a landing-page effect to a category/sub-page, or vice versa, is
  the most likely way this system gets misused.
- **Everything is `prefers-reduced-motion` guarded.** Every animation, scroll-reveal, hover-shimmer,
  and shader in this system has a static fallback. New motion must ship with one too.
- **Content is verbatim to the Pacific Edge brand voice** (the "Janice" AI-employee persona, plain
  English, no jargon) — that's a copy rule, not a visual one, but it constrains tone: see §7.

### 1.1 Automated enforcement (stylelint + ESLint)

Two guardrails make the highest-value rules structural, not trust-based (added Phase 1):

- **stylelint** (`stylelint.config.mjs`) bans raw hex and `rgb()/rgba()/hsl()` for brand colors,
  forcing every color through a token + `color-mix()` (the §3.1 rule). It runs as `npm run lint:css`
  and is wired into `prebuild`, so **`npm run build` hard-fails on a raw brand-color literal.** The
  config carries a small, documented, *shrinking* allowlist of files that still hold sanctioned or
  not-yet-tokenized literals: `app/globals.css` (the base-token hex source) and `styles/containers.css`
  (the `--shadow-*` rgba + mask blacks) are permanent; the `TODO(phase-2)` entries for `legacy.css`,
  `home.css`, `pages.css`/`dental.css`, and `chrome.css` get deleted as §11.4 tokenizes each file.
- **ESLint** (`eslint.config.mjs`, `no-restricted-imports`) forbids importing the landing-only
  decorative primitives (`StyledContainer`, `SoftAurora`, `ColorBends`, `CardCurveBackground`,
  `SpeedLatticeBackground`, `TiltParallax`) into any sub-page under `app/**`, making the §2.2/§4.11
  prohibition impossible to violate by accident. `app/page.tsx` (home) is exempt; `custom-builds` and
  `ai-training` are temporarily exempt for their known landing-weight tilt (`TODO(phase-2)`, §4.3/§11.3).

---

## 2. Scope: the landing page vs. category/sub-pages

The system runs at two deliberately different levels of visual intensity. This split is the most
important thing in this document — everything in §3–§6 gets used differently depending on which side
of it a given page is on.

### 2.1 The landing page (`/`) — full expression

The home page is where the brand gets to be loud: WebGL/shader backgrounds (`SoftAurora`,
`ColorBends`), animated SVG curve fields (`CardCurveBackground`), 3D mouse-tilt, gradient fills
(`.sc-bg-mint`, `.surface--mint`), bento-grid `StyledContainer` surfaces, scroll-choreographed
staggered reveals. It's the one page that gets exactly one first impression from a prospective client,
and it's allowed to spend more visual budget earning it. Nothing here is wrong — none of it is meant
to propagate past `app/page.tsx`.

### 2.2 Category / sub-pages — restrained, informational

Every other page — `/dental`, `/restaurants`, `/salons`, `/trades`, `/retail`, `/industries`,
`/about`, `/careers`, `/faq`, `/how-it-works`, `/ai-employee`, `/ai-training`, `/custom-builds`, and
anything added later — is informational, not a second landing page. It exists to answer "does this
apply to my business," not to re-sell the brand with spectacle.

**Reuse from the landing page:**
- Color tokens (§3.1) — the exact same four-color system, no exceptions, no lighter version of it.
- Button roles (§4.1) — `.btn-mint` / `.btn-dark` / `EmbedLink`, unchanged.
- Type scale (§3.2) — the same heading levels and eyebrow treatment.
- Spacing / radius / shadow tokens (§3.3–3.5).

**Do not carry over to sub-pages:**
- **No gradients.** Flat, solid token fills only — no `.sc-bg-mint`/`.surface--mint` linear-gradient
  fill, no blurred glow/orb radial gradients (`.ihero-orb`, `.cta-panel::before`), no ambient washes.
- **No aggressive containerization.** Don't wrap a whole section in a bordered/shadowed/patterned
  `StyledContainer` just for visual richness. A simple flat card — `var(--radius)`, a
  `var(--color-border)` hairline, one `--shadow-*` token, solid `--color-bg`/`--color-bg2` fill — is
  still fine for a genuinely discrete unit (one stat, one testimonial, one feature callout). Bento
  grids, crosshatch/mesh/diag-tight textures, and the animated curve field (`diag-wide`) stay on the
  landing page.
- **No heavy decorative primitives.** `SoftAurora`, `ColorBends`, `CardCurveBackground`,
  `SpeedLatticeBackground`, `TiltParallax` 3D tilt — none of these render on a sub-page. If a sub-page
  visual wants motion, a plain scroll-reveal fade (§3.6) is the ceiling, not a shader or a shine sweep.
- **No emoji** — already a sitewide rule (§7), restated here because it's specifically part of what
  "restrained" means.

### 2.3 Sub-page structure is intentionally undefined

Unlike the landing page (§6.1, one canonical implementation), there is **no mandated section skeleton**
for category/sub-pages. The current dental/restaurants/salons/trades/retail pages all follow one
inherited structure from the original site port (hero → problem grid → before/after → feature rows →
signature visual → stats → FAQ → CTA, documented for reference in §6.2) — that's a legacy pattern
being carried forward by inertia, not a template to keep cloning. A rebuilt or new sub-page should be
organized around what it actually needs to say, assembled only from the shared primitives in §2.2.
Bringing an existing sub-page in line with this system is expected to mean rethinking its section
order and density, not just stripping decoration off the current one while keeping the same shape.

### 2.4 Explicitly deferred (not gaps)

Two things are consciously *not* being worked on right now, by decision rather than oversight — noted
here so they don't get mistaken for forgotten items in §11:

- **Mobile / responsive QA.** Sequenced after this system and its rules are settled, not before —
  reworking every sub-page to the restrained tier first means the responsive pass only has to happen
  once, against the final structure, instead of once now and again after the rebuild.
- **A formal accessibility/contrast audit.** Current priority is strict token discipline (§3.1) —
  every color coming from the four base tokens via `color-mix()`, zero drift — over verifying every
  resulting pairing against WCAG contrast ratios. See §8 for the one pairing worth a first look
  whenever that audit does happen.

---

## 3. Foundations

### 3.1 Color

Single source of truth: `app/globals.css:13-69` (`@theme` block + `:root` bare-name aliases).
Tailwind v4 reads the `@theme` block to generate utilities (`bg-accent`, `text-text2`, …); the bare
aliases (`--bg`, `--accent`, …) exist so verbatim-ported CSS from the old site keeps resolving.

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#ffffff` | Page canvas, card fills on white surfaces |
| `--color-bg2` | `#f6f7f8` (near-white) | Sunken/secondary surfaces (stat bands, form fields) |
| `--color-card` | `color-mix(in oklab, #000 4%, transparent)` | Faint card tint over `--bg` |
| `--color-border` | `color-mix(in oklab, #000 10%, transparent)` | Default hairline |
| `--color-border-a` | `color-mix(in oklab, var(--color-accent) 28%, transparent)` | Accent hairline (hover/active borders) |
| `--color-text` | `#0a0a0a` | Ink |
| `--color-text2` | `color-mix(in oklab, var(--color-text) 62%, transparent)` | Secondary text (body copy, descriptions) |
| `--color-text3` | `color-mix(in oklab, var(--color-text) 42%, transparent)` | Tertiary text (meta, captions, labels) |
| `--color-accent` | `#4af0c0` | The one mint hex. Every other mint shade below derives from this. |
| `--color-accent-ink` | `color-mix(in oklab, var(--color-accent) 60%, black)` | Readable mint-on-white (eyebrows, links, icons) |
| `--color-accent-bright` | `color-mix(in oklab, var(--color-accent) 75%, black)` | Punchier mint for large elements (logo, headline spans, big numbers) |
| `--color-on-accent` | `color-mix(in oklab, black 92%, var(--color-accent) 8%)` | Text/icon color placed *on* a solid mint fill |

Everything else — glows, tints, hover washes — is a `color-mix()` of one of these, never a new hex.
Common alpha steps already in use (not yet named tokens, see §11.4): `4%`, `6%`, `8%`, `10%`, `12%`,
`14%`, `16%`, `18%`, `22%`, `25%`, `28%`, `35%` mint-over-transparent, and `2–10%` ink-over-transparent
for hairline textures (crosshatch, subtle fills).

**Rules — read these as non-negotiable, not aspirational:**
- Never write `#4af0c0`, `rgba(74,240,192,…)`, `rgba(10,10,10,…)`, or `rgba(0,0,0,…)` literally. Use
  `var(--color-accent)` / `var(--color-text)` and `color-mix(in oklab, <token> X%, transparent)`.
- Never introduce a fifth base color (a private brand hex like a "forest green" or "terracotta") for
  a "featured" or "dark" card treatment — the ink token (`--color-text`, `#0a0a0a`) *is* the dark
  register. If a card needs to look "premium," reach for `sc-bg-black` + a mint hairline
  (`color-mix(in oklab, var(--color-accent) 16-25%, transparent)`), not a new hex. (Two places in the
  codebase currently violate this — see §11.3.)
- **This rule is being enforced strictly, ahead of a contrast/accessibility pass (§2.4).** If a new
  component needs a color decision and the token system feels limiting, the answer is a new
  `color-mix()` derivation of an existing token, not a one-off exception — even a well-intentioned one.
- `--font-system` (Apple system font stack) is the one sanctioned exception to "everything is a
  design token" — it's scoped to the iOS phone-chat demo for visual authenticity (§4.10), not a
  typography choice.

### 3.2 Typography

Families (`app/globals.css:39-45`, injected via `next/font` in `app/layout.tsx`):

| Token | Family | Role |
|---|---|---|
| `--font-display` | Bebas Neue | Uppercase display type — hero h1, section h2, CTA titles, big stat numbers |
| `--font-body` | Outfit | Everything else — body copy, buttons, labels, h3-and-below headings |
| `--font-mono` | JetBrains Mono | Tag/badge/data-readout micro-labels — `.px-tag`, `.dx-tier-badge`, `.dx-tier-from/-per` (`styles/pages.css:80`, `styles/dental.css:43,59,61`). Not used on the home page itself; reserved for pricing/stat/data contexts. |
| `--font-system` | Apple system stack | Native iOS chat bubbles only (`components/demo/phone-chat-styles.ts`) |

**Type scale** (by semantic level, not by which page you're on — the two current instances per
level are near-duplicates that should read as one scale; see §11.2 for the small drifts between them):

| Level | Font | Size | Home selector | Sub-page selector |
|---|---|---|---|---|
| Display / H1 | Bebas, uppercase | `clamp(48px, 8vw, 104px)` | `.hero h1` (`home.css:85`) | `.ihero h1` (`legacy.css:62`) |
| Section / H2 | Bebas, uppercase | `clamp(40px, 6vw, 72px)` on home; `clamp(34px, 5vw, 60px)` on sub-pages | `.st` (`home.css:205`) | `.st` (`legacy.css:74`) |
| Subsection / H3 (card/feature heading) | Outfit, 600 | `clamp(23px, 2.3vw, 30px)` | `.ts-h` (`home.css:156`) | — (adopt `.ts-h` for any new card heading at this level) |
| Compact item heading (step, pillar, list-row title) | Outfit, 600, static | `22px` | `.title-step` (`home.css:242`) | same class, reused site-wide |
| Body lead | Outfit, 300 | `16px` / line-height 1.7–1.8 | `.sd` (`home.css:207`) | `.sd` (`legacy.css:76`) |
| Body copy | Outfit, 300–400 | `14–15.5px` | — | `.prob p`, `.frow-text p`, etc. |
| Eyebrow (label above a heading) | Outfit, uppercase, tracked | 11px | `.sl` (`home.css:202`, `letter-spacing:4px`) | `.sl` (`legacy.css:72`, `letter-spacing:2px`) / `.eyebrow` (`legacy.css:60`, `letter-spacing:3px`) |

**Rule:** when adding a heading, pick the semantic level from the left column, not a size that "looks
right" for one section. `.title-step` in particular exists specifically so process-steps, trust-
pillars, and any other "item in a list" heading share one 22px spec instead of each redeclaring it —
reuse it before writing a new heading rule (see `components/home/TrustProofSection.tsx:126` for a
live example).

### 3.3 Spacing & layout

Named layout tokens now exist in `app/globals.css` (`@theme`) — use them for any new component. They
were sized from the values most surfaces already cluster around, with the **landing page as the
canonical anchor** (§11.2); existing raw CSS converges onto them during the Phase 2 componentization.

| Token | Value | Use |
|---|---|---|
| `--container` | `1200px` | General content max-width (the sub-page `.wrap`) |
| `--container-wide` | `1320px` | Widest surface — footer / CTA panels. The widest in the system; don't introduce anything wider without a reason. |
| `--container-narrow` | `1120px` | Alternating feature-row container (`.ind-alt`) |
| `--measure` | `600px` | Readable copy measure for a lead paragraph |
| `--space-section-y` | `88px` | **Canonical** section vertical rhythm — the home value is the anchor; sub-pages' `80px` converges onto it in Phase 2 (§11.2) |
| `--space-section-x` | `56px` | Section horizontal padding |
| `--space-section-y-sm` | `72px` | Section vertical rhythm, step-down under `680px` |

- **Readable copy measure:** `--measure` (600px) for a lead paragraph. `440px` (a supporting column,
  `.map-text`) and `760px` (a wide single-line subtitle, `.sd-oneline`) remain page-specific one-offs —
  don't invent a *new* max-width for an ordinary paragraph; reach for `--measure` first.
- **Card padding:** `28-56px` (clamp) for a hero-weight card (`.ts-card`), `32-36px` for a bento/
  pillar card, `16-20px` for a compact mock/preview card, `26-28px` for a standard grid card
  (`.icard`, `.prob`, `.svc`, `.px-card`). Not yet tokenized — a card-padding token set is a natural
  Phase 2 addition once the `<Card>` component (§4.3 / Phase 2 taxonomy) lands.
- **Core breakpoints:** `1080px`, `960px`, `680px`, `600px` are the mandated four — nearly every
  stylesheet steps down at them. **These are deliberately *not* custom properties:** a CSS `@media`
  condition cannot consume `var()`, so a `--breakpoint-*` token would be unusable in the raw media
  queries the sub-pages actually use. Treat the four as a documented constant. A component-specific
  breakpoint outside that set (`900px`, `880px`, `860px`, `760px`, `380px`) is fine when the
  *component's own* content genuinely needs it — but default to the core four first.

### 3.4 Radius

One token, no exceptions: `--radius: 4px` (`app/globals.css:37`). Every rounded rectangle in the
system — buttons, cards, inputs, tags, the nav dropdown, the contact modal, the phone frame — uses
`var(--radius)` (or the Tailwind arbitrary-value form `rounded-[var(--radius)]`). Only `border-radius:
50%` (avatars, dots, the FAB) is exempt, because a circle has no corner to round.

### 3.5 Shadows / elevation

Three tokens, all in `styles/containers.css:15-22`:

| Token | Value | Use |
|---|---|---|
| `--shadow-float` | `0 30px 70px -42px rgba(10,10,10,.24)` | Default floating card (grid cards, testimonial card, FAQ items) |
| `--shadow-float-lg` | `0 44px 96px -48px rgba(10,10,10,.36)` | High-emphasis surfaces (ink/mint hero cards, sticky dashboard preview, CTA panel) |
| `--shadow-mock` | `0 16px 48px -24px rgba(0,0,0,.35)` | Small inset "mock UI" preview cards nested inside a bigger card |

New elevated surfaces should reach for one of these three, not a bespoke shadow. (A handful of
surfaces still don't — §11.3, §11.4.)

### 3.6 Motion

- **Reveal:** two parallel systems exist and both are intentional — `.reveal`/`.in` (sub-pages,
  `legacy.css:125-128`) and `.r`/`.v` (home, `home.css:208-212`) — both driven by the single
  `ScrollReveal` component (`components/site/ScrollReveal.tsx`) via `IntersectionObserver`, staggered
  with `.d1`–`.d6` / `.rd1`–`.rd6` delay classes. Pick the one matching the file you're in
  (`.reveal` in anything importing `legacy.css`, `.r` inside `.pe-home`). On a sub-page, a plain
  `.reveal` fade is the ceiling — no shimmer, tilt, or shader layered on top (§2.2).
- **Standard easing:** `cubic-bezier(.16,1,.3,1)` (a soft ease-out) is the house curve — used for
  hover lifts, button shimmer, card reveals, `Framer Motion`'s `EASE_OUT` (`lib/motion.ts`) mirrors it.
- **Hover language:** cards lift `translateY(-4px to -7px)` with `border-color` → `--color-border-a`
  and `--shadow-float` → `--shadow-float-lg`; buttons scale `1.03` with a diagonal light-shimmer sweep
  (`.btn-dark::before`/`.btn-mint::before`, `legacy.css:23`).
- **Every animation ships a `@media (prefers-reduced-motion: reduce)` block** that either removes the
  transition/animation outright or renders the end state statically. This is non-negotiable — check
  the reduced-motion block exists before merging new motion, in CSS or Framer Motion (`useReducedMotion()`).

---

## 4. Components

### 4.1 Buttons — three roles, never a fourth

| Role | Class | Component | Notes |
|---|---|---|---|
| Primary CTA | `.btn-mint` | `<Button variant="mint">` (default) | Mint fill, ink text. The one primary action per view. |
| Secondary CTA | `.btn-dark` | `<Button variant="dark">` | Ink fill, white text. Pairs with `.btn-mint` when a view needs two CTAs — never two mints side by side (see §11.7 for a live violation). |
| Tertiary / inline link | `.embed-link` (`variant="light"` \| `"dark"`) | `<EmbedLink>` | Underlined text + `→`, grayscale only, no mint on hover. For "explore / read more," not a competing CTA. |

Shared mechanics (`styles/legacy.css:18-33`, wrapped by `components/ui/button.tsx`): same
`var(--radius)`, same `padding: 15px 30px` default, same hover — `scale(1.03)` plus a diagonal white-
shimmer sweep. `<Button>` exposes `size="sm" | "default" | "lg"` (`components/ui/button.tsx:24-28`);
prefer it over hand-rolled `<a className="btn-mint">` markup in new components so loading/disabled/
icon-slot states can be added centrally later.

**`.icon-btn` — icon-only actions (not a CTA).** For controls that carry no text label: carousel
prev/next, pagination dots, a modal close, the mobile hamburger. It is *not* a fourth CTA — it never
competes as a call to action, so it's exempt from the "three roles" rule. Spec:

- Shape: a true circle (`border-radius: 50%`) for round controls, or a `var(--radius)` square.
- A `var(--color-border)` hairline → `--color-border-a` on hover; a `--color-text2` icon (`lucide-react`
  or inline SVG).
- **No shimmer sweep and no `scale(1.03)` bounce** — that hover language belongs to the CTA buttons
  only; an icon-btn's hover is just the border/color shift.
- **Always ships an `aria-label`** (§8) — there is no visible text to name the control.

Reference implementation: `components/home/TrustProofSection.tsx:74-104`. Reuse it before hand-rolling
another icon-only button; Phase 2 promotes it to a real component alongside `<Button>`.

```tsx
// Primary + secondary pairing (the only two-button pattern)
<a href={CAL} className="btn-mint">Book a Free 15-Min Demo</a>
<a href="/pricing" className="btn-dark"><DollarSign size={16} /> See Pricing</a>

// Tertiary
<EmbedLink href="/dental">Explore dental →</EmbedLink>
```

### 4.2 Surfaces — `StyledContainer`

**Landing-page tier — see §2.2 before reaching for this on a sub-page.**

`components/ui/StyledContainer.tsx` + `styles/containers.css:115-247` is the canonical container
primitive for any card that needs a distinct fill + decorative line pattern. Two **fully orthogonal**
axes — changing one never touches the other:

- **`background`**: `"white" | "black" | "mint"` → `.sc-bg-white/-black/-mint`. Sets the fill and a
  `--sc-line` contrast-color token the pattern draws with.
- **`pattern`**: `"diag-wide" | "mesh" | "diag-tight" | "none"` → `.sc-pat-*`. `diag-wide` is the
  animated two-layer curve field (`CardCurveBackground`, rendered as an `.sc-curve` layer); `mesh`
  and `diag-tight` are pure-CSS repeating-gradient overlays.
- **`line="mint"`** (optional) overrides just the line color, independent of both axes above.

```tsx
<StyledContainer as="article" background="black" pattern="diag-wide" className="ts-ai">
  {/* mint curves drawn on an ink fill */}
</StyledContainer>
```

Related surface utilities in `styles/containers.css:1-113`:

- **`.surface--ink` / `.surface--mint` / `.surface--soft`** — an older, still-live sibling system
  (four tonal registers with a baked-in `.hatch` crosshatch texture + shadow). Prefer `StyledContainer`
  for new work; these three are kept for the surfaces already built on them.
- **`.hatch`** — opt-in crosshatch texture (`--hatch-color` / `--hatch-opacity` / `--hatch-tile`
  custom props), with an optional slow-drift variant (`.hatch--drift`).
- **`.u-float`** — one-off utility to attach `--shadow-float` to any element without pulling in the
  full surface recipe. This one's fine on a sub-page — it's just a shadow, not a patterned fill.

### 4.3 Cards

There isn't (yet) one universal `<Card>` component — instead there's a small, deliberate family of
card *recipes*, each serving a different density/context. Reach for the closest match rather than
inventing a new one. On a sub-page, default to the plain-flat end of this table (`.mock`-style or the
Tailwind recipe) rather than the crosshatched/patterned ones (§2.2):

| Recipe | Where | Use | Tier |
|---|---|---|---|
| `.icard` / `.prob` | `legacy.css:81`, `:150` | Problem/solution grid cards (3-up), crosshatch bg, top-bar reveal on hover | Landing-weight; avoid the crosshatch on new sub-page work |
| `.svc` | `home.css:215` | Home services grid (4-up), same crosshatch + hover shine sweep | Landing only |
| `.px-card` / `.px-aud` / `.px-step` | `pages.css:17,42,66` | Newer showcase pages (Custom Builds, AI Training) — 3D-tilt capable via `[data-tilt]` | Landing-weight (tilt) |
| `.dx-tier` / `.dx-cap` | `dental.css:34,84` | Dental pricing tiers / capability grid — same tilt mechanics as `.px-*` | Landing-weight (tilt) |
| `.mock` | `legacy.css:177` | Compact "glass" UI-preview panel inside a feature visual (chat/dashboard mockups) — `--shadow-mock` | Fine on sub-pages |
| Tailwind `rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-bg)] shadow-[var(--shadow-mock)]` | `OpsDashVisual.tsx`, `WhyUsSection.tsx` visuals | Flat card, no pattern, no tilt | Fine on sub-pages — this is the default recipe for a new sub-page card |
| `StyledContainer` (§4.2) | `WhyUsSection.tsx` bento grid, `.ts-ai`/`.ts-cb` | Hero-weight cards needing a decorative fill + pattern | Landing only (§2.2) |

All of them share the same three ingredients regardless of recipe: `var(--radius)`, a border from
`var(--color-border)` (or an accent variant), and one of the three `--shadow-*` tokens.

### 4.4 Navigation

`components/site/Nav.tsx` + `components/site/chrome.css` — one nav for the whole site (a full mega-
menu with an "Industries"-style dropdown per top-level category, sourced from `lib/nav.ts`'s
`NAV_CATEGORIES`), hide-on-scroll, and a mobile drawer below `960px` where dropdowns become inline
indented lists. `Logo.tsx` renders the wordmark + three angled "slash" bars used in both nav and
footer. Nav chrome is shared infrastructure, not part of the landing/sub-page split — it looks the
same everywhere.

### 4.5 Footer

`components/site/Footer.tsx` — one footer for the whole site: brand block + tagline + contact/social
meta row, one column per `NAV_CATEGORIES` entry (so nav and footer structurally can't drift apart),
a sources/citations line (the stat claims used sitewide), and a bottom bar. Styling lives in both
`legacy.css:403-426` and `home.css:343-364` (near-duplicated, intentionally — see §11.6) and
`chrome.css`. Also shared infrastructure — same everywhere.

### 4.6 Forms & contact modal

`components/site/ContactModalProvider.tsx` (context provider, `useContactModal()` hook) + styling in
`chrome.css:126-168`. One modal, opened from anywhere via the hook (footer email link, nav, etc).
Form field spec: label = 10px uppercase tracked `--color-text3`, input/textarea = `color-mix(in oklab,
var(--color-text) 3%, transparent)` fill, `var(--color-border)` border, focus state swaps the border
to `var(--color-accent)` and tints the fill with `color-mix(in oklab, var(--color-accent) 4%,
transparent)`. Submit button reuses the mint-fill CTA language. Composes a `mailto:` and shows a
success view — no real backend yet (see `CLAUDE.md` "Known follow-ups").

**Error / validation states** (new — `components/site/chrome.css`): an invalid field gets a
`.form-field.has-error` modifier: a solid ink border (`var(--color-text)`) — visually distinct from
both the resting hairline (`--color-border`) and the mint focus ring, so "error" never reads as
"just focused" — a faint ink tint on the fill, and an inline message below the field
(`.form-field-msg`: a small icon + short copy, `11.5px`). No new hue is introduced: per §2.4, token
discipline currently outranks a full accessibility pass, so the error state leans on border weight +
icon + copy rather than color alone. If a later accessibility pass finds that insufficient, a single
scoped "danger" exception — mirroring the `ScriptedChatDemo` iOS-color precedent in §4.10 — is the
fallback, not an arbitrary new hex picked ad hoc.

```css
.form-field.has-error label { color: var(--text); }
.form-field.has-error input,
.form-field.has-error textarea {
  border-color: var(--text);
  background: color-mix(in oklab, var(--color-text) 5%, transparent);
}
.form-field.has-error input:focus,
.form-field.has-error textarea:focus { border-color: var(--text); }
.form-field-msg {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
  font-family: var(--body);
  font-size: 11.5px;
  line-height: 1.4;
  color: var(--text2);
}
.form-field-msg svg { flex-shrink: 0; }
.form-field.has-error .form-field-msg { color: var(--text); font-weight: 500; }
```

```tsx
<div className={cn("form-field", hasError && "has-error")}>
  <label htmlFor="email">Email</label>
  <input
    id="email"
    type="email"
    aria-invalid={hasError}
    aria-describedby={hasError ? "email-error" : undefined}
  />
  {hasError && (
    <p id="email-error" className="form-field-msg">
      <AlertCircle size={13} strokeWidth={2} /> Enter a valid email address
    </p>
  )}
</div>
```

This ships the CSS pattern (already added to `chrome.css`) and the markup convention only —
`ContactModalProvider.tsx` doesn't currently run client-side validation to toggle `.has-error`, so
wiring it to real field checks is separate follow-up work, not done in this pass. Any new form on a
sub-page (a booking form, a calculator) should use this same `.form-field`/`.has-error`/
`.form-field-msg` pattern rather than inventing its own.

**Data forms with a live backend (Phase 3 contract).** The contact modal composes a `mailto:` and has
no server round-trip. Phase 3 brings a real POST endpoint (`functions/api/lead.ts` → Cloudflare KV), so
a form can actually submit. Any data-capture form (the ROI calculator, a booking form) is built to this
contract, on top of the `.form-field`/`.has-error`/`.form-field-msg` primitives above:

- **Work-email gate.** Where a form trades a result for contact info, gate on a work email — reject
  free/consumer domains (gmail, outlook, yahoo, …) with the `.has-error` state + a `.form-field-msg`
  ("Use your work email"). This is client-side UX only; it is **never** the security boundary — the
  endpoint re-validates every field server-side.
- **Multi-step wizard.** For anything longer than ~3 fields, step it: one decision per screen, a
  progress indicator, and back/next controls (next = `.btn-mint`, back = `.btn-dark` or an `EmbedLink`).
  Keep step/field state **lifted out of the step components** so inputs don't remount and lose focus on
  each keystroke (a real risk — see the Phase 3 calculator note in the master plan).
- **Four explicit states**, never a dead button: `idle` → `submitting` (button shows a spinner, is
  `disabled` + `aria-busy`) → `success` (a confirmation *view*, not just a toast, for a lead capture) →
  `error` (a `.form-field-msg`-style banner with a retry; entered data is preserved). Loading/disabled
  styling is centralized in `<Button>` (§4.1) — use it, don't re-style per form.
- **Privacy microcopy.** One line under submit ("We'll only use this to send your breakdown — no spam"),
  in `--color-text3`. If the copy promises a deliverable (an email, a PDF), something must actually send
  it — KV is a lead *store*, not an ESP; wire real delivery or soften the copy (Phase 3).

Reuse the same field/error primitives across every form; never fork a second form-field convention.

### 4.7 Toast

`components/site/ToastProvider.tsx` (`useToast()` hook) + `.pe-toast` (`chrome.css:173-174`) — a
bottom-centered ink-fill pill for lightweight confirmations (e.g. "email copied").

### 4.8 FAQ accordion

`details.faq-item` (`legacy.css:257-267`) — native `<details>`/`<summary>`, one-open-at-a-time
behavior ported in `LegacyBehaviors.tsx`, custom plus/minus icon that rotates on open.

### 4.9 Stats / counters

`.ihero-stats` / `.hero-stats` (inline stat strip under a hero) and `.statband` (full-width band,
4-up) both use the same anatomy: `--font-display` big number in `--color-accent-ink`, small uppercase
label underneath. Numbers animate via `HeroCountUp` (spring count-up, zero layout shift —
`components/ui/HeroCountUp.tsx`) or the CSS `.count[data-to]` behavior in `LegacyBehaviors.tsx`. Fine
on sub-pages — it's a token-driven number + label, not a decorative effect.

### 4.10 Phone / chat demo

`components/demo/ScriptedChatDemo.tsx` (+ `phone-chat-styles.ts`, `lib/demo/`) is the canonical,
reusable device component for any "watch it work" chat visual. Fully self-contained device chrome
(frame/notch/screen); the parent only supplies sizing. Industry-configurable via a
`ScriptedChatScript` registry (`lib/demo/scripted-chats.ts`) — adding a new industry's demo is a data
entry, not a component change: `<ScriptedChatDemo industry="restaurants" />`. Three native-iOS colors
(`#007AFF`, `#E9E9EB`, a frame gradient hex) are a deliberate, documented exception to the token rule
— they exist to read as an authentic iMessage screenshot, not a design-system color. This one is fine
on a sub-page in moderation — it's demonstrating the product, not decorating the page.

### 4.11 Decorative / background primitives — landing-page only

Per §2.2, **none of these render on a category/sub-page.**

| Component | Role |
|---|---|
| `CardCurveBackground` | The `diag-wide` pattern's animated two-layer bezier-curve field, drawn via `currentColor` so `StyledContainer` can recolor it per background |
| `SoftAurora` | WebGL (ogl) soft-noise aurora band — used behind the "Built to deliver" pillar card |
| `ColorBends` | Three.js warped-gradient shader background — a bespoke 4-stop mint ramp for one hero visual (not a design-system palette; see `ColorBends colors={...}` in `HomeContent.tsx`) |
| `SpeedLatticeBackground` | Cheap single-element diagonal-lattice drift (a lighter-weight alternative to blurred blob animations) |
| `TiltParallax` | Progressive-enhancement 3D mouse-tilt (`[data-tilt]`) + parallax drift (`[data-parallax]`) for showcase-page cards; pointer-fine + non-reduced-motion only |
| `HeroRoll` | Odometer-style token roll/slide animation for hero numerals |

---

## 5. Imagery

No fixed technical spec is mandated — use imagery purposefully, only where it earns its place, not as
default decoration. A few baseline rules so photography doesn't quietly reintroduce what §2.2 rules
out:

- Respect `var(--radius)` on any framed photo — same corner language as everything else in the system.
- Use `next/image` for real photography on new work. The two current instances
  (`app/about/page.tsx:51,60`, founder headshots) are raw `<img>` tags — acceptable for small
  fixed-size headshots, but a photo-heavier page should use `next/image` for its optimization/lazy-
  loading. Note the build runs `images.unoptimized` for static export, so source sizing/format still
  needs to be deliberate rather than left to the optimizer.
- No default overlay/duotone/gradient treatment on photos. A photo is a flat, honest photo unless a
  specific page has a real content reason to treat it otherwise — don't tint it mint by default just
  to "match the brand."
- Unused assets already sit in `public/` (`clinic.jpg`, `food.webp`, `spa.webp`, `trades.jpg`,
  `founders/`) if a sub-page rebuild wants real photography in place of the current CSS/SVG mock
  visuals — evaluate case by case per page, not as a mandate to use all of them.

---

## 6. Page anatomy

### 6.1 Home page

`app/page.tsx` → `HomeContent.tsx` is its own reference implementation, scoped under `.pe-home` in
`home.css` specifically because its `.sl/.st/.sd/.btn-*` sizing differs slightly from the sub-page
versions (§11.2) — sections: hero → marquee → "Two Sides To Our Business" (`StyledContainer` ink +
mint pair) → industries → WhyUsSection (bento grid of 4 pillars) → process/dashboard preview →
TrustProofSection (testimonial carousel + trust list) → coverage map → CTA → footer. This is the full-
expression tier (§2.1) — treat it as a reference for tokens/type/buttons, not as a structural template
for anything else.

### 6.2 Category / sub-page pattern — legacy reference, not a mandate

Per §2.3, this is documentation of what the *current* dental/restaurants/salons/trades/retail pages
do, kept here so their existing structure is understood — not a skeleton to keep cloning for new
pages:

1. `.ihero` — eyebrow (`.eyebrow`) → h1 with an accented `<span className="a">` → sub-copy → pain
   line → two CTAs (`.btn-mint` + `.btn-dark`) → optional secondary links → `.ihero-stats` strip.
2. `.divhr` divider.
3. `#problems` — `.sl` eyebrow → `.st` h2 → `.sd` lead → `.prob-grid` (3-up problem cards).
4. `#difference` — Before/After comparison.
5. Solution feature rows (`.frows`/`.frow`, alternating layout).
6. `.show-grid` — "what it looks like" phone-chat demo.
7. Industry-specific signature visual (`.sig-grid` — one unique animated micro-visual per industry:
   restaurants' covers board, salons' filling day, trades' dispatch radar, dental's recall ring).
8. `.statband` — 4-up stat band.
9. `.faq-list` — FAQ accordion.
10. `.icta` — closing CTA panel.
11. Shared `<Footer>`.

When a sub-page gets rebuilt against §2.2's restrained tier, expect this sequence to get thinner and
reordered per-page (e.g. dropping the animated signature visual, flattening the problem grid to plain
text+icon rows) rather than preserved wholesale with the decoration stripped off.

---

## 7. Content & voice principles

(Copy rules, not visual ones — kept here because they constrain what a new page's tone/structure
should look like.)

- Verbatim to the Pacific Edge brand: keep the **"Janice" AI-employee persona**, keep every section
  type (Before/After, stats, testimonials, sources) — do not trim or genericize.
- One primary CTA per view: **Book a Free 15-Min Call** (external, `cal.com/pacificedge`). Secondary:
  **Client Login** (`/login.html`). The contact modal (email links) is available site-wide via
  `useContactModal()`.
- **No emoji** in any component under `app/` or `components/home|site|ui`/ — icons are `lucide-react`
  or inline SVG only. This is fully met today (confirmed zero emoji in the home page and its
  components) and is the bar every sub-page should already be meeting; if you find one that isn't,
  it's a bug, not a style choice.
- Stat/claim copy in the footer's `SOURCES` array (`Footer.tsx:7-16`) must stay cited — every stat
  used anywhere on the site should trace back to one of these numbered sources.

---

## 8. Accessibility & motion

- Every interactive control needs a visible focus state — `<Button>` ships
  `focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-ink` by default
  (`components/ui/button.tsx:15`); hand-rolled `.btn-mint`/`.btn-dark` markup should match it.
- `aria-label` on icon-only controls (carousel arrows, hamburger, contact-modal close) — already the
  pattern in `TrustProofSection.tsx` and `Nav.tsx`; keep it when adding new icon-only buttons.
- `prefers-reduced-motion: reduce` must collapse every animation to its end state — see §3.6. Test
  new components with the OS-level reduced-motion setting on, not just by reading the media query.
- **Base text-pairing contrast check (done — Phase 1).** The core pairings were measured against the
  *actual* oklab `color-mix()` output values (not the token names). Thresholds are WCAG 2.1: 4.5:1 for
  normal text, 3:1 for large text (≥24px, or ≥18.66px bold) and UI components.

  | Pairing | Ratio | Verdict |
  |---|---|---|
  | `--color-text` (#0a0a0a) on white | ~19.7:1 | ✅ AA + AAA |
  | `--color-text2` (62% ink) on white | 6.83:1 | ✅ AA (normal text) |
  | `--color-accent-ink` (#20785f) on white | 5.36:1 | ✅ AA (normal text) |
  | `--color-text3` (42% ink) on white | 3.35:1 | ✅ meta/labels only (large/UI ≥3:1); ✗ for normal body |
  | `--color-accent-bright` (#2fa382) on white | 3.13:1 | ✅ at its large-only use; ✗ for normal text |

  **Decision: no token change.** `--color-accent-ink` — the pairing previously suspected of failing AA
  for small link/body text — passes at 5.36:1. `--color-accent-bright` and `--color-text3` sit below
  4.5:1, but each is only ever used at large sizes (logo, headline spans, big stat numbers) or for
  meta/labels, where 3:1 is the bar; using either for small body text is a *misuse to avoid*, not a
  token defect. A **full** WCAG audit (every component state, focus rings, disabled text, hover
  contrast) remains deferred per §2.4 — this check covered the base text pairings only.

---

## 9. Do's and don'ts

**Do**
- Use `var(--radius)`, `var(--color-*)`, `--shadow-float(-lg)`/`--shadow-mock`, and `color-mix()` for
  any new color/elevation/corner.
- Reuse `.btn-mint`/`.btn-dark`/`EmbedLink` for CTAs.
- On a sub-page, default to a flat card (`.mock`-style or the plain Tailwind recipe in §4.3) — reach
  for `StyledContainer` only on the landing page.
- Use `.form-field.has-error`/`.form-field-msg` (§4.6) for any invalid form field, rather than
  inventing a new error treatment per form.
- Add a `prefers-reduced-motion` fallback in the same commit as new motion.
- Cite new stat claims in `Footer.tsx`'s `SOURCES` array.

**Don't**
- Write a literal hex or `rgba()` for anything mint- or ink-derived — `color-mix()` off an existing
  token instead.
- Introduce a new brand color (a "forest green," a second accent) for a "featured" card — the ink
  register plus a mint hairline already means "premium/dark" in this system.
- Stack two `.btn-mint` CTAs in the same actions row — mint is the *one* primary action; the second
  action is always `.btn-dark` or an `EmbedLink`.
- Use `StyledContainer`, `SoftAurora`, `ColorBends`, `CardCurveBackground`, `SpeedLatticeBackground`,
  or `TiltParallax` on a category/sub-page — those are landing-page-only (§2.1, §4.11).
- Use a gradient fill of any kind on a sub-page — flat token colors only (§2.2).
- Give a card its own bespoke shadow — pick one of the three `--shadow-*` tokens.
- Redeclare a heading size for a section-title-level or item-heading-level element — use `.st` / `.ts-h`
  / `.title-step` per §3.2.
- Assume a sub-page needs the full §6.2 section sequence — it doesn't (§2.3).

---

## 10. Component reference index

Quick lookup of where each primitive lives:

| Primitive | File |
|---|---|
| Tokens (`@theme`, aliases) | `app/globals.css` |
| Buttons (raw CSS) | `styles/legacy.css:18-52` |
| `<Button>` (CVA wrapper) | `components/ui/button.tsx` |
| `<EmbedLink>` | `components/ui/EmbedLink.tsx` |
| `StyledContainer` engine (landing-only, §4.2) | `styles/containers.css`, `components/ui/StyledContainer.tsx` |
| Sub-page section styles | `styles/legacy.css` |
| Home-only styles | `styles/home.css` (scoped under `.pe-home`) |
| Showcase-page styles (Custom Builds, AI Training) | `styles/pages.css` |
| Dental-specific styles | `styles/dental.css` |
| Nav / mobile drawer / contact modal / toast / form error states | `components/site/chrome.css` |
| Nav | `components/site/Nav.tsx`, `lib/nav.ts` |
| Footer | `components/site/Footer.tsx` |
| Scroll-reveal | `components/site/ScrollReveal.tsx` |
| Ported interactive behaviors (count-up, mock feeds, FAQ, iframe autosize) | `components/site/LegacyBehaviors.tsx` |
| Phone/chat demo | `components/demo/ScriptedChatDemo.tsx`, `lib/demo/` |
| Decorative primitives (landing-only, §4.11) | `components/ui/CardCurveBackground.tsx`, `SoftAurora.tsx`, `ColorBends.tsx`, `SpeedLatticeBackground.tsx`, `components/site/TiltParallax.tsx` |
| Unused photography assets | `public/clinic.jpg`, `spa.webp`, `trades.jpg`, `food.webp`, `founders/` |

### 10.1 Phase 2 component taxonomy (the build contract)

Phase 2 replaces the raw-global-class mechanism on sub-pages with composed, reusable React components
(styling lives in the component; tokens under the hood; Tailwind `[var(--token)]` for one-offs — the
`WhyUsSection`/`OpsDashVisual`/`button.tsx` reference pattern). **This table is the contract** — the
target components, what each replaces, and where it's reused. The current look is preserved (near-zero
visual diff); the win is entirely in the code.

| Component | Replaces (raw class) | Reuse / notes |
|---|---|---|
| `<Hero>` | `.ihero` block | 15/17 pages — eyebrow, accent-span title, subcopy, pain line, CTA actions, stats strip |
| `<Eyebrow>` | `.eyebrow` / `.sl` | 13+ pages — the tracked uppercase micro-label |
| `<SectionHeader>` | `.sl`/`.st`/`.sd` triad | every sub-page, repeated per section |
| `<Section>` | section wrapper | applies the `--space-section-*` rhythm + `--container` tokens (§3.3) — the first real consumer of the layout tokens |
| `<Card>` (density/tier props) | `.prob`/`.icard`/`.mock`/flat | collapses the §4.3 "family of recipes" into one prop-driven API |
| `<CardGrid>` | `.prob-grid` etc. | n-up responsive grid |
| `<StatBand>` / `<Stat>` | `.statband` + count-up | 8 pages |
| `<BeforeAfter>` | `.cmp-row` | 3+ pages — extract the duplicated inline check/X SVGs |
| `<FaqList>` / `<FaqItem>` | `.faq-item` | 10 pages — keep the `LegacyBehaviors` one-open behavior or fold it into the component |
| `<CtaPanel>` | `.icta` | 14 pages — eyebrow, title, desc, CTA, bullets, cross-links |
| `<FeatureRow>` | `.frow` | 5 pages, alternating layout |

Bespoke per-industry signature visuals (`.sig-grid`/`.show-grid`) are the *least* duplicated — leave
them as per-page components; don't force-extract. As each block becomes a component, its slice of
`legacy.css` is folded in and deleted (the §11.4 tokenization happens as part of that move).

---

## 11. Known deviations & cleanup backlog

Honest state of where the codebase hasn't caught up to the rules above yet, so nobody mistakes a
drifted example for the intended pattern. These are unintentional drift/bugs — distinct from the
deliberate, decided-on scope split in §2 and the deferrals in §2.4. Ranked roughly by how likely a new
page is to copy the mistake.

### 11.1 `CLAUDE.md`'s design-system section is stale — ✅ resolved (Phase 1)

`CLAUDE.md`'s "Design system (warm / original)" section used to describe the *previous* revision
(cream `#f4f1ea`, `8px/20px/100px` radii, live terracotta, a `SiteShell variant` prop). It has been
**replaced with a one-line pointer to this document**, and the stale `SiteShell`/`Nav` `variant`
description in its "Shared components" section was corrected (there is one nav for every page; neither
takes a `variant` prop). The dangling `app/globals.css:6` comment that pointed at a non-existent
`CLAUDE.md "Color governance"` section now points here (§3.1). `DESIGN-SYSTEM.md` is the single source
of truth for the design system.

### 11.2 Home vs. sub-page type/spacing scale hasn't fully converged — ⏳ partly resolved

**Spacing (resolved in principle):** the canonical section rhythm is now decided and tokenized —
`--space-section-y: 88px` (the home value, §3.3), with sub-pages' `80px` converging onto it during the
Phase 2 componentization (`<Section>` consumes the token). **Type scale (still open, Phase 2):** two
near-duplicate sizes remain at the same semantic level — `.st` is `clamp(40px,6vw,72px)` on home vs.
`clamp(34px,5vw,60px)` on sub-pages (`home.css:205` vs. `legacy.css:74`); `.sl` tracks `4px` on home
vs. `2px` on sub-pages. The **home values are the canonical target** (§3.2) and sub-pages converge onto
them in Phase 2 — a documented "preserve look" edge (small sub-page heading shifts are acceptable;
landing stays the anchor). Until then, a component moved between contexts will visibly resize.

### 11.3 Off-token "forest" hex colors in two files — ✅ resolved (Phase 1)

`styles/pages.css` and `styles/dental.css` defined a private dark-green pair (`#063a2a`/`#04170f`) for
"featured" card fills (`.px-aud.feat`, `.dx-tier.feat`) — a 5th color outside the four-color rule. Both
`--*-forest`/`--*-forest2` pairs are now `var(--color-text)` + a `color-mix()` darkening, so a featured
card renders in the **ink register** (matching how `.ts-ai`/`.sc-bg-black` do "dark/premium"); the
`#fff` text on those cards is now `var(--bg)`; and the warm brown-black hover-shadow literals
(`rgba(30,27,22,…)` on `.px-card:hover`, `.px-aud:hover`, `.dx-tier:hover`, `.dx-cap:hover`) are now
`color-mix(in oklab, var(--color-text) X%, transparent)`. `dental.css`'s stale "reuses … terracotta"
header comment is corrected. **This is a deliberate, minor color correction** — the featured cards shift
from dark-green to near-black ink, not a pure no-op. Those cards remain landing-weight (§4.3); under
§2.2 they shouldn't appear on a rebuilt sub-page at all, so Phase 2 may remove them outright. The
remaining mint-crosshatch / white-alpha `rgba()` in both files are Phase-2 tokenization residuals
(§11.4), exempted in the stylelint allowlist (§1.1) until then.

### 11.4 The four-color rule is enforced on home/chrome/containers, not on `legacy.css`

The prior audit pass tokenized `home.css`, `chrome.css`, and `containers.css` (converting hardcoded
`rgba(74,240,192,…)` / `#4af0c0` to `color-mix()`). `styles/legacy.css` — the file that styles every
industry sub-page — still has the same class of literals: `rgba(74,240,192,…)` appears repeatedly
(e.g. `legacy.css:57-58,150,184,188-189,197-198,208,213,234,236,292,300,319,327,336,348,353,360,366`)
and raw `rgba(10,10,10,…)` textures for card crosshatching (e.g. `legacy.css:81,150,429`). This is a
bigger surface area than the home page itself (it's every sub-page's shared stylesheet) and should be
the next tokenization pass, following the same `color-mix(in oklab, var(--color-accent) X%,
transparent)` pattern already proven in `home.css`. Several of these literals live inside crosshatch/
pattern rules that are themselves landing-weight per §2.2 and will disappear on rebuild rather than
need tokenizing — the ones worth fixing regardless of rebuild timing are anything used by chrome that
sub-pages keep (e.g. `.mock`, `.prob-cost`, stat/badge pills).

Also un-tokenized: `components/site/chrome.css:45-46`'s nav-dropdown-panel shadow/background
(`rgba(255,255,255,0.97)`, `rgba(10,10,10,0.4)`) — everything else in `chrome.css` already uses
`color-mix()` for this class of value (e.g. `chrome.css:132` for the contact panel), so this is an
inconsistency within the same file, not just the same class of literal as this section's `legacy.css`
finding.

**Status (Phase 1):** `legacy.css`, `home.css`, `pages.css`/`dental.css`, and `chrome.css` are the
`TODO(phase-2)` entries on the stylelint allowlist (§1.1) — the hex/rgba guardrail is live for the rest
of the codebase, and each allowlist entry is deleted as its file is tokenized during the Phase 2
componentization (§10.1). `pages.css`/`dental.css` are already hex-clean (Phase 1, §11.3); only their
mint-crosshatch `rgba()` keeps them on the list.

### 11.5 No named spacing/breakpoint tokens yet — ✅ resolved (Phase 1)

Container and section-rhythm custom properties now exist in `app/globals.css` (`--container`,
`--container-wide`, `--container-narrow`, `--measure`, `--space-section-y`, `--space-section-x`,
`--space-section-y-sm`), documented as the canonical scale in §3.3. They're *defined* now and *consumed*
during Phase 2 — existing raw CSS still writes the literals until each block is componentized (§10.1).
Breakpoints (`1080/960/680/600`) are intentionally left as a documented constant, not tokens — a CSS
`@media` condition can't consume `var()` (§3.3). Card-padding tokens are the one remaining gap, deferred
to Phase 2 alongside the `<Card>` component.

### 11.6 `.eyebrow` was defined twice, with conflicting values — ✅ resolved (Phase 1)

`.eyebrow` was declared in both `app/globals.css` (inside `@layer components`, `letter-spacing: 1.5px`,
`font-weight: 600`) and `styles/legacy.css:60` (unlayered, `letter-spacing: 3px`, no weight). Because
unlayered rules always beat layered ones, `legacy.css`'s version won everywhere and the globals
`font-weight: 600` never applied. The dead `globals.css` copy has been **deleted**, leaving
`legacy.css:60` as the sole definition. The `600` was intentionally *not* folded in: since it never
actually rendered, adding it would bolden every eyebrow site-wide — a visual change Phase 1 avoids, so
the rendered look is unchanged.

Two footer stylesheets is a deliberate structural pattern, not a bug, by contrast: `Footer.tsx`'s
markup is styled by both `legacy.css:403-426` (sub-pages) and `home.css:343-364` (home, nested inside
`.pe-home`) because the component itself is shared but each page family's footer needs slightly
different cascade scoping — leave this one alone.

### 11.7 Live sub-page violation of the two-button CTA rule

`app/restaurants/page.tsx:60-63` renders three hero actions where the first two are both
`.btn-mint` (`Book a Free 15-Min Demo` and `What Empty Tables Cost You`), with `.btn-dark` only on the
third. Per §4.1, mint should be the one primary action per view — compare
`app/dental/page.tsx:74-75`, which correctly pairs one `.btn-mint` with one `.btn-dark`. Fix by
demoting the restaurants savings-calculator link to `.btn-dark` or an `EmbedLink`.

**Deferred to Phase 2** (Phase 1 decision): this is a page-file edit, folded into the restaurants
page's componentization pass rather than done as a standalone change now.

### 11.8 Confirmed-dead code — ✅ resolved (Phase 1)

The `.mj-phone`/`.mj-screen`/`.mj-bubble` "Meet Janice" phone-chat CSS block (`home.css`, ~35 lines)
plus its `@keyframes mjtype` were unused anywhere on the site (superseded by `ScriptedChatDemo`, §4.10)
and shipped several off-token hex values (`#0d0d15`, `#262633`, `#7a7a8a`, `#0a6a50`, `#9af5d6`, …).
Both have been **deleted** (confirmed no `.mj-*` references remain in any component). `home.css` still
carries other residual white/black hex + `rgba()` unrelated to this block — those are the §11.4 Phase-2
tokenization item.

---

## Document history

- **This revision (Phase 1 — design system finished, doc + tokens + guardrails)**: added the Quickstart
  TL;DR; recorded the base text-pairing contrast results (§8 — accent-ink passes AA at 5.36:1, no token
  change); added container/section-rhythm layout tokens (§3.3), the Phase 2 component taxonomy (§10.1),
  and the forms-with-a-backend contract (§4.6); formalized `.icon-btn` (§4.1); added automated
  enforcement (§1.1 — stylelint hex/rgba ban wired into `prebuild`, ESLint landing-only import boundary).
  Applied the cheap deviation fixes: neutralized `CLAUDE.md`'s stale design section (§11.1), deleted the
  duplicate `.eyebrow` (§11.6), tokenized the off-token "forest"/warm-black literals in
  `pages.css`/`dental.css` (§11.3), removed the dead `.mj-phone` block (§11.8). §11.2/§11.4 partly
  resolved; §11.7 (a page-file edit) deferred to Phase 2.
- **Prior revision**: added §2 (landing page vs. category/sub-page scope split — the restrained/
  informational tier for sub-pages, with an explicit reuse list and an explicit prohibition list),
  §5 (imagery guidance), and real error/validation-state CSS in §4.6 (now implemented in
  `components/site/chrome.css`). Reframed §6.2's sub-page section sequence from "the template to
  clone" to "legacy reference, not a mandate" per §2.3. Marked mobile/responsive QA and a formal
  accessibility/contrast audit as explicitly deferred decisions (§2.4) rather than open gaps.
- **Previous revision**: rewritten from an audit-report format into a forward-facing design-system
  reference (foundations → components → patterns → do's/don'ts), with the audit's remaining open
  items folded into what is now §11. The original "Part 1 findings / Part 2 proposed spec" audit and
  its changelog of applied fixes are preserved in git history — `git log -- DESIGN-SYSTEM.md`.
