# Pacific Edge AI — Design System Audit & Proposed Spec

> Scope: the landing page (`app/page.tsx` → `HomeContent.tsx`, `WhyUsSection.tsx`,
> `TrustProofSection.tsx`, `OpsDashVisual.tsx`) plus shared chrome (`Nav.tsx`, `Footer.tsx`,
> `chrome.css`). This is the reference implementation the rest of the site (dental, restaurants,
> salons, trades, retail, industries hub, etc.) will be rebuilt against.
>
> **This document is analysis + spec only.** No wording/content changed, no code changed. Every
> finding below is cited `file:line` against the current tree. Part 2 proposes the system to
> converge on; applying it to the landing page itself and to subpages is future work.
>
> **Definition of "consistent" used throughout:** strong token/variable and reusable-component
> usage — not literal visual sameness. Several distinct-but-deliberate patterns can coexist and
> still be "consistent" as long as each is a real reused primitive rather than a hardcoded/copy-pasted
> one-off. Confirmed with the project owner: the landing page's 3 button styles (mint CTA, dark CTA,
> `EmbedLink` tertiary link) and the `StyledContainer` background/pattern combinations are correct,
> intentional reuse — not something to consolidate further. Named exceptions (the industries section,
> the WhyUsSection Soft Aurora ("Built to Deliver") container) are accepted as-is and out of scope unless explicitly
> revisited. What's actually in scope for fixing: (1) hardcoded literals that should be tokens, and
> (2) the heading/title type scale.

---

## Part 1 — Audit Findings

### 1. Buttons

**Confirmed correct as a 3-style system**: `.btn-mint` (primary CTA), `.btn-dark` (secondary CTA),
and `EmbedLink`/`.embed-link` (tertiary link — a different category, not a competing CTA style).
That's intentional, reused design, not an inconsistency. The actual problems are (a) an unused
duplicate implementation nobody points at, and (b) one hand-duplicated component that reimplements
`.btn-mint` instead of reusing it — both are token/reuse violations, not style-count problems. Two
more ad hoc controls in `TrustProofSection` are documented for completeness but are icon controls,
not CTA buttons, so not part of the 3-style system.

| System | Where defined | Where used | Notes |
|---|---|---|---|
| `.btn-mint` (filled mint primary) | `styles/legacy.css:22-33` | `HomeContent.tsx:271,438,497,511`(`.float-book`, see below), `Nav.tsx:102` | `background:var(--accent)`, `color:var(--text)`, `border:1px solid var(--accent)`, `border-radius:var(--radius)`, shadow `0 8px 28px rgba(74,240,192,.35)`, diagonal white-shimmer sweep on hover, `scale(1.03)` |
| `.btn-dark` (filled dark secondary) | `styles/legacy.css:22-29` | `HomeContent.tsx:274` only | Same mechanics as `.btn-mint`, `background:var(--text)`, `color:var(--bg)` |
| `<Button>` CVA component | `components/ui/button.tsx:20-28` | **Not imported anywhere in the landing page** | Wraps the same `.btn-dark`/`.btn-mint` classes with 3 Tailwind sizes (`sm`/`default`/`lg`) that don't match any size actually used on the page (e.g. the inline `padding:"18px 44px"` override at `HomeContent.tsx:497` has no corresponding `size`) |
| `.float-book` (floating pill) | `styles/home.css:566-572` | `HomeContent.tsx:511` | Hand-duplicated copy of `.btn-mint` — own shimmer, own shadow, but `color:#000` **hardcoded** instead of `var(--text)`/`var(--on-accent)` |
| `.embed-link` (tertiary link) | `styles/legacy.css:45-52`, wrapped by `components/ui/EmbedLink.tsx` | `HomeContent.tsx:99,336,366,441,457,498` | No fill/border/radius — underlined text + `→` arrow, `font-weight:600`, `14px`. Two variants: `light` (near-black, for light bg) / `dark` (near-white, for dark/mint bg) |
| Carousel arrow buttons | `TrustProofSection.tsx:74-89` | testimonial carousel | Circular icon-only, raw Tailwind (`h-10 w-10 rounded-full border`), **no shimmer, no shadow, no scale-hover** — different interaction language entirely |
| Carousel dots | `TrustProofSection.tsx:93-104` | testimonial carousel | `h-2 rounded-full`, active `w-6 bg-accent` / inactive `w-2 bg-border` |

