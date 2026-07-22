import type { Metadata } from "next"
import Link from "next/link"
import SiteShell from "@/components/site/SiteShell"
import DentalInteractive from "@/components/dental/DentalInteractive"
import "@/styles/dental.css"
import {
  DollarSign,
  BarChart3,
  Phone,
  PhoneCall,
  Calendar,
  Stethoscope,
  ClipboardList,
  Star,
  CalendarDays,
  Zap,
  Rocket,
  X,
  RotateCcw,
  CheckCircle2,
  Armchair,
  MessageCircle,
  CreditCard,
  Sprout,
  Globe,
  UtensilsCrossed,
  Sparkles,
  Moon,
  Clock,
} from "lucide-react"

const CAL = "https://cal.com/pacificedge"

const COMPARE = [
  { Ico: Moon, cat: "After-hours calls", before: "Sent to voicemail overnight", after: "Answered and booked, 24/7" },
  { Ico: Phone, cat: "New-patient calls", before: "Hits voicemail, they call the next clinic", after: "Texted back in 21s, exam booked" },
  { Ico: Calendar, cat: "Cancellations", before: "A chair sits empty for the day", after: "Refilled from your waitlist in minutes" },
  { Ico: Stethoscope, cat: "Recalls", before: "Patients quietly fall off the schedule", after: "Recall reminders rebook hygiene visits" },
  { Ico: Star, cat: "Reviews", before: "Great care, quiet online reputation", after: "Requested and drafted automatically" },
  { Ico: Clock, cat: "Front-desk time", before: "Hours on hold music and reminder calls", after: "Time back for the patients in the chair" },
]

export const metadata: Metadata = {
  title: { absolute: "AI for Vancouver Dental & Health Clinics | Pacific Edge AI" },
  description:
    "AI automation for Vancouver dental and health clinics. Answer every new-patient call, confirm appointments, book recalls, and cut no-shows. Privacy-first, no tech team needed. Free 15-min call.",
  alternates: { canonical: "/dental" },
}

