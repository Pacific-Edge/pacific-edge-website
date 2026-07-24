import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { revealCls } from "@/lib/reveal"

/**
 * CtaPanel — the closing call-to-action block (the old `.icta`), rebuilt flat:
 * no radial-glow backdrop. `action` is the primary CTA (one `.btn-mint`);
 * `bullets` are the reassurance points; `crossLinks` are the sibling-page
 * chips beneath.
 */
export interface CrossLink {
  href: string
  icon: ReactNode
  label: ReactNode
}

interface CtaPanelProps {
  eyebrow: ReactNode
  title: ReactNode
  desc?: ReactNode
  action: ReactNode
  bullets?: ReactNode[]
  crossLinks?: CrossLink[]
}

export function CtaPanel({ eyebrow, title, desc, action, bullets, crossLinks }: CtaPanelProps) {
  return (
    <section className="pe-cta">
      <div className="pe-cta-inner">
        <div className={cn("pe-eyebrow", "pe-eyebrow--center", revealCls())}>{eyebrow}</div>
        <h2 className={cn("pe-cta-title", revealCls(1))}>{title}</h2>
        {desc && <p className={cn("pe-cta-desc", revealCls(2))}>{desc}</p>}
        <div className={cn("pe-cta-actions", revealCls(2))}>{action}</div>
        {bullets && bullets.length > 0 && (
          <div className={cn("pe-cta-bullets", revealCls(3))}>
            {bullets.map((b, i) => (
              <span key={i}>
                <i />
                {b}
              </span>
            ))}
          </div>
        )}
        {crossLinks && crossLinks.length > 0 && (
          <div className={cn("pe-xlinks", revealCls(3))}>
            {crossLinks.map((l) => (
              <a href={l.href} className="pe-xlink" key={l.href}>
                <span>{l.icon}</span>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
