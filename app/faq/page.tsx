import type { Metadata } from "next"
import SiteShell from "@/components/site/SiteShell"

export const metadata: Metadata = {
  title: { absolute: "FAQ | Pacific Edge AI" },
  description:
    "Answers to the questions Vancouver business owners ask most about Pacific Edge AI: setup time, pricing, data safety, and how the first month works.",
  alternates: { canonical: "/faq" },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://pacificedge.ai/faq#faq",
  mainEntity: [
    { "@type": "Question", name: "Do I need to be tech-savvy?", acceptedAnswer: { "@type": "Answer", text: "No. We handle the technical setup and explain how everything works in plain language. Most AI tools are built for developers; ours are built for business owners running a dental clinic, restaurant, or salon." } },
    { "@type": "Question", name: "How long does setup take?", acceptedAnswer: { "@type": "Answer", text: "Most clients have a working prototype within the first week. Full deployment and staff training typically take two to three weeks, depending on complexity." } },
    { "@type": "Question", name: "How much does it cost?", acceptedAnswer: { "@type": "Answer", text: "It depends on your business. A single-location salon and a multi-site restaurant group need different things, so we price around your workflows, team size, and goals. Book a free discovery call and we'll put together a quote for your business." } },
    { "@type": "Question", name: "What if I want to cancel?", acceptedAnswer: { "@type": "Answer", text: "Your first month is free, so you can confirm Janice is the right fit before anything kicks in. After that, engagements run for an initial 6 months, enough time to build, deploy, train your team, and measure results. Pricing is agreed upfront, with no hidden fees. After the initial term, you can renew month-to-month, scale up, or end the engagement, with everything we've built documented for handover." } },
    { "@type": "Question", name: "Will this actually work for my industry?", acceptedAnswer: { "@type": "Answer", text: "If your business relies on appointments, customer communication, or online reviews, yes. We build workflows for dental clinics, restaurants, and salons & spas." } },
    { "@type": "Question", name: "Will my data be safe?", acceptedAnswer: { "@type": "Answer", text: "All data is encrypted, and access is restricted to what each person needs to do their job. We don't share your information with third parties." } },
    { "@type": "Question", name: "What happens on the discovery call?", acceptedAnswer: { "@type": "Answer", text: "Fifteen minutes. We learn about your business, identify where you're losing time or money, and tell you which automations would help most. No pitch deck. If we're not the right fit, we'll tell you that too." } },
  ],
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteShell>
        <header className="ihero">
          <div className="ihero-orb ihero-orb-1"></div>
          <div className="ihero-orb ihero-orb-2"></div>
          <div className="ihero-inner">
            <div className="eyebrow reveal"><span className="eyebrow-dot"></span>FAQ</div>
            <h1 className="reveal d1">Common<br /><span className="a">Questions.</span></h1>
            <p className="ihero-sub reveal d2">Can&apos;t find your question here? Email us directly at <a href="mailto:hello@pacificedge.ai">hello@pacificedge.ai</a></p>
          </div>
        </header>

        <div className="divhr" />

        <section id="faq">
          <div className="wrap">
            <div className="faq-list">
              <details className="faq-item reveal"><summary>Do I need to be tech-savvy?<span className="faq-ico" /></summary><div className="faq-body">No. We handle the technical setup and explain how everything works in plain language. Most AI tools are built for developers; ours are built for business owners running a dental clinic, restaurant, or salon.</div></details>
              <details className="faq-item reveal"><summary>How long does setup take?<span className="faq-ico" /></summary><div className="faq-body">Most clients have a working prototype within the first week. Full deployment and staff training typically take two to three weeks, depending on complexity.</div></details>
              <details className="faq-item reveal"><summary>How much does it cost?<span className="faq-ico" /></summary><div className="faq-body">It depends on your business. A single-location salon and a multi-site restaurant group need different things, so we price around your workflows, team size, and goals. Book a free discovery call and we&apos;ll put together a quote for your business.</div></details>
              <details className="faq-item reveal"><summary>What if I want to cancel?<span className="faq-ico" /></summary><div className="faq-body">Your first month is free, so you can confirm Janice is the right fit before anything kicks in. After that, engagements run for an initial 6 months, enough time to build, deploy, train your team, and measure results. Pricing is agreed upfront, with no hidden fees. After the initial term, you can renew month-to-month, scale up, or end the engagement, with everything we&apos;ve built documented for handover.</div></details>
              <details className="faq-item reveal"><summary>Will this actually work for my industry?<span className="faq-ico" /></summary><div className="faq-body">If your business relies on appointments, customer communication, or online reviews, yes. We build workflows for dental clinics, restaurants, and salons &amp; spas.</div></details>
              <details className="faq-item reveal"><summary>Will my data be safe?<span className="faq-ico" /></summary><div className="faq-body">All data is encrypted, and access is restricted to what each person needs to do their job. We don&apos;t share your information with third parties.</div></details>
              <details className="faq-item reveal"><summary>What happens on the discovery call?<span className="faq-ico" /></summary><div className="faq-body">Fifteen minutes. We learn about your business, identify where you&apos;re losing time or money, and tell you which automations would help most. No pitch deck. If we&apos;re not the right fit, we&apos;ll tell you that too.</div></details>
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
    </>
  )
}
