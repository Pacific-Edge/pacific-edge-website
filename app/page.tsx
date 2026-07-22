import type { Metadata } from "next"
import Script from "next/script"
import SiteShell from "@/components/site/SiteShell"
import HomeContent from "@/components/home/HomeContent"
import { homeJsonLd } from "@/lib/seo/homeJsonLd"
import "@/styles/home.css"

export const metadata: Metadata = {
  title: { absolute: "AI Consulting Vancouver | Pacific Edge AI" },
  description:
    "AI consulting Vancouver, BC for local business. Pacific Edge AI builds custom AI automation for dental clinics, restaurants, and salons & spas. No tech team needed. Free discovery call.",
  keywords: [
    "AI consulting Vancouver",
    "AI consulting Vancouver BC",
    "Vancouver AI consultant",
    "AI automation Vancouver",
    "AI for small business Vancouver",
    "custom AI workflows",
    "business automation Vancouver",
    "missed call auto responder Vancouver",
    "AI review management",
    "Pacific Edge AI",
  ],
  alternates: { canonical: "/" },
  other: {
    "geo.region": "CA-BC",
    "geo.placename": "Vancouver",
    "geo.position": "49.2827;-123.1207",
    ICBM: "49.2827, -123.1207",
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-113R1XTVJH"
        strategy="afterInteractive"
      />
      <Script id="ga-config" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-113R1XTVJH');`}
      </Script>
      <SiteShell>
        <HomeContent />
      </SiteShell>
    </>
  )
}
