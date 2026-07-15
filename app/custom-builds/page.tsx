import type { Metadata } from "next"
import Link from "next/link"
import SiteShell from "@/components/site/SiteShell"
import TiltParallax from "@/components/site/TiltParallax"
import "@/styles/pages.css"

const CAL = "https://cal.com/pacificedge"

export const metadata: Metadata = {
  title: { absolute: "Custom Builds · Bespoke Software for Your Business | Pacific Edge AI" },
  description:
    "When you need something Janice doesn't cover, we build it. Pacific Edge AI designs and builds custom software around how your business actually runs: tailored CRMs, internal dashboards, and automations. Scoped and quoted per project. Vancouver, BC.",
  alternates: { canonical: "/custom-builds" },
}

const check = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

export default function CustomBuildsPage() {
  return (
    <SiteShell variant="minimal">
      <TiltParallax />
      <header className="ihero">
        <div className="ihero-orb ihero-orb-1" data-parallax="26" />
        <div className="ihero-orb ihero-orb-2" data-parallax="-40" />
        <div className="ihero-inner">
          <div className="eyebrow reveal"><span className="eyebrow-dot" />Custom Builds · Software Built Around You</div>
          <h1 className="reveal d1">
            When Janice Doesn&apos;t Cover It,<br />
            <span className="a">We Build It.</span>
          </h1>
          <p className="ihero-sub reveal d2">
            Janice runs the front desk: calls, texts, bookings, no-show follow-ups, reviews. For most local
            businesses that&apos;s the whole job. But sometimes the thing eating your week is specific to how{" "}
            <span className="cb-emph">you</span> run. That&apos;s a Custom Build.
          </p>
          <div className="ihero-actions reveal d3">
            <a href={CAL} target="_blank" rel="noopener" className="btn-primary">Book a Free 15-Min Demo</a>
            <a href="#what" className="btn-ghost">See What We Build ↓</a>
          </div>
          <div className="ihero-trust reveal d4">
            Scoped &amp; quoted per project · No templates, no bloat · Vancouver-based
          </div>
        </div>
      </header>

      <div className="divhr" />

      {/* Intro — Sam's copy */}
      <section id="what">
        <div className="wrap">
          <div className="sl reveal">What Is A Custom Build?</div>
          <h2 className="st reveal d1">Just The Thing You <span className="a">Actually Need.</span></h2>
          <p className="sd reveal d2">
            A booking flow nobody else has. An internal tool your team keeps wishing existed. A piece of software
            no off-the-shelf product actually sells. We sit down, learn exactly how your business works, and build
            software that fits it: a tailored CRM, an internal dashboard, an automation that kills the one task
            that keeps stealing your time.
          </p>
          <div className="px-grid tilt">
            <article className="px-card reveal d1" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico">🗂️</span><h3>Tailored CRM</h3><p>A CRM shaped around your pipeline and your words, not a generic template you fight with every day.</p></article>
            <article className="px-card reveal d2" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico">📊</span><h3>Internal dashboards</h3><p>One screen that pulls your numbers together, so you stop stitching spreadsheets by hand every week.</p></article>
            <article className="px-card reveal d3" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico">⚙️</span><h3>Workflow automations</h3><p>The repetitive task that eats your week, handled automatically from start to finish.</p></article>
            <article className="px-card reveal d1" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico">📅</span><h3>Custom booking flows</h3><p>A booking or intake flow built exactly the way your business actually takes work in.</p></article>
            <article className="px-card reveal d2" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico">🔗</span><h3>Tool integrations</h3><p>The two systems that don&apos;t talk to each other, finally connected and kept in sync.</p></article>
            <article className="px-card reveal d3" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico">🚪</span><h3>Client &amp; team portals</h3><p>A simple, branded place for clients or staff to do the one thing they need to do.</p></article>
          </div>
        </div>
      </section>

      <div className="divhr" />

      {/* When to reach for a custom build */}
      <section>
        <div className="wrap">
          <div className="sl reveal">When It&apos;s Worth It</div>
          <h2 className="st reveal d1">Sound Like <span className="a">Your Week?</span></h2>
          <div className="px-grid">
            <div className="px-card reveal d1"><span className="px-card-ico">🕓</span><h3>&ldquo;I do this by hand every week&rdquo;</h3><p>If a task is repetitive, rule-based, and steals hours, it can almost always be automated away.</p></div>
            <div className="px-card reveal d2"><span className="px-card-ico">🧩</span><h3>&ldquo;No software does it our way&rdquo;</h3><p>You&apos;ve tried the off-the-shelf tools and end up bending your business to fit them. Build it your way instead.</p></div>
            <div className="px-card reveal d3"><span className="px-card-ico">📑</span><h3>&ldquo;It lives in ten spreadsheets&rdquo;</h3><p>When the truth is scattered across tabs and inboxes, one purpose-built tool pays for itself fast.</p></div>
          </div>
        </div>
      </section>

      <div className="divhr" />

      {/* Process */}
      <section>
        <div className="wrap">
          <div className="sl reveal sl-c tac" style={{ justifyContent: "center" }}>How It Works</div>
          <h2 className="st reveal d1 tac">From Idea To <span className="a">Working Software.</span></h2>
          <p className="sd reveal d2" style={{ textAlign: "center", margin: "0 auto" }}>No mystery, no lock-in. You see progress in weeks and own what we build.</p>
          <div className="px-steps">
            <div className="px-step reveal d1"><h3>We learn your business</h3><p>We map how you actually work, where the time goes, and what&apos;s genuinely worth building.</p></div>
            <div className="px-step reveal d2"><h3>We scope &amp; quote</h3><p>You get a clear plan, a fixed scope, and a per-project price before any work starts.</p></div>
            <div className="px-step reveal d3"><h3>We build &amp; iterate</h3><p>We build in the open, show you working versions early, and adjust until it fits.</p></div>
            <div className="px-step reveal d4"><h3>We support it</h3><p>It&apos;s yours. We stay on to maintain, tweak, and grow it as your business changes.</p></div>
          </div>
        </div>
      </section>

      <div className="divhr" />

      {/* FAQ */}
      <section id="faq">
        <div className="wrap">
          <div className="sl reveal sl-c tac">Questions</div>
          <h2 className="st reveal d1 tac">Before You <span className="a">Ask Us.</span></h2>
          <div className="faq-list">
            <details className="faq-item reveal"><summary>How is this different from Janice?<span className="faq-ico" /></summary><div className="faq-body">Janice is our ready-to-go AI front desk that answers calls and texts, books, and follows up. A Custom Build is bespoke software we design and build around a need Janice doesn&apos;t cover, like a tailored CRM or an internal tool.</div></details>
            <details className="faq-item reveal"><summary>What does it cost?<span className="faq-ico" /></summary><div className="faq-body">Every build is scoped and quoted per project after a free call. No templates, no surprise bloat. You approve the plan and the price before we start.</div></details>
            <details className="faq-item reveal"><summary>How long does it take?<span className="faq-ico" /></summary><div className="faq-body">It depends on scope. We break the work into small, working milestones so you see real progress in weeks, not months, and can steer as we go.</div></details>
            <details className="faq-item reveal"><summary>Do we own what you build?<span className="faq-ico" /></summary><div className="faq-body">Yes. It&apos;s built for your business and it belongs to you. We stay on for support and improvements only if you want us to.</div></details>
            <details className="faq-item reveal"><summary>Can it work with the tools we already use?<span className="faq-ico" /></summary><div className="faq-body">That&apos;s usually the point. A big part of what we do is connecting the systems you already run so they finally talk to each other.</div></details>
          </div>
        </div>
      </section>

      {/* CTA — Sam's closing line */}
      <section className="icta">
        <div className="ihero-inner" style={{ margin: "0 auto" }}>
          <div className="sl reveal sl-c" style={{ justifyContent: "center" }}>Get Started</div>
          <h2 className="icta-title reveal d1">Got Something<br /><span className="a">Specific In Mind?</span></h2>
          <p className="icta-desc reveal d2">Tell us about it. Start with a free 15-minute call. We&apos;ll tell you honestly whether it&apos;s a fit, roughly what it takes, and where to start. No pitch, no obligation.</p>
          <a href={CAL} target="_blank" rel="noopener" className="btn-primary reveal d2">Book a Free 15-Min Demo</a>
          <div className="icta-bullets reveal d3">
            <span><i />Free scoping call</span>
            <span><i />Fixed per-project price</span>
            <span><i />You own what we build</span>
          </div>
          <div className="xlinks reveal d3">
            <Link href="/ai-employee" className="xlink"><span>🤖</span>Meet Janice</Link>
            <Link href="/ai-training" className="xlink"><span>🎓</span>AI Training</Link>
            <Link href="/industries" className="xlink"><span>🏙️</span>Industries</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
