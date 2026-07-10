import Link from "next/link"
import PageHero from "@/components/sections/PageHero"
import PageCTA from "@/components/sections/PageCTA"
import ElectricMotif from "@/components/ui/ElectricMotif"
import PricingTable from "@/components/ui/modern-pricing-table"
import { Button } from "@/components/ui/button"
import SectionMotion from "@/components/ui/SectionMotion"
import { PRICING, PRICING_PLANS } from "@/lib/content"
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

      <section className="relative overflow-hidden section-py bg-white-50">
        <ElectricMotif variant="wash" className="-right-32 top-10" />
        <div className="container-x relative z-10">
          <p className="mb-10 text-center font-ui text-sm text-midnight-900/45">
            First month free on every tier
          </p>

          <PricingTable
            plans={PRICING_PLANS}
            title="Choose the starting point."
            description={PRICING.terms}
          />

          <SectionMotion className="mx-auto mt-10 max-w-2xl text-center">
            <p className="font-ui text-sm text-midnight-900/45">{PRICING.variance}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild variant="black">
                <Link href="/contact">{PRICING.cta}</Link>
              </Button>
              <Button asChild variant="transparent" tone="dark">
                <Link href="/faq">Read FAQ</Link>
              </Button>
            </div>
          </SectionMotion>
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
