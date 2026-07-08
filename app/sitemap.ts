import type { MetadataRoute } from "next"
import { SITEMAP_ROUTES, sitemapUrl } from "@/lib/seo/sitemap-routes"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return SITEMAP_ROUTES.map((route) => ({
    url: sitemapUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
