"use client"

import { useState } from "react"
import type { ClientSession } from "@/lib/auth/demo-session"
import {
  getClientDashboardData,
  listDashboardIndustries,
  type ClientDashboardData,
  type DashboardIndustry,
} from "@/lib/dashboard"
import { industryLabel } from "@/lib/dashboard/labels"
import AppBar from "@/components/portal/AppBar"
import DashboardMock from "@/components/dashboard/DashboardMock"
import CallsPanel from "@/components/dashboard/panels/CallsPanel"
import ConvosPanel from "@/components/dashboard/panels/ConvosPanel"
import SchedulePanel from "@/components/dashboard/panels/SchedulePanel"
import ExtraPanel from "@/components/dashboard/panels/ExtraPanel"
import ReviewsPanel from "@/components/dashboard/panels/ReviewsPanel"

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "calls", label: "Live Calls", badge: "live" as const },
  { id: "convos", label: "Conversations", badge: 2 },
  { id: "sched", label: "Bookings" },
  { id: "extra", label: "Follow-ups", badge: 4 },
  { id: "reviews", label: "Reviews", badge: "gold" as const },
] as const

type TabId = (typeof TABS)[number]["id"]

export default function ClientDashboard({ session }: { session: ClientSession }) {
  const [industry, setIndustry] = useState<DashboardIndustry>("all")
  const [tab, setTab] = useState<TabId>("overview")
  const data = getClientDashboardData(industry, session)

  return (
    <>
      <AppBar session={session} />
      <main className="container-x py-8 sm:py-10 pb-16">
        <WelcomeHeader session={session} data={data} />
        <IndustrySwitcher industry={industry} onChange={setIndustry} />
        <TabBar tab={tab} onChange={setTab} data={data} />
        <TabPanels tab={tab} industry={industry} data={data} />
        <p className="mt-10 text-center font-ui text-xs text-navy-900/40">
          Demo workspace · Questions?{" "}
          <a
            href="https://cal.com/pacificedge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-700 hover:underline"
          >
            Talk to your Pacific Edge team
          </a>
        </p>
      </main>
    </>
  )
}

function WelcomeHeader({ session, data }: { session: ClientSession; data: ClientDashboardData }) {
  const since = session.since
    ? new Date(session.since).toLocaleDateString("en-CA", { month: "short", year: "numeric" })
    : "—"

  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
      <div>
        <h1 className="text-display-sm text-navy-900">
          Good afternoon, <span className="text-navy-700">{session.name}</span>
        </h1>
        <p className="font-ui text-sm text-navy-900/55 mt-2 max-w-xl">{data.subtitle}</p>
      </div>
      <p className="font-ui text-[10px] uppercase tracking-widest text-navy-900/40 sm:text-right">
        {data.business}
        <br />
        <span className="text-navy-900/55">Client since {since}</span>
      </p>
    </div>
  )
}

function IndustrySwitcher({
  industry,
  onChange,
}: {
  industry: DashboardIndustry
  onChange: (ind: DashboardIndustry) => void
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 p-4 rounded-xl border border-ash-300/40 bg-cream-50">
      <p className="eyebrow text-ash-500 shrink-0">Industry view</p>
      <div className="flex gap-1.5 flex-wrap bg-cream-100 border border-ash-300/40 rounded-xl p-1.5">
        {listDashboardIndustries().map((ind) => (
          <button
            key={ind}
            type="button"
            onClick={() => onChange(ind)}
            className={`font-ui text-sm px-3 py-2 rounded-lg whitespace-nowrap transition-colors ${
              industry === ind
                ? "bg-cream-50 text-navy-900 shadow-soft"
                : "text-navy-900/55 hover:text-navy-900"
            }`}
          >
            {industryLabel(ind)}
          </button>
        ))}
      </div>
    </div>
  )
}

function TabBar({
  tab,
  onChange,
  data,
}: {
  tab: TabId
  onChange: (tab: TabId) => void
  data: ClientDashboardData
}) {
  return (
    <div className="flex gap-1 overflow-x-auto scrollbar-none bg-cream-100 border border-ash-300/40 rounded-xl p-1.5 mb-6 max-w-full">
      {TABS.map((t) => {
        const label =
          t.id === "sched" ? data.schedLabel : t.id === "extra" ? data.extraLabel : t.label
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => onChange(t.id)}
            className={`font-ui text-sm px-3 py-2.5 rounded-lg whitespace-nowrap inline-flex items-center gap-2 transition-colors ${
              tab === t.id
                ? "bg-cream-50 text-navy-900 shadow-soft"
                : "text-navy-900/55 hover:text-navy-900"
            }`}
          >
            {label}
            {t.id === "calls" && tab !== "calls" && (
              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-orange-500/15 text-orange-800">
                1
              </span>
            )}
            {t.id === "convos" && (
              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-navy-900 text-cream-50">
                {data.convos.length}
              </span>
            )}
            {t.id === "extra" && (
              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-navy-900/10 text-navy-900">
                {data.extra.length}
              </span>
            )}
            {t.id === "reviews" && (
              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-ash-400/20 text-ash-500">
                {data.reviews.length}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}

function TabPanels({
  tab,
  industry,
  data,
}: {
  tab: TabId
  industry: DashboardIndustry
  data: ClientDashboardData
}) {
  return (
    <>
      {/* Overview stays mounted — collapsed when hidden */}
      <section
        className={tab === "overview" ? "block" : "h-0 overflow-hidden pointer-events-none"}
        aria-hidden={tab !== "overview"}
      >
        <div className="rounded-2xl border border-ash-300/40 overflow-hidden shadow-card">
          <DashboardMock industry={industry} />
        </div>
        <p className="mt-3 text-center font-ui text-[11px] text-navy-900/40">
          Live dashboard · switch industry above to see it tailored
        </p>
      </section>

      {tab === "calls" && <CallsPanel key={industry} data={data} />}
      {tab === "convos" && <ConvosPanel key={industry} data={data} />}
      {tab === "sched" && <SchedulePanel key={industry} data={data} />}
      {tab === "extra" && <ExtraPanel key={industry} data={data} />}
      {tab === "reviews" && <ReviewsPanel key={industry} data={data} />}
    </>
  )
}
