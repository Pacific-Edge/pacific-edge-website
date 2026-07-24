import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { revealCls } from "@/lib/reveal"

/**
 * Card — the restrained-tier flat grid card (the old `.prob` / `.icard`,
 * minus the crosshatch fill). Icon tile + heading + copy + optional footnote,
 * a single hairline + `--shadow-float`, hover lift retimed to the house curve.
 * `reveal` is the stagger step index within its grid row.
 */
interface CardProps {
  icon?: ReactNode
  title: ReactNode
  children?: ReactNode
  note?: ReactNode
  reveal?: number
  className?: string
}

export function Card({ icon, title, children, note, reveal = 0, className }: CardProps) {
  return (
    <article className={cn("pe-card", revealCls(reveal), className)}>
      {icon && <div className="pe-card-ico">{icon}</div>}
      <h3>{title}</h3>
      {children && <p>{children}</p>}
      {note && <div className="pe-card-note">{note}</div>}
    </article>
  )
}

/** CardGrid — responsive n-up grid wrapper (the old `.prob-grid`). */
export function CardGrid({ cols = 3, children, className }: { cols?: 2 | 3 | 4; children: ReactNode; className?: string }) {
  return <div className={cn("pe-grid", `pe-grid--${cols}`, className)}>{children}</div>
}
