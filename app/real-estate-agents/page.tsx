import type { Metadata } from "next"
import Link from "next/link"
import SiteShell from "@/components/site/SiteShell"
import TiltParallax from "@/components/site/TiltParallax"
import "@/styles/pages.css"

const CAL = "https://cal.com/pacificedge"

export const metadata: Metadata = {
  title: { absolute: "AI for Real Estate Agents & Brokerages | Pacific Edge AI" },
  description:
    "Be the first agent to reply — every time. Pacific Edge AI answers, qualifies, and books your real estate leads 24/7 and nurtures them for months. Works with Follow Up Boss, kvCORE, BoomTown & more. Vancouver, BC.",
  alternates: { canonical: "/real-estate-agents" },
}

export default function RealEstateAgentsPage() {
  return (
    <SiteShell variant="minimal">
      <TiltParallax />
      <header className="ihero">
        <div className="ihero-orb ihero-orb-1" data-parallax="26" />
        <div className="ihero-orb ihero-orb-2" data-parallax="-40" />
        <div className="ihero-inner">
          <div className="eyebrow reveal"><span className="eyebrow-dot" /><Link href="/real-estate" style={{ color: "inherit", textDecoration: "none" }}>Real Estate</Link> · For Agents &amp; Brokerages</div>
          <h1 className="reveal d1">
            Be The First Agent<br />
            <span className="a">They Hear Back From.</span>
          </h1>
          <p className="ihero-sub reveal d2">
            You can&apos;t answer every lead while you&apos;re showing a home, at a listing appointment, or asleep.
            Janice can. She replies in seconds, qualifies the buyer, books the showing, and keeps every lead warm
            for months, so you win the deals your competitors let go cold.
          </p>
          <div className="ihero-pain reveal d3">
            When a portal lead comes in during a showing, who&apos;s replying for you?
          </div>
          <div className="ihero-actions reveal d4">
            <a href={CAL} target="_blank" rel="noopener" className="btn-primary">Book a Free 15-Min Demo</a>
            <a href="#what" className="btn-ghost">See How It Works ↓</a>
          </div>
          <div className="ihero-trust reveal d5">
            Works with Follow Up Boss, kvCORE, BoomTown, Lofty &amp; more · Vancouver-based
          </div>
        </div>
      </header>

      <div className="divhr" />

      <section id="problems">
        <div className="wrap">
          <div className="sl reveal">The Problem</div>
          <h2 className="st reveal d1">Where Deals <span className="a">Leak Out.</span></h2>
          <p className="sd reveal d2">You&apos;re already paying to generate these leads. Here&apos;s where they slip away.</p>
          <div className="prob-grid">
            <div className="prob reveal d1"><div className="prob-ico">📵</div><h3>You can&apos;t answer mid-showing</h3><p>A lead calls while you&apos;re with a client. You call back later and they&apos;ve already toured with another agent.</p><div className="prob-cost">The first reply usually wins the client</div></div>
            <div className="prob reveal d2"><div className="prob-ico">🌙</div><h3>Leads land after hours</h3><p>Portal inquiries and texts arrive nights and weekends, when there&apos;s nobody at a desk to jump on them.</p><div className="prob-cost">Every hour cold cuts your odds</div></div>
            <div className="prob reveal d3"><div className="prob-ico">❓</div><h3>Unqualified leads eat your day</h3><p>You spend hours on buyers who aren&apos;t pre-approved or serious, while the ready ones wait for a reply.</p><div className="prob-cost">Your best hours go to tire-kickers</div></div>
            <div className="prob reveal d1"><div className="prob-ico">📅</div><h3>Showings get no-showed</h3><p>Back-and-forth to book a viewing, then a no-show that wastes a trip and a slot you could&apos;ve filled.</p><div className="prob-cost">A no-show is a wasted afternoon</div></div>
            <div className="prob reveal d2"><div className="prob-ico">🐢</div><h3>Follow-up falls off</h3><p>Most buyers take months. Without steady contact they forget you and transact with whoever stayed in touch.</p><div className="prob-cost">Leads buy from whoever kept in touch</div></div>
            <div className="prob reveal d3"><div className="prob-ico">⭐</div><h3>Few reviews &amp; referrals</h3><p>You close happy clients all year but rarely turn them into the reviews and intros that drive your next deal.</p><div className="prob-cost">Happy clients, quiet reputation</div></div>
          </div>
        </div>
      </section>

      <div className="divhr" />

      <section id="what">
        <div className="wrap">
          <div className="sl reveal sl-c tac" style={{ justifyContent: "center" }}>What We Automate</div>
          <h2 className="st reveal d1 tac">Your 24/7 <span className="a">Inside Agent.</span></h2>
          <p className="sd reveal d2" style={{ textAlign: "center", margin: "0 auto" }}>Everything that has to happen the moment a lead comes in, handled, so you can stay focused on clients.</p>
          <div className="px-grid tilt">
            <article className="px-card reveal d1" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico">⚡</span><h3>Instant speed-to-lead</h3><p>Every call, text, and portal inquiry answered in seconds, so you&apos;re first, not fifth.</p></article>
            <article className="px-card reveal d2" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico">🎯</span><h3>Qualify while you work</h3><p>Budget, timeline, pre-approval, and area, asked and logged, with serious buyers flagged for you.</p></article>
            <article className="px-card reveal d3" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico">🗓️</span><h3>Showings booked</h3><p>Real times from your calendar, booked automatically, with reminders that cut no-shows.</p></article>
            <article className="px-card reveal d1" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico">🔁</span><h3>Months-long nurture</h3><p>Steady, in-your-voice follow-up so leads remember you when they&apos;re finally ready to move.</p></article>
            <article className="px-card reveal d2" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico">🏷️</span><h3>Listing questions answered</h3><p>Price, status, square footage, and next steps, answered instantly from facts you approve.</p></article>
            <article className="px-card reveal d3" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico">⭐</span><h3>Reviews &amp; referrals</h3><p>Happy closings turned into Google reviews and warm referral intros, on autopilot.</p></article>
          </div>
        </div>
      </section>

      <div className="divhr" />

      <section id="faq">
        <div className="wrap">
          <div className="sl reveal sl-c tac">Questions</div>
          <h2 className="st reveal d1 tac">Agents <span className="a">Ask Us.</span></h2>
          <div className="faq-list">
            <details className="faq-item reveal"><summary>Will leads know it&apos;s an AI?<span className="faq-ico" /></summary><div className="faq-body">It replies in your voice and handles routine questions instantly. Anything sensitive is handed to you, so it always feels like your team, not a bot.</div></details>
            <details className="faq-item reveal"><summary>Does it plug into my CRM?<span className="faq-ico" /></summary><div className="faq-body">Yes. It works with Follow Up Boss, kvCORE, BoomTown, Lofty, HubSpot and more, and captures leads from your calls, texts, and portals.</div></details>
            <details className="faq-item reveal"><summary>Can it really book showings?<span className="faq-ico" /></summary><div className="faq-body">Yes. It offers real times from your calendar, books the viewing, and sends reminders. You stay in control of your availability.</div></details>
            <details className="faq-item reveal"><summary>How long until it&apos;s live?<span className="faq-ico" /></summary><div className="faq-body">Usually about a week. We set it up, you test it on a few leads, and we tune the voice before it touches a real client.</div></details>
          </div>
        </div>
      </section>

      <section className="icta">
        <div className="ihero-inner" style={{ margin: "0 auto" }}>
          <div className="sl reveal sl-c" style={{ justifyContent: "center" }}>Get Started</div>
          <h2 className="icta-title reveal d1">Stop Losing Leads<br /><span className="a">To A Slow Reply.</span></h2>
          <p className="icta-desc reveal d2">Book a free 15-minute call and we&apos;ll show you exactly how to be first on every lead. No pitch, no obligation.</p>
          <a href={CAL} target="_blank" rel="noopener" className="btn-primary reveal d2">Book a Free 15-Min Demo</a>
          <div className="xlinks reveal d3">
            <Link href="/real-estate" className="xlink"><span>←</span>Real Estate</Link>
            <Link href="/real-estate-developers" className="xlink"><span>🏗️</span>For Developers</Link>
            <Link href="/ai-employee" className="xlink"><span>🤖</span>Meet Janice</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
