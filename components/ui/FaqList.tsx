import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { revealCls } from "@/lib/reveal"

/**
 * FaqList — the native `<details>` accordion (the old `.faq-list`). One-open-
 * at-a-time behavior is ported in `LegacyBehaviors` (keyed off
 * `details.pe-faq-item`); the +/- icon rotates on open via CSS. Answers accept
 * JSX so inline links are allowed.
 */
export interface FaqEntry {
  q: ReactNode
  a: ReactNode
}

export function FaqList({ items }: { items: FaqEntry[] }) {
  return (
    <div className="pe-faq">
      {items.map((it, i) => (
        <details className={cn("pe-faq-item", revealCls())} key={i}>
          <summary>
            {it.q}
            <span className="pe-faq-ico" aria-hidden="true" />
          </summary>
          <div className="pe-faq-body">{it.a}</div>
        </details>
      ))}
    </div>
  )
}
