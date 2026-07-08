import type { Metadata } from "next"
import { notFound } from "next/navigation"
import SavingsCalculatorClient from "@/components/calculators/SavingsCalculatorClient"
import {
  CALCULATOR_SLUGS,
  getCalculatorConfig,
  isCalculatorIndustry,
  type CalculatorIndustry,
} from "@/lib/calculators"
import { createPageMetadata } from "@/lib/seo/metadata"

type PageProps = {
  params: Promise<{ industry: string }>
}

export function generateStaticParams() {
  return CALCULATOR_SLUGS.map((industry) => ({ industry }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { industry } = await params
  const config = getCalculatorConfig(industry)

  if (!config) {
    return createPageMetadata({
      title: "Savings Estimator",
      path: `/tools/savings/${industry}`,
    })
  }

  return createPageMetadata({
    title: `${config.headline} ${config.headlineAccent}`,
    description: config.subcopy,
    path: config.path,
  })
}

export default async function SavingsCalculatorPage({ params }: PageProps) {
  const { industry } = await params

  if (!isCalculatorIndustry(industry)) {
    notFound()
  }

  return <SavingsCalculatorClient industry={industry as CalculatorIndustry} />
}
