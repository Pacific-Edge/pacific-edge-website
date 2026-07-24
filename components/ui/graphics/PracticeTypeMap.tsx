/**
 * The two bespoke dental practice-type map illustrations shown inside the
 * .ptype-phone screens: a single-location route+pin, and a three-pin
 * multi-location network. Fixed artwork, selected by variant.
 */
export function PracticeTypeMap({ variant }: { variant: "single" | "multi" }) {
  if (variant === "single") {
    return (
      <svg viewBox="0 0 120 158" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <rect width="120" height="158" fill="#f6f7f8" />
        <g fill="rgba(74,240,192,.12)"><rect x="8" y="10" width="32" height="26" rx="4" /><rect x="80" y="96" width="32" height="44" rx="4" /><rect x="12" y="110" width="40" height="34" rx="4" /></g>
        <g stroke="rgba(28,25,20,.09)" strokeWidth="2"><line x1="0" y1="48" x2="120" y2="48" /><line x1="0" y1="94" x2="120" y2="94" /><line x1="46" y1="0" x2="46" y2="158" /><line x1="86" y1="0" x2="86" y2="158" /></g>
        <path d="M22 138 L46 94 L86 66 L102 30" fill="none" stroke="#0a9d76" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 7" opacity=".75" />
        <g transform="translate(60,84)"><ellipse cx="0" cy="3" rx="7" ry="2.5" fill="rgba(28,25,20,.18)" /><path d="M0 0 C-3,-6 -11,-10 -11,-20 a11,11 0 1,1 22,0 C11,-10 3,-6 0,0 Z" fill="#0a9d76" /><circle cx="0" cy="-20" r="4.6" fill="#fff" /></g>
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 120 158" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="120" height="158" fill="#f6f7f8" />
      <g fill="rgba(74,240,192,.12)"><rect x="10" y="14" width="28" height="24" rx="4" /><rect x="82" y="20" width="28" height="28" rx="4" /><rect x="48" y="104" width="34" height="36" rx="4" /></g>
      <g stroke="rgba(28,25,20,.09)" strokeWidth="2"><line x1="0" y1="58" x2="120" y2="58" /><line x1="0" y1="104" x2="120" y2="104" /><line x1="40" y1="0" x2="40" y2="158" /><line x1="84" y1="0" x2="84" y2="158" /></g>
      <path d="M32 48 L90 44 M90 44 L64 120 M64 120 L32 48" fill="none" stroke="#0a9d76" strokeWidth="2" strokeDasharray="1 6" strokeLinecap="round" opacity=".6" />
      <g fill="#0a9d76"><g transform="translate(32,50) scale(.78)"><path d="M0 0 C-3,-6 -11,-10 -11,-20 a11,11 0 1,1 22,0 C11,-10 3,-6 0,0 Z" /><circle cx="0" cy="-20" r="4.6" fill="#fff" /></g><g transform="translate(90,46) scale(.78)"><path d="M0 0 C-3,-6 -11,-10 -11,-20 a11,11 0 1,1 22,0 C11,-10 3,-6 0,0 Z" /><circle cx="0" cy="-20" r="4.6" fill="#fff" /></g><g transform="translate(64,122) scale(.92)"><path d="M0 0 C-3,-6 -11,-10 -11,-20 a11,11 0 1,1 22,0 C11,-10 3,-6 0,0 Z" /><circle cx="0" cy="-20" r="4.6" fill="#fff" /></g></g>
    </svg>
  )
}
