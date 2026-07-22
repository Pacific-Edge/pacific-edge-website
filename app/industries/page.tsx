import type { Metadata } from "next"
import Link from "next/link"
import {
  Bell,
  Check,
  Footprints,
  Home,
  MessageSquare,
  Moon,
  PhoneMissed,
  Scissors,
  ShoppingBag,
  Stethoscope,
  UtensilsCrossed,
  Wrench,
  X,
} from "lucide-react"
import SiteShell from "@/components/site/SiteShell"

const CAL = "https://cal.com/pacificedge"

export const metadata: Metadata = {
  title: { absolute: "AI for Restaurants, Salons, Trades, Retail & Dental | Pacific Edge AI" },
  description:
    "A deep dive into how Pacific Edge AI helps Vancouver restaurants, salons & spas, trades & home services, retail shops, and dental clinics. The real problems in each industry and exactly what Janice, your AI employee, does about them.",
  alternates: { canonical: "/industries" },
}

export default function IndustriesPage() {
  return (
    <SiteShell variant="minimal">
      <header className="ihero">
        <div className="ihero-orb ihero-orb-1" />
        <div className="ihero-orb ihero-orb-2" />
        <div className="ihero-inner">
          <div className="eyebrow reveal"><span className="eyebrow-dot" />Every Industry We Serve · Vancouver, BC</div>
          <h1 className="reveal d1">Built Around How<br /><span className="a">You Actually Work.</span></h1>
          <p className="ihero-sub reveal d2">We don&apos;t sell one-size-fits-all software. We map the way your business actually runs, the calls, the bookings, the cancellations, the follow-ups, then build an AI employee, Janice, that quietly handles it. Here&apos;s exactly what that looks like in your world.</p>
          <div className="ihero-actions reveal d3">
            <a href={CAL} target="_blank" rel="noopener" className="btn-primary">Book a Free 15-Min Demo</a>
            <Link href="/ai-employee" className="btn-ghost">Meet Janice</Link>
          </div>
          <div className="qnav reveal d4">
            <a href="#restaurants"><UtensilsCrossed size={14} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden />Restaurants</a>
            <a href="#salons"><Scissors size={14} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden />Salons &amp; Spas</a>
            <a href="#trades"><Wrench size={14} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden />Trades</a>
            <a href="#retail"><ShoppingBag size={14} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden />Retail</a>
            <a href="#dental"><Stethoscope size={14} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden />Dental</a>
            <a href="#real-estate"><Home size={14} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden />Real Estate</a>
          </div>
        </div>
      </header>

      <section className="dind" id="restaurants">
        <div className="wrap dind-row">
          <div className="dind-text reveal">
            <div className="dind-ico"><UtensilsCrossed size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></div>
            <div className="sl">Restaurants &amp; Food</div>
            <h2 className="st">Keep Every Table <span className="a">Full.</span></h2>
            <p className="dind-lead">Every missed call and no-show is an empty table. Janice answers 24/7, books the reservation, and refills last-minute cancellations from your waitlist, automatically.</p>
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
            <div className="dind-ico"><Scissors size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></div>
            <div className="sl">Salons &amp; Spas</div>
            <h2 className="st">Every Chair, <span className="a">Booked Solid.</span></h2>
            <p className="dind-lead">A late cancellation is an empty chair and a lost afternoon. Janice fills it from your waitlist within minutes, and rebooks clients before they leave the chair.</p>
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
                <div className="vf-state vf-open"><X size={13} strokeWidth={2.4} aria-hidden />Cancelled, open chair</div>
                <div className="vf-state vf-filled"><span className="vf-av">RP</span><b>Riley P.</b><em>filled in 4 min</em></div>
              </div>
              <div className="vf-wait"><span className="lbl">Waitlist</span><span className="vf-chip go">Riley P.</span><span className="vf-chip">Sam K.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="dind" id="trades">
        <div className="wrap dind-row">
          <div className="dind-text reveal">
            <div className="dind-ico"><Wrench size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></div>
            <div className="sl">Trades &amp; Home Services</div>
            <h2 className="st">Win The Job, <span className="a">Even On A Ladder.</span></h2>
            <p className="dind-lead">When your hands are full, the call goes to the next guy. Janice texts every missed call back in seconds and books the job before they dial the competition.</p>
            <div className="dind-build">
              <span className="dind-tag">Missed-call text-back</span>
              <span className="dind-tag">Quote follow-up</span>
              <span className="dind-tag">Job booking &amp; reminders</span>
            </div>
          </div>
          <div className="dind-viz reveal d1">
            <div className="viz viz-call">
              <div className="vc-flow">
                <div className="vc-row miss"><span className="vc-ic"><PhoneMissed size={16} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><div><b>Missed call</b><em>9:42 PM · from the jobsite</em></div><span className="vc-meta">missed</span></div>
                <div className="vc-row text"><span className="vc-ic"><MessageSquare size={16} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><div><b>“Sorry we missed you, can I book you in?”</b><em>auto-texted back</em></div><span className="vc-meta">18s</span></div>
                <div className="vc-row won"><Check size={14} strokeWidth={2.6} aria-hidden />Job booked, before the competition called back</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dind" id="retail">
        <div className="wrap dind-row flip">
          <div className="dind-text reveal">
            <div className="dind-ico"><ShoppingBag size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></div>
            <div className="sl">Retail &amp; Local Shops</div>
            <h2 className="st">Turn Browsers Into <span className="a">Regulars.</span></h2>
            <p className="dind-lead">Sold-out items and one-time buyers cost you. Janice answers stock questions instantly and texts customers the moment their size is back, so they come back too.</p>
            <div className="dind-build">
              <span className="dind-tag">Instant Q&amp;A line</span>
              <span className="dind-tag">Back-in-stock alerts</span>
              <span className="dind-tag">Repeat-customer follow-up</span>
            </div>
          </div>
          <div className="dind-viz reveal d1">
            <div className="viz">
              <div className="vs-prod"><span className="vs-img"><Footprints size={20} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><div><b>Trail Runner</b><em>Size 9</em></div></div>
              <div className="vs-status">
                <div className="vs-state vs-out"><X size={13} strokeWidth={2.4} aria-hidden />Sold out</div>
                <div className="vs-state vs-back"><span className="bell"><Bell size={14} strokeWidth={2} aria-hidden /></span> Back in your size!</div>
              </div>
              <div className="vs-sold">Sold, to a returning customer</div>
            </div>
          </div>
        </div>
      </section>

      <section className="dind" id="dental">
        <div className="wrap dind-row">
          <div className="dind-text reveal">
            <div className="dind-ico"><Stethoscope size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></div>
            <div className="sl">Dental &amp; Health Clinics</div>
            <h2 className="st">A Schedule That <span className="a">Stays Full.</span></h2>
            <p className="dind-lead">Recalls slip and hygiene chairs sit empty. Janice books new patients 24/7 and quietly rebooks overdue ones, so the schedule stays full and the front desk stays calm.</p>
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
              <div className="vcal-foot"><span className="rc">↻ Recall sent</span> → <b>open slot filled</b></div>
            </div>
          </div>
        </div>
      </section>

      <section className="dind" id="real-estate">
        <div className="wrap dind-row flip">
          <div className="dind-text reveal">
            <div className="dind-ico"><Home size={22} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></div>
            <div className="sl">Real Estate</div>
            <h2 className="st">First To Reply, <span className="a">First To Close.</span></h2>
            <p className="dind-lead">In real estate the fastest reply wins. Janice answers every lead in seconds, day or night, qualifies the buyer, books the showing, and nurtures for months, for agents, brokerages, and property developers alike.</p>
            <div className="dind-build">
              <span className="dind-tag">Instant speed-to-lead</span>
              <span className="dind-tag">Showing booking</span>
              <span className="dind-tag">Long-term nurture</span>
            </div>
            <div style={{ marginTop: 22 }}>
              <Link href="/real-estate" className="btn-ghost">Explore Real Estate →</Link>
            </div>
          </div>
          <div className="dind-viz reveal d1">
            <div className="viz viz-call">
              <div className="vc-flow">
                <div className="vc-row miss"><span className="vc-ic"><Moon size={16} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><div><b>New lead · 9:42 PM</b><em>from your listing</em></div><span className="vc-meta">after hours</span></div>
                <div className="vc-row text"><span className="vc-ic"><MessageSquare size={16} strokeWidth={1.8} style={{ color: "var(--accent-ink)" }} aria-hidden /></span><div><b>&ldquo;Yes, it&apos;s available! Are you pre-approved?&rdquo;</b><em>auto-replied &amp; qualified</em></div><span className="vc-meta">18s</span></div>
                <div className="vc-row won"><Check size={14} strokeWidth={2.6} aria-hidden />Showing booked, while rivals slept</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divhr" />

      <section className="dcta">
        <div className="wrap">
          <div className="dcta-box reveal">
            <div className="sl" style={{ justifyContent: "center", display: "flex" }}>Get Started</div>
            <h2 className="st reveal d1">Don&apos;t See Your Trade?<br /><span className="a">We Still Build For You.</span></h2>
            <p className="sd reveal d2">If your business runs on calls, bookings, or repeat customers, Janice can help. Book a free 15-minute call and we&apos;ll map out exactly what she&apos;d do for you, no pitch deck, no pressure.</p>
            <div className="ihero-actions reveal d3" style={{ justifyContent: "center", marginTop: "8px" }}>
              <a href={CAL} target="_blank" rel="noopener" className="btn-primary">Book a Free 15-Min Demo</a>
              <Link href="/ai-employee" className="btn-ghost">Meet Janice</Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