**Root problem:** the shared `<Button>` component exists but the landing page bypasses it with raw
`<a className="btn-mint">` markup everywhere, so it can't be centrally changed (loading state, icon
slot, disabled state) without touching every call site.

---

### 2. Cards / Containers

**`StyledContainer`** (`components/ui/StyledContainer.tsx` + `styles/containers.css:114-243`) is the
newest, most deliberate primitive — a background axis (`sc-bg-mint` / `sc-bg-black` / `sc-bg-white`)
crossed with a pattern axis (`diag-wide` via `CardCurveBackground`, `diag-tight`, `mesh`, `none`).
**Confirmed correct**: this is exactly the target reuse pattern — one base class, varied instances
(e.g. bg-black / mint accent line / diagonal-tight) via composable variants, not copy-pasted markup.
Not a candidate for further consolidation. The industries section markup and the WhyUsSection
"software" container are accepted, named exceptions to this primitive — deliberately non-standard,
out of scope unless explicitly revisited.

What remains a real problem — token/reuse violations *within* the `StyledContainer` pattern itself:

- **Radius/shadow/border are not baked into `.sc`** — every caller re-supplies them independently:
  - `.ts-ai` border `color-mix(in oklab,var(--color-accent) 16%,transparent)`, shadow `var(--shadow-float-lg)` (`styles/home.css:139`)
  - `.ts-cb` border `color-mix(in oklab,var(--color-accent-ink) 25%,transparent)`, shadow `var(--shadow-float)` (`home.css:146`)
  - `.process-dash` border `1px solid rgba(74,240,192,.16)` **hardcoded rgba, not token-derived**, shadow `var(--shadow-float-lg)` (`home.css:252`)
  - `WhyUsSection.tsx:581` bento cards: three *different* border colors/opacities across sibling cards in the same grid (`border-[var(--color-accent-ink)]/25`, `border-[var(--color-accent)]/15`, `border-[var(--color-border)]`)
- **Two non-identical "mint fill" gradients** claiming to be the same thing:
  - `.sc-bg-mint`: `linear-gradient(135deg, var(--color-accent), var(--color-accent-bright), var(--color-accent-ink))` (`containers.css:138-144`, no stop positions)
  - `.surface--mint`: `linear-gradient(135deg, var(--color-accent), var(--color-accent-bright) 55%, var(--color-accent-ink))` (`containers.css:90-95`, explicit 55% stop)
- **Repeated "mock card" Tailwind string**, hand-copied instead of extracted, ~7 times: `rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-bg)] shadow-[var(--shadow-mock)]` — `OpsDashVisual.tsx:26`, `WhyUsSection.tsx:40,136,231,270,321,430`
- `TrustProofSection.tsx:45` testimonial card uses the same recipe but `shadow-[var(--shadow-float)]` instead of `--shadow-mock` and `p-7 sm:p-8` instead of `p-4 sm:p-5` — unclear if intentional
- **`.svc` service card** (`home.css:220-239`) is a fourth, unrelated card system: crosshatch baked directly into `background-image` (not `.sc-pat-*`), hover shadow **hardcoded** `0 26px 60px -36px rgba(10,10,10,.32)` instead of a `--shadow-*` token
- **Nav dropdown panel** has its own fifth shadow recipe not in the token set: `0 36px 80px -30px rgba(10,10,10,0.4), 0 0 0 1px rgba(10,10,10,0.02)` (`chrome.css:45`, duplicated `home.css:52`)
- **Live bug — contact modal panel defined twice, differently:**
  - `chrome.css:132`: `background: rgba(255, 255, 255, 0.97)` (pure white)
  - `home.css:374`: `background: linear-gradient(160deg,rgba(251,249,244,0.95),rgba(244,241,234,0.97))` (warm cream — leftover from the old cream theme)

  Same selector `.contact-panel`, two files, cascade order decides which wins — this is not a style
  choice, it's a bug. Same conflict exists for `.nav-dd-panel` background: `home.css:52-53` uses
  `rgba(247,244,238,0.97)` (cream) vs `chrome.css:45-46` uses `rgba(255,255,255,0.97)` (white).
