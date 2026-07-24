import type { ReactNode } from "react"
import { CtaPanel, type CrossLink } from "@/components/ui/sections"

/**
 * "Get Started" closing CTA panel. `action` is a ReactNode passthrough since
 * pages differ (most pass two buttons, dental passes one).
 */
interface GetStartedSectionProps {
  title: ReactNode
  desc: ReactNode
  action: ReactNode
  bullets?: ReactNode[]
  crossLinks?: CrossLink[]
}

export function GetStartedSection({ title, desc, action, bullets, crossLinks }: GetStartedSectionProps) {
  return (
    <CtaPanel eyebrow="Get Started" title={title} desc={desc} action={action} bullets={bullets} crossLinks={crossLinks} />
  )
}
