import type { Metadata } from "next"
import { notFound } from "next/navigation"
import IndustryPage from "@/components/industries/IndustryPage"
import { getIndustryPage, INDUSTRY_SLUGS } from "@/lib/content/industries"
import { createPageMetadata } from "@/lib/seo/metadata"

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return INDUSTRY_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const data = getIndustryPage(slug)
  if (!data) return {}

  return createPageMetadata({
    title: data.name,
    description: data.painHook,
    path: `/industries/${slug}`,
  })
}

export default async function IndustrySlugPage({ params }: PageProps) {
  const { slug } = await params
  const data = getIndustryPage(slug)
  if (!data) notFound()

  return <IndustryPage data={data} />
}
