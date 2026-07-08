import IndustrySubPage from "@/components/industries/IndustrySubPage"
import { INDUSTRY_SUB_PAGES } from "@/lib/content/industries"
import { createPageMetadata } from "@/lib/seo/metadata"

const page = INDUSTRY_SUB_PAGES.find((p) => p.slug === "multi-location")!

export const metadata = createPageMetadata({
  title: page.title,
  description: page.subcopy,
  path: "/industries/dental/multi-location",
})

export default function DentalMultiLocationPage() {
  return <IndustrySubPage data={page} />
}
