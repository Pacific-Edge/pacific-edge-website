"use client"

import { useMemo, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import {
  getDashboardPreviewSkin,
  type DashboardIndustry,
  type DashboardPreviewSkin,
  type PreviewCard,
} from "@/lib/dashboard"
import { industryLabel } from "@/lib/dashboard/labels"
import { StatusPill, valueClassName } from "@/components/dashboard/StatusPill"
import { EASE_OUT } from "@/lib/motion"

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
  const mockRef = useRef<HTMLDivElement>(null)
  const [view, setView] = useState<PreviewView>("live")
  const skin = useMemo(() => getDashboardPreviewSkin(industry), [industry])
  const inView = useInView(mockRef, { once: false, margin: "-80px" })

  const industries: DashboardIndustry[] = showIndustryPicker
    ? ["all", "restaurants", "salons", "trades", "retail", "dental"]
    : []

  return (
    <div
      ref={mockRef}
      className={`rounded-2xl border border-ash-300/50 bg-white-100 shadow-card overflow-hidden ${className}`}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-ash-300/40 bg-white-50/60">
        <div className="w-2.5 h-2.5 rounded-full bg-ash-300/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-ash-300/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-ash-300/50" />
        <div className="ml-3 flex items-center gap-1.5 bg-white-100 rounded-md px-3 h-6 flex-1 max-w-[220px]">
          <div className="w-2.5 h-2.5 rounded-full border border-ash-300/60" />
          <span className="font-ui text-[10px] text-midnight-900/30 tracking-tight">app.pacificedge.ai</span>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6 pb-5 border-b border-ash-300/35">
          <div className="font-display text-sm font-bold text-midnight-900">Pacific Edge</div>

          <div className="flex gap-1 overflow-x-auto scrollbar-none bg-white-50 border border-ash-300/40 rounded-lg p-1">
            {PREVIEW_VIEWS.map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setView(v)}
                className={`font-ui text-xs sm:text-sm px-3 py-2 rounded-md whitespace-nowrap transition-colors ${
                  view === v
                    ? "bg-white-50 text-midnight-900 shadow-soft border border-ash-300/40"
                    : "text-midnight-900/55 hover:text-midnight-900"
                }`}
              >
                {VIEW_LABELS[v]}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2 font-ui text-[10px] uppercase tracking-widest text-midnight-900/45">
            <span className="w-1.5 h-1.5 rounded-full bg-midnight-700 animate-pulse" />
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
                    ? "bg-midnight-900 text-white-50 border-midnight-900"
                    : "bg-transparent text-midnight-900/60 border-ash-300/60 hover:border-midnight-900/30"
                }`}
              >
                {industryLabel(ind)}
              </button>
            ))}
          </div>
        )}

        <PreviewViewPanel view={view} skin={skin} animate={inView} />
      </div>
    </div>
  )
}

function PreviewViewPanel({
  view,
  skin,
  animate,
}: {
  view: PreviewView
  skin: DashboardPreviewSkin
  animate: boolean
}) {
  if (view === "live") return <LiveView skin={skin} animate={animate} />
  if (view === "calls") return <CallsView skin={skin} animate={animate} />
  if (view === "reviews") return <ReviewsView skin={skin} animate={animate} />
  if (view === "workflows") return <WorkflowsView skin={skin} animate={animate} />
  return <InsightsView skin={skin} animate={animate} />
}

function StatsGrid({ skin, animate }: { skin: DashboardPreviewSkin; animate: boolean }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
      {skin.stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={false}
          animate={animate ? { opacity: 1, y: 0 } : { opacity: 0.72, y: 8 }}
          transition={{ duration: 0.45, delay: index * 0.04, ease: EASE_OUT }}
          className="rounded-xl border border-ash-300/40 bg-white-50 p-4 hover:border-ash-300/70 transition-colors"
        >
          <p className="eyebrow text-ash-500 mb-2">{stat.label}</p>
          <p className="font-display text-3xl text-midnight-900 leading-none mb-1">{stat.value}</p>
          <p className="font-ui text-[11px] text-midnight-900/50">{stat.sub}</p>
        </motion.div>
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
          className="rounded-xl border border-ash-300/40 bg-white-50 p-4 hover:border-midnight-900/15 transition-colors"
        >
          <div className="flex items-start justify-between gap-2 mb-3">
            <div>
              <p className="font-ui text-sm font-medium text-midnight-900">{card.id}</p>
              <p className="font-ui text-[10px] uppercase tracking-wide text-midnight-900/40 mt-0.5">
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
          className="flex items-center gap-3 px-4 py-3 rounded-lg border border-ash-300/35 bg-white-50/80 font-ui text-sm text-midnight-900/70"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-midnight-700 shrink-0" />
          {alert}
        </div>
      ))}
    </div>
  )
}

function LiveView({ skin, animate }: { skin: DashboardPreviewSkin; animate: boolean }) {
  return (
    <>
      <StatsGrid skin={skin} animate={animate} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-5">
        <div className="rounded-xl border border-ash-300/40 bg-white-50 p-5">
          <p className="eyebrow text-ash-500 mb-3">Response time · 24h</p>
          <p className="font-display text-5xl text-midnight-900">0:23</p>
          <p className="font-ui text-xs text-midnight-700 mt-1">37s faster than last week</p>
          <Sparkline active={animate} />
        </div>
        <div className="rounded-xl border border-ash-300/40 bg-white-50 p-5">
          <p className="eyebrow text-ash-500 mb-3">Activity · Vancouver</p>
          <div className="relative h-28 rounded-lg bg-white-100 border border-ash-300/30 overflow-hidden">
            <div className="absolute top-[35%] left-[48%] w-2 h-2 rounded-full bg-midnight-700 shadow-[0_0_0_4px_var(--overlay-dark-08)]" />
            <div className="absolute top-[60%] left-[25%] w-1.5 h-1.5 rounded-full bg-ash-400/80" />
            <div className="absolute top-[48%] left-[75%] w-1.5 h-1.5 rounded-full bg-ash-400/80" />
          </div>
          <p className="font-ui text-[11px] text-midnight-900/45 mt-2">142 active · 23 new today</p>
        </div>
      </div>
      <CustomerCards cards={skin.cards} />
      <AlertsList alerts={skin.alerts} />
    </>
  )
}

function CallsView({ skin, animate }: { skin: DashboardPreviewSkin; animate: boolean }) {
  return (
    <>
      <StatsGrid skin={skin} animate={animate} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-5">
        <div className="rounded-xl border border-ash-300/40 bg-white-50 p-5">
          <p className="eyebrow text-ash-500 mb-3">Hourly volume</p>
          <div className="flex items-end gap-1 h-24">
            {[18, 12, 25, 38, 55, 70, 88, 72, 60, 42, 28, 18].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-midnight-900/15 hover:bg-midnight-900/25 transition-colors"
                style={{
                  height: `${h}%`,
                  transform: animate ? "scaleY(1)" : "scaleY(0.18)",
                  transformOrigin: "bottom",
                  transition: `transform 520ms var(--ease-out) ${i * 30}ms`,
                }}
              />
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-ash-300/40 bg-white-50 p-5 flex flex-col items-center justify-center">
          <p className="eyebrow text-ash-500 mb-3 self-start w-full">Channel mix</p>
          <p className="font-display text-4xl text-midnight-900">47</p>
          <p className="font-ui text-xs text-midnight-900/45 mb-4">calls today</p>
          <div className="w-full space-y-2 font-ui text-xs text-midnight-900/60">
            <div className="flex justify-between"><span>Inbound voice</span><span>62%</span></div>
            <div className="flex justify-between"><span>Platform text reply</span><span>25%</span></div>
            <div className="flex justify-between"><span>Voicemail</span><span>13%</span></div>
          </div>
        </div>
      </div>
      <CustomerCards cards={skin.cards} />
      <AlertsList alerts={skin.alerts} />
    </>
  )
}

function ReviewsView({ skin, animate }: { skin: DashboardPreviewSkin; animate: boolean }) {
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
      <StatsGrid skin={reviewStats} animate={animate} />
      <CustomerCards cards={skin.cards} />
      <AlertsList alerts={skin.alerts} />
    </>
  )
}

function WorkflowsView({ skin, animate }: { skin: DashboardPreviewSkin; animate: boolean }) {
  return (
    <>
      <StatsGrid skin={skin} animate={animate} />
      <div className="rounded-xl border border-ash-300/40 bg-white-50 p-5 mb-5">
        <p className="eyebrow text-ash-500 mb-4">Active workflows</p>
        <div className="space-y-3">
          {["Missed call text-back", "Waitlist refill", "Review draft & approve", "Recall reminder"].map(
            (name, i) => (
              <div key={name} className="flex items-center justify-between gap-4 py-2 border-b border-ash-300/25 last:border-0">
                <span className="font-ui text-sm text-midnight-900">{name}</span>
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

function InsightsView({ skin, animate }: { skin: DashboardPreviewSkin; animate: boolean }) {
  return (
    <>
      <StatsGrid skin={skin} animate={animate} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
        <div className="rounded-xl border border-ash-300/40 bg-white-50 p-5">
          <p className="eyebrow text-ash-500 mb-2">Revenue recovered</p>
          <p className="font-display text-4xl text-midnight-900">{skin.stats[3]?.value ?? "$3,120"}</p>
          <p className="font-ui text-xs text-midnight-700 mt-1">+22% vs last week</p>
        </div>
        <div className="rounded-xl border border-ash-300/40 bg-white-50 p-5">
          <p className="eyebrow text-ash-500 mb-2">Slots saved</p>
          <p className="font-display text-4xl text-midnight-900">14</p>
          <p className="font-ui text-xs text-midnight-900/50 mt-1">cancellations refilled</p>
        </div>
      </div>
      <AlertsList alerts={skin.alerts} />
    </>
  )
}

function Sparkline({ active }: { active: boolean }) {
  return (
    <div className="mt-4 h-16 rounded-lg border border-ash-300/30 bg-gradient-to-t from-midnight-900/10 to-transparent p-3">
      <svg viewBox="0 0 220 48" className="h-full w-full" role="img" aria-label="Response time trend">
        <path
          d="M4 36 C32 18 48 42 72 27 S112 15 136 22 170 42 216 10"
          fill="none"
          stroke="var(--color-electric-500)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="260"
          strokeDashoffset={active ? 0 : 260}
          style={{ transition: "stroke-dashoffset 900ms var(--ease-out)" }}
        />
      </svg>
    </div>
  )
}
