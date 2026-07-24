import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { revealCls } from "@/lib/reveal"
import { CheckMark } from "./icons"

/**
 * FeatureRow — an alternating text / visual solution row (the old `.frow`).
 * `visual` is any preview element (a `.mock` feed, a phone/chat demo, an
 * image). `reversed` flips the column order. Points render with the shared
 * mint `CheckMark` (color comes from the token context, no hardcoded hue).
 */
interface FeatureRowProps {
  eyebrow?: ReactNode
  title: ReactNode
  body: ReactNode
  points?: ReactNode[]
  visual: ReactNode
  reversed?: boolean
}

export function FeatureRow({ eyebrow, title, body, points, visual, reversed }: FeatureRowProps) {
  return (
    <div className={cn("pe-frow", reversed && "pe-frow--rev")}>
      <div className={cn("pe-frow-text", revealCls())}>
        {eyebrow && <div className="pe-eyebrow">{eyebrow}</div>}
        <h3>{title}</h3>
        <p>{body}</p>
        {points && points.length > 0 && (
          <ul className="pe-frow-list">
            {points.map((p, i) => (
              <li key={i}>
                <CheckMark />
                {p}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={cn("pe-frow-visual", revealCls(2))}>{visual}</div>
    </div>
  )
}

/** FeatureRows — vertical stack wrapper for a set of FeatureRow (the old `.frows`). */
export function FeatureRows({ children }: { children: ReactNode }) {
  return <div className="pe-frows">{children}</div>
}