export default function DentalPage() {
  return (
    <SiteShell>
      <DentalInteractive />
      <header className="ihero">
        <div className="ihero-orb ihero-orb-1" data-parallax="26" />
        <div className="ihero-orb ihero-orb-2" data-parallax="-40" />
        <div className="ihero-inner">
          <div className="eyebrow reveal">
            <span className="eyebrow-dot" />AI for Dental &amp; Health Clinics · Vancouver, BC
          </div>
          <h1 className="reveal d1">
            Fill The Schedule.<br />
            <span className="a">Reduce No-Shows.</span>
          </h1>
          <p className="ihero-sub reveal d2">
            Every new-patient call answered, every appointment confirmed, every recall booked. Custom
            AI built for dental offices, orthodontists, and health clinics across Greater Vancouver,
            from the front desk to follow-up.
          </p>
          <div className="ihero-pain reveal d3">
            How many new patients hung up last week because the front desk was already on another line?
          </div>
          <div className="ihero-actions reveal d4">
            <a href={CAL} target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>
            <a href="/dental-pricing.html" className="btn-dark"><DollarSign size={16} strokeWidth={2} /> See Pricing &amp; Plans</a>
          </div>
          <div className="dx-hero-sublinks reveal d4">
            <a href="/dental-savings-calculator.html"><BarChart3 size={16} strokeWidth={2} /> What cancellations cost you</a>
            <span className="dx-hero-dot" aria-hidden="true">·</span>
            <a href="#problems">See how it helps ↓</a>
          </div>
          <div className="ihero-stats reveal d5">
            <div className="ihero-stat"><b>25s</b><span>Answer a new-patient call</span></div>
            <div className="ihero-stat"><b>24/7</b><span>Always booking</span></div>
            <div className="ihero-stat"><b>1</b><span>Dashboard for it all</span></div>
          </div>
          <div className="ihero-trust reveal d5">
            Built for Vancouver dental, ortho &amp; health clinics · Privacy-first, no tech team required
          </div>
        </div>
      </header>

      <div className="divhr" />

      <section id="problems">
        <div className="wrap">
          <div className="sl reveal">The Problem</div>
          <h2 className="st reveal d1">Sound <span className="a">Familiar?</span></h2>
          <p className="sd reveal d2">If this is your front desk, your schedule has gaps that booked patients would happily fill.</p>
          <div className="prob-grid">
            <div className="prob reveal d1"><div className="prob-ico"><Phone size={22} strokeWidth={1.75} /></div><h3>New-patient calls hit voicemail</h3><p>The line is busy and a brand-new patient gets sent to voicemail. They do not leave a message, they call the clinic down the block.</p><div className="prob-cost">A new patient on voicemail calls the next clinic</div></div>
            <div className="prob reveal d2"><div className="prob-ico"><Calendar size={22} strokeWidth={1.75} /></div><h3>No-shows and late cancellations</h3><p>A patient forgets, the chair sits empty, and that block of clinical time is simply gone with no way to backfill it.</p><div className="prob-cost">An empty chair is wasted clinical time</div></div>
            <div className="prob reveal d3"><div className="prob-ico"><Stethoscope size={22} strokeWidth={1.75} /></div><h3>Recalls and hygiene reminders slip</h3><p>Patients due for a cleaning never get the nudge, so they quietly fall off the schedule and out of the practice.</p><div className="prob-cost">Patients overdue for a recall drift away</div></div>
            <div className="prob reveal d1"><div className="prob-ico"><PhoneCall size={22} strokeWidth={1.75} /></div><h3>The front desk is overwhelmed</h3><p>Your team is stuck on hold music and reminder calls instead of looking after the patients standing right in front of them.</p><div className="prob-cost">Your team is on the phone, not with patients</div></div>
            <div className="prob reveal d2"><div className="prob-ico"><ClipboardList size={22} strokeWidth={1.75} /></div><h3>Treatment plans go unbooked</h3><p>A patient agrees to follow-up treatment, then leaves without scheduling it, and there is no system to gently bring them back.</p><div className="prob-cost">Unbooked treatment is care left on the table</div></div>
            <div className="prob reveal d3"><div className="prob-ico"><Star size={22} strokeWidth={1.75} /></div><h3>Reviews don&apos;t match the care</h3><p>You deliver excellent care every day, but few of those happy patients are ever asked to leave a review online.</p><div className="prob-cost">Great care, quiet online reputation</div></div>
          </div>
        </div>
      </section>

      <div className="divhr" />

      <section id="difference">
        <div className="wrap">
          <div className="sl reveal">The Difference</div>
          <h2 className="st reveal d1">Before &amp; <span className="a">After.</span></h2>
          <p className="sd reveal d2">What a week at the front desk looks like before and after Janice, your AI employee, starts working in the background.</p>
          <div className="cmp reveal d2">
            <div className="cmp-row cmp-head">
              <div className="cmp-cell cmp-corner" />
              <div className="cmp-cell cmp-before">Without Pacific Edge AI</div>
              <div className="cmp-cell cmp-after"><span className="cmp-janice"><span className="cmp-jav">J</span><span className="cmp-jname">With Janice<span className="cmp-jsub">Your AI employee</span></span></span></div>
            </div>
            {COMPARE.map((row) => (
              <div className="cmp-row" key={row.cat}>
                <div className="cmp-cell cmp-cat"><span className="cmp-ico"><row.Ico size={16} strokeWidth={2} /></span>{row.cat}</div>
                <div className="cmp-cell cmp-before">
                  <span className="cmp-x"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg></span>
                  {row.before}
                </div>
                <div className="cmp-cell cmp-after">
                  <span className="cmp-check"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4 11-13" /></svg></span>
                  {row.after}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divhr" />

      <section id="practice-types">
        <div className="wrap">
          <div className="sl reveal sl-c tac" style={{ justifyContent: "center" }}>Who It&apos;s Built For</div>
          <h2 className="st reveal d1 tac">Built For Every Type Of <span className="a">Practice.</span></h2>
          <p className="sd reveal d2" style={{ textAlign: "center", margin: "0 auto" }}>From a single front desk to a multi-location group, Janice scales to exactly how your practice runs.</p>
          <div className="ptype-grid">
            <div className="ptype-card reveal d2">
              <div className="ptype-visual"><div className="ptype-phone"><div className="ptype-screen">
                <svg viewBox="0 0 120 158" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                  <rect width="120" height="158" fill="#f6f7f8" />
                  <g fill="rgba(74,240,192,.12)"><rect x="8" y="10" width="32" height="26" rx="4" /><rect x="80" y="96" width="32" height="44" rx="4" /><rect x="12" y="110" width="40" height="34" rx="4" /></g>
                  <g stroke="rgba(28,25,20,.09)" strokeWidth="2"><line x1="0" y1="48" x2="120" y2="48" /><line x1="0" y1="94" x2="120" y2="94" /><line x1="46" y1="0" x2="46" y2="158" /><line x1="86" y1="0" x2="86" y2="158" /></g>
                  <path d="M22 138 L46 94 L86 66 L102 30" fill="none" stroke="#0a9d76" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 7" opacity=".75" />
                  <g transform="translate(60,84)"><ellipse cx="0" cy="3" rx="7" ry="2.5" fill="rgba(28,25,20,.18)" /><path d="M0 0 C-3,-6 -11,-10 -11,-20 a11,11 0 1,1 22,0 C11,-10 3,-6 0,0 Z" fill="#0a9d76" /><circle cx="0" cy="-20" r="4.6" fill="#fff" /></g>
                </svg>
              </div></div></div>
              <h3 className="ptype-title">Single-Location Clinics</h3>
              <ul className="ptype-list"><li>Reduce front-desk stress</li><li>Capture every missed call</li><li>Handle after-hours &amp; overflow</li></ul>
              <Link href="/dental-single-location" className="btn-dark ptype-btn">See How It Works <span className="arr">→</span></Link>
            </div>
            <div className="ptype-card reveal d3">
              <div className="ptype-visual"><div className="ptype-phone"><div className="ptype-screen">
                <svg viewBox="0 0 120 158" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                  <rect width="120" height="158" fill="#f6f7f8" />
                  <g fill="rgba(74,240,192,.12)"><rect x="10" y="14" width="28" height="24" rx="4" /><rect x="82" y="20" width="28" height="28" rx="4" /><rect x="48" y="104" width="34" height="36" rx="4" /></g>
                  <g stroke="rgba(28,25,20,.09)" strokeWidth="2"><line x1="0" y1="58" x2="120" y2="58" /><line x1="0" y1="104" x2="120" y2="104" /><line x1="40" y1="0" x2="40" y2="158" /><line x1="84" y1="0" x2="84" y2="158" /></g>
                  <path d="M32 48 L90 44 M90 44 L64 120 M64 120 L32 48" fill="none" stroke="#0a9d76" strokeWidth="2" strokeDasharray="1 6" strokeLinecap="round" opacity=".6" />
                  <g fill="#0a9d76"><g transform="translate(32,50) scale(.78)"><path d="M0 0 C-3,-6 -11,-10 -11,-20 a11,11 0 1,1 22,0 C11,-10 3,-6 0,0 Z" /><circle cx="0" cy="-20" r="4.6" fill="#fff" /></g><g transform="translate(90,46) scale(.78)"><path d="M0 0 C-3,-6 -11,-10 -11,-20 a11,11 0 1,1 22,0 C11,-10 3,-6 0,0 Z" /><circle cx="0" cy="-20" r="4.6" fill="#fff" /></g><g transform="translate(64,122) scale(.92)"><path d="M0 0 C-3,-6 -11,-10 -11,-20 a11,11 0 1,1 22,0 C11,-10 3,-6 0,0 Z" /><circle cx="0" cy="-20" r="4.6" fill="#fff" /></g></g>
                </svg>
              </div></div></div>
              <h3 className="ptype-title">Multi-Location &amp; DSOs</h3>
              <ul className="ptype-list"><li>Standardize workflows across sites</li><li>Centralize reporting</li><li>Grow revenue at scale</li></ul>
              <Link href="/dental-multi-location" className="btn-dark ptype-btn">See How It Works <span className="arr">→</span></Link>
            </div>
          </div>
          <div className="reveal d4" style={{ textAlign: "center", marginTop: 34 }}><a href="/dental-savings-calculator.html" className="btn-dark"><BarChart3 size={16} strokeWidth={2} /> Estimate What Filling Them Is Worth <span className="arr">→</span></a></div>
        </div>
      </section>

      <div className="divhr" />

      <section className="dx-tiers dx-sec">
        <div className="dx-tiers-glow" aria-hidden="true" />
        <div className="wrap">
          <div className="sl reveal sl-c tac" style={{ justifyContent: "center" }}>How You Hire Her</div>
          <h2 className="st reveal d1 tac">Three Ways To Put <span className="a">Janice To Work.</span></h2>
          <p className="sd reveal d2" style={{ textAlign: "center", margin: "0 auto" }}>
            Start with the gaps that cost you the most, then scale up as she earns her keep. Flat-priced,
            month-to-month after your term, first month free.
          </p>
          <div className="dx-tier-grid">
            <article className="dx-tier reveal d1" data-tilt>
              <div className="dx-tier-shine" aria-hidden="true" />
              <span className="dx-tier-badge">PART-TIME</span>
              <div className="dx-tier-ico"><CalendarDays size={32} strokeWidth={1.5} /></div>
              <h3 className="dx-tier-title">Covers what you miss</h3>
              <p className="dx-tier-sub">Janice answers every text and refills every cancelled chair, around the clock.</p>
              <ul className="dx-tier-list">
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>24/7 text replies in your clinic&apos;s voice</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Unlimited cancellation recovery</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Appointment reminders &amp; confirmations</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Monthly ROI report</li>
              </ul>
              <div className="dx-tier-foot"><span className="dx-tier-from">FROM</span><span className="dx-tier-price">$749</span><span className="dx-tier-per">/mo</span></div>
            </article>

            <article className="dx-tier feat reveal d2" data-tilt>
              <span className="dx-tier-flag">MOST HIRED</span>
              <div className="dx-tier-shine" aria-hidden="true" />
              <span className="dx-tier-badge">FULL-TIME</span>
              <div className="dx-tier-ico"><Zap size={32} strokeWidth={1.5} /></div>
              <h3 className="dx-tier-title">Every channel, working ahead</h3>
              <p className="dx-tier-sub">She books straight into your schedule and keeps the whole book full, weeks out.</p>
              <ul className="dx-tier-list">
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Everything in Part-Time</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Books &amp; reschedules in your software</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Hygiene recalls &amp; treatment follow-up</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Patient portal, intake forms &amp; payments</li>
              </ul>
              <div className="dx-tier-foot"><span className="dx-tier-from">FROM</span><span className="dx-tier-price">$1,149</span><span className="dx-tier-per">/mo</span></div>
            </article>

            <article className="dx-tier reveal d3" data-tilt>
              <div className="dx-tier-shine" aria-hidden="true" />
              <span className="dx-tier-badge">PARTNER</span>
              <div className="dx-tier-ico"><Rocket size={32} strokeWidth={1.5} /></div>
              <h3 className="dx-tier-title">Fills chairs &amp; grows the book</h3>
              <p className="dx-tier-sub">Marketing muscle on top of the full front desk, for practices going on offence.</p>
              <ul className="dx-tier-list">
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Everything in Full-Time</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Reactivation &amp; referral campaigns</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Benefits-expiry &amp; win-back waves</li>
                <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Every add-on included + quarterly strategy</li>
              </ul>
              <div className="dx-tier-foot"><span className="dx-tier-from">FROM</span><span className="dx-tier-price">$1,999</span><span className="dx-tier-per">/mo</span></div>
            </article>
          </div>
          <div className="dx-tier-cta reveal d3">
            <a href="/dental-pricing.html" className="btn-mint">See Every Plan In Detail <span className="arr">→</span></a>
            <div className="dx-tier-note">Full feature-by-feature comparison · Priced in CAD + GST</div>
          </div>
        </div>
      </section>

      <div className="divhr" />

      <section id="what">
        <div className="wrap">
          <div className="sl reveal">What We Automate</div>
          <h2 className="st reveal d1">Built For A <span className="a">Full Chair.</span></h2>
          <p className="sd reveal d2">Empty chairs, no-shows, missed new-patient calls. We turn the gaps that waste clinical time into booked, confirmed visits.</p>
          <div className="frows">
            <div className="frow">
              <div className="frow-text reveal">
                <div className="sl">Auto-Fill Cancellations</div>
                <h3>Fill Every <span className="a">Cancelled Chair.</span></h3>
                <p>When a patient cancels or no-shows, that chair time is gone. Your AI offers the open slot to your waitlist the moment it frees up and rebooks it, while reminders keep no-shows low.</p>
                <ul className="frow-list">
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Cancellations offered to your waitlist instantly</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Rebooks the first patient to say yes</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Reminders that cut no-shows and late cancels</li>
                </ul>
              </div>
              <div className="frow-visual reveal d2">
                <div className="mock" data-live>
                  <div className="mock-head"><span className="mock-dot" /><span className="mock-title">Cancellation · Refilled</span></div>
                  <div className="mock-typing" data-typing="1300">Texting your waitlist<i /><i /><i /></div>
                  <div className="mock-row"><div className="mock-row-l"><div className="mock-avatar"><X size={15} strokeWidth={2} /></div><div><div className="mock-name">2:00 PM cancelled</div><div className="mock-sub">Offered to your waitlist</div></div></div><span className="mock-pill warn">Open</span></div>
                  <div className="mock-row"><div className="mock-row-l"><div className="mock-avatar"><RotateCcw size={15} strokeWidth={2} /></div><div><div className="mock-name">Rebooked in 12 min</div><div className="mock-sub">Filled from waitlist</div></div></div><span className="mock-pill ok">Refilled</span></div>
                </div>
              </div>
            </div>
            <div className="frow rev">
              <div className="frow-text reveal">
                <div className="sl">New-Patient Capture</div>
                <h3>Answer Every <span className="a">New-Patient Call.</span></h3>
                <p>When the front desk is tied up, your AI answers or texts the caller back in seconds, answers the basics, and books a first exam, so new patients never slip away.</p>
                <ul className="frow-list">
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Answers or texts back missed calls in seconds</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Confirms insurance basics and reason for visit</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Books the first exam into your schedule</li>
                </ul>
              </div>
              <div className="frow-visual reveal d2">
                <div className="mock" data-live>
                  <div className="mock-head"><span className="mock-dot" /><span className="mock-title">New Patient · Recovered</span></div>
                  <div className="mock-row"><div className="mock-row-l"><div className="mock-avatar"><Phone size={15} strokeWidth={2} /></div><div><div className="mock-name">+1 (604) 555-0173</div><div className="mock-sub">Missed at 9:12 AM</div></div></div><span className="mock-pill ok">Texted · 21s</span></div>
                  <div className="mock-row"><div className="mock-row-l"><div className="mock-avatar"><Stethoscope size={15} strokeWidth={2} /></div><div><div className="mock-name">New patient exam</div><div className="mock-sub">Tomorrow 10:40 AM</div></div></div><span className="mock-pill ok">Booked</span></div>
                </div>
              </div>
            </div>
            <div className="frow">
              <div className="frow-text reveal">
                <div className="sl">Confirmations &amp; Recalls</div>
                <h3>Recalls &amp; Reminders, <span className="a">On Autopilot.</span></h3>
                <p>Automatic confirmations cut no-shows, and recall reminders bring patients back for cleanings, all without your team picking up the phone.</p>
                <ul className="frow-list">
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Confirmation and reminder texts on autopilot</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Recall reminders that rebook hygiene visits</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Patients overdue for a cleaning, gently chased</li>
                </ul>
              </div>
              <div className="frow-visual reveal d2">
                <div className="mock" data-live>
                  <div className="mock-head"><span className="mock-dot" /><span className="mock-title">Tomorrow · 22 appointments</span></div>
                  <div className="mock-row"><div className="mock-row-l"><div className="mock-avatar"><CheckCircle2 size={15} strokeWidth={2} /></div><div><div className="mock-name">Hygiene · 11:00 AM</div><div className="mock-sub">Reminder confirmed</div></div></div><span className="mock-pill ok">Confirmed</span></div>
                  <div className="mock-row"><div className="mock-row-l"><div className="mock-avatar"><Stethoscope size={15} strokeWidth={2} /></div><div><div className="mock-name">Recall · 6 months due</div><div className="mock-sub">Reminder sent · rebooked</div></div></div><span className="mock-pill ok">Rebooked</span></div>
                </div>
              </div>
            </div>
            <div className="frow rev">
              <div className="frow-text reveal">
                <div className="sl">Treatment Follow-Up</div>
                <h3>Follow Up On <span className="a">Treatment Plans.</span></h3>
                <p>When a patient leaves without booking recommended treatment, your AI sends a gentle, professional reminder to schedule it, so accepted care does not get forgotten.</p>
                <ul className="frow-list">
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Gentle nudges to book recommended treatment</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Review requests sent to happy patients</li>
                  <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>You stay in control of anything sensitive</li>
                </ul>
              </div>
              <div className="frow-visual reveal d2">
                <div className="mock" data-live>
                  <div className="mock-head"><span className="mock-dot" /><span className="mock-title">Treatment · Follow-up</span></div>
                  <div className="mock-row"><div className="mock-row-l"><div className="mock-avatar"><ClipboardList size={15} strokeWidth={2} /></div><div><div className="mock-name">Crown · recommended</div><div className="mock-sub">Reminder sent · booked</div></div></div><span className="mock-pill ok">Booked</span></div>
                  <div className="mock-row"><div className="mock-row-l"><div className="mock-avatar"><Star size={15} strokeWidth={2} /></div><div><div className="mock-name">Patient since 2019</div><div className="mock-sub">Review request sent</div></div></div><span className="mock-pill ok">5-star</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divhr" />

      <section className="dx-cap-sec dx-sec">
        <div className="wrap">
          <div className="sl reveal sl-c tac" style={{ justifyContent: "center" }}>Everything She Handles</div>
          <h2 className="st reveal d1 tac">One Employee. <span className="a">The Whole Front Desk.</span></h2>
          <p className="sd reveal d2" style={{ textAlign: "center", margin: "0 auto" }}>
            From the first missed call to the follow-up that fills next month&apos;s schedule, Janice covers
            the work that keeps chairs full.
          </p>
          <div className="dx-cap-grid">
            <div className="dx-cap reveal d1"><span className="dx-cap-ico"><Armchair size={24} strokeWidth={1.75} /></span><h3>Fills cancelled chairs</h3><p>Best-fit patients are offered your open slot within minutes, unlimited.</p></div>
            <div className="dx-cap reveal d2"><span className="dx-cap-ico"><Phone size={24} strokeWidth={1.75} /></span><h3>Missed-call text-back <span className="dx-cap-soon">SOON</span></h3><p>Every unanswered call gets an instant text before they dial the next clinic.</p></div>
            <div className="dx-cap reveal d3"><span className="dx-cap-ico"><MessageCircle size={24} strokeWidth={1.75} /></span><h3>24/7 text replies</h3><p>Patients text your existing number; she books, reschedules and answers in seconds.</p></div>
            <div className="dx-cap reveal d4"><span className="dx-cap-ico"><Stethoscope size={24} strokeWidth={1.75} /></span><h3>New-patient capture</h3><p>First exams booked from callers who would have hit voicemail.</p></div>
            <div className="dx-cap reveal d1"><span className="dx-cap-ico"><RotateCcw size={24} strokeWidth={1.75} /></span><h3>Hygiene recalls</h3><p>Overdue patients get a nudge with a real open time that fits their routine.</p></div>
            <div className="dx-cap reveal d2"><span className="dx-cap-ico"><CheckCircle2 size={24} strokeWidth={1.75} /></span><h3>Reminders &amp; confirms</h3><p>One-tap confirm or reschedule, timed exactly the way you choose.</p></div>
            <div className="dx-cap reveal d3"><span className="dx-cap-ico"><ClipboardList size={24} strokeWidth={1.75} /></span><h3>Treatment follow-up</h3><p>Diagnosed-but-unbooked work gets a respectful nudge to get scheduled.</p></div>
            <div className="dx-cap reveal d4"><span className="dx-cap-ico"><Star size={24} strokeWidth={1.75} /></span><h3>Review engine</h3><p>Happy visits become Google reviews; unhappy ones route privately to you first.</p></div>
            <div className="dx-cap reveal d1"><span className="dx-cap-ico"><CreditCard size={24} strokeWidth={1.75} /></span><h3>Payment links <span className="dx-cap-soon">SOON</span></h3><p>Texts the balance after insurance, collected securely by Stripe.</p></div>
            <div className="dx-cap reveal d2"><span className="dx-cap-ico"><Sprout size={24} strokeWidth={1.75} /></span><h3>Reactivation</h3><p>Wins back patients gone 12+ months in respectful, well-timed waves.</p></div>
            <div className="dx-cap reveal d3"><span className="dx-cap-ico"><Globe size={24} strokeWidth={1.75} /></span><h3>Speaks 5 languages</h3><p>English, Mandarin, Cantonese, Punjabi &amp; Farsi, all included.</p></div>
            <div className="dx-cap reveal d4"><span className="dx-cap-ico"><BarChart3 size={24} strokeWidth={1.75} /></span><h3>Monthly ROI report</h3><p>Chairs refilled, no-shows down, production recovered, every single month.</p></div>
          </div>
        </div>
      </section>

      <div className="divhr" />

      <section id="example">
        <div className="wrap">
          <div className="show-grid">
            <div className="show-text">
              <div className="sl reveal">What It Looks Like</div>
              <h2 className="st reveal d1">A New Patient,<br /><span className="a">Booked.</span></h2>
              <p className="sd reveal d2">Here is a flow your patients would see. A new caller who would have hit voicemail becomes a booked exam instead.</p>
              <div className="show-steps">
                <div className="show-step reveal d2"><div className="show-step-n">1</div><div><h4>A new patient calls in</h4><p>The front desk is already on two lines. The call would normally roll to voicemail and be lost.</p></div></div>
                <div className="show-step reveal d3"><div className="show-step-n">2</div><div><h4>Your AI replies and books an exam</h4><p>It answers the basics, offers the first open exam time, and confirms the appointment, calmly and professionally.</p></div></div>
                <div className="show-step reveal d4"><div className="show-step-n">3</div><div><h4>It lands on your schedule</h4><p>The new patient appears in your system with reminders and intake already queued for your team.</p></div></div>
              </div>
            </div>
            <div className="phone-wrap reveal d2">
              <div className="phone">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <div className="phone-top">
                    <div className="phone-av"><Stethoscope size={16} strokeWidth={2} /></div>
                    <div><div className="phone-top-name">Cedar Dental</div><div className="phone-top-sub">AI desk · replies instantly</div></div>
                  </div>
                  <div className="chat" data-chat>
                    <div className="chat-time">Mon 9:12 AM · Missed call</div>
                    <div className="bubble them" data-delay="350">Hi, do you take new patients? I chipped a tooth and it&apos;s a bit sore.</div>
                    <div className="typing" data-typing="1200"><i /><i /><i /></div>
                    <div className="bubble me" data-delay="200">So sorry to hear that! Yes, we&apos;re welcoming new patients. We have an exam open tomorrow at 10:40 AM, want me to book it?<small>Auto-reply · 21s after the missed call</small></div>
                    <div className="bubble them" data-delay="900">Yes please, thank you</div>
                    <div className="typing" data-typing="1100"><i /><i /><i /></div>
                    <div className="bubble me" data-delay="200">Booked! Tomorrow 10:40 AM with Dr. Lee. I&apos;ll text your new-patient form and a reminder. Take care until then!</div>
                    <div className="chat-badge" data-delay="650"><span className="chat-badge-ico"><CheckCircle2 size={13} strokeWidth={2.5} /></span><span>New patient booked from a missed call. Intake and reminder already queued.</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divhr" />

      <section id="live">
        <div className="wrap">
          <div className="sig-grid">
            <div className="sig-text">
              <div className="sl reveal">Live, Right Now</div>
              <h2 className="st reveal d1">Recalls That <span className="a">Book Themselves.</span></h2>
              <p className="sd reveal d2">Janice quietly watches who is overdue and reaches out before they lapse, so your hygiene chairs stay full and patients never fall through the cracks.</p>
              <ul className="sig-list">
                <li className="reveal d2"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Overdue patients spotted automatically</li>
                <li className="reveal d3"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Recall texts sent in your practice&apos;s voice</li>
                <li className="reveal d4"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0a9d76" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>Hygiene chairs filled weeks ahead</li>
              </ul>
            </div>
            <div className="sig-visual reveal d2">
              <div className="sig-panel">
                <div className="sig-head"><span className="sig-live"><i />Recalls · This week</span></div>
                <div className="rec-top">
                  <div className="rec-ring"><svg viewBox="0 0 86 86"><circle className="rec-track" cx="43" cy="43" r="34" /><circle className="rec-prog" cx="43" cy="43" r="34" /></svg><span className="rec-ring-num">6/8</span></div>
                  <div className="rec-cap">Patients due for a recall, quietly rebooked before they lapse to another practice.</div>
                </div>
                <div className="rec-rows">
                  <div className="rec-row"><span className="ck">✓</span>Sarah G. · 6-mo cleaning<span className="pill">Rebooked</span></div>
                  <div className="rec-row"><span className="ck">✓</span>Marcus L. · check-up<span className="pill">Rebooked</span></div>
                  <div className="rec-row"><span className="ck">✓</span>Aanya P. · hygiene<span className="pill">Rebooked</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divhr" />

      <section className="dx-day-sec dx-sec">
        <div className="wrap">
          <div className="sl reveal sl-c tac" style={{ justifyContent: "center" }}>A Day At Your Front Desk</div>
          <h2 className="st reveal d1 tac">She Never <span className="a">Clocks Out.</span></h2>
          <p className="sd reveal d2" style={{ textAlign: "center", margin: "0 auto" }}>
            Here is a single day, handled, while your team looks after the patients in the chair.
          </p>
          <div className="dx-day-wrap">
            <div className="dx-day-line" aria-hidden="true" />
            <div className="dx-day-item reveal d1"><span className="dx-day-dot" /><div className="dx-day-time">7:42 AM</div><h3>An overnight text, already booked</h3><p>A patient who messaged at 11pm wakes up to a confirmed cleaning. Janice booked it while the office was dark.</p></div>
            <div className="dx-day-item reveal d1"><span className="dx-day-dot" /><div className="dx-day-time">9:12 AM</div><h3>A missed new-patient call, recovered</h3><p>The front desk is on two lines. Janice texts the caller back in 21 seconds and books a first exam for tomorrow.</p></div>
            <div className="dx-day-item warm reveal d2"><span className="dx-day-dot" /><div className="dx-day-time">11:30 AM</div><h3>A cancellation, refilled in 12 minutes</h3><p>A 2pm cancels. Janice offers the slot to your waitlist and rebooks the first patient to say yes.</p></div>
            <div className="dx-day-item reveal d2"><span className="dx-day-dot" /><div className="dx-day-time">2:15 PM</div><h3>Overdue patients, gently chased</h3><p>Six patients due for hygiene get a reminder with a time that fits their routine. Four rebook on the spot.</p></div>
            <div className="dx-day-item reveal d3"><span className="dx-day-dot" /><div className="dx-day-time">4:50 PM</div><h3>Accepted treatment, followed up</h3><p>A patient who left without booking a crown gets a warm reminder of what the dentist recommended, and schedules it.</p></div>
            <div className="dx-day-item warm reveal d3"><span className="dx-day-dot" /><div className="dx-day-time">6:30 PM</div><h3>After hours, still earning</h3><p>Today&apos;s happy patients are asked for a review; tomorrow&apos;s schedule is confirmed. You go home to a full book.</p></div>
          </div>
        </div>
      </section>

      <div className="divhr" />

      <div className="statband">
        <div className="stat-row">
          <div className="stat-cell reveal"><div className="stat-big"><span className="count" data-to="21">0</span><span className="u">s</span></div><div className="stat-lbl">Average answer to a new-patient call</div></div>
          <div className="stat-cell reveal d1"><div className="stat-big"><span className="count" data-to="95">0</span><span className="u">%</span></div><div className="stat-lbl">Of calls answered or texted back</div></div>
          <div className="stat-cell reveal d2"><div className="stat-big"><span className="count" data-to="30">0</span><span className="u">%</span></div><div className="stat-lbl">Fewer no-shows on average</div></div>
          <div className="stat-cell reveal d3"><div className="stat-big"><span className="count" data-to="20">0</span><span className="u">hrs</span></div><div className="stat-lbl">Front-desk hours saved weekly</div></div>
        </div>
        <p className="tac" style={{ margin: "30px auto 0", fontSize: 12, color: "var(--text3)", fontFamily: "var(--mono)", letterSpacing: ".5px" }}>Outcomes we design toward for Vancouver dental and health clinics</p>
      </div>

      <section>
        <div className="wrap">
          <div className="sl reveal">Live Dashboard</div>
          <h2 className="st reveal d1">Your Whole Front Desk, <span className="a">In One View.</span></h2>
          <p className="sd reveal d2">New-patient calls answered, no-shows prevented, recalls booked, treatment followed up. Click any tab to explore.</p>
          <div className="idash-wrap reveal d2">
            <iframe src="/dashboard-mock.html?ind=dental" className="idash-frame" id="idash" loading="lazy" title="Pacific Edge AI dashboard preview" scrolling="no" />
          </div>
        </div>
      </section>

      <div className="divhr" />

      <section id="faq">
        <div className="wrap">
          <div className="sl reveal sl-c tac">Questions</div>
          <h2 className="st reveal d1 tac">Clinic Owners <span className="a">Ask Us.</span></h2>
          <div className="faq-list">
            <details className="faq-item reveal"><summary>Is patient information kept private?<span className="faq-ico" /></summary><div className="faq-body">Privacy comes first. The AI handles scheduling and reminders without exposing sensitive health details, and you stay in control of anything that needs a human. We build to respect Canadian privacy expectations.</div></details>
            <details className="faq-item reveal"><summary>Will it sound robotic to my patients?<span className="faq-ico" /></summary><div className="faq-body">No. We train it on your clinic&apos;s tone so it feels calm and professional, like your own front desk. You approve the voice before it speaks to a patient.</div></details>
            <details className="faq-item reveal"><summary>Does it work with our practice management software?<span className="faq-ico" /></summary><div className="faq-body">Yes. It works alongside the phone number and scheduling tools your office already uses, so bookings and recalls land where your team already works.</div></details>
            <details className="faq-item reveal"><summary>How long until it is live?<span className="faq-ico" /></summary><div className="faq-body">Usually about a week from our first call. We set it up, your team tests it, and we fine-tune it before it ever speaks to a patient.</div></details>
            <details className="faq-item reveal"><summary>How much does it cost?<span className="faq-ico" /></summary><div className="faq-body">It depends on what you automate. The 15-minute discovery call is free, and we scope a flat-priced plan around your call volume and chair count.</div></details>
          </div>
        </div>
      </section>

      <section className="icta">
        <div className="ihero-inner" style={{ margin: "0 auto" }}>
          <div className="sl reveal sl-c" style={{ justifyContent: "center" }}>Get Started</div>
          <h2 className="icta-title reveal d1">Ready To Fill<br /><span className="a">Every Chair?</span></h2>
          <p className="icta-desc reveal d2">Start with a free 15-minute call. We will show you exactly which automations would keep your schedule full and your front desk free. No pitch, no obligation.</p>
          <a href={CAL} target="_blank" rel="noopener" className="btn-mint reveal d2">Book a Free 15-Min Demo</a>
          <div className="icta-bullets reveal d3">
            <span><i />Free discovery call</span>
            <span><i />Working prototype in about a week</span>
            <span><i />Vancouver-based</span>
          </div>
          <div className="xlinks reveal d3">
            <Link href="/restaurants" className="xlink"><span><UtensilsCrossed size={14} strokeWidth={2} /></span>Restaurants</Link>
            <Link href="/salons" className="xlink"><span><Sparkles size={14} strokeWidth={2} /></span>Salons &amp; Spas</Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
