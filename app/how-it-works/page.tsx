import type { Metadata } from "next"
import { Phone, Star, MessageSquare, Clock, DollarSign, Zap } from "lucide-react"
import SiteShell from "@/components/site/SiteShell"

export const metadata: Metadata = {
  title: { absolute: "How It Works | Pacific Edge AI" },
  description:
    "From a 15-minute discovery call to a working prototype in your first week. Here's how Pacific Edge AI builds and deploys AI workflows for your Vancouver business.",
  alternates: { canonical: "/how-it-works" },
}

const STEPS = [
  { h: "Discovery Call", p: "15 minutes. We learn about your business, find where time and money are being lost, and identify the highest-impact automations. There's no sales pitch." },
  { h: "Deep-Dive Session", p: "A focused 60-minute session where we map your workflow, find the bottlenecks costing you the most time and money, and determine which automations to build first." },
  { h: "Custom Build", p: "We design and build your AI workflows. Within the first week you see a working prototype: real software, not a slide deck." },
  { h: "Launch & Train", p: "We deploy everything, walk your team through it in plain English, and confirm you're comfortable using it before we step back." },
  { h: "Optimize & Support", p: "Ongoing monitoring and adjustments. As your business grows, we scale your automations with it." },
]

const DASH_ROWS = [
  { Icon: Phone, label: "Missed call response", after: "INSTANT" },
  { Icon: Star, label: "Review response rate", after: "~100%" },
  { Icon: MessageSquare, label: "Customer follow-ups", after: "AUTO" },
  { Icon: Clock, label: "Admin hours / week", after: "~5 HRS" },
  { Icon: DollarSign, label: "Revenue leaking", after: "CAPTURED" },
  { Icon: Zap, label: "Growth bottleneck", after: "SOLVED" },
]

export default function HowItWorksPage() {
  return (
    <SiteShell>
      <header className="ihero">
        <div className="ihero-orb ihero-orb-1"></div>
        <div className="ihero-orb ihero-orb-2"></div>
        <div className="ihero-inner">
          <div className="eyebrow reveal"><span className="eyebrow-dot"></span>How It Works</div>
          <h1 className="reveal d1">Simple Process,<br /><span className="a">Powerful</span> Results</h1>
          <p className="ihero-sub reveal d2">Clear terms, no technical jargon. Here&apos;s how we build your AI workflows, starting with a working prototype in your first week.</p>
        </div>
      </header>

      <div className="divhr" />

      <section id="process">
        <div className="process-wrapper">
          <div className="steps-tl">
            {STEPS.map((s, i) => (
              <div className={`step r rd${i + 1}`} key={s.h}>
                <div className="step-circle">{i + 1}</div>
                <div className="step-body"><h3>{s.h}</h3><p>{s.p}</p></div>
              </div>
            ))}
          </div>
          <div className="process-dash r rd2">
            <div className="pd-top">
              <div className="pd-status"><span className="pd-status-dot" />Live Dashboard Preview</div>
              <div className="pd-progress">
                <div className="pd-progress-label"><span className="pd-before-label">Before</span><span className="pd-after-label lit">After</span></div>
                <div className="pd-progress-bar"><div className="pd-progress-fill" style={{ width: "100%" }} /></div>
              </div>
            </div>
            <div className="pd-body">
              {DASH_ROWS.map((row) => (
                <div className="pd-row" key={row.label}>
                  <div className="pd-row-label"><div className="pd-row-icon"><row.Icon size={15} strokeWidth={2} /></div>{row.label}</div>
                  <span className="pd-row-val after">{row.after}</span>
                </div>
              ))}
            </div>
            <div className="pd-footer">
              <div className="pd-footer-stat"><div className="pd-footer-num">6</div><div className="pd-footer-label">Workflows automated</div></div>
              <div className="pd-footer-stat"><div className="pd-footer-num">24/7</div><div className="pd-footer-label">Always running</div></div>
              <div className="pd-footer-stat"><div className="pd-footer-num">W1</div><div className="pd-footer-label">First results</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="icta">
        <div className="ihero-inner" style={{ margin: "0 auto" }}>
          <div className="sl reveal sl-c" style={{ justifyContent: "center" }}>No-Risk Start</div>
          <h2 className="icta-title reveal d1">One Month<br /><span className="a">On Us.</span></h2>
          <p className="icta-desc reveal d2">Start with a free 15-minute discovery call. If Janice isn&apos;t the right fit after your first month, you can walk away with no obligation.</p>
          <a href="https://cal.com/pacificedge" target="_blank" rel="noopener" className="btn-mint reveal d2">Book a Free 15-Min Demo</a>
        </div>
      </section>
    </SiteShell>
  )
}
