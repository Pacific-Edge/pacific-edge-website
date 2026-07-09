import Nav from "@/components/nav/Nav"
import Footer from "@/components/Footer"
import Preloader from "@/components/Preloader"
import JsonLd from "@/components/seo/JsonLd"
import LenisProvider from "@/components/providers/LenisProvider"
import ScrollTriggerNavigationGuard from "@/components/providers/ScrollTriggerNavigationGuard"
import { localBusinessJsonLd, organizationJsonLd } from "@/lib/seo/json-ld"

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <LenisProvider>
      <ScrollTriggerNavigationGuard />
      <JsonLd data={[organizationJsonLd(), localBusinessJsonLd()]} />
      <Preloader />
      <Nav />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </LenisProvider>
  )
}
