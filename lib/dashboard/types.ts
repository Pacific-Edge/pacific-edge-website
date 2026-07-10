export type DashboardIndustry =
  | "all"
  | "restaurants"
  | "salons"
  | "trades"
  | "retail"
  | "dental"

export const DASHBOARD_INDUSTRIES: readonly DashboardIndustry[] = [
  "all",
  "restaurants",
  "salons",
  "trades",
  "retail",
  "dental",
] as const

export type StatusClass = "ok" | "warn" | "new" | "muted"

export type CallRecord = {
  icon: string
  who: string
  sub: string
  pill: string
  status: StatusClass
  detail: string
}

export type ConvoMessage = {
  from: "customer" | "assistant"
  text: string
  meta?: string
}

export type ConvoThread = {
  id: string
  name: string
  channel: string
  avatar: string
  last: string
  time: string
  status: string
  statusClass: StatusClass
  messages: ConvoMessage[]
}

export type ScheduleSlot = [time: string, who: string, detail: string, status: string, statusClass: StatusClass]

export type ExtraRow = [icon: string, title: string, sub: string, pill: string, statusClass: StatusClass]

export type ReviewDraft = {
  avatar: string
  name: string
  stars: number
  channel: string
  when: string
  text: string
  draft: string
}

export type ClientDashboardData = {
  business: string
  email: string
  subtitle: string
  chips: [label: string, value: string][]
  live: { name: string; sub: string; line: string }
  calls: CallRecord[]
  convos: ConvoThread[]
  schedLabel: string
  schedTitle: string
  /** Seven day buckets starting today; empty arrays for days with no items */
  schedule: ScheduleSlot[][]
  extraLabel: string
  extraTitle: string
  extra: ExtraRow[]
  reviews: ReviewDraft[]
}

export type PreviewStat = {
  label: string
  value: string
  sub: string
}

export type PreviewCard = {
  id: string
  status: string
  statusClass?: StatusClass
  channel: string
  grid: { label: string; value: string; valueClass?: string }[]
}

export type DashboardPreviewSkin = {
  stats: PreviewStat[]
  cards: PreviewCard[]
  alerts: string[]
}
