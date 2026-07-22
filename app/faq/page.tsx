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
    { "@type": "Question", name: "Do I need to be tech-savvy?", acceptedAnswer: { "@type": "Answer", text: "Not even a little. If you can use a smartphone, you can use what we build. We handle all the technical work and walk you through everything in plain English. Our whole business exists because most AI tools are built for developers - we translate that into something anyone can use." } },
    { "@type": "Question", name: "How long does setup take?", acceptedAnswer: { "@type": "Answer", text: "Most clients have a working prototype within the first week. Full deployment and training typically wraps up in two to three weeks depending on complexity. You'll see real results before most agencies finish their discovery phase." } },
    { "@type": "Question", name: "How much does it cost?", acceptedAnswer: { "@type": "Answer", text: "Every business is different - a single-location salon has very different needs than a multi-site restaurant group. Our solutions are custom-built around your specific workflows, team size, and goals, so pricing reflects exactly what you need and nothing you don't. Book a free discovery call and we'll put together a transparent quote tailored to your business." } },
    { "@type": "Question", name: "What if I want to cancel?", acceptedAnswer: { "@type": "Answer", text: "Your first month is on us, so you can make sure Janice is the right fit before anything kicks in. From there, engagements run for an initial 6 months, long enough to build, deploy, train your team, and prove real ROI. Pricing is transparent and agreed upfront, with no hidden fees and no surprise renewals. After that you can renew month-to-month, scale up, or part ways with everything we've built fully documented for handover." } },
    { "@type": "Question", name: "Will this actually work for my industry?", acceptedAnswer: { "@type": "Answer", text: "If your business relies on appointments, customer communication, or online reviews, the answer is almost certainly yes. We've designed our workflows specifically for dental clinics, restaurants, and salons & spas - the industries where these automations have the highest impact." } },
    { "@type": "Question", name: "Will my data be safe?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. Security isn't an afterthought - it's built into everything we do. All data is encrypted, access is restricted to only what's needed, and we never share your information with third parties. Your business data stays your business data, period." } },
    { "@type": "Question", name: "What happens on the discovery call?", acceptedAnswer: { "@type": "Answer", text: "Fifteen minutes. We learn about your business, identify where you're losing time or money, and tell you exactly which automations would make the biggest difference. No pitch deck, no pressure. If we're not the right fit, we'll tell you that too." } },
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
              <details className="faq-item reveal"><summary>Do I need to be tech-savvy?<span className="faq-ico" /></summary><div className="faq-body">Not even a little. If you can use a smartphone, you can use what we build. We handle all the technical work and walk you through everything in plain English. Our whole business exists because most AI tools are built for developers - we translate that into something anyone can use.</div></details>
              <details className="faq-item reveal"><summary>How long does setup take?<span className="faq-ico" /></summary><div className="faq-body">Most clients have a working prototype within the first week. Full deployment and training typically wraps up in two to three weeks depending on complexity. You&apos;ll see real results before most agencies finish their discovery phase.</div></details>
              <details className="faq-item reveal"><summary>How much does it cost?<span className="faq-ico" /></summary><div className="faq-body">Every business is different - a single-location salon has very different needs than a multi-site restaurant group. Our solutions are custom-built around your specific workflows, team size, and goals, so pricing reflects exactly what you need and nothing you don&apos;t. Book a free discovery call and we&apos;ll put together a transparent quote tailored to your business.</div></details>
              <details className="faq-item reveal"><summary>What if I want to cancel?<span className="faq-ico" /></summary><div className="faq-body">Your first month is on us, so you can make sure Janice is the right fit before anything kicks in. From there, engagements run for an initial 6 months, long enough to build, deploy, train your team, and prove real ROI. Pricing is transparent and agreed upfront, with no hidden fees and no surprise renewals. After that you can renew month-to-month, scale up, or part ways with everything we&apos;ve built fully documented for handover.</div></details>
              <details className="faq-item reveal"><summary>Will this actually work for my industry?<span className="faq-ico" /></summary><div className="faq-body">If your business relies on appointments, customer communication, or online reviews, the answer is almost certainly yes. We&apos;ve designed our workflows specifically for dental clinics, restaurants, and salons &amp; spas - the industries where these automations have the highest impact.</div></details>
              <details className="faq-item reveal"><summary>Will my data be safe?<span className="faq-ico" /></summary><div className="faq-body">Absolutely. Security isn&apos;t an afterthought - it&apos;s built into everything we do. All data is encrypted, access is restricted to only what&apos;s needed, and we never share your information with third parties. Your business data stays your business data, period.</div></details>
              <details className="faq-item reveal"><summary>What happens on the discovery call?<span className="faq-ico" /></summary><div className="faq-body">Fifteen minutes. We learn about your business, identify where you&apos;re losing time or money, and tell you exactly which automations would make the biggest difference. No pitch deck, no pressure. If we&apos;re not the right fit, we&apos;ll tell you that too.</div></details>
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
