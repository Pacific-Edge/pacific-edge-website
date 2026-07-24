import type { Metadata } from "next"
import Link from "next/link"
import { UtensilsCrossed, Sparkles, Stethoscope, X, CheckCircle2, RotateCcw } from "lucide-react"
import SiteShell from "@/components/site/SiteShell"
import { Divider, FeatureRow, Hero, Section } from "@/components/ui/sections"
import { GetStartedSection } from "@/components/subpage-sections"

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
      <div className="pe-sub">
      <Hero
        eyebrow="Industries We Serve · Vancouver, BC"
        title={<>Built Around How<br /><span className="a">Your Business Runs.</span></>}
        sub="Every industry books, cancels, and follows up differently. We map how yours works, then build an AI employee, Janice, to handle it. Below is what that looks like for restaurants, salons and spas, and dental clinics."
        actions={
          <>
            <a href={CAL} target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>
            <Link href="/ai-employee" className="btn-dark">Meet Janice</Link>
          </>
        }
        sublinks={
          <>
            <a className="pe-xlink" href="#restaurants"><span><UtensilsCrossed size={15} strokeWidth={2} /></span>Restaurants</a>
            <a className="pe-xlink" href="#salons"><span><Sparkles size={15} strokeWidth={2} /></span>Salons &amp; Spas</a>
            <a className="pe-xlink" href="#dental"><span><Stethoscope size={15} strokeWidth={2} /></span>Dental</a>
          </>
        }
      />

      <Section id="restaurants">
        <FeatureRow
          eyebrow={<>Restaurants &amp; Food</>}
          title={<>Keep Tables <span className="a">Full.</span></>}
          body="A missed call or a no-show is an empty table. Janice answers calls 24/7, books the reservation, and fills last-minute cancellations from your waitlist."
          points={["Reservation text-line", "Waitlist auto-fill", "Review autopilot"]}
          visual={
            <div className="viz">
              <div className="viz-top"><b>Tonight&apos;s floor</b><span className="viz-live">Live</span></div>
              <div className="vt-grid"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
              <div className="viz-foot"><b>9/9</b> tables booked · no-shows refilled</div>
            </div>
          }
        />
      </Section>

      <Section id="salons">
        <FeatureRow
          reversed
          eyebrow={<>Salons &amp; Spas</>}
          title={<>Keep Chairs <span className="a">Booked.</span></>}
          body="A late cancellation leaves an empty chair. Janice fills it from your waitlist within minutes and rebooks clients before they leave."
          points={["Booking text-line", "Waitlist back-fill", "Rebooking reminders"]}
          visual={
            <div className="viz">
              <div className="viz-top"><b>Chair 2 · 2:30 PM</b><span className="viz-live">Auto-fill</span></div>
              <div className="vf-slot">
                <div className="vf-state vf-open"><X size={14} strokeWidth={2.5} style={{ color: "var(--accent-ink)" }} />&nbsp; Cancelled, open chair</div>
                <div className="vf-state vf-filled"><span className="vf-av">RP</span><b>Riley P.</b><em><CheckCircle2 size={13} strokeWidth={2.5} /> filled in 4 min</em></div>
              </div>
              <div className="vf-wait"><span className="lbl">Waitlist</span><span className="vf-chip go">Riley P.</span><span className="vf-chip">Sam K.</span></div>
            </div>
          }
        />
      </Section>

      <Section id="dental">
        <FeatureRow
          eyebrow={<>Dental &amp; Health Clinics</>}
          title={<>Keep the Schedule <span className="a">Full.</span></>}
          body="Recalls slip and hygiene chairs sit empty. Janice books new patients 24/7 and rebooks overdue recalls, so the schedule stays full."
          points={["New-patient intake line", "Recall automation", "Reminders & rebooking"]}
          visual={
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
          }
        />
      </Section>

      <Divider />

      <GetStartedSection
        title={<>Don&apos;t See Your Industry?<br /><span className="a">We Build For You Too.</span></>}
        desc="If your business runs on calls, bookings, or repeat customers, Janice can help. Book a free 15-minute call and we'll map out what she'd do for your business."
        action={
          <>
            <a href={CAL} target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>
            <Link href="/ai-employee" className="btn-dark">Meet Janice</Link>
          </>
        }
      />
      </div>
    </SiteShell>
  )
}
