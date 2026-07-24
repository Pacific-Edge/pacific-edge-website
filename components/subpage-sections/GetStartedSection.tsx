import type { ReactNode } from "react"
import { CtaPanel, type CrossLink } from "@/components/ui/sections"

/**
 * "Get Started" closing CTA panel. `action` is a ReactNode passthrough since
 * pages differ (most pass two buttons, dental passes one). `eyebrow` defaults
 * to "Get Started"; override only where the page's existing copy differs
 * (e.g. "No-Risk Start" on /faq, "Free Trial" on /contact).
 */
interface GetStartedSectionProps {
  eyebrow?: ReactNode
  title: ReactNode
  desc: ReactNode
  action: ReactNode
  bullets?: ReactNode[]
  crossLinks?: CrossLink[]
}

export function GetStartedSection({ eyebrow = "Get Started", title, desc, action, bullets, crossLinks }: GetStartedSectionProps) {
  return (
    <CtaPanel eyebrow={eyebrow} title={title} desc={desc} action={action} bullets={bullets} crossLinks={crossLinks} />
  )
}
