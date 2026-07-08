import IndustrySubPage from "@/components/industries/IndustrySubPage"
import { INDUSTRY_SUB_PAGES } from "@/lib/content/industries"
import { createPageMetadata } from "@/lib/seo/metadata"

const page = INDUSTRY_SUB_PAGES.find((p) => p.slug === "single-location")!

export const metadata = createPageMetadata({
  title: page.title,
  description: page.subcopy,
  path: "/industries/dental/single-location",
})

export default function DentalSingleLocationPage() {
  return <IndustrySubPage data={page} />
}
