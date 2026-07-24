import type { Metadata } from "next"
import SiteShell from "@/components/site/SiteShell"
import DentalPricing from "@/components/tools/DentalPricing"

export const metadata: Metadata = {
  title: { absolute: "Dental Pricing | Pacific Edge AI" },
  description:
    "Three ways to hire Janice for your dental practice: Part-Time, Full-Time, and Partner. Flat monthly pricing in CAD, first month free, and a line-by-line comparison of what each tier includes.",
  alternates: { canonical: "/dental-pricing" },
}

export default function Page() {
  return (
    <SiteShell>
      <div className="pe-pricing">
        <DentalPricing />
      </div>
    </SiteShell>
  )
}