- Radius is consistently `var(--radius)` (4px) **except** `.map-container` which hardcodes `border-radius:20px` (`home.css:624`), violating the stated "one radius everywhere" rule in `globals.css:34-36`.

---

### 3. Typography

Tokens: `--font-display` (Bebas Neue, uppercase display), `--font-body` (Outfit, default),
`--font-mono` (JetBrains Mono, **defined but unused anywhere on the landing page**), `--font-system`
(Apple system font, scoped intentionally to the phone-chat demo only).

- `<h1>` (`.hero h1`) and `<h2>` (`.st`, all major section titles) are internally consistent — Bebas,
  uppercase, one clamp scale each.
- `<h3>` has **no shared scale** — same tag level, three different type families, sizes from 16px to 56px:

  | Selector | File:line | Font | Size |
  |---|---|---|---|
  | `.ind-frow-title` | `HomeContent.tsx:86` | Bebas (`--display`) | `clamp(34px,4.8vw,56px)` |
  | `.ts-h` | `HomeContent.tsx:325,353` | inherited body (Outfit) | `clamp(23px,2.3vw,30px)` |
  | `.step-body h3` | `home.css:245` | inherited body | `22px` |
  | WhyUsSection pillar `<h3>` | `WhyUsSection.tsx:600-610` | Tailwind `font-body` | `28px` default, up to `40px` for "wide" cards — **same grid, size driven by a layout flag, not semantic weight** |
  | `TrustProofSection.tsx:126` | Tailwind `text-base` | Outfit | `16px` — an order of magnitude smaller than the others |

- Eyebrows are *almost* consistent: `.sl` (`home.css:207`, actually used) has `letter-spacing:4px`;
  `.eyebrow` (`globals.css:136-143`, a separate definition) has `letter-spacing:1.5px` — two eyebrow
  specs that don't match.

---

### 4. Gradients

Two disciplined intents, plus outliers:

- **Bold fills** (~3 instances, all mint→darker mint): `.sc-bg-mint`, `.surface--mint` (non-identical,
  see §2), `.mj-av` avatar. `.mj-bubble.me` (`home.css:553`) fades to a **hardcoded** `#0a6a50`, not a token.
- **Soft glow/texture** (~10+ instances, uniformly low-alpha 4–16% mint radials): `body::before`
  ambient aura (`home.css:629`), `.cta-panel::before`, `.mj-phone-wrap::after`, `.loader::after/::before`,
  `.divhr` divider, `.steps-tl::before`, `.svc::after` shine. Well disciplined as a category.
- **Dead-code outlier**: the `.mj-phone`/`.mj-screen`/`.mj-bubble` "Meet Janice" phone-chat CSS block
  (`home.css:530-565`) is **not rendered anywhere on the current landing page** (superseded by
  `ScriptedChatDemo`, see §7) but ships a fully off-token dark palette: `#0d0d15`, `#15151f`, `#0c0c13`,
  `#f0f0f4`, `#6ee7c4`, `#262633`, `#e9e9f0`, `#7a7a8a`, `#0a6a50`, `#9af5d6`.

---

### 5. Emoji

