import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { revealCls } from "@/lib/reveal"

/**
 * Eyebrow — the tracked uppercase micro-label above a heading (the old `.sl` /
 * `.eyebrow`, unified to one treatment: a short mint rule + label).
 */
export function Eyebrow({ children, center, className }: { children: ReactNode; center?: boolean; className?: string }) {
  return <div className={cn("pe-eyebrow", center && "pe-eyebrow--center", className)}>{children}</div>
}

/**
 * SectionHeader — the eyebrow / H2 / lead triad every sub-page section opens
 * with (the old `.sl` / `.st` / `.sd`). Reveals staggered top-to-bottom.
 * `title` accepts JSX so a word can carry the mint accent span:
 *   title={<>Sound <span className="a">Familiar?</span></>}
 */
interface SectionHeaderProps {
  eyebrow?: ReactNode
  title: ReactNode
  lead?: ReactNode
  center?: boolean
  className?: string
}

export function SectionHeader({ eyebrow, title, lead, center, className }: SectionHeaderProps) {
  return (
    <div className={cn("pe-sechead", center && "pe-sechead--center", className)}>
      {eyebrow && <div className={cn("pe-eyebrow", revealCls())}>{eyebrow}</div>}
      <h2 className={cn("pe-sechead-title", revealCls(1))}>{title}</h2>
      {lead && <p className={cn("pe-sechead-lead", revealCls(2))}>{lead}</p>}
    </div>
  )
}
