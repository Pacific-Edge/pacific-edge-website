import Link from "next/link"
import PageHero from "@/components/sections/PageHero"
import PageCTA from "@/components/sections/PageCTA"
import ElectricMotif from "@/components/ui/ElectricMotif"
import { Button } from "@/components/ui/button"
import SectionMotion from "@/components/ui/SectionMotion"
import { PRICING } from "@/lib/content"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata = createPageMetadata({
  title: "Pricing",
  description: "One month free. Six-month initial engagement. Pricing scoped around your business.",
  path: "/pricing",
})

export default function PricingPage() {
  return (
    <>
      <PageHero eyebrow="Get Started" title={PRICING.headline} description={PRICING.body} />

      <section className="relative overflow-hidden section-py bg-white-50">
        <ElectricMotif variant="wash" className="-right-32 top-10" />
        <div className="container-x relative z-10">
          <SectionMotion className="mx-auto max-w-2xl text-center">
            <h2 className="text-display-md text-midnight-900 mb-4">Pricing scoped to your business</h2>
            <p className="font-ui text-sm text-midnight-900/55 mb-8">{PRICING.terms}</p>
            <div className="flex flex-wrap justify-center gap-4">
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
