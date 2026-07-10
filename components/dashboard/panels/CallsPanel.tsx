"use client"

import { useState } from "react"
import type { ClientDashboardData } from "@/lib/dashboard"
import { CallIcon } from "@/components/dashboard/CallIcon"
import { StatusPill } from "@/components/dashboard/StatusPill"

export default function CallsPanel({ data }: { data: ClientDashboardData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {data.chips.map(([label, value]) => (
          <div key={label} className="rounded-xl border border-ash-300/40 bg-white-50 p-4">
            <p className="eyebrow text-ash-500 mb-2">{label}</p>
            <p className="font-display text-2xl text-midnight-900">{value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-ash-300/40 bg-white-50 p-5">
        <div className="flex items-center justify-between mb-4">
          <p className="font-ui text-sm font-medium text-midnight-900 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            Live now
          </p>
          <p className="font-ui text-[10px] uppercase tracking-wide text-midnight-900/40">Call in progress</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-xl border border-midnight-900/10 bg-midnight-900/[0.03]">
          <div className="w-12 h-12 rounded-xl bg-midnight-900/10 flex items-center justify-center shrink-0">
            <CallIcon name="phone" className="w-5 h-5 text-midnight-700" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-ui text-sm font-medium text-midnight-900">{data.live.name}</p>
            <p className="font-ui text-xs text-midnight-900/45 mt-0.5">{data.live.sub}</p>
            <p className="font-ui text-sm text-midnight-900/60 italic mt-2">{data.live.line}</p>
          </div>
          <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0">
            <p className="font-ui text-sm font-medium tabular-nums text-midnight-900">0:47</p>
            <StatusPill status="ok">Platform handling</StatusPill>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-ash-300/40 bg-white-50 p-5">
        <div className="flex items-center justify-between mb-3">
          <p className="font-ui text-sm font-medium text-midnight-900">Today&apos;s calls</p>
          <p className="font-ui text-[10px] uppercase tracking-wide text-midnight-900/40">Tap to expand</p>
        </div>
        <div className="divide-y divide-ash-300/30">
          {data.calls.map((call, i) => (
            <div key={`${call.who}-${i}`}>
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center gap-4 py-3.5 text-left hover:bg-white-100/50 rounded-lg px-1 transition-colors"
                aria-expanded={openIndex === i}
              >
                <div className="w-10 h-10 rounded-lg bg-white-100 border border-ash-300/40 flex items-center justify-center shrink-0">
                  <CallIcon name={call.icon} className="w-4 h-4 text-midnight-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-ui text-sm font-medium text-midnight-900">{call.who}</p>
                  <p className="font-ui text-xs text-midnight-900/45">{call.sub}</p>
                </div>
                <StatusPill status={call.status}>{call.pill}</StatusPill>
                <span
                  className={`text-midnight-900/30 text-xs transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  aria-hidden
                >
                  ▼
                </span>
              </button>
              {openIndex === i && (
                <p className="pb-4 pl-14 pr-4 font-ui text-sm text-midnight-900/65 leading-relaxed">
                  {call.detail}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
