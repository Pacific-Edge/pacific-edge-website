import type { Metadata } from "next"
import Link from "next/link"
import SiteShell from "@/components/site/SiteShell"
import TiltParallax from "@/components/site/TiltParallax"
import {
  Bot,
  Building,
  Building2,
  CalendarCheck,
  CalendarX,
  Check,
  Globe,
  HelpCircle,
  Home,
  Moon,
  PhoneMissed,
  RefreshCw,
  Star,
  Target,
  TrendingDown,
  Zap,
} from "lucide-react"
import "@/styles/pages.css"

const CAL = "https://cal.com/pacificedge"

export const metadata: Metadata = {
  title: { absolute: "AI for Real Estate: Agents, Brokerages & Developers | Pacific Edge AI" },
  description:
    "AI automation for Vancouver real estate. Answer every lead in seconds 24/7, qualify buyers, book showings, and nurture for months so no lead goes cold. Built for agents, brokerages, and property developers. Works with Follow Up Boss, kvCORE & more.",
  alternates: { canonical: "/real-estate" },
}

export default function RealEstatePage() {
  return (
    <SiteShell variant="minimal">
      <TiltParallax />
      <header className="ihero">
        <div className="ihero-orb ihero-orb-1" data-parallax="26" />
        <div className="ihero-orb ihero-orb-2" data-parallax="-40" />
        <div className="ihero-inner">
          <div className="eyebrow reveal"><span className="eyebrow-dot" />AI for Real Estate · Vancouver, BC</div>
          <h1 className="reveal d1">
            Never Lose A Lead<br />
            <span className="a">To A Slow Reply.</span>
          </h1>
          <p className="ihero-sub reveal d2">
            In real estate, the first agent to respond usually wins. Pacific Edge AI answers every call, text,
            and listing inquiry in seconds, 24/7. It qualifies the lead, books the showing, and keeps following up
            for months, so nothing slips through the cracks.
          </p>
          <div className="ihero-pain reveal d3">
            How many leads went cold last month because you were mid-showing when they called?
          </div>
          <div className="ihero-actions reveal d4">
            <a href={CAL} target="_blank" rel="noopener" className="btn-primary">Book a Free 15-Min Demo</a>
            <a href="#problems" className="btn-ghost">See How It Helps ↓</a>
          </div>
          <div className="ihero-stats reveal d5">
            <div className="ihero-stat"><b>18s</b><span>Answer a new lead</span></div>
            <div className="ihero-stat"><b>24/7</b><span>Always responding</span></div>
            <div className="ihero-stat"><b>1</b><span>Dashboard for it all</span></div>
          </div>
          <div className="ihero-trust reveal d5">
            For agents, brokerages &amp; property developers · Works with Follow Up Boss, kvCORE, HubSpot &amp; more
          </div>
        </div>
      </header>

      <div className="divhr" />

      {/* Problems */}
      <section id="problems">
        <div className="wrap">
          <div className="sl reveal">The Problem</div>
          <h2 className="st reveal d1">Sound <span className="a">Familiar?</span></h2>
          <p className="sd reveal d2">If this is your pipeline, you&apos;re losing deals you already paid to generate.</p>
          <div className="prob-grid">
            <div className="prob reveal d1"><div className="prob-ico"><PhoneMissed size={20} strokeWidth={1.8} style={{ color: "var(--accent2)" }} aria-hidden /></div><h3>Leads call while you&apos;re showing</h3><p>You can&apos;t answer with a client in front of you. By the time you call back, they&apos;ve already booked with someone else.</p><div className="prob-cost">The first agent to reply usually wins</div></div>
            <div className="prob reveal d2"><div className="prob-ico"><Moon size={20} strokeWidth={1.8} style={{ color: "var(--accent2)" }} aria-hidden /></div><h3>Inquiries land after hours</h3><p>Portal leads and texts come in at 9pm and on weekends, exactly when nobody&apos;s at a desk to answer them.</p><div className="prob-cost">Every hour cold cuts your odds of a reply</div></div>
            <div className="prob reveal d3"><div className="prob-ico"><HelpCircle size={20} strokeWidth={1.8} style={{ color: "var(--accent2)" }} aria-hidden /></div><h3>Tire-kickers eat your time</h3><p>Hours spent on leads who aren&apos;t pre-approved or serious, while the ready-to-move buyers sit waiting.</p><div className="prob-cost">Unqualified leads burn your best hours</div></div>
            <div className="prob reveal d1"><div className="prob-ico"><CalendarX size={20} strokeWidth={1.8} style={{ color: "var(--accent2)" }} aria-hidden /></div><h3>Showings get missed or no-showed</h3><p>Endless back-and-forth to book a viewing, then a no-show that blows up your whole afternoon.</p><div className="prob-cost">A no-show is a wasted trip and slot</div></div>
            <div className="prob reveal d2"><div className="prob-ico"><TrendingDown size={20} strokeWidth={1.8} style={{ color: "var(--accent2)" }} aria-hidden /></div><h3>Follow-up quietly falls off</h3><p>Most leads don&apos;t transact for months. Without steady follow-up they forget you and buy from whoever stayed in touch.</p><div className="prob-cost">Leads buy from whoever kept in touch</div></div>
            <div className="prob reveal d3"><div className="prob-ico"><Star size={20} strokeWidth={1.8} style={{ color: "var(--accent2)" }} aria-hidden /></div><h3>Great closings, few reviews</h3><p>You make clients happy all year, but rarely turn them into the online reviews and referrals that bring the next deal.</p><div className="prob-cost">Happy clients, quiet online reputation</div></div>
          </div>
        </div>
      </section>

      <div className="divhr" />

      {/* Audience split -> subpages */}
      <section id="who">
        <div className="wrap">
          <div className="sl reveal sl-c tac" style={{ justifyContent: "center" }}>Who It&apos;s Built For</div>
          <h2 className="st reveal d1 tac">Two Sides Of <span className="a">The Same Market.</span></h2>
          <p className="sd reveal d2" style={{ textAlign: "center", margin: "0 auto" }}>Whether you&apos;re listing homes or building them, the leak is the same: interest that isn&apos;t answered fast enough. Here&apos;s how we fix it for each.</p>
          <div className="px-split">
            <article className="px-aud feat reveal d1" data-tilt>
              <div className="px-aud-shine" aria-hidden="true" />
              <div className="px-aud-ico"><Home size={22} strokeWidth={1.8} style={{ color: "#4af0c0" }} aria-hidden /></div>
              <h3>Agents &amp; Brokerages</h3>
              <p>Be the first to reply, qualify while you work, and never let a lead go cold again.</p>
              <ul className="px-aud-list">
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Instant speed-to-lead on every inquiry</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Showings booked into your calendar</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Months-long nurture in your voice</li>
              </ul>
              <Link href="/real-estate-agents" className="btn-primary">For Agents &amp; Brokerages →</Link>
            </article>
            <article className="px-aud reveal d2" data-tilt>
              <div className="px-aud-shine" aria-hidden="true" />
              <div className="px-aud-ico"><Building2 size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></div>
              <h3>Property Developers</h3>
              <p>Capture every pre-sale registration and keep buyers and investors warm from launch to close.</p>
              <ul className="px-aud-list">
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Pre-sale &amp; registration capture 24/7</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Waitlist &amp; investor comms at scale</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Sales-centre overflow, handled</li>
              </ul>
              <Link href="/real-estate-developers" className="btn-ghost">For Property Developers →</Link>
            </article>
          </div>
        </div>
      </section>

      <div className="divhr" />

      {/* Capabilities */}
      <section id="what">
        <div className="wrap">
          <div className="sl reveal sl-c tac" style={{ justifyContent: "center" }}>What We Automate</div>
          <h2 className="st reveal d1 tac">Your Front Desk, <span className="a">Faster Than Any Rival.</span></h2>
          <p className="sd reveal d2" style={{ textAlign: "center", margin: "0 auto" }}>Every lead answered, qualified, booked, and followed up, without you touching your phone during a showing.</p>
          <div className="px-grid tilt">
            <article className="px-card reveal d1" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico"><Zap size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><h3>Instant speed-to-lead</h3><p>Every call, text, and portal inquiry gets a reply in seconds, so you&apos;re the first agent they hear back from.</p></article>
            <article className="px-card reveal d2" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico"><Globe size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><h3>24/7 inquiry answering</h3><p>After hours, weekends, mid-showing. Janice answers listing questions and captures the lead every time.</p></article>
            <article className="px-card reveal d3" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico"><Target size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><h3>Lead qualification</h3><p>She asks about budget, timeline, pre-approval, and area, then flags the serious buyers for you.</p></article>
            <article className="px-card reveal d1" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico"><CalendarCheck size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><h3>Showing scheduling</h3><p>Books viewings straight into your calendar and sends reminders that cut no-shows.</p></article>
            <article className="px-card reveal d2" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico"><RefreshCw size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><h3>Long-term nurture</h3><p>Months-long, in-your-voice follow-up so leads remember you when they&apos;re finally ready to move.</p></article>
            <article className="px-card reveal d3" data-tilt><div className="px-card-shine" aria-hidden="true" /><span className="px-card-ico"><Star size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><h3>Reviews &amp; referrals</h3><p>Turns happy closings into Google reviews and warm referral intros, automatically.</p></article>
          </div>
          <div className="px-tags reveal d3" style={{ justifyContent: "center" }}>
            <span className="px-tag">Follow Up Boss</span>
            <span className="px-tag">kvCORE</span>
            <span className="px-tag">BoomTown</span>
            <span className="px-tag">Lofty</span>
            <span className="px-tag">HubSpot</span>
            <span className="px-tag">Salesforce</span>
          </div>
        </div>
      </section>

      <div className="divhr" />

      {/* Live example chat */}
      <section id="example">
        <div className="wrap">
          <div className="show-grid">
            <div className="show-text">
              <div className="sl reveal">What It Looks Like</div>
              <h2 className="st reveal d1">A 9PM Lead,<br /><span className="a">Booked.</span></h2>
              <p className="sd reveal d2">A buyer texts about a listing on a Saturday night. Instead of sitting in your inbox until Monday, it becomes a qualified, booked showing.</p>
              <div className="show-steps">
                <div className="show-step reveal d2"><div className="show-step-n">1</div><div><h4>A lead comes in after hours</h4><p>A portal inquiry or text lands at 9:42 PM. Normally it waits until morning, by which point they&apos;ve messaged three other agents.</p></div></div>
                <div className="show-step reveal d3"><div className="show-step-n">2</div><div><h4>Janice replies and qualifies</h4><p>She answers the listing question, checks budget and pre-approval, and offers real showing times, in seconds.</p></div></div>
                <div className="show-step reveal d4"><div className="show-step-n">3</div><div><h4>It lands on your calendar</h4><p>The showing is booked with reminders, and the qualified lead is logged in your CRM, ready for you.</p></div></div>
              </div>
            </div>
            <div className="phone-wrap reveal d2">
              <div className="phone">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <div className="phone-top">
                    <div className="phone-av"><Home size={16} strokeWidth={1.8} style={{ color: "#fff" }} aria-hidden /></div>
                    <div><div className="phone-top-name">Coastline Realty</div><div className="phone-top-sub">AI desk · replies instantly</div></div>
                  </div>
                  <div className="chat" data-chat>
                    <div className="chat-time">Sat 9:42 PM · New lead from listing</div>
                    <div className="bubble them" data-delay="350">Hi, is the 2-bed on Cambie still available? Could I see it this weekend?</div>
                    <div className="typing" data-typing="1200"><i /><i /><i /></div>
                    <div className="bubble me" data-delay="200">Hi! Yes, it&apos;s still available. Happy to book you a viewing. Are you pre-approved, and is this to live in or an investment?<small>Auto-reply · 18s after the inquiry</small></div>
                    <div className="bubble them" data-delay="900">Pre-approved up to 750k, to live in. Sunday works</div>
                    <div className="typing" data-typing="1100"><i /><i /><i /></div>
                    <div className="bubble me" data-delay="200">Perfect. I have Sunday 1:00 PM open with Alex. Booked! You&apos;ll get a reminder and the address shortly. Anything you&apos;d like Alex to prep?</div>
                    <div className="chat-badge" data-delay="650"><span className="chat-badge-ico"><Check size={14} strokeWidth={1.8} style={{ color: "#4af0c0" }} aria-hidden /></span><span>Qualified lead booked for a showing at 9:42 PM on a Saturday. Alex just had to show up.</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insight band + stats */}
      <div className="statband">
        <div className="wrap">
          <div className="px-band reveal">
            <div className="px-band-q">Most online leads go to <span className="a">whoever answers first.</span></div>
            <p>Firms that contact a new lead within the hour are about <b>7&times;</b> more likely to qualify it than those who wait even 60 minutes longer, and 60&times; more likely than those who wait a day. Speed isn&apos;t a nice-to-have. It&apos;s the whole game.</p>
          </div>
          <div className="px-stats reveal d1">
            <div className="px-stat"><b>7<span className="u">&times;</span></b><span>more likely to qualify a lead answered within the hour*</span></div>
            <div className="px-stat"><b>24/7</b><span>every call, text &amp; form answered instantly</span></div>
            <div className="px-stat"><b>5<span className="u">min</span></b><span>the window that decides who wins the deal**</span></div>
            <div className="px-stat"><b>0</b><span>leads left sitting in an inbox overnight</span></div>
          </div>
          <p className="tac" style={{ margin: "26px auto 0", fontSize: 12, color: "var(--text3)", fontFamily: "var(--mono)", letterSpacing: ".5px", maxWidth: 720 }}>* Harvard Business Review, &ldquo;The Short Life of Online Sales Leads.&rdquo; ** Lead Response Management study.</p>
        </div>
      </div>

      <div className="divhr" />

      {/* FAQ */}
      <section id="faq">
        <div className="wrap">
          <div className="sl reveal sl-c tac">Questions</div>
          <h2 className="st reveal d1 tac">Agents &amp; Developers <span className="a">Ask Us.</span></h2>
          <div className="faq-list">
            <details className="faq-item reveal"><summary>Will leads know they&apos;re texting an AI?<span className="faq-ico" /></summary><div className="faq-body">It replies in your brokerage&apos;s voice and handles the routine questions instantly. Anything sensitive or complex is handed straight to you, so it always feels like your team.</div></details>
            <details className="faq-item reveal"><summary>Does it work with my CRM and lead sources?<span className="faq-ico" /></summary><div className="faq-body">Yes. Janice works with the tools you already use, like Follow Up Boss, kvCORE, BoomTown, Lofty, HubSpot and Salesforce, and captures leads from your calls, texts, and portal inquiries.</div></details>
            <details className="faq-item reveal"><summary>Can it actually book showings?<span className="faq-ico" /></summary><div className="faq-body">Yes. It offers real times from your calendar, books the viewing, and sends reminders to cut no-shows. You stay in control of your availability.</div></details>
            <details className="faq-item reveal"><summary>What about long-term leads who aren&apos;t ready yet?<span className="faq-ico" /></summary><div className="faq-body">That&apos;s where most agents lose deals. Janice runs steady, in-your-voice follow-up for months, so when a lead is finally ready, you&apos;re the agent they remember.</div></details>
            <details className="faq-item reveal"><summary>How long until it&apos;s live?<span className="faq-ico" /></summary><div className="faq-body">Usually about a week from our first call. We set it up, you test it on a few leads, and we fine-tune the voice before it ever touches a real client.</div></details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="icta">
        <div className="ihero-inner" style={{ margin: "0 auto" }}>
          <div className="sl reveal sl-c" style={{ justifyContent: "center" }}>Get Started</div>
          <h2 className="icta-title reveal d1">Ready To Be First<br /><span className="a">Every Time?</span></h2>
          <p className="icta-desc reveal d2">Start with a free 15-minute call. We&apos;ll show you exactly how to answer every lead in seconds and stop losing deals to a slow reply. No pitch, no obligation.</p>
          <a href={CAL} target="_blank" rel="noopener" className="btn-primary reveal d2">Book a Free 15-Min Demo</a>
          <div className="icta-bullets reveal d3">
            <span><i />Free discovery call</span>
            <span><i />Live in about a week</span>
            <span><i />Vancouver-based</span>
          </div>
          <div className="xlinks reveal d3">
            <Link href="/real-estate-agents" className="xlink"><span><Home size={14} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span>For Agents</Link>
            <Link href="/real-estate-developers" className="xlink"><span><Building2 size={14} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span>For Developers</Link>
            <Link href="/ai-employee" className="xlink"><span><Bot size={14} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span>Meet Janice</Link>
            <Link href="/industries" className="xlink"><span><Building size={14} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span>All Industries</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
