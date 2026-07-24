import type { Metadata } from "next"
import ContactEmailButton from "@/components/contact/ContactEmailButton"
import SiteShell from "@/components/site/SiteShell"
import { GetStartedSection } from "@/components/subpage-sections"
import { Divider, Hero } from "@/components/ui/sections"

export const metadata: Metadata = {
  title: { absolute: "Contact Pacific Edge AI | One Month On Us" },
  description:
    "Put Janice, your AI employee, to work in your business for a full month, on us. Book a free 15-minute discovery call or reach the Pacific Edge AI team directly.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <SiteShell>
      <div className="pe-sub">
        <Hero
          eyebrow="Contact"
          title={<>Reach The<br /><span className="a">Team Directly.</span></>}
          sub="You'll talk directly to the people who build and run Janice, not a call centre or a scripted chatbot."
        />

        <Divider />

        <GetStartedSection
          eyebrow="Free Trial"
          title={<>One Month<br /><span className="a">On Us.</span></>}
          desc="Run Janice in your business for a full month at no cost. Review the bookings she catches and the hours she saves, then decide whether to continue. Cancel anytime during the trial."
          action={
            <>
              <a href="https://cal.com/pacificedge" target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>
              <ContactEmailButton />
            </>
          }
          bullets={["Free discovery call", "Transparent pricing", "Working prototype in ~1 week", "Vancouver-based"]}
        />
      </div>
    </SiteShell>
  )
}
