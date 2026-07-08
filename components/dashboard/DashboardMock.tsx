"use client"

import { useMemo, useState } from "react"
import {
  getDashboardPreviewSkin,
  type DashboardIndustry,
  type DashboardPreviewSkin,
  type PreviewCard,
} from "@/lib/dashboard"
import { industryLabel } from "@/lib/dashboard/labels"
import { StatusPill, valueClassName } from "@/components/dashboard/StatusPill"

const PREVIEW_VIEWS = ["live", "calls", "reviews", "workflows", "insights"] as const
type PreviewView = (typeof PREVIEW_VIEWS)[number]

const VIEW_LABELS: Record<PreviewView, string> = {
  live: "Live",
  calls: "Calls",
  reviews: "Reviews",
  workflows: "Workflows",
  insights: "Insights",
}

type DashboardMockProps = {
  industry?: DashboardIndustry
  /** Show industry picker pills (public /dashboard page) */
  showIndustryPicker?: boolean
  onIndustryChange?: (industry: DashboardIndustry) => void
  className?: string
}

export default function DashboardMock({
  industry = "all",
  showIndustryPicker = false,
  onIndustryChange,
  className = "",
}: DashboardMockProps) {
  const [view, setView] = useState<PreviewView>("live")
  const skin = useMemo(() => getDashboardPreviewSkin(industry), [industry])

  const industries: DashboardIndustry[] = showIndustryPicker
    ? ["all", "restaurants", "salons", "trades", "retail", "dental"]
    : []

  return (
    <div
      className={`rounded-2xl border border-ash-300/50 bg-cream-100 shadow-card overflow-hidden ${className}`}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-ash-300/40 bg-cream-50/60">
        <div className="w-2.5 h-2.5 rounded-full bg-ash-300/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-ash-300/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-ash-300/50" />
        <div className="ml-3 flex items-center gap-1.5 bg-cream-100 rounded-md px-3 h-6 flex-1 max-w-[220px]">
          <div className="w-2.5 h-2.5 rounded-full border border-ash-300/60" />
          <span className="font-ui text-[10px] text-navy-900/30 tracking-tight">app.pacificedge.ai</span>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6 pb-5 border-b border-ash-300/35">
          <div className="font-display text-sm font-bold text-navy-900">Pacific Edge</div>

          <div className="flex gap-1 overflow-x-auto scrollbar-none bg-cream-50 border border-ash-300/40 rounded-lg p-1">
            {PREVIEW_VIEWS.map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setView(v)}
                className={`font-ui text-xs sm:text-sm px-3 py-2 rounded-md whitespace-nowrap transition-colors ${
                  view === v
                    ? "bg-cream-50 text-navy-900 shadow-soft border border-ash-300/40"
                    : "text-navy-900/55 hover:text-navy-900"
                }`}
              >
                {VIEW_LABELS[v]}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2 font-ui text-[10px] uppercase tracking-widest text-navy-900/45">
            <span className="w-1.5 h-1.5 rounded-full bg-navy-700 animate-pulse" />
            Live
          </div>
        </div>

        {showIndustryPicker && (
          <div className="flex flex-wrap gap-2 mb-6">
            {industries.map((ind) => (
              <button
                key={ind}
                type="button"
                onClick={() => onIndustryChange?.(ind)}
                className={`font-ui text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  industry === ind
                    ? "bg-navy-900 text-cream-50 border-navy-900"
                    : "bg-transparent text-navy-900/60 border-ash-300/60 hover:border-navy-900/30"
                }`}
              >
                {industryLabel(ind)}
              </button>
            ))}
          </div>
        )}

        <PreviewViewPanel view={view} skin={skin} />
      </div>
    </div>
  )
}

function PreviewViewPanel({ view, skin }: { view: PreviewView; skin: DashboardPreviewSkin }) {
  if (view === "live") return <LiveView skin={skin} />
  if (view === "calls") return <CallsView skin={skin} />
  if (view === "reviews") return <ReviewsView skin={skin} />
  if (view === "workflows") return <WorkflowsView skin={skin} />
  return <InsightsView skin={skin} />
}

function StatsGrid({ skin }: { skin: DashboardPreviewSkin }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
      {skin.stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-ash-300/40 bg-cream-50 p-4 hover:border-ash-300/70 transition-colors"
        >
          <p className="eyebrow text-ash-500 mb-2">{stat.label}</p>
          <p className="font-display text-3xl text-navy-900 leading-none mb-1">{stat.value}</p>
          <p className="font-ui text-[11px] text-navy-900/50">{stat.sub}</p>
        </div>
      ))}
    </div>
  )
}

