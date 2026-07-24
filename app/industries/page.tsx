import type { Metadata } from "next"
import Link from "next/link"
import { UtensilsCrossed, Sparkles, Stethoscope, X, CheckCircle2, RotateCcw } from "lucide-react"
import SiteShell from "@/components/site/SiteShell"

const CAL = "https://cal.com/pacificedge"

export const metadata: Metadata = {
  title: { absolute: "AI for Restaurants, Salons & Dental | Pacific Edge AI" },
  description:
    "A deep dive into how Pacific Edge AI helps Vancouver restaurants, salons & spas, and dental clinics. The real problems in each industry and exactly what Janice, your AI employee, does about them.",
  alternates: { canonical: "/industries" },
}

export default function IndustriesPage() {
  return (
    <SiteShell>
      <header className="ihero">
        <div className="ihero-orb ihero-orb-1" />
        <div className="ihero-orb ihero-orb-2" />
        <div className="ihero-inner">
          <div className="eyebrow reveal"><span className="eyebrow-dot" />Industries We Serve · Vancouver, BC</div>
          <h1 className="reveal d1">Built Around How<br /><span className="a">Your Business Runs.</span></h1>
          <p className="ihero-sub reveal d2">Every industry books, cancels, and follows up differently. We map how yours works, then build an AI employee, Janice, to handle it. Below is what that looks like for restaurants, salons and spas, and dental clinics.</p>
          <div className="ihero-actions reveal d3">
            <a href={CAL} target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>
            <Link href="/ai-employee" className="btn-dark">Meet Janice</Link>
          </div>
          <div className="qnav reveal d4">
            <a href="#restaurants"><span style={{ color: "var(--accent-ink)" }} className="inline-flex items-center"><UtensilsCrossed size={15} strokeWidth={2} /></span>Restaurants</a>
            <a href="#salons"><span style={{ color: "var(--accent-ink)" }} className="inline-flex items-center"><Sparkles size={15} strokeWidth={2} /></span>Salons &amp; Spas</a>
            <a href="#dental"><span style={{ color: "var(--accent-ink)" }} className="inline-flex items-center"><Stethoscope size={15} strokeWidth={2} /></span>Dental</a>
          </div>
        </div>
      </header>

      <section className="dind" id="restaurants">
        <div className="wrap dind-row">
          <div className="dind-text reveal">
            <div className="dind-ico"><UtensilsCrossed size={24} strokeWidth={1.75} /></div>
            <div className="sl">Restaurants &amp; Food</div>
            <h2 className="st">Keep Tables <span className="a">Full.</span></h2>
            <p className="dind-lead">A missed call or a no-show is an empty table. Janice answers calls 24/7, books the reservation, and fills last-minute cancellations from your waitlist.</p>
            <div className="dind-build">
              <span className="dind-tag">Reservation text-line</span>
              <span className="dind-tag">Waitlist auto-fill</span>
              <span className="dind-tag">Review autopilot</span>
            </div>
          </div>
          <div className="dind-viz reveal d1">
            <div className="viz">
              <div className="viz-top"><b>Tonight&apos;s floor</b><span className="viz-live">Live</span></div>
              <div className="vt-grid"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
              <div className="viz-foot"><b>9/9</b> tables booked · no-shows refilled</div>
            </div>
          </div>
        </div>
      </section>

      <section className="dind" id="salons">
        <div className="wrap dind-row flip">
          <div className="dind-text reveal">
            <div className="dind-ico"><Sparkles size={24} strokeWidth={1.75} /></div>
            <div className="sl">Salons &amp; Spas</div>
            <h2 className="st">Keep Chairs <span className="a">Booked.</span></h2>
            <p className="dind-lead">A late cancellation leaves an empty chair. Janice fills it from your waitlist within minutes and rebooks clients before they leave.</p>
            <div className="dind-build">
              <span className="dind-tag">Booking text-line</span>
              <span className="dind-tag">Waitlist back-fill</span>
              <span className="dind-tag">Rebooking reminders</span>
            </div>
          </div>
          <div className="dind-viz reveal d1">
            <div className="viz">
              <div className="viz-top"><b>Chair 2 · 2:30 PM</b><span className="viz-live">Auto-fill</span></div>
              <div className="vf-slot">
                <div className="vf-state vf-open"><X size={14} strokeWidth={2.5} style={{ color: "var(--accent-ink)" }} />&nbsp; Cancelled, open chair</div>
                <div className="vf-state vf-filled"><span className="vf-av">RP</span><b>Riley P.</b><em><CheckCircle2 size={13} strokeWidth={2.5} /> filled in 4 min</em></div>
              </div>
              <div className="vf-wait"><span className="lbl">Waitlist</span><span className="vf-chip go">Riley P.</span><span className="vf-chip">Sam K.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="dind" id="dental">
        <div className="wrap dind-row">
          <div className="dind-text reveal">
            <div className="dind-ico"><Stethoscope size={24} strokeWidth={1.75} /></div>
            <div className="sl">Dental &amp; Health Clinics</div>
            <h2 className="st">Keep the Schedule <span className="a">Full.</span></h2>
            <p className="dind-lead">Recalls slip and hygiene chairs sit empty. Janice books new patients 24/7 and rebooks overdue recalls, so the schedule stays full.</p>
            <div className="dind-build">
              <span className="dind-tag">New-patient intake line</span>
              <span className="dind-tag">Recall automation</span>
              <span className="dind-tag">Reminders &amp; rebooking</span>
            </div>
          </div>
          <div className="dind-viz reveal d1">
            <div className="viz">
              <div className="viz-top"><b>This week · Hygiene</b><span className="viz-live">Filling</span></div>
              <div className="vcal-grid">
                <div className="vcal-col"><span className="d">M</span><i /><i /><i className="gap" /><i /></div>
                <div className="vcal-col"><span className="d">T</span><i /><i /><i /><i /></div>
                <div className="vcal-col"><span className="d">W</span><i /><i className="gap d2" /><i /><i /></div>
                <div className="vcal-col"><span className="d">T</span><i /><i /><i /><i /></div>
                <div className="vcal-col"><span className="d">F</span><i /><i /><i /><i /></div>
              </div>
              <div className="vcal-foot"><span className="rc"><RotateCcw size={13} strokeWidth={2.5} /> Recall sent</span> → <b>open slot filled</b></div>
            </div>
          </div>
        </div>
      </section>

      <div className="divhr" />

      <section className="dcta">
        <div className="wrap">
          <div className="dcta-box reveal">
            <div className="sl" style={{ justifyContent: "center", display: "flex" }}>Get Started</div>
            <h2 className="st reveal d1">Don&apos;t See Your Industry?<br /><span className="a">We Build For You Too.</span></h2>
            <p className="sd reveal d2">If your business runs on calls, bookings, or repeat customers, Janice can help. Book a free 15-minute call and we&apos;ll map out what she&apos;d do for your business.</p>
            <div className="ihero-actions reveal d3" style={{ justifyContent: "center", marginTop: "8px" }}>
              <a href={CAL} target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>
              <Link href="/ai-employee" className="btn-dark">Meet Janice</Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
