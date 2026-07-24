import type { Metadata } from "next"
import SiteShell from "@/components/site/SiteShell"
import { FaqSection, GetStartedSection } from "@/components/subpage-sections"
import { Divider, Hero } from "@/components/ui/sections"

export const metadata: Metadata = {
  title: { absolute: "FAQ | Pacific Edge AI" },
  description:
    "Answers to the questions Vancouver business owners ask most about Pacific Edge AI: setup time, pricing, data safety, and how the first month works.",
  alternates: { canonical: "/faq" },
}

/* Single source of truth: renders the accordion AND generates the FAQPage
   JSON-LD, so schema and visible copy cannot drift. Answers must stay plain
   strings for that reason. */
const FAQ: { q: string; a: string }[] = [
  { q: "Do I need to be tech-savvy?", a: "No. We handle the technical setup and explain how everything works in plain language. Most AI tools are built for developers; ours are built for business owners running a dental clinic, restaurant, or salon." },
  { q: "How long does setup take?", a: "Most clients have a working prototype within the first week. Full deployment and staff training typically take two to three weeks, depending on complexity." },
  { q: "How much does it cost?", a: "It depends on your business. A single-location salon and a multi-site restaurant group need different things, so we price around your workflows, team size, and goals. Book a free discovery call and we'll put together a quote for your business." },
  { q: "What if I want to cancel?", a: "Your first month is free, so you can confirm Janice is the right fit before anything kicks in. After that, engagements run for an initial 6 months, enough time to build, deploy, train your team, and measure results. Pricing is agreed upfront, with no hidden fees. After the initial term, you can renew month-to-month, scale up, or end the engagement, with everything we've built documented for handover." },
  { q: "Will this actually work for my industry?", a: "If your business relies on appointments, customer communication, or online reviews, yes. We build workflows for dental clinics, restaurants, and salons & spas." },
  { q: "Will my data be safe?", a: "All data is encrypted, and access is restricted to what each person needs to do their job. We don't share your information with third parties." },
  { q: "What happens on the discovery call?", a: "Fifteen minutes. We learn about your business, identify where you're losing time or money, and tell you which automations would help most. No pitch deck. If we're not the right fit, we'll tell you that too." },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://pacificedge.ai/faq#faq",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteShell>
        <div className="pe-sub">
          <Hero
            eyebrow="FAQ"
            title={<>Common<br /><span className="a">Questions.</span></>}
            sub={<>Can&apos;t find your question here? Email us directly at <a href="mailto:hello@pacificedge.ai">hello@pacificedge.ai</a></>}
          />

          <Divider />

          <FaqSection items={FAQ} />

          <GetStartedSection
            eyebrow="No-Risk Start"
            title={<>One Month<br /><span className="a">On Us.</span></>}
            desc="Start with a free 15-minute discovery call. If Janice isn't the right fit after your first month, walk away. No strings."
            action={<a href="https://cal.com/pacificedge" target="_blank" rel="noopener" className="btn-mint">Book a Free 15-Min Demo</a>}
          />
        </div>
      </SiteShell>
    </>
  )
}
