/**
 * Scroll-reveal className helper for sub-page components. Pairs with the global
 * `ScrollReveal` observer (adds `.in` on enter) and the retimed `.reveal` /
 * `.d1`–`.d6` motion in styles/legacy.css (quint-out glide, staggered by delay).
 * `delay` is the stagger step index (0 = no delay, 1–6 = .d1–.d6).
 */
export function revealCls(delay = 0): string {
  return delay > 0 ? `reveal d${Math.min(Math.max(delay, 1), 6)}` : "reveal"
}
