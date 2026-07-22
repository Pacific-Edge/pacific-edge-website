import type { Metadata } from "next"
import Link from "next/link"
import { Bot, Building2, Lock, Stethoscope, Target, UtensilsCrossed, Zap } from "lucide-react"
import SiteShell from "@/components/site/SiteShell"
import RoiCalculator from "@/components/calculator/RoiCalculator"
import "@/styles/calculator.css"

const CAL = "https://cal.com/pacificedge"

export const metadata: Metadata = {
  title: { absolute: "ROI Calculator | See What Missed Calls Cost You | Pacific Edge AI" },
  description:
    "Answer a few quick questions about your business and see, in real dollars, what Janice could recover from missed calls, no-shows, and unanswered messages. Free, tailored to your industry.",
  alternates: { canonical: "/roi-calculator" },
}

export default function Page() {
  return (
    <SiteShell variant="minimal">
      <header className="ihero">
        <div className="ihero-orb ihero-orb-1" />
        <div className="ihero-orb ihero-orb-2" />
        <div className="ihero-inner">
          <div className="eyebrow reveal"><span className="eyebrow-dot" />ROI Calculator · Vancouver, BC</div>
          <h1 className="reveal d1">
            See What You&apos;re<br /><span className="a">Leaving On The Table.</span>
          </h1>
          <p className="ihero-sub reveal d2">
            Every missed call, no-show, and unanswered message is revenue walking out the door. Answer a
            few quick questions and we&apos;ll show you, in real dollars, what Janice could recover, tailored
            to how your business actually runs.
          </p>
          <div className="cr-chips reveal d5">
            <div className="cr-chip"><span><Zap size={14} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span>Takes 60 seconds</div>
            <div className="cr-chip"><span><Target size={14} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span>Tailored to your industry</div>
            <div className="cr-chip"><span><Lock size={14} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span>No pressure, no pitch</div>
          </div>
        </div>
      </header>

      <div className="divhr" />

      <section id="calculator">
        <div className="wrap">
          <RoiCalculator id="roi" />
        </div>
      </section>

      <section id="how">
        <div className="wrap">
          <div className="sl reveal sl-c tac">How The Estimate Works</div>
          <h2 className="st reveal d1 tac">Grounded In <span className="a">Your Numbers.</span></h2>
          <p className="sd reveal d2 tac" style={{ margin: "0 auto" }}>No magic multipliers. We use the values you give us and industry-typical recovery rates, then show the math so you can pressure-test every line.</p>
          <div className="icards">
            <div className="icard reveal d1"><div className="icard-num">01</div><h3>You describe your week</h3><p>Your industry, average value, and how many calls or messages slip through in a typical week. Rough numbers are fine.</p><span className="tag">Inputs</span></div>
            <div className="icard reveal d2"><div className="icard-num">02</div><h3>We apply a realistic recovery rate</h3><p>Janice never catches 100%. You control the recapture rate and margin, so the estimate stays honest and yours.</p><span className="tag">Method</span></div>
            <div className="icard reveal d3"><div className="icard-num">03</div><h3>You see the dollars, live</h3><p>Monthly and yearly revenue recovered, items won back, and profit, all updating as you adjust the sliders.</p><span className="tag">Output</span></div>
          </div>
        </div>
      </section>

      <section className="icta">
        <div className="ihero-inner" style={{ margin: "0 auto" }}>
          <div className="sl reveal sl-c" style={{ justifyContent: "center" }}>Get Started</div>
          <h2 className="icta-title reveal d1">Like The Numbers?<br /><span className="a">Let&apos;s Make Them Real.</span></h2>
          <p className="icta-desc reveal d2">On a free 15-minute call we&apos;ll pressure-test this estimate against your real call volume and show you exactly how Janice would recover it.</p>
          <a href={CAL} target="_blank" rel="noopener" className="btn-primary reveal d2">Book a Free 15-Min Demo</a>
          <div className="xlinks reveal d3">
            <Link href="/restaurants" className="xlink"><span><UtensilsCrossed size={14} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span>Restaurants</Link>
            <Link href="/dental" className="xlink"><span><Stethoscope size={14} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span>Dental</Link>
            <Link href="/ai-employee" className="xlink"><span><Bot size={14} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span>Meet Janice</Link>
            <Link href="/industries" className="xlink"><span><Building2 size={14} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span>All industries</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
