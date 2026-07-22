import Nav from "./Nav"
import Footer from "./Footer"
import ScrollReveal from "./ScrollReveal"
import LegacyBehaviors from "./LegacyBehaviors"

/**
 * Shared marketing-page frame: the same fixed mega-menu nav on every page,
 * + <main> + footer, plus the scroll-reveal observer and the ported
 * industry.js behaviors. Utility pages (/status) and the kept-static HTML pages
 * don't use this.
 */
export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
      <ScrollReveal />
      <LegacyBehaviors />
    </>
  )
}
