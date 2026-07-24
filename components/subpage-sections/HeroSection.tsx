import type { ReactNode } from "react"
import { Hero } from "@/components/ui/sections"

/**
 * Standard subpage hero (restaurants template): title + subtitle + exactly
 * two CTA buttons (mint primary, dark secondary). External hrefs open in a
 * new tab automatically. Eyebrow/pain/stats/trust are intentionally not
 * exposed; every industry subpage shares this minimal hero.
 */
export interface HeroCta {
  href: string
  label: ReactNode
}

interface HeroSectionProps {
  title: ReactNode
  sub: ReactNode
  primaryCta: HeroCta
  secondaryCta: HeroCta
}

function CtaAnchor({ cta, className }: { cta: HeroCta; className: string }) {
  const external = /^https?:\/\//.test(cta.href)
  return (
    <a href={cta.href} className={className} {...(external ? { target: "_blank", rel: "noopener" } : {})}>
      {cta.label}
    </a>
  )
}

export function HeroSection({ title, sub, primaryCta, secondaryCta }: HeroSectionProps) {
  return (
    <Hero
      title={title}
      sub={sub}
      actions={
        <>
          <CtaAnchor cta={primaryCta} className="btn-mint" />
          <CtaAnchor cta={secondaryCta} className="btn-dark" />
        </>
      }
    />
  )
}
