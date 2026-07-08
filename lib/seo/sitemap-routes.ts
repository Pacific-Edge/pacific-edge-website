import { CALCULATOR_SLUGS } from "@/lib/calculators/routes"
import { INDUSTRY_SLUGS } from "@/lib/content/industries"
import { SITE_URL } from "./site"

export type SitemapEntry = {
  path: string
  changeFrequency: "weekly" | "monthly" | "yearly"
  priority: number
}

/** Public marketing routes included in sitemap.xml (excludes /login, /app). */
export const SITEMAP_ROUTES: SitemapEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/solutions", changeFrequency: "monthly", priority: 0.9 },
  { path: "/solutions/janice", changeFrequency: "monthly", priority: 0.9 },
  { path: "/dashboard", changeFrequency: "monthly", priority: 0.8 },
  { path: "/integrations", changeFrequency: "monthly", priority: 0.8 },
  ...INDUSTRY_SLUGS.map((slug) => ({
    path: `/industries/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  })),
  { path: "/industries/dental/single-location", changeFrequency: "monthly", priority: 0.7 },
  { path: "/industries/dental/multi-location", changeFrequency: "monthly", priority: 0.7 },
  ...CALCULATOR_SLUGS.map((slug) => ({
    path: `/tools/savings/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  })),
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/why-us", changeFrequency: "monthly", priority: 0.7 },
  { path: "/reviews", changeFrequency: "monthly", priority: 0.7 },
  { path: "/coverage", changeFrequency: "monthly", priority: 0.6 },
  { path: "/process", changeFrequency: "monthly", priority: 0.7 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
]

export function sitemapUrl(path: string) {
  return new URL(path, SITE_URL).toString()
}
