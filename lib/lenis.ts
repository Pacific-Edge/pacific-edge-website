import type Lenis from "@studio-freight/lenis"

/**
 * The app-wide Lenis instance, set by LenisProvider on the client.
 * Returns undefined when smooth scroll is disabled (reduced-motion) or on the
 * server — callers should fall back to native scrolling.
 */
export function getLenis(): Lenis | undefined {
  if (typeof window === "undefined") return undefined
  return (window as unknown as { __lenis?: Lenis }).__lenis
}
