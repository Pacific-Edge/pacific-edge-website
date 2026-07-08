import Link from "next/link"
import PageHero from "@/components/sections/PageHero"
import PageCTA from "@/components/sections/PageCTA"
import { PRICING } from "@/lib/content"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata = createPageMetadata({
  title: "Pricing",
  description: "One month free. Six-month initial engagement. Transparent pricing for local businesses.",
  path: "/pricing",
})

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Started"
        title={PRICING.headline}
        description={PRICING.body}
      />

      <section className="section-py bg-cream-50">
        <div className="container-x">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl border border-ash-300/40 bg-cream-50 p-8 sm:p-12 shadow-card text-center">
              <p className="eyebrow text-ash-500 mb-4">Trial terms</p>
              <h2 className="text-display-sm text-navy-900 mb-6">One month free, then six months</h2>
              <p className="font-ui text-base text-navy-900/60 leading-relaxed mb-8">
                {PRICING.terms}
              </p>
              <Link href="/contact" className="btn-primary">
                {PRICING.cta}
              </Link>
            </div>

            <p className="font-ui text-sm text-navy-900/45 text-center mt-8">
              Custom-built around your workflows and team size. No hidden fees.
            </p>
          </div>
        </div>
      </section>

      <PageCTA
        headline="Start with a free month"
        body="See the bookings and hours saved before you commit."
        ctaLabel={PRICING.cta}
      />
    </>
  )
}
