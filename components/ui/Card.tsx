import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { revealCls } from "@/lib/reveal"
import { CheckMark } from "./icons"

/**
 * Card — the restrained-tier flat grid card (the old `.prob` / `.icard`,
 * minus the crosshatch fill). Icon tile + heading + copy + optional footnote,
 * a single hairline + `--shadow-float`, hover lift retimed to the house curve.
 * `reveal` is the stagger step index within its grid row. `points` renders a
 * CheckMark bullet list after the body (same treatment as FeatureRow).
 */
interface CardProps {
  icon?: ReactNode
  title: ReactNode
  children?: ReactNode
  points?: ReactNode[]
  note?: ReactNode
  reveal?: number
  className?: string
}

export function Card({ icon, title, children, points, note, reveal = 0, className }: CardProps) {
  return (
    <article className={cn("pe-card", revealCls(reveal), className)}>
      {icon && <div className="pe-card-ico">{icon}</div>}
      <h3>{title}</h3>
      {children && <p>{children}</p>}
      {points && points.length > 0 && (
        <ul className="pe-frow-list pe-card-points">
          {points.map((p, i) => (
            <li key={i}>
              <CheckMark />
              {p}
            </li>
          ))}
        </ul>
      )}
      {note && <div className="pe-card-note">{note}</div>}
    </article>
  )
}

/** CardGrid — responsive n-up grid wrapper (the old `.prob-grid`). */
export function CardGrid({ cols = 3, children, className }: { cols?: 2 | 3 | 4; children: ReactNode; className?: string }) {
  return <div className={cn("pe-grid", `pe-grid--${cols}`, className)}>{children}</div>
}
