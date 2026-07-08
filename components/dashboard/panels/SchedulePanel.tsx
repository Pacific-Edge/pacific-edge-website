"use client"

import { useMemo, useState } from "react"
import type { ClientDashboardData } from "@/lib/dashboard"
import { StatusPill } from "@/components/dashboard/StatusPill"

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const
const WEEKDAY_FULL = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const

function dayMeta(offset: number) {
  const dt = new Date()
  dt.setDate(dt.getDate() + offset)
  return {
    ab: WEEKDAYS[dt.getDay()],
    num: dt.getDate(),
    full: offset === 0 ? "Today" : offset === 1 ? "Tomorrow" : WEEKDAY_FULL[dt.getDay()],
  }
}

export default function SchedulePanel({ data }: { data: ClientDashboardData }) {
  const [dayIndex, setDayIndex] = useState(0)
  const days = useMemo(() => data.schedule.map((_, i) => dayMeta(i)), [data.schedule])
  const slots = data.schedule[dayIndex] ?? []

  return (
    <div className="rounded-xl border border-ash-300/40 bg-cream-50 p-5">
      <div className="flex items-center justify-between mb-4">
        <p className="font-ui text-sm font-medium text-navy-900">{data.schedTitle}</p>
        <p className="font-ui text-[10px] uppercase tracking-wide text-navy-900/40">This week</p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-none">
        {days.map((day, i) => {
          const count = data.schedule[i]?.length ?? 0
          return (
            <button
              key={i}
              type="button"
              onClick={() => setDayIndex(i)}
              className={`relative flex flex-col items-center min-w-[64px] px-3 py-2.5 rounded-xl border transition-colors ${
                dayIndex === i
                  ? "bg-navy-900 text-cream-50 border-navy-900"
                  : "bg-cream-50 text-navy-900 border-ash-300/40 hover:border-navy-900/20"
              }`}
            >
              <span className="font-ui text-[10px] uppercase tracking-wide opacity-70">{day.ab}</span>
              <span className="font-ui text-lg font-bold">{day.num}</span>
              {count > 0 && (
                <span
                  className={`absolute -top-1 -right-1 min-w-4 h-4 px-1 rounded-full text-[9px] font-medium flex items-center justify-center ${
                    dayIndex === i ? "bg-cream-50 text-navy-900" : "bg-navy-900 text-cream-50"
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          )
        })}
      </div>

      <p className="eyebrow text-ash-500 mb-3">{days[dayIndex]?.full}</p>

      {slots.length === 0 ? (
        <p className="font-ui text-sm text-navy-900/45 py-6 text-center">Nothing scheduled</p>
      ) : (
        <div className="divide-y divide-ash-300/30">
          {slots.map(([time, who, detail, status, statusClass], i) => (
            <div key={i} className="flex items-center gap-4 py-3.5">
              <p className="font-ui text-sm font-semibold text-navy-700 w-20 shrink-0 tabular-nums">{time}</p>
              <div className="flex-1 min-w-0">
                <p className="font-ui text-sm font-medium text-navy-900">{who}</p>
                <p className="font-ui text-xs text-navy-900/45">{detail}</p>
              </div>
              <StatusPill status={statusClass}>{status}</StatusPill>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
