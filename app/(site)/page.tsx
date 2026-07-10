import JsonLd from "@/components/seo/JsonLd"
import Hero from "@/components/sections/Hero"
import { createPageMetadata } from "@/lib/seo/metadata"
import { websiteJsonLd } from "@/lib/seo/json-ld"

export const metadata = createPageMetadata({
  title: "Pacific Edge",
  description:
    "Vancouver-based operations software for dental clinics. Missed calls answered, chairs filled, recalls handled.",
  path: "/",
})
import ProductGlimpse from "@/components/sections/ProductGlimpse"
import FrontDeskDemo from "@/components/sections/FrontDeskDemo"
import ProcessTeaser from "@/components/sections/ProcessTeaser"
import WhyUsTeaser from "@/components/sections/WhyUsTeaser"
import PricingTeaser from "@/components/sections/PricingTeaser"
// import Proof from "@/components/sections/Proof" // Hidden until we have live client deployments
import CTABand from "@/components/sections/CTABand"

export default function Home() {
  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <Hero />
      <ProductGlimpse />
      <FrontDeskDemo />
      <WhyUsTeaser />
      <PricingTeaser />
      <ProcessTeaser />
      {/* <Proof /> — hidden until we have live client deployments */}
      <CTABand />
    </>
  )
}