function CustomerCards({ cards }: { cards: PreviewCard[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
      {cards.map((card) => (
        <div
          key={card.id}
          className="rounded-xl border border-ash-300/40 bg-cream-50 p-4 hover:border-navy-900/15 transition-colors"
        >
          <div className="flex items-start justify-between gap-2 mb-3">
            <div>
              <p className="font-ui text-sm font-medium text-navy-900">{card.id}</p>
              <p className="font-ui text-[10px] uppercase tracking-wide text-navy-900/40 mt-0.5">
                {card.channel}
              </p>
            </div>
            <StatusPill status={card.statusClass ?? "ok"}>{card.status}</StatusPill>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {card.grid.map((cell) => (
              <div key={cell.label}>
                <p className="eyebrow text-ash-500 mb-1">{cell.label}</p>
                <p className={`font-ui text-sm font-medium ${valueClassName(cell.valueClass)}`}>
                  {cell.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function AlertsList({ alerts }: { alerts: string[] }) {
  return (
    <div className="space-y-2">
      {alerts.map((alert) => (
        <div
          key={alert}
          className="flex items-center gap-3 px-4 py-3 rounded-lg border border-ash-300/35 bg-cream-50/80 font-ui text-sm text-navy-900/70"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-navy-700 shrink-0" />
          {alert}
        </div>
      ))}
    </div>
  )
}

function LiveView({ skin }: { skin: DashboardPreviewSkin }) {
  return (
    <>
      <StatsGrid skin={skin} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-5">
        <div className="rounded-xl border border-ash-300/40 bg-cream-50 p-5">
          <p className="eyebrow text-ash-500 mb-3">Response time · 24h</p>
          <p className="font-display text-5xl text-navy-900">0:23</p>
          <p className="font-ui text-xs text-navy-700 mt-1">37s faster than last week</p>
          <div className="mt-4 h-16 rounded-lg bg-gradient-to-t from-navy-900/10 to-transparent border border-ash-300/30" />
        </div>
        <div className="rounded-xl border border-ash-300/40 bg-cream-50 p-5">
          <p className="eyebrow text-ash-500 mb-3">Activity · Vancouver</p>
          <div className="relative h-28 rounded-lg bg-cream-100 border border-ash-300/30 overflow-hidden">
            <div className="absolute top-[35%] left-[48%] w-2 h-2 rounded-full bg-navy-700 shadow-[0_0_0_4px_rgba(10,22,40,0.08)]" />
            <div className="absolute top-[60%] left-[25%] w-1.5 h-1.5 rounded-full bg-ash-400/80" />
            <div className="absolute top-[48%] left-[75%] w-1.5 h-1.5 rounded-full bg-ash-400/80" />
          </div>
          <p className="font-ui text-[11px] text-navy-900/45 mt-2">142 active · 23 new today</p>
        </div>
      </div>
      <CustomerCards cards={skin.cards} />
      <AlertsList alerts={skin.alerts} />
    </>
  )
}

function CallsView({ skin }: { skin: DashboardPreviewSkin }) {
  return (
    <>
      <StatsGrid skin={skin} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-5">
        <div className="rounded-xl border border-ash-300/40 bg-cream-50 p-5">
          <p className="eyebrow text-ash-500 mb-3">Hourly volume</p>
          <div className="flex items-end gap-1 h-24">
            {[18, 12, 25, 38, 55, 70, 88, 72, 60, 42, 28, 18].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-navy-900/15 hover:bg-navy-900/25 transition-colors"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-ash-300/40 bg-cream-50 p-5 flex flex-col items-center justify-center">
          <p className="eyebrow text-ash-500 mb-3 self-start w-full">Channel mix</p>
          <p className="font-display text-4xl text-navy-900">47</p>
          <p className="font-ui text-xs text-navy-900/45 mb-4">calls today</p>
          <div className="w-full space-y-2 font-ui text-xs text-navy-900/60">
            <div className="flex justify-between"><span>Inbound voice</span><span>62%</span></div>
            <div className="flex justify-between"><span>AI text reply</span><span>25%</span></div>
            <div className="flex justify-between"><span>Voicemail</span><span>13%</span></div>
          </div>
        </div>
      </div>
      <CustomerCards cards={skin.cards} />
      <AlertsList alerts={skin.alerts} />
    </>
  )
}

function ReviewsView({ skin }: { skin: DashboardPreviewSkin }) {
  const reviewStats = {
    stats: [
      { label: "Avg Rating", value: "4.8★", sub: "+0.2 this month" },
      { label: "This Week", value: "31", sub: "+12 vs last week" },
      { label: "Drafts Ready", value: "5", sub: "awaiting approval" },
      skin.stats[3] ?? { label: "Recovered", value: "$2,847", sub: "this week" },
    ],
    cards: skin.cards,
    alerts: skin.alerts,
  }
  return (
    <>
      <StatsGrid skin={reviewStats} />
      <CustomerCards cards={skin.cards} />
      <AlertsList alerts={skin.alerts} />
    </>
  )
}

function WorkflowsView({ skin }: { skin: DashboardPreviewSkin }) {
  return (
    <>
      <StatsGrid skin={skin} />
      <div className="rounded-xl border border-ash-300/40 bg-cream-50 p-5 mb-5">
        <p className="eyebrow text-ash-500 mb-4">Active workflows</p>
        <div className="space-y-3">
          {["Missed call text-back", "Waitlist refill", "Review draft & approve", "Recall reminder"].map(
            (name, i) => (
              <div key={name} className="flex items-center justify-between gap-4 py-2 border-b border-ash-300/25 last:border-0">
                <span className="font-ui text-sm text-navy-900">{name}</span>
                <StatusPill status={i === 2 ? "warn" : "ok"}>{i === 2 ? "3 pending" : "Running"}</StatusPill>
              </div>
            ),
          )}
        </div>
      </div>
      <AlertsList alerts={skin.alerts} />
    </>
  )
}

function InsightsView({ skin }: { skin: DashboardPreviewSkin }) {
  return (
    <>
      <StatsGrid skin={skin} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
        <div className="rounded-xl border border-ash-300/40 bg-cream-50 p-5">
          <p className="eyebrow text-ash-500 mb-2">Revenue recovered</p>
          <p className="font-display text-4xl text-navy-900">{skin.stats[3]?.value ?? "$3,120"}</p>
          <p className="font-ui text-xs text-navy-700 mt-1">+22% vs last week</p>
        </div>
        <div className="rounded-xl border border-ash-300/40 bg-cream-50 p-5">
          <p className="eyebrow text-ash-500 mb-2">Slots saved</p>
          <p className="font-display text-4xl text-navy-900">14</p>
          <p className="font-ui text-xs text-navy-900/50 mt-1">cancellations refilled</p>
        </div>
      </div>
      <AlertsList alerts={skin.alerts} />
    </>
  )
}
