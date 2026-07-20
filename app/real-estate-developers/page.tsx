import type { Metadata } from "next"
import Link from "next/link"
import SiteShell from "@/components/site/SiteShell"
import TiltParallax from "@/components/site/TiltParallax"
import "@/styles/pages.css"

const CAL = "https://cal.com/pacificedge"

export const metadata: Metadata = {
  title: { absolute: "AI for Property Developers & Pre-Sales | Pacific Edge AI" },
  description:
    "Capture every pre-sale registration and keep buyers and investors warm from launch to close. Pacific Edge AI answers development inquiries 24/7, manages your waitlist, and handles sales-centre overflow. Vancouver, BC.",
  alternates: { canonical: "/real-estate-developers" },
}

export default function RealEstateDevelopersPage() {
  return (
    <SiteShell variant="minimal">
      <TiltParallax />
      <header className="ihero">
        <div className="ihero-orb ihero-orb-1" data-parallax="26" />
        <div className="ihero-orb ihero-orb-2" data-parallax="-40" />
        <div className="ihero-inner">
          <div className="eyebrow reveal"><span className="eyebrow-dot" /><Link href="/real-estate" style={{ color: "inherit", textDecoration: "none" }}>Real Estate</Link> · For Property Developers</div>
          <h1 className="reveal d1">
            Every Registration Captured.<br />
            <span className="a">Every Buyer Kept Warm.</span>
          </h1>
          <p className="ihero-sub reveal d2">
            A new development generates a flood of interest, at launch, on weekends, at midnight. Janice captures
            every pre-sale registration the moment it lands, answers buyer and investor questions, and keeps your
            waitlist warm from teaser to closing, so nothing leaks between marketing and your sales team.
          </p>
          <div className="ihero-pain reveal d3">
            How many registrations sat unanswered over your last launch weekend?
          </div>
          <div className="ihero-actions reveal d4">
            <a href={CAL} target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>
            <a href="#what" className="btn-light">See How It Works ↓</a>
          </div>
          <div className="ihero-trust reveal d5">
            For pre-sale, new construction &amp; multi-phase projects · Works with your sales CRM
          </div>
        </div>
      </header>

      <div className="divhr" />

      <section id="problems">
        <div className="wrap">
          <div className="sl reveal">The Problem</div>
          <h2 className="st reveal d1">Where Interest <span className="a">Leaks Out.</span></h2>
          <p className="sd reveal d2">You spend heavily to drive demand to a launch. Here&apos;s where it drains away before it reaches your sales team.</p>
          <div className="prob-grid">
            <div className="prob reveal d1"><div className="prob-ico">🌊</div><h3>Launch-day inquiry floods</h3><p>Marketing drives a spike your sales centre can&apos;t answer all at once, and the overflow quietly leaks away.</p><div className="prob-cost">Overflow interest is money left on the table</div></div>
            <div className="prob reveal d2"><div className="prob-ico">📝</div><h3>Registrations go cold</h3><p>Pre-sale registrations pile up faster than anyone can follow up, and warm buyers drift to the next project.</p><div className="prob-cost">A cold registration is a lost buyer</div></div>
            <div className="prob reveal d3"><div className="prob-ico">👥</div><h3>Repetitive buyer questions</h3><p>Hundreds of people ask the same things about price, floorplans, deposits, and timelines, all by hand.</p><div className="prob-cost">Your team answers the same 10 questions</div></div>
            <div className="prob reveal d1"><div className="prob-ico">🌙</div><h3>Interest after hours</h3><p>Buyers browse and register nights and weekends, long after the presentation centre has closed.</p><div className="prob-cost">Closed doors mean lost inquiries</div></div>
            <div className="prob reveal d2"><div className="prob-ico">📄</div><h3>Chasing documents &amp; deposits</h3><p>Endless back-and-forth to collect forms, IDs, and deposits slows every deal in the pipeline.</p><div className="prob-cost">Slow paperwork stalls sales</div></div>
            <div className="prob reveal d3"><div className="prob-ico">🤝</div><h3>Keeping brokers &amp; VIPs engaged</h3><p>Nurturing your agent network and VIP list through a long sales cycle is a full-time job on its own.</p><div className="prob-cost">Quiet lists go cold before closing</div></div>
          </div>
        </div>
      </section>

      <div className="divhr" />

      <section id="what">
        <div className="wrap">
          <div className="sl reveal sl-c tac" style={{ justifyContent: "center" }}>What We Automate</div>
          <h2 className="st reveal d1 tac">A Sales Centre <span className="a">That Never Closes.</span></h2>
          <p className="sd reveal d2" style={{ textAlign: "center", margin: "0 auto" }}>From the first teaser ad to the final closing, every inquiry answered and every buyer kept warm.</p>
          <div className="px-grid tilt">
            <article className="px-card reveal d1" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico">📝</span><h3>24/7 registration capture</h3><p>Every pre-sale registration and inquiry captured and acknowledged the instant it comes in.</p></article>
            <article className="px-card reveal d2" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico">💬</span><h3>Instant buyer answers</h3><p>Price, floorplans, deposits, and timelines answered instantly from facts you approve, on brand.</p></article>
            <article className="px-card reveal d3" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico">📋</span><h3>Waitlist &amp; nurture</h3><p>Your registration list kept warm with updates through every phase, so interest doesn&apos;t fade before launch.</p></article>
            <article className="px-card reveal d1" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico">🗓️</span><h3>Presentation-centre booking</h3><p>Appointments and private previews booked automatically, with reminders to cut no-shows.</p></article>
            <article className="px-card reveal d2" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico">📄</span><h3>Document &amp; deposit reminders</h3><p>Gentle, automatic nudges to collect forms, IDs, and deposits so deals don&apos;t stall on paperwork.</p></article>
            <article className="px-card reveal d3" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico">📊</span><h3>Per-project reporting</h3><p>One view of registrations, response times, and conversion across every project and phase.</p></article>
          </div>
        </div>
      </section>

      <div className="divhr" />

      <section id="faq">
        <div className="wrap">
          <div className="sl reveal sl-c tac">Questions</div>
          <h2 className="st reveal d1 tac">Developers <span className="a">Ask Us.</span></h2>
          <div className="faq-list">
            <details className="faq-item reveal"><summary>Can it handle a big launch-day spike?<span className="faq-ico" /></summary><div className="faq-body">Yes. That&apos;s exactly where it shines. Janice answers unlimited inquiries at once, so the overflow your sales centre can&apos;t reach never leaks away.</div></details>
            <details className="faq-item reveal"><summary>Will it stay on brand and accurate?<span className="faq-ico" /></summary><div className="faq-body">Yes. She answers only from facts you approve, price, floorplans, deposit structure, timelines, in your project&apos;s voice, and hands anything sensitive to your sales team.</div></details>
            <details className="faq-item reveal"><summary>Does it work with our sales CRM?<span className="faq-ico" /></summary><div className="faq-body">Yes. It captures registrations and inquiries into the CRM and tools your sales and marketing teams already use.</div></details>
            <details className="faq-item reveal"><summary>How is our data handled?<span className="faq-ico" /></summary><div className="faq-body">Registration and buyer data stays scoped to your project, and sensitive details stay out of automated messages. We build to respect Canadian privacy expectations.</div></details>
          </div>
        </div>
      </section>

      <section className="icta">
        <div className="ihero-inner" style={{ margin: "0 auto" }}>
          <div className="sl reveal sl-c" style={{ justifyContent: "center" }}>Get Started</div>
          <h2 className="icta-title reveal d1">Make Your Next Launch<br /><span className="a">Leak-Proof.</span></h2>
          <p className="icta-desc reveal d2">Book a free 15-minute call and we&apos;ll map how to capture and warm every registration from day one. No pitch, no obligation.</p>
          <a href={CAL} target="_blank" rel="noopener" className="btn-mint reveal d2">Book a Free 15-Min Demo</a>
          <div className="xlinks reveal d3">
            <Link href="/real-estate" className="xlink"><span>←</span>Real Estate</Link>
            <Link href="/real-estate-agents" className="xlink"><span>🏡</span>For Agents</Link>
            <Link href="/custom-builds" className="xlink"><span>🛠️</span>Custom Builds</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
