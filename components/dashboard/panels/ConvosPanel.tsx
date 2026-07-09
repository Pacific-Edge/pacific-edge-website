"use client"

import { useState } from "react"
import type { ClientDashboardData } from "@/lib/dashboard"
import { StatusPill } from "@/components/dashboard/StatusPill"

export default function ConvosPanel({ data }: { data: ClientDashboardData }) {
  const [activeId, setActiveId] = useState(data.convos[0]?.id ?? "")

  const active = data.convos.find((c) => c.id === activeId) ?? data.convos[0]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,320px)_1fr] gap-4">
      <div className="rounded-xl border border-ash-300/40 bg-cream-50 p-4">
        <p className="font-ui text-sm font-medium text-navy-900 mb-3">Inbox</p>
        <div className="space-y-1">
          {data.convos.map((convo) => (
            <button
              key={convo.id}
              type="button"
              onClick={() => setActiveId(convo.id)}
              className={`w-full flex gap-3 p-3 rounded-lg text-left transition-colors ${
                active?.id === convo.id
                  ? "bg-navy-900/5 border border-navy-900/10"
                  : "hover:bg-cream-100 border border-transparent"
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-navy-900/10 flex items-center justify-center font-ui text-sm font-semibold text-navy-700 shrink-0">
                {convo.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between gap-2">
                  <p className="font-ui text-sm font-medium text-navy-900 truncate">{convo.name}</p>
                  <span className="font-ui text-[10px] text-navy-900/40 shrink-0">{convo.time}</span>
                </div>
                <p className="font-ui text-xs text-navy-900/45 truncate mt-0.5">{convo.last}</p>
                <p className="eyebrow text-ash-500 mt-1">{convo.channel}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="rounded-xl border border-ash-300/40 bg-cream-50 p-4 flex flex-col min-h-[360px]">
          <div className="pb-4 border-b border-ash-300/30 mb-4">
            <p className="font-ui text-sm font-medium text-navy-900">{active.name}</p>
            <p className="font-ui text-[10px] uppercase tracking-wide text-navy-900/40 mt-1 flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-navy-700" />
                {active.channel}
              </span>
              <StatusPill status={active.statusClass}>{active.status}</StatusPill>
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-2 overflow-y-auto max-h-80 mb-4">
            {active.messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl font-ui text-sm leading-relaxed ${
                  msg.from === "customer"
                    ? "self-end bg-[#007AFF] text-white rounded-br-md"
                    : "self-start bg-[#E9E9EB] text-navy-900 rounded-bl-md"
                }`}
              >
                {msg.text}
                {msg.meta && (
                  <span className="block text-[9px] opacity-70 mt-1 uppercase tracking-wide">{msg.meta}</span>
                )}
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-ash-300/30 flex items-center gap-3">
            <input
              type="text"
              disabled
              placeholder="Your team is handling this thread"
              className="flex-1 font-ui text-sm px-3 py-2.5 rounded-lg border border-ash-300/40 bg-cream-100 text-navy-900/40"
            />
            <span className="eyebrow text-navy-700 hidden sm:inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-navy-700" />
              Platform
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
