import type { Metadata } from "next"
import { Phone, Star, MessageSquare, Clock, DollarSign, Zap } from "lucide-react"
import SiteShell from "@/components/site/SiteShell"

export const metadata: Metadata = {
  title: { absolute: "How It Works | Pacific Edge AI" },
  description:
    "From a 15-minute discovery call to a working prototype in week one. Here's exactly how Pacific Edge AI gets your Vancouver business running smarter, in days, not months.",
  alternates: { canonical: "/how-it-works" },
}

const STEPS = [
  { h: "Discovery Call", p: "15 minutes. We learn about your business, find where you're bleeding time and money, and identify the highest-impact automations. No sales pitch - just clarity." },
  { h: "Deep-Dive Session", p: "A focused 60-minute session where we map out your entire workflow, pinpoint the bottlenecks costing you the most time and money, and identify exactly which automations will move the needle for your business." },
  { h: "Custom Build", p: "We design and build your AI workflows using battle-tested tools. You see a working prototype within the first week - not a slide deck, real software." },
  { h: "Launch & Train", p: "We deploy everything, walk your team through it in plain English, and make sure you're comfortable before we step back. No orphaned systems." },
  { h: "Optimize & Support", p: "Ongoing monitoring and tweaking. As your business grows, we scale your automations with you. You focus on running the business - we keep the systems humming." },
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
    <SiteShell variant="minimal">
      <header className="ihero">
        <div className="ihero-orb ihero-orb-1"></div>
        <div className="ihero-orb ihero-orb-2"></div>
        <div className="ihero-inner">
          <div className="eyebrow reveal"><span className="eyebrow-dot"></span>How It Works</div>
          <h1 className="reveal d1">Simple Process,<br /><span className="a">Powerful</span> Results</h1>
          <p className="ihero-sub reveal d2">Transparent terms, no confusing tech talk. Here&apos;s how we get your business running smarter in days, not months.</p>
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
          <p className="icta-desc reveal d2">Start with a free 15-minute discovery call. If Janice isn&apos;t the right fit after your first month, walk away. No strings.</p>
          <a href="https://cal.com/pacificedge" target="_blank" rel="noopener" className="btn-mint reveal d2">Book a Free 15-Min Demo</a>
        </div>
      </section>
    </SiteShell>
  )
}
