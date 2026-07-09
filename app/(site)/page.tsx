import JsonLd from "@/components/seo/JsonLd"
import Hero from "@/components/sections/Hero"
import { createPageMetadata } from "@/lib/seo/metadata"
import { websiteJsonLd } from "@/lib/seo/json-ld"

export const metadata = createPageMetadata({
  title: "Pacific Edge",
  description:
    "Vancouver-based AI operations for restaurants, salons, clinics, trades, and retail. Missed calls answered, bookings filled, reviews managed.",
  path: "/",
})
import ProductGlimpse from "@/components/sections/ProductGlimpse"
import Industries from "@/components/sections/Industries"
import ProcessTeaser from "@/components/sections/ProcessTeaser"
import Proof from "@/components/sections/Proof"
import CTABand from "@/components/sections/CTABand"

export default function Home() {
  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <Hero />
      <ProductGlimpse />
      <Industries />
      <ProcessTeaser />
      <Proof />
      <CTABand />
    </>
  )
}
