import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Section — sub-page vertical rhythm + content container. Applies the
 * `--space-section-*` and `--container` layout tokens (DESIGN-SYSTEM §3.3),
 * so a page never hand-rolls its own padding/max-width. Wraps children in a
 * centered `.pe-wrap` by default; pass `wrap={false}` for a full-bleed section
 * (e.g. a stat band that spans the viewport).
 */
interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  /** Step the vertical rhythm down (`--space-section-y-sm`). */
  tight?: boolean
  /** Use the narrower feature container (`--container-narrow`). */
  narrow?: boolean
  /** Wrap children in `.pe-wrap` (default true). */
  wrap?: boolean
}

export function Section({ id, children, className, tight, narrow, wrap = true }: SectionProps) {
  return (
    <section id={id} className={cn("pe-section", tight && "pe-section--tight", className)}>
      {wrap ? <div className={cn("pe-wrap", narrow && "pe-wrap--narrow")}>{children}</div> : children}
    </section>
  )
}

/** Flat hairline divider — the restrained-tier replacement for the old mint-gradient `.divhr`. */
export function Divider() {
  return <div className="pe-divhr" aria-hidden="true" />
}
