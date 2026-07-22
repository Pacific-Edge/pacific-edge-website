import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"

import { cn } from "@/lib/utils"
import CardCurveBackground from "@/components/ui/CardCurveBackground"

/**
 * StyledContainer — one surface with two fully independent axes: a `background`
 * color and a decorative line `pattern`. Swapping the pattern never touches the
 * background and vice versa; the CSS engine lives in `styles/containers.css`
 * (`.sc`, `.sc-bg-*`, `.sc-pat-*`). Patterns are pure CSS (repeating-linear-
 * gradient), so this stays a plain server component and works inside static
 * sub-pages. Polymorphic via `as` (e.g. render as a Next `<Link>`).
 */
type Background = "mint" | "black" | "white"
type Pattern = "diag-wide" | "mesh" | "diag-tight" | "none"
/** Optional line-color override. Omit to use the background's own contrast line color. */
type Line = "mint"

type StyledContainerProps<T extends ElementType> = {
  as?: T
  background: Background
  pattern: Pattern
  line?: Line
  className?: string
  children?: ReactNode
} & Omit<ComponentPropsWithoutRef<T>, "as" | "background" | "pattern" | "line" | "className" | "children">

export default function StyledContainer<T extends ElementType = "div">({
  as,
  background,
  pattern,
  line,
  className,
  children,
  ...rest
}: StyledContainerProps<T>) {
  const Comp = (as ?? "div") as ElementType
  // `diag-wide` is drawn by the CardCurveBackground component (animated two-layer curve
  // field), not a CSS ::before pattern — so it's rendered as a `.sc-curve` background layer
  // rather than added as an `sc-pat-*` class. mesh/diag-tight remain pure-CSS patterns.
  const isCurve = pattern === "diag-wide"
  return (
    <Comp
      className={cn(
        "sc",
        `sc-bg-${background}`,
        !isCurve && pattern !== "none" && `sc-pat-${pattern}`,
        line && `sc-line-${line}`,
        className,
      )}
      {...rest}
    >
      {isCurve && <CardCurveBackground className="sc-curve" />}
      {children}
    </Comp>
  )
}
