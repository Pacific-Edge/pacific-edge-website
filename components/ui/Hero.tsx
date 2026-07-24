import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { revealCls } from "@/lib/reveal"

/**
 * Hero — the sub-page opening block (the old `.ihero`), rebuilt at the
 * restrained tier: flat, no blurred orbs/glow. Reveals cascade in reading
 * order (eyebrow → title → sub → pain → actions → stats → trust) at the
 * house quint-out timing. `actions` is the CTA row — pass ONE `.btn-mint`
 * plus `.btn-dark`/EmbedLink secondaries (never two mints; §4.1).
 */
export interface HeroStat {
  value: string
  label: string
}

interface HeroProps {
  eyebrow?: ReactNode
  title: ReactNode
  sub?: ReactNode
  pain?: ReactNode
  actions?: ReactNode
  sublinks?: ReactNode
  stats?: HeroStat[]
  trust?: ReactNode
}

export function Hero({ eyebrow, title, sub, pain, actions, sublinks, stats, trust }: HeroProps) {
  return (
    <header className="pe-hero">
      <div className="pe-hero-inner">
        {eyebrow && <div className={cn("pe-eyebrow", "pe-eyebrow--center", revealCls())}>{eyebrow}</div>}
        <h1 className={revealCls(1)}>{title}</h1>
        {sub && <p className={cn("pe-hero-sub", revealCls(2))}>{sub}</p>}
        {pain && <div className={cn("pe-hero-pain", revealCls(3))}>{pain}</div>}
        {actions && <div className={cn("pe-hero-actions", revealCls(4))}>{actions}</div>}
        {sublinks && <div className={cn("pe-hero-sublinks", revealCls(4))}>{sublinks}</div>}
        {stats && stats.length > 0 && (
          <div className={cn("pe-hero-stats", revealCls(5))}>
            {stats.map((s) => (
              <div className="pe-hero-stat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        )}
        {trust && <div className={cn("pe-hero-trust", revealCls(5))}>{trust}</div>}
      </div>
    </header>
  )
}
