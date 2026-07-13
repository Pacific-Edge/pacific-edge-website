import type { Metadata } from "next"
import { notFound } from "next/navigation"
import IndustryPage from "@/components/industries/IndustryPage"
import { INDUSTRY_SLUGS, getIndustry, isIndustry } from "@/lib/content/industries"
import { createPageMetadata } from "@/lib/seo/metadata"

type PageProps = {
  params: Promise<{ industry: string }>
}

export function generateStaticParams() {
  return INDUSTRY_SLUGS.map((industry) => ({ industry }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry } = await params
  const config = getIndustry(industry)

  if (!config) {
    return createPageMetadata({
      title: "Industries",
      path: `/industries/${industry}`,
    })
  }

  return createPageMetadata({
    title: `${config.navLabel}`,
    description: config.painHook,
    path: `/industries/${config.slug}`,
  })
}

export default async function IndustryRoute({ params }: PageProps) {
  const { industry } = await params

  if (!isIndustry(industry)) {
    notFound()
  }

  return <IndustryPage config={getIndustry(industry)!} />
}
