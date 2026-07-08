import Link from "next/link"
import PageHero from "@/components/sections/PageHero"
import Accordion from "@/components/ui/Accordion"
import PageCTA from "@/components/sections/PageCTA"
import JsonLd from "@/components/seo/JsonLd"
import { SITE_CONTACT, SITE_FAQ } from "@/lib/content"
import { createPageMetadata } from "@/lib/seo/metadata"
import { faqPageJsonLd } from "@/lib/seo/json-ld"

export const metadata = createPageMetadata({
  title: "FAQ",
  description: "Common questions about setup, pricing, cancellation, data safety, and the discovery call.",
  path: "/faq",
})

const faqItems = SITE_FAQ.map((item, i) => ({
  id: `faq-${i}`,
  question: item.question,
  answer: item.answer,
}))

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd()} />
      <PageHero
        eyebrow="Get Started"
        title="Questions, answered"
        description="Setup, pricing, cancellation, and what to expect on your first call."
      />

      <section className="section-py bg-cream-50">
        <div className="container-x">
          <div className="max-w-3xl mx-auto">
            <Accordion items={faqItems} />

            <p className="font-ui text-sm text-navy-900/50 mt-10 text-center">
              Still have questions?{" "}
              <Link
                href={`mailto:${SITE_CONTACT.email}`}
                className="text-navy-900 underline underline-offset-4 hover:text-navy-700"
              >
                {SITE_CONTACT.email}
              </Link>
            </p>
          </div>
        </div>
      </section>

      <PageCTA ctaLabel="Book Your Free Setup Call" />
    </>
  )
}
