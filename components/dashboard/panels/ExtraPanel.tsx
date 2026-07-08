"use client"

import type { ClientDashboardData } from "@/lib/dashboard"
import { CallIcon } from "@/components/dashboard/CallIcon"
import { StatusPill } from "@/components/dashboard/StatusPill"

export default function ExtraPanel({ data }: { data: ClientDashboardData }) {
  return (
    <div className="rounded-xl border border-ash-300/40 bg-cream-50 p-5">
      <div className="flex items-center justify-between mb-4">
        <p className="font-ui text-sm font-medium text-navy-900">{data.extraTitle}</p>
        <p className="font-ui text-[10px] uppercase tracking-wide text-navy-900/40">Handled by Janice</p>
      </div>
      <div className="divide-y divide-ash-300/30">
        {data.extra.map(([icon, title, sub, pill, statusClass], i) => (
          <div key={i} className="flex items-center gap-4 py-3.5">
            <div className="w-10 h-10 rounded-lg bg-cream-100 border border-ash-300/40 flex items-center justify-center shrink-0">
              <CallIcon name={icon} className="w-4 h-4 text-navy-700" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-ui text-sm font-medium text-navy-900">{title}</p>
              <p className="font-ui text-xs text-navy-900/45">{sub}</p>
            </div>
            <StatusPill status={statusClass}>{pill}</StatusPill>
          </div>
        ))}
      </div>
    </div>
  )
}
