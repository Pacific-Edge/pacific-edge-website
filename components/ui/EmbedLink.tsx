import Link from "next/link"
import type { MouseEventHandler, ReactNode } from "react"

import { cn } from "@/lib/utils"

type EmbedLinkVariant = "light" | "dark"

type EmbedLinkProps = {
  children: ReactNode
  variant?: EmbedLinkVariant
  className?: string
  href?: string
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>
}

/**
 * EmbedLink — the site's non-CTA archetype: underlined text + an arrow, used
 * for secondary "explore / read more" actions instead of a filled button
 * (see .btn-dark/.btn-mint for the CTA archetype). Renders a Next `<Link>`
 * when `href` is given, otherwise a `<button>` (e.g. modal triggers).
 * `variant="dark"` recolors it solid near-white for dark/saturated fills
 * (black or mint-gradient cards); the default `variant="light"` is solid
 * near-black, for the cream page bg. Grayscale only — no mint on hover, just
 * a shade nudge (dark lightens, light darkens). See .embed-link in
 * styles/legacy.css.
 */
export default function EmbedLink({ children, variant = "light", className, href, onClick }: EmbedLinkProps) {
  const cls = cn("embed-link", variant === "dark" && "embed-link--on-dark", className)
  const content = (
    <>
      <span className="el-text">{children}</span>
      <span className="arr" aria-hidden="true">→</span>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={cls} onClick={onClick as MouseEventHandler<HTMLAnchorElement>}>
        {content}
      </Link>
    )
  }

  return (
    <button type="button" className={cls} onClick={onClick as MouseEventHandler<HTMLButtonElement>}>
      {content}
    </button>
  )
}
