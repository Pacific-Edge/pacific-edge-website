import Nav from "./Nav"
import Footer from "./Footer"
import ScrollReveal from "./ScrollReveal"
import LegacyBehaviors from "./LegacyBehaviors"

/**
 * Shared marketing-page frame: fixed nav (full mega-menu on home, minimal on
 * sub-pages) + <main> + footer, plus the scroll-reveal observer and the ported
 * industry.js behaviors. Utility pages (/status) and the kept-static HTML pages
 * don't use this.
 */
export default function SiteShell({
  variant = "full",
  children,
}: {
  variant?: "full" | "minimal"
  children: React.ReactNode
}) {
  return (
    <>
      <Nav variant={variant} />
      <main>{children}</main>
      <Footer />
      <ScrollReveal />
      <LegacyBehaviors />
    </>
  )
}
