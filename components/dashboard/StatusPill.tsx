import type { StatusClass } from "@/lib/dashboard/types"

const STATUS_STYLES: Record<StatusClass, string> = {
  ok: "text-navy-700 bg-navy-900/8 border-navy-900/15",
  warn: "text-amber-800 bg-amber-500/10 border-amber-500/25",
  new: "text-orange-800 bg-orange-500/10 border-orange-500/25",
  gold: "text-ash-500 bg-ash-400/15 border-ash-400/30",
}

export function StatusPill({
  children,
  status = "ok",
  className = "",
}: {
  children: React.ReactNode
  status?: StatusClass
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center font-ui text-[10px] font-medium uppercase tracking-wide px-2.5 py-1 rounded-full border ${STATUS_STYLES[status]} ${className}`}
    >
      {children}
    </span>
  )
}

export function valueClassName(token?: string): string {
  if (token === "mint") return "text-navy-700"
  if (token === "warn") return "text-amber-800"
  return "text-navy-900"
}