**None found** in `app/page.tsx` or any `components/home/*.tsx` file. Icons are handled exclusively via
`lucide-react` (`Phone`, `Star`, `Clock`, `DollarSign`, `MessageSquare`, `Zap`, `ChevronLeft/Right`,
`Lock`, `ShieldCheck`, `Ban`, `KeyRound`) or inline SVG checkmarks. The landing page already meets the
"no emoji" bar — this is the standard to hold subpages to (several still carry the old emoji-heavy nav
icons per the project's ported-content history).

---

### 6. Color

The mint accent is reasoned about correctly *at the token level* (`--color-accent` +
`color-mix()` derivations for ink/bright/on-accent), but is re-expressed as **dozens of raw `rgba()`
literals** instead of `color-mix()` calls:

- `rgba(74,240,192, …)` (same value as `--color-accent`, written literally) appears at `home.css:181,
  224,231,239,315,316,340,401,415,417,539,560,562,563,566,569,585,586,591,629` — 20+ occurrences that
  won't track a future accent-color change.
- `#4af0c0` written as a literal hex instead of `var(--accent)`: `HomeContent.tsx:162,173,482`,
  `home.css:547,591`.
- Genuinely off-token hexes (not just un-var'd mint): the entire dead `.mj-*` block (§4), plus
  `ColorBends colors={["#0a7d5d","#0a9d76","#4af0c0","#7ff5d5"]}` (`HomeContent.tsx:482` — a bespoke
  4-color mini-palette for one shader background), `#f6f7f8` for `.loader` bg (`home.css:574`,
  coincidentally equal to `--color-bg2` but not written as `var()`), `rgba(40,37,32,0.55)` for
  `.contact-backdrop` (`chrome.css:131`/`home.css:373`, a warm brown-black not derived from `--color-text`).
- Shadow literals bypassing the 4 defined `--shadow-*` tokens (`containers.css:15-22`): service card
  hover, nav dropdown, contact panel, mobile drawer, toast — at least 5-6 places re-declare a shadow
  instead of reusing `--shadow-float` / `--shadow-float-lg` / `--shadow-mock`.

---

### 7. Phone / device graphic

The reusable phone component is **`components/demo/ScriptedChatDemo.tsx`**
(+ `components/demo/phone-chat-styles.ts` + `lib/demo/scripted-chat-types.ts` + `lib/demo/scripted-chats.ts`),
invoked at `HomeContent.tsx:339` as `<ScriptedChatDemo industry="dental" />` inside a `.ts-phone` layout slot.

- **Fully self-contained device chrome** — frame, notch, screen bezel are all rendered by the component
  itself (`PHONE_FRAME_CLASS`, `PHONE_NOTCH_CLASS`, `PHONE_SCREEN_CLASS` in `phone-chat-styles.ts:10-14`).
  The parent `.ts-phone` div contributes only sizing/position, no chrome.
- **Already industry-configurable**: `industry: string` prop looks up a `ScriptedChatScript`
  (`businessName`, `headerSub`, `bubbles[]`) from a registry in `lib/demo/scripted-chats.ts`. Two
  scripts exist today (`dental`, `front-desk-demo`). Adding a new subpage's chat just means adding a
  new script entry — **no component changes needed**. This is the right primitive to standardize on.
- **3 intentionally hardcoded native-iOS colors**, called out in the file's own header comment as a
  deliberate exception (not a mistake to "fix" blindly): `#007AFF` (sent bubble), `#E9E9EB` (received
  bubble/typing dots), and a hardcoded frame gradient hex (`phone-chat-styles.ts:10,23,27,30`).
- **Dead code**: the separate CSS-only `.mj-phone` mockup in `home.css:530-565` (§4/§6) is not
  rendered by any current component — safe to remove once confirmed unused elsewhere in the site.

---

### 8. Spacing / Layout

No shared spacing, max-width, or breakpoint scale — each surface reinvents its own numbers:

- **5 independent section-padding scales**: base `section{padding:88px 56px}` (`home.css:204`),
  `#industries`/`#process` override just one side (`:205-206`), `.hero{padding:140px 24px 100px}`,
  `.cta{padding:110px 56px}`, `footer{padding:64px 56px 36px}` — and each gets independently
  re-overridden again at the `960px` breakpoint.
- **9 independent max-width values**: `.sd` 520px, `.twosides .sd` 600px, `.footer-grid`/`.cta-panel`
  1320px, `.ind-alt` 1120px, `.map-text` 440px, `.sd-oneline` 760px, plus an inline
  `style={{maxWidth:720}}` at `HomeContent.tsx:453`.
- **Raw inline `style={}` layout overrides** instead of classes: `HomeContent.tsx:437,450-453,456,
  465-468,493-494` — five separate ad hoc "center this block" hacks duplicating values that already
  exist as classes elsewhere (`.twosides`, `.ind-head`).
- **Mismatched gap scales between adjacent sections**: `.ts-grid` 12px vs. WhyUsSection bento
  `gap-5`/`lg:gap-6` (20/24px) vs. `.process-wrapper` 64px — three unrelated scales back-to-back,
  producing a visible density jump between sections.
- **4+ unrelated card-padding scales**: `.ts-card` `clamp(28px,3.4vw,56px)`, WhyUsSection pillar cards
  `p-8 sm:p-9` (32/36px), mock-cards `p-4 sm:p-5` (16/20px, repeated ~7×), testimonial card
  `p-7 sm:p-8` (28/32px).
- **8 ad hoc breakpoints**, no shared scale: `1080px, 960px, 880px, 760px, 680px, 600px, 480px, 380px`
  — several only tens of pixels apart, suggesting per-component tuning rather than a shared scale.
- `.map-container{border-radius:20px}` (`home.css:624`) is the one radius exception (§2).

---

### 9. Nav & Footer chrome

Folded into the findings above where they overlap (`.btn-mint` on `Nav.tsx:102`, dropdown-panel
shadow/background conflicts in §2/§6). No additional distinct button/card systems found beyond
what's cited — Nav and Footer largely reuse the same primitives as the rest of the page, which is
good, but they inherit the same unresolved conflicts (dropdown panel background, shadow literal vs.
token).

---

## Part 2 — Proposed Unified System

This is the spec to build subpages against. It picks the landing page's *most intentional* existing
pattern in each category rather than inventing new ones, and calls out the specific fixes needed to
make that pattern actually singular.

### 2.1 Button system

The 3-role system is correct and should be kept exactly as-is going into the subpage rollout — no
consolidation. Fix the token/reuse violations within it:

| Role | Canonical class | Fix required |
|---|---|---|
| **Primary** | `.btn-mint` | Fold `.float-book` into `.btn-mint` (drop the hand-duplicated shimmer/shadow, fix hardcoded `color:#000` → `var(--text)`) |
| **Secondary** | `.btn-dark` | No fix needed — already singular |
| **Tertiary / inline link** | `.embed-link` (via `<EmbedLink>`) | No fix needed — already singular, already has light/dark variants |
| Icon-only control (carousel, pagination) | new `.icon-btn` | Formalize the `TrustProofSection` circular button as a named, reusable class instead of a one-off |

`<Button>` (`components/ui/button.tsx`) should become the actual call site for `.btn-mint`/`.btn-dark`
everywhere (landing page included, in a later pass) rather than raw `<a className="btn-mint">` — but
first align its `size` variants to the sizes actually in use (small pill, default, and the large CTA
`18px/44px` used at `HomeContent.tsx:497`) instead of the current unused Tailwind-default sizes.

### 2.2 Card / container system

`StyledContainer` is already the right primitive and already used correctly across the page (minus
the two named exceptions). Fix the token/reuse violations that leak around it:

1. Bake radius/shadow/border **into `.sc` + each `sc-bg-*` variant**, keyed by background:
   - `sc-bg-black` / `sc-bg-white` → `border: 1px solid var(--color-border)`, `box-shadow: var(--shadow-float)`
   - `sc-bg-mint` → `border: 1px solid color-mix(in oklab, var(--color-accent-ink) 20%, transparent)`, `box-shadow: var(--shadow-float-lg)`

   so callers stop re-declaring border/shadow per instance.
2. Resolve `.sc-bg-mint` vs `.surface--mint` into one gradient recipe (recommend keeping the explicit
   `55%` stop version from `.surface--mint` since it reads more deliberate) and delete the other.
3. Extract the repeated mock-card Tailwind string into a `<MockCard>` component or a `.mock-card`
   utility class; standardize its shadow on `--shadow-mock` (the testimonial card's `--shadow-float`
   usage was likely accidental drift, confirm and align).
4. Fix the `.contact-panel` / `.nav-dd-panel` dual-definition bug — delete the stale cream-gradient
   versions in `home.css:374,52-53` and keep the white versions in `chrome.css:132,45-46` (chrome.css
   is the intended owner of nav/modal chrome).
5. Fix `.map-container`'s hardcoded `20px` radius → `var(--radius)`, or if a larger radius is
   genuinely wanted for map embeds, add a documented second radius token rather than a silent one-off.

### 2.3 Type scale

Adopt a real three-level scale, one font-family per level, applied regardless of section:

| Level | Font | Size | Current landing-page anchor |
|---|---|---|---|
| Display (h1) | `--font-display` (Bebas, uppercase) | `clamp(48px,8vw,104px)` | `.hero h1` — keep as-is |
| Section (h2) | `--font-display` (Bebas, uppercase) | `clamp(40px,6vw,72px)` | `.st` — keep as-is |
| Subsection (h3) | `--font-body` (Outfit, semibold) | `clamp(22px,2.3vw,30px)` | `.ts-h` — adopt this as the single h3 spec |
| Body | `--font-body` | 15–17px | already consistent |
| Eyebrow | `--font-body`, `letter-spacing:4px`, uppercase | 11px | `.sl` — keep, retire the conflicting `.eyebrow` (1.5px) definition or reconcile the two |

Under this scale, `.ind-frow-title` (currently Bebas/56px) and the WhyUsSection "wide" pillar
headings (currently 40px) are **demoted from a bespoke display-like treatment to standard h3** —
flag for the user to confirm this is the intended visual hierarchy before rollout, since it's a
visible size reduction on two current elements, not just a token rename.

`--font-mono` stays reserved for code/data-readout contexts (e.g. dashboard numerics) — none currently
on the landing page, but keep the token for subpages that need it (e.g. pricing tables, stat readouts).

### 2.4 Color tokens

Add named alpha-derived tokens to the `:root` alias layer so the accent glow/tint literals stop being
re-typed as raw `rgba()`:

```css
--accent-04: color-mix(in oklab, var(--color-accent) 4%, transparent);
--accent-08: color-mix(in oklab, var(--color-accent) 8%, transparent);
--accent-12: color-mix(in oklab, var(--color-accent) 12%, transparent);
--accent-16: color-mix(in oklab, var(--color-accent) 16%, transparent); /* already exists as --glow */
--accent-25: color-mix(in oklab, var(--color-accent) 25%, transparent);
--accent-35: color-mix(in oklab, var(--color-accent) 35%, transparent);
```

Then replace the 20+ `rgba(74,240,192,X)` / `#4af0c0` literals (§6) with the matching token. Remove
the dead `.mj-*` block entirely (§4/§7) rather than tokenizing it, since it's unused. Fold the
remaining shadow literals (§2/§6) into the existing `--shadow-float` / `--shadow-float-lg` /
`--shadow-mock` tokens, adding a `--shadow-modal` token if the nav-dropdown/contact-modal shadow is
meant to stay visually distinct from card shadows.

### 2.5 Spacing / layout scale

Propose collapsing the divergent values in §8 into:

```css
--space-section-y: 88px;   /* section{padding} vertical, current default */
--space-section-x: 56px;   /* horizontal */
--container-max: 1320px;   /* footer-grid / cta-panel width — the widest current use */
--container-narrow: 720px; /* single-column copy blocks — replaces the 520/600/760 scatter */
--space-card-lg: 32px;     /* pillar/feature cards */
--space-card-sm: 20px;     /* mock cards */
```

with a single responsive step-down at `960px` (halving `--space-section-y`/`-x`) instead of the
current 8 ad hoc breakpoints. This is a proposal, not a forced 1:1 mapping — the actual values should
be picked to match what most of the existing instances already cluster around (they mostly do,
per §8's tables) rather than introducing new numbers.

### 2.6 Phone / device graphic

`ScriptedChatDemo` is the canonical, reusable device component for any subpage that needs a "chat
demo" visual — reuse via `<ScriptedChatDemo industry="restaurants" />` etc. after adding the
corresponding script to `lib/demo/scripted-chats.ts`. No component changes needed to reuse it. Its 3
hardcoded iOS colors are an intentional, scoped exception (native-look chat bubbles) and should stay
hardcoded rather than tokenized — tokenizing them would fight the "authentic iMessage" effect they're
going for. Delete the dead `.mj-phone` CSS block in `home.css:530-565` once confirmed unused
site-wide (not part of this pass — flagging for a future cleanup commit).

### 2.7 Emoji policy

No changes needed on the landing page — it already meets the target (icon components only, zero
emoji). State this explicitly as the standard for the subpage rebuild: replace any remaining emoji
nav/section icons on dental/restaurants/salons/trades/retail pages with `lucide-react` icons or inline
SVG, matching what the landing page already does.

---

## Summary of concrete bugs found (fix independent of the broader system rollout)

1. ~~`.contact-panel` background defined twice, differently~~ — **Fixed.** Verified `.pe-home`
   only wraps `HomeContent`'s own markup (`HomeContent.tsx:264`); `ContactModalProvider` mounts at
   the root layout (`app/layout.tsx:93-97`) and `Nav` is a sibling of `.pe-home` in `SiteShell.tsx`,
   so home.css's nested `.contact-panel`/`.nav-dd-panel` rules compiled to `.pe-home .contact-panel`
   etc. and never matched anything — dead code, not a live conflict. `chrome.css`'s white version
   was already what renders. Removed the dead duplicates from `home.css`.
2. ~~`.nav-dd-panel` background defined twice, differently~~ — **Fixed**, same as above.
3. ~~`.float-book` hardcodes `color:#000` instead of a token~~ — **Fixed**, now `var(--text)`.
4. ~~`.map-container` hardcodes `border-radius:20px`~~ — **Fixed**, now `var(--radius)`.
5. ~~`.sc-bg-mint` and `.surface--mint` are two different gradients for the same stated purpose~~ —
   **Fixed.** Harmonized to one recipe (the explicit-55%-stop version).
6. Dead code: `.mj-phone`/`.mj-screen`/`.mj-bubble` block in `home.css:530-565` — not rendered
   anywhere. **Not removed in this pass** (out of scope — flagged for a future cleanup commit).

**New finding surfaced while fixing #1/#2**: the same "rendered outside `.pe-home`" issue applies to
*all* nav/footer/modal-adjacent rules nested in `home.css`'s `.pe-home {}` block, not just the two
selectors above — e.g. `.contact-modal`, `.contact-backdrop`, `.contact-close`, `.contact-eyebrow`,
`.form-field`, `.contact-submit`, the mobile nav drawer rules, etc. are all equally inert dead code
(confirmed by `home.css:4-5`'s own comment: "Rules for nav/footer/modal here are inert"). Only the
two selectors that were causing visible confusion (a literal duplicate-looking definition) were
removed in this pass; the rest of that dead block is a larger, separate cleanup — flag for a future
pass rather than a surprise deletion.

**Token/hardcoding cleanup applied this pass**: every hardcoded mint (`rgba(74,240,192,X)`,
`#4af0c0`) and ink (`rgba(10,10,10,X)`, stray `rgba(0,0,0,X)`) literal in `home.css`, `chrome.css`,
and `containers.css` (outside the dead `.mj-*` block, which is out of scope) was converted to
`color-mix(in oklab, var(--color-accent|text) X%, transparent)` — visually identical, now
token-derived. In `HomeContent.tsx`, the canvas particle field's repeated `"rgba(74,240,192,...)"`
string literals were centralized into a single `ACCENT_RGB` constant; the `ColorBends` shader's
mint stop now references a shared `ACCENT_HEX` constant (the other 3 stops in that gradient are a
legitimate bespoke shader ramp, not design tokens, and were left as-is — see inline comment).
`TrustProofSection`'s outlier `<h3>` (was `text-base`/16px, briefly bumped to match `.ts-h`) was
reconsidered per feedback: the trust-pillar titles read better at the same size as the "How It
Works" step titles, not the larger `.ts-h` card-heading scale. Consolidated both into one reusable
class, `.title-step` (`styles/home.css`, `22px/600/-.3px letter-spacing`), replacing the old
element-selector rule `.step-body h3` — applied via `className="title-step"` on both the step
titles (`HomeContent.tsx`) and the trust-pillar titles (`TrustProofSection.tsx`) instead of each
redeclaring the same size. Net type scale for compact "item in a list" headings is now: `.title-step`
(22px, static) for steps/trust-pillars, `.ts-h` (`clamp(23px,2.3vw,30px)`) for the larger Two-Sides
card headings — two distinct, deliberately reused styles, not one forced scale.
