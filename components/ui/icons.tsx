/**
 * Shared inline check / cross marks — `currentColor` only (never a hardcoded
 * hue), so they inherit color from the surrounding token context (e.g. the
 * mint `--color-accent-ink` set on `.pe-frow-list li svg`). Replaces the old
 * per-page inline SVGs that hardcoded `#0a9d76`.
 */
export function CheckMark({ size = 18, strokeWidth = 2.4 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function XMark({ size = 12, strokeWidth = 3.4 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  )
}
