import type { Metadata } from "next"
import ContactEmailButton from "@/components/contact/ContactEmailButton"
import SiteShell from "@/components/site/SiteShell"

export const metadata: Metadata = {
  title: { absolute: "Contact Pacific Edge AI | One Month On Us" },
  description:
    "Put Janice, your AI employee, to work in your business for a full month, on us. Book a free 15-minute discovery call or reach the Pacific Edge AI team directly.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <SiteShell>
      <header className="ihero">
        <div className="ihero-orb ihero-orb-1"></div>
        <div className="ihero-orb ihero-orb-2"></div>
        <div className="ihero-inner">
          <div className="eyebrow reveal"><span className="eyebrow-dot"></span>Contact</div>
          <h1 className="reveal d1">Reach The<br /><span className="a">Team Directly.</span></h1>
          <p className="ihero-sub reveal d2">No call centre, no chatbot script. You&apos;ll talk to the people who actually build and run Janice.</p>
        </div>
      </header>

      <div className="divhr" />

      <section className="icta">
        <div className="ihero-inner" style={{ margin: "0 auto" }}>
          <div className="sl reveal sl-c" style={{ justifyContent: "center" }}>No-Risk Start</div>
          <h2 className="icta-title reveal d1">One Month<br /><span className="a">On Us.</span></h2>
          <p className="icta-desc reveal d2">
            Put Janice to work in your business for a full month, on us. See the bookings she catches and the
            hours she saves, then decide. If she is not the right fit, walk away. No strings.
          </p>
          <div className="reveal d2" style={{ display: "inline-flex", alignItems: "center", gap: 32, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="https://cal.com/pacificedge" target="_blank" rel="noopener" className="btn-mint" style={{ fontSize: 16, padding: "18px 44px" }}>
              Book a Free 15-Min Demo
            </a>
            <ContactEmailButton />
          </div>
          <div className="icta-bullets reveal d3">
            <span><i />Free discovery call</span>
            <span><i />Transparent pricing</span>
            <span><i />Working prototype in ~1 week</span>
            <span><i />Vancouver-based</span>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
