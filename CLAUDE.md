# Pacific Edge AI — Website Redesign

## What this project is

A visual and copy refresh of [pacificedge.ai](https://pacificedge.ai/) for **Pacific Edge AI**, a Vancouver-based startup that builds done-for-you AI operations software for local businesses.

**Audience:** Non-technical local business owners across five industries — clinics, restaurants, salons, trades, retail. Engineer for everyone; clinics are a strong fit but the site is not clinic-only or medical-themed.

**Business model:** Clients sign up for Pacific Edge software. We configure it around their existing tools (calendar, phone, reviews). No rip-and-replace. Done-for-you setup, then it runs in the background.

**Content strategy:** **Preserve the substance** of the current site — same claims, integrations, founders, FAQ answers. **Spread content across multiple pages** — the current site is too long for one scroll. **Minimal supporting text** — headlines, labels, and visuals do the work; body copy is the exception, not the rule. Do not invent new features, stats, or testimonials without user approval.

**Layout philosophy:** Show-don't-tell. Use creative layouts, expressive type scale, purposeful motion, and vivid product imagery to fill space — not paragraph walls. Sections breathe: generous padding (`py-24`–`py-40`), full viewport width where appropriate, asymmetric grids. Long explanatory copy is an AI tell — avoid it.

---

## Design read (default for every session)

> **Reading this as:** Multi-page B2B marketing site for local business owners, with an elegant coastal / trust-first language — creamy white + navy, spacious editorial layouts, product-led visuals over copy.

### Three dials

| Dial | Value | Meaning |
|------|-------|---------|
| Design variance | 7 | Asymmetric layouts, varied section rhythms — still credible |
| Motion intensity | 5 | Scroll reveals, nav expand, hover depth — never gimmicky |
| Visual density | 2 | Very airy; one focal point per viewport band |

### Color palette (mandatory)

| Role | Direction | Tailwind-style tokens (starting point) |
|------|-----------|----------------------------------------|
| **Base** | Creamy white | `#FAF8F5` / `cream-50` — page background, large surfaces |
| **Primary** | Coastal navy | `#1E3A5F` / `navy-900` — headlines, nav, primary buttons, key UI chrome |
| **Tertiary** | Beige-gold ash gray | `#B8A992` / `ash-400` — sparingly: eyebrows, dividers, hover accents, icon strokes, one highlight per section max |
| **Text** | Navy at 90% on cream | Body never pure black; use navy-muted for secondary labels |

- No purple gradients, no dark mesh heroes, no rainbow feature cards.
- Navy on cream must pass WCAG AA for all body text sizes.

### Typography (mandatory — 2 fonts only)

Modern, slightly healthcare-adjacent, industry-elegant. **Default pairing:**

| Role | Font | Why |
|------|------|-----|
| **Display / headlines** | **Fraunces** (variable) | Warm serif-soft curves; credible for clinics without feeling clinical |
| **UI / body / nav** | **DM Sans** | Clean geometric sans; pairs cleanly, reads well at small sizes |

Alternatives only if user asks: Cormorant + Outfit, or Instrument Serif + Instrument Sans.

- **Type scale:** Use size contrast boldly — display headlines `text-5xl`–`text-7xl` on landing; supporting labels `text-xs`–`text-sm` uppercase tracking-wide. Let hierarchy replace paragraphs.
- **Avoid:** Inter, Roboto, Arial, system-ui as display.

### Components & imagery

- Cards: soft ambient shadows on cream, navy text, optional ash hairline borders — not glassmorphism stacks.
- **Imagery:** Product UI mocks, abstract coastal textures, industry photography if available — never "person pointing at hologram."
- **No emoji** in UI.

---

## Navigation (mandatory — mega-menu top bar)

One stylish **top nav bar** sitewide. This is the primary way users move between pages.

### Collapsed (at rest)

```
[ Pacific Edge logo ]   Product   Industries   Company   Get Started        [ Book a Call ]
```

- Logo/wordmark left.
- **4 category labels** visible horizontally (not every page link — categories only).
- Primary CTA pill right: **Book a Call**.
- Bar sits on cream; navy text; subtle bottom border or shadow on scroll.
- Full width, fixed or sticky top — **not** a floating island pill.

### Expanded (hover desktop category OR click expand control)

- Nav panel **expands downward** from the bar — one unified mega-menu, not separate flyouts per item.
- **Expand trigger:** hovering any category label opens the full panel; also provide a **chevron / menu expand button** for click/touch users.
- Panel layout: **columns** — one column per category, **category name as column header**, sub-page links stacked below.

```
┌─────────────────────────────────────────────────────────────────────────┐
│  [logo]   Product   Industries   Company   Get Started    [Book a Call] │
├─────────────────────────────────────────────────────────────────────────┤
│  PRODUCT          INDUSTRIES         COMPANY           GET STARTED      │
│  Solutions        Dental & Health    Why Us             Process         │
│  Dashboard        Restaurants        About / Founders   Pricing         │
│  Integrations     Salons & Spas      Coverage           FAQ             │
│                   Trades             Reviews            Contact         │
│                   Retail                                                           │
└─────────────────────────────────────────────────────────────────────────┘
```

### Mobile & tablet

- Hamburger → full-screen or sheet menu with **accordion per category** (category header → sub-links).
- **Never rely on hover alone** — all destinations reachable by tap.
- CTA remains visible (header or sticky bottom bar).
- Read the `responsive` skill before implementing nav.

### Nav category map (authoritative)

| Category | Sub-pages (routes) |
|----------|-------------------|
| **Product** | `/solutions` · `/dashboard` · `/integrations` |
| **Industries** | `/industries/dental` · `/industries/restaurants` · `/industries/salons` · `/industries/trades` · `/industries/retail` |
| **Company** | `/why-us` · `/about` · `/coverage` · `/reviews` |
| **Get Started** | `/process` · `/pricing` · `/faq` · `/contact` |

Legal: `/terms` · `/privacy` — footer only, not in mega-menu.

---

## Site architecture

**Multi-page site.** Home is a short hook (~6 sections). Depth lives on inner pages.

### Landing page `/` — ~6 sections only

The home page is the **hook**, not the encyclopedia. Target **6 sections give or take:**

| # | Section | Purpose | Links to |
|---|---------|---------|----------|
| 1 | **Hero** | Headline (TBD) + one-line hook + primary CTA | `/contact` |
| 2 | **Product glimpse** | Large dashboard or solution visual — minimal labels | `/dashboard` or `/solutions` |
| 3 | **Industries** | 5 industry tiles, image-led, one pain line each | `/industries/*` |
| 4 | **Process teaser** | 5 steps as visual timeline — titles only, no essays | `/process` |
| 5 | **Proof** | 1 featured testimonial or rotating quote strip | `/reviews` if separate, else inline |
| 6 | **CTA band** | One month free + Book a Call | `/pricing` · `/contact` |

**Not on the landing page** (inner pages only): full FAQ, all 3 testimonials, founder bios, coverage map, full integration grid, Why Us essay, legal text.

### Inner pages (full content map)

| Route | Page | Content from current site |
|-------|------|---------------------------|
| `/solutions` | Our Solutions | 4 pillars — visual cards, headline + one line each |
| `/dashboard` | Dashboard preview | Interactive or static mock; metrics; tool connections |
| `/integrations` | Plays Nice | Tabbed stacks by industry — see inventory below |
| `/industries/dental` | Dental & Health | Pain hook + relevant solutions + dental integrations |
| `/industries/restaurants` | Restaurants & Food | Same pattern |
| `/industries/salons` | Salons, Spas & Wellness | Same pattern |
| `/industries/trades` | Trades & Home Services | Same pattern |
| `/industries/retail` | Retail & Local Shops | Same pattern |
| `/process` | How It Works | 5 steps — visual stepper, trim descriptions |
| `/why-us` | Why Us | 4 pillars + short intro |
| `/about` | Founders | Leone Jiwani + Sam Rezaei bios (trimmed) |
| `/coverage` | Service area | 5 Greater Vancouver regions + BC note |
| `/reviews` | Proof | All 3 testimonials |
| `/pricing` | Free trial | One month free; 6-month term; CTA |
| `/faq` | FAQ | All 7 Q&As — accordion UI, concise answers |
| `/contact` | Book a call | Form or calendly embed + hello@pacificedge.ai |
| `/terms` | Terms of Service | Generated template — see Legal pages |
| `/privacy` | Privacy Policy | Generated template + trust bullets |

### Sections to REMOVE (do not rebuild)

- **Before & After** comparison table ("The Difference")
- **"Every Empty Slot Is Money Walking Out The Door"** / Say hello to Janice block
- **"Why Speed Wins"** standalone CTA section (merge CTA into hero, pricing, footer)
- **Stat blocks with numbered footnotes** (77%, 3X, 24/7 hero stats)
- **Infinite scrolling marquee** (AI Automation Review Management…)
- **Sources & References** footer block
- **"Built On Trust"** as a full home section (content moves to `/privacy` or a 4-icon compact strip)
- **Careers** link unless user asks

---

## Content inventory (preserve — trim, don't replace)

### Hero

- **Eyebrow:** AI Consulting · Vancouver, BC
- **Headline direction:** Current is "The Unfair Edge Your Business Deserves." — candidate for rewrite; keep outcome-focused subcopy about missed calls, reviews, bookings.
- **CTAs:** Book a Free 15-Min Call · See What We Do (or equivalent)
- **Supporting line:** Built for Vancouver's restaurants, salons, trades & shops · No tech team required

### Our Solutions (4 pillars)

1. **Answers every lead in seconds** — missed calls texted back; messages answered around the clock
2. **Turns interest into booked jobs** — real open times; waitlist fills cancellations into existing calendar
3. **Builds a 5-star reputation** — on-brand review replies; nudge happy customers for ratings
4. **Custom-built around your business** — not a template; workflows + live dashboard around existing tools

*Remove "Janice" name from solution copy; describe the system impersonally.*

### Industries (5 cards)

| Industry | Pain hook (keep, shorten) |
|----------|---------------------------|
| Dental & Health Clinics | New-patient calls to voicemail, no-shows, missed recalls |
| Restaurants & Food Service | Missed reservation calls, unanswered reviews, no-shows |
| Salons, Spas & Wellness | Empty chairs, after-hours DMs, clients who never rebook |
| Trades & Home Services | Calls missed on the job, quotes gone cold |
| Retail & Local Shops | One-time buyers, unanswered questions, slow weeks |

Industry cards on home link to `/industries/*`. Each industry page reuses the pain hook + relevant solutions visuals + that industry's integration logos — **minimal body copy**.

### Coverage (5 regions)

- Vancouver & Downtown — Restaurants, retail, professional services
- Burnaby & New Westminster — Trades, wellness clinics, food service
- Surrey & Langley — Growing businesses ready to scale
- North Shore & Tri-Cities — Local operators, service-based businesses
- Richmond & Delta — Retail, hospitality, e-commerce
- Footer note: Accepting new clients across BC

### Dashboard preview

Show a single dashboard mock with plausible metrics (calls answered, jobs booked, slots saved) and connections to Phone · Calendar · Reviews · CRM. Before/after metric toggle from the Process section is optional — do not duplicate the removed Before/After table.

### Integrations by industry

**Dental:** Dentrix, Open Dental, ClearDent, Tracker, AbelDent, Curve Dental

**Restaurants:** OpenTable, Toast, TouchBistro, 7shifts, Lightspeed, Resy

**Salons & Spas:** Fresha, Vagaro, Booksy, Mindbody, GlossGenius, Square Appts

**Trades:** Jobber, ServiceTitan, Housecall Pro, ServiceM8, HomeStars, QuickBooks

**Retail:** Shopify, Lightspeed, Square, Clover, WooCommerce, Mailchimp

Closing line: *Don't see yours? We build custom integrations for whatever you already run.*

### Process (5 steps)

1. **Discovery Call** — 15 min; learn the business; find time/money leaks; no sales pitch
2. **Deep-Dive Session** — 60 min; map workflow; pinpoint bottlenecks; pick automations
3. **Custom Build** — working prototype within first week; real software, not slides
4. **Launch & Train** — deploy; walk team through in plain English; no orphaned systems
5. **Optimize & Support** — ongoing monitoring; scale as business grows

### Why Us (4 pillars)

1. **No jargon** — plain English; if you don't understand it, we haven't done our job
2. **Speed to value** — working prototype in week one
3. **Built to deliver** — 6-month engagements; transparent pricing upfront
4. **Local & hands-on** — Vancouver-based; meet at your shop; build around your workflow

Intro paragraph: operators not agencies; sell time back; face-to-face when wanted.

### Founders

**Leone Jiwani**, Co-Founder — BBA BCIT; ventures, BCIT REA finance, Concord Pacific, Glarehawks; founded Pacific Edge to hand admin time back without enterprise pricing.

**Sam Rezaei**, Co-Founder — UBC Sauder finance, Dean's List; QuadReal, Wesgroup, rebar plant coordination; co-founded Pacific Edge for local businesses — less manual work, clearer data.

### Proof / Reviews (3 testimonials)

1. **Carter Macintosh** · Pinnacle Ridge Contracting · Trades — missed calls texted back; three extra jobs first week
2. **AJ** · AJ Consulting · Professional Services — time back; like a front-desk hire without payroll
3. **Priya Anand** · Coast Beauty Lounge · Salon & Spa — waitlist fills cancellations within minutes

*Remove "Janice" from quote attribution lines.*

### FAQ (7 questions — keep all)

1. Do I need to be tech-savvy?
2. How long does setup take?
3. How much does it cost?
4. What if I want to cancel?
5. Will this actually work for my industry?
6. Will my data be safe?
7. What happens on the discovery call?

Contact fallback: hello@pacificedge.ai

### Pricing / Free trial

- **Headline:** Your First Month Is On Us (or "One Month Free")
- **Body:** Try it for a full month free; see bookings and hours saved; walk away if not the right fit
- **Terms (from FAQ):** After free month, 6-month initial engagement; transparent pricing; month-to-month or handover after
- **CTA:** Book Your Free Setup Call

### Footer

- Minimal — logo, category links mirroring nav, hello@pacificedge.ai · Vancouver, BC
- Legal: Terms · Privacy
- © Pacific Edge AI · Vancouver, British Columbia, Canada
- No tagline essay — one line max or none

---

## Copy principles

1. **Minimal supporting text.** Headlines, eyebrows, and UI labels carry the message. Default to **zero** body paragraphs per block; max **one short sentence** when absolutely needed. If a section needs three sentences, the layout is wrong — use visuals instead.
2. **Show, then tell.** Dashboard mocks, timelines, industry photography, and type scale replace exposition.
3. **Plain English.** No jargon list — see banned words below.
4. **No fabricated facts.** Keep existing claims and testimonials.
5. **One primary CTA** sitewide: Book a Call.

### Words to avoid in new copy

AI (as filler), automation, leverage, unlock, seamless, cutting-edge, revolutionary, game-changer, empower, synergy, next-gen, unfair edge, AI employee, Janice.

---

## Technical preferences

- **Stack:** Next.js (App Router) + Tailwind CSS unless repo specifies otherwise.
- **Pages:** Multi-page per Site architecture above — shared layout with mega-menu nav + footer.
- **Fonts:** Load Fraunces + DM Sans via `next/font/google`.
- **Responsive (mandatory):** Read and apply the `responsive` skill on **every** page, section, and nav state. Mobile-first implementation. Test breakpoints: 375px, 768px, 1024px, 1440px. No hover-only interactions. Mega-menu becomes accordion on mobile. Images and type scale down gracefully — never horizontal scroll.
- **Performance:** Animate `transform` + `opacity` only; respect `prefers-reduced-motion`.
- **Accessibility:** Semantic HTML, focus states, keyboard-navigable mega-menu, sufficient contrast (navy on cream).

---

## Skills to apply

Read before generating UI:

- `design-taste-frontend` — anti-slop, brief inference
- `high-end-visual-design` — spacing, typography (light/trust variant, not dark SaaS)
- `frontend-design` — distinctive layouts
- `responsive` — every section
- `humanizer` — all copy passes
- `clarify` — labels and CTAs
- `polish` — final pass per section

**Anti-slop pre-flight:** no purple gradients, no three identical dark cards, no Inter + slate-900 default, no emoji industry nav.

---

## Workflow for each session

1. Read this file and the codebase.
2. State the design read in one line.
3. Build **shared layout first** (nav mega-menu, footer, color/type tokens).
4. Build **landing page** (~6 sections), then inner pages one route at a time.
5. When migrating copy, use the content inventory — preserve meaning, **cut ruthlessly**.
6. Run responsive check at each breakpoint before marking a page done.
7. Do not add pages or claims beyond this doc without user sign-off.

---

## Locked decisions (do not revert without user ask)

| Decision | Choice |
|----------|--------|
| **Site shape** | Multi-page site with mega-menu top nav — not a single long scroll |
| **Landing page** | ~6 sections only — hook content; depth on inner pages |
| **Nav** | Logo + 4 categories at rest; expand downward to columnar sub-links on hover/click |
| **Colors** | Creamy white base · coastal navy primary · beige-gold ash tertiary (sparingly) |
| **Fonts** | Fraunces (display) + DM Sans (UI/body) — modern, elegant, clinic-credible |
| **Copy density** | Minimal supporting text — show-don't-tell; spacious layouts |
| **Janice persona** | Remove entirely — describe the product/system impersonally |
| **Hero headline** | Placeholder — layout + CTA now; headline TBD in workshop |
| **Testimonials** | Real clients — keep Carter Macintosh, AJ, Priya Anand (no Janice in attribution) |
| **Legal pages** | Claude drafts general-purpose TOS + Privacy with lawyer-review disclaimer |
| **Responsive** | Highly responsive throughout — non-negotiable on every component |

---

## Legal pages (`/terms` and `/privacy`)

When building legal pages, **draft complete placeholder legal copy** — do not leave "Coming soon" stubs. The user has not provided lawyer-reviewed text; generate sensible, general-purpose policies that:

- Match Pacific Edge AI as a Vancouver BC company offering done-for-you software and automation for local businesses
- Cover standard sections: acceptance of terms, services description, user responsibilities, payment/trial terms (including **one-month free trial** and **6-month initial engagement** as stated on the marketing site), limitation of liability, termination, governing law (British Columbia, Canada)
- Privacy policy covers: what data is collected (contact forms, usage, customer business data processed on behalf of clients), encryption, PIPEDA / BC privacy alignment, no selling of data, retention, user rights, contact for privacy requests (hello@pacificedge.ai)
- Use clear plain English where possible; include a prominent note at the top: *"This is a general template — have a qualified lawyer review before relying on it in production."*
- Link both pages from the footer on every page

Migrate the current **"Your Data Stays Yours"** four trust bullets (encrypted, Canadian privacy, never sold, you stay in control) into the Privacy Policy body; optional compact 4-icon trust strip on the home page above FAQ or in footer is fine.

---

## Reference

- Live site: https://pacificedge.ai/
- Email: hello@pacificedge.ai
- Location: Vancouver, BC / Greater Vancouver
