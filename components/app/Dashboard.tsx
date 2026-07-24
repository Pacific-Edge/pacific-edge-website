"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import AuthShell from "@/components/auth/AuthShell"
import { getSession, clearSession, type ClientSession } from "@/lib/clientAuth"
import {
  DASHBOARD_DATA,
  REVIEW_CHIPS,
  type DashIndustry,
  type Convo,
  type Review,
  type CallItem,
} from "@/lib/dashboard-mock-data"
import "@/styles/dashboard.css"

const CAL = "https://cal.com/pacificedge"
const WD = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const WDF = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const IND_PILLS: { ind: DashIndustry; em: string; label: string }[] = [
  { ind: "all", em: "🗂️", label: "All" },
  { ind: "restaurants", em: "🍽️", label: "Restaurant" },
  { ind: "salons", em: "💆", label: "Salon & Spa" },
  { ind: "dental", em: "🦷", label: "Dental" },
]

type ViewKey = "overview" | "calls" | "convos" | "sched" | "extra" | "reviews"

function dayMeta(base: Date, i: number) {
  const dt = new Date(base)
  dt.setDate(dt.getDate() + i)
  return { ab: WD[dt.getDay()], num: dt.getDate(), full: i === 0 ? "Today" : i === 1 ? "Tomorrow" : WDF[dt.getDay()] }
}

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 13l4 4 11-13" />
  </svg>
)

function initials(name: string): string {
  return name
    .split(" ")
    .map((w) => w.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export default function Dashboard() {
  const router = useRouter()
  const [session, setSessionState] = useState<ClientSession | null>(null)
  const [ready, setReady] = useState(false)
  const [now, setNow] = useState<Date | null>(null)

  // Auth guard: confirm the mock session client-side; redirect out if missing.
  useEffect(() => {
    const s = getSession()
    if (!s) {
      router.replace("/login")
      return
    }
    setSessionState(s)
    setNow(new Date())
    setReady(true)
  }, [router])

  if (!ready || !session || !now) return null
  return <DashboardInner session={session} now={now} onLogout={() => { clearSession(); router.replace("/login") }} />
}

function DashboardInner({
  session,
  now,
  onLogout,
}: {
  session: ClientSession
  now: Date
  onLogout: () => void
}) {
  const [ind, setInd] = useState<DashIndustry>("all")
  const [view, setView] = useState<ViewKey>("overview")
  const data = DASHBOARD_DATA[ind]

  const userName = ind === "all" ? session.business || "Your Business" : data.biz
  const userMail = ind === "all" ? session.email || "you@yourbusiness.com" : data.mail
  const firstName = (session.name || "there").split(" ")[0]

  const todayLabel = useMemo(() => {
    try {
      return now.toLocaleDateString("en-CA", { weekday: "long", month: "short", day: "numeric" })
    } catch {
      return "Today"
    }
  }, [now])

  function switchIndustry(next: DashIndustry) {
    if (next === ind) return
    setInd(next)
  }

  function switchView(next: ViewKey) {
    setView(next)
    if (typeof window !== "undefined") window.scrollTo(0, 0)
  }

  const actions = (
    <>
      <span className="live-pill">
        <i />
        Live
      </span>
      <div className="user">
        <div className="avatar">{initials(userName)}</div>
        <div>
          <div className="user-name">{userName}</div>
          <div className="user-mail">{userMail}</div>
        </div>
      </div>
      <button className="auth-logout" onClick={onLogout}>
        Log out
      </button>
    </>
  )

  return (
    <AuthShell actions={actions}>
      <div className="pe-dash">
        <div className="bg-grid" />
        <div className="orb orb-1" />
        <div className="dash-main">
          <div className="welcome">
            <div>
              <h1>
                Welcome back, <span className="a">{firstName}</span>
              </h1>
              <p>{data.sub}</p>
            </div>
            <div className="welcome-meta">
              <b>{todayLabel}</b>
              <br />
              Vancouver, BC
            </div>
          </div>

          <div className="ind-switch">
            <span className="ind-switch-label">Viewing as</span>
            <div className="ind-pills">
              {IND_PILLS.map((p) => (
                <button
                  key={p.ind}
                  className={`ind-pill ${ind === p.ind ? "active" : ""}`}
                  onClick={() => switchIndustry(p.ind)}
                >
                  <span className="em">{p.em}</span>
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div className="view-tabs">
            <button className={view === "overview" ? "active" : ""} onClick={() => switchView("overview")}>
              Overview
            </button>
            <button className={view === "calls" ? "active" : ""} onClick={() => switchView("calls")}>
              Live Calls <span className="vt-badge live">1</span>
            </button>
            <button className={view === "convos" ? "active" : ""} onClick={() => switchView("convos")}>
              Conversations <span className="vt-badge">2</span>
            </button>
            <button className={view === "sched" ? "active" : ""} onClick={() => switchView("sched")}>
              <span>{data.schedLabel}</span>
            </button>
            <button className={view === "extra" ? "active" : ""} onClick={() => switchView("extra")}>
              <span>{data.extraLabel}</span> <span className="vt-badge">{data.extra.length}</span>
            </button>
            <button className={view === "reviews" ? "active" : ""} onClick={() => switchView("reviews")}>
              Reviews <span className="vt-badge gold">3</span>
            </button>
          </div>

          {/* Overview stays mounted (keep-rendered) so the iframe paint survives tab switches */}
          <OverviewView ind={ind} active={view === "overview"} />

          <section className={`view ${view === "calls" ? "active" : ""}`}>
            <div className="chips">
              {data.chips.map((ch, i) => (
                <Chip key={i} label={ch[0]} value={ch[1]} />
              ))}
            </div>
            <div className="panel">
              <div className="panel-head">
                <div className="panel-title">
                  <span className="lc-live">
                    <i />
                    Live now
                  </span>
                </div>
                <div className="panel-meta">Janice is on the line</div>
              </div>
              <LiveCallPanel live={data.live} />
            </div>
            <div className="panel">
              <div className="panel-head">
                <div className="panel-title">Today&apos;s calls</div>
                <div className="panel-meta">Tap a call to expand</div>
              </div>
              <div>
                {data.calls.map((c, i) => (
                  <CallRow key={i} call={c} />
                ))}
              </div>
            </div>
          </section>

          <section className={`view ${view === "convos" ? "active" : ""}`}>
            <ConvosView key={ind} convos={data.convos} />
          </section>

          <section className={`view ${view === "sched" ? "active" : ""}`}>
            <div className="panel">
              <div className="panel-head">
                <div className="panel-title">{data.schedTitle}</div>
                <div className="panel-meta">Tap a day · this week</div>
              </div>
              <ScheduleView key={ind} sched={data.sched} now={now} />
            </div>
          </section>

          <section className={`view ${view === "extra" ? "active" : ""}`}>
            <div className="panel">
              <div className="panel-head">
                <div className="panel-title">{data.extraTitle}</div>
                <div className="panel-meta">Handled by Janice</div>
              </div>
              <div>
                {data.extra.map((x, i) => (
                  <div className="xrow" key={i}>
                    <div className="xrow-ico">{x[0]}</div>
                    <div className="xrow-main">
                      <div className="xrow-title">{x[1]}</div>
                      <div className="xrow-sub">{x[2]}</div>
                    </div>
                    <span className={`pill ${x[4]}`}>{x[3]}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={`view ${view === "reviews" ? "active" : ""}`}>
            <div className="chips">
              {REVIEW_CHIPS(data.reviews.length).map((ch, i) => (
                <Chip key={i} label={ch[0]} value={ch[1]} />
              ))}
            </div>
            <div className="panel">
              <div className="panel-head">
                <div className="panel-title">Reviews to approve</div>
                <div className="panel-meta">Janice drafts, you approve</div>
              </div>
              <div>
                {data.reviews.map((r, i) => (
                  <ReviewCard key={ind + i} review={r} />
                ))}
              </div>
            </div>
          </section>

          <p className="app-note">
            Demo workspace · Questions about your setup?{" "}
            <a href={CAL} target="_blank" rel="noopener">
              Talk to your Pacific Edge team
            </a>
          </p>
        </div>
      </div>
    </AuthShell>
  )
}

/* ── Overview (iframe) ── */
function OverviewView({ ind, active }: { ind: DashIndustry; active: boolean }) {
  const frameRef = useRef<HTMLIFrameElement>(null)
  const src = ind === "all" ? "/dashboard-mock.html" : `/dashboard-mock.html?ind=${ind}`

  // Preserve the cross-frame height contract from the old app.html.
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.data && e.data.type === "pe-dash-height") {
        const f = frameRef.current
        if (f && e.data.height > 200) f.style.height = e.data.height + "px"
      }
    }
    window.addEventListener("message", onMessage)
    return () => window.removeEventListener("message", onMessage)
  }, [])

  // Nudge the height on activation so the iframe repaints after a tab switch.
  useEffect(() => {
    if (!active) return
    const f = frameRef.current
    if (!f) return
    const hh = f.style.height || f.offsetHeight + "px"
    f.style.height = parseInt(hh, 10) + 1 + "px"
    void f.offsetHeight
    f.style.height = hh
  }, [active])

  return (
    <section className={`view keep-rendered ${active ? "active" : ""}`}>
      <div className="dash-shell">
        <iframe
          ref={frameRef}
          src={src}
          className="dash-frame"
          id="idash"
          title="Your Pacific Edge AI dashboard"
          scrolling="no"
        />
      </div>
      <p className="ov-note">Live dashboard · switch industry above to see it tailored</p>
    </section>
  )
}

/* ── Count-up chip ── */
function Chip({ label, value }: { label: string; value: string }) {
  const [display, setDisplay] = useState(value)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const m = /^(\d+)(.*)$/.exec(value)
    if (!m) {
      setDisplay(value)
      return
    }
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setDisplay(value)
      return
    }
    const end = parseInt(m[1], 10)
    const suffix = m[2]
    let start: number | null = null
    let raf = 0
    const step = (t: number) => {
      if (start === null) start = t
      let p = (t - start) / 900
      if (!(p > 0)) p = 0
      if (p > 1) p = 1
      let v = Math.round(end * (1 - Math.pow(1 - p, 3)))
      if (v < 0) v = 0
      if (v > end) v = end
      setDisplay(v + suffix)
      if (p < 1) raf = requestAnimationFrame(step)
      else setDisplay(value)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [value])

  return (
    <div className="chip">
      <div className="chip-label">{label}</div>
      <div className="chip-value" ref={ref}>
        {display}
      </div>
    </div>
  )
}

/* ── Live call panel with running timer ── */
function LiveCallPanel({ live }: { live: { n: string; s: string; line: string } }) {
  const [t, setT] = useState(47)
  useEffect(() => {
    const id = setInterval(() => setT((v) => v + 1), 1000)
    return () => clearInterval(id)
  }, [])
  const m = Math.floor(t / 60)
  const s = t % 60
  const timer = `${m}:${s < 10 ? "0" : ""}${s}`

  return (
    <div className="livecall">
      <div className="livecall-av">📞</div>
      <div className="lc-main">
        <div className="lc-name">{live.n}</div>
        <div className="lc-sub">{live.s}</div>
        <div className="lc-transcript">{live.line}</div>
      </div>
      <div className="lc-end">
        <div className="wave">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="lc-timer">{timer}</div>
        <span className="pill ok">AI handling</span>
      </div>
    </div>
  )
}

/* ── Expandable call row ── */
function CallRow({ call }: { call: CallItem }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`call ${open ? "open" : ""}`}>
      <button className="call-row" onClick={() => setOpen((v) => !v)}>
        <div className="call-ico">{call.i}</div>
        <div className="call-main">
          <div className="call-title">{call.w}</div>
          <div className="call-sub">{call.s}</div>
        </div>
        <span className={`pill ${call.c}`}>{call.p}</span>
        <svg className="call-chev" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div className="call-body">
        <div className="call-body-inner" dangerouslySetInnerHTML={{ __html: call.d }} />
      </div>
    </div>
  )
}

/* ── Conversations (inbox + thread + take-over compose) ── */
function ConvosView({ convos }: { convos: Convo[] }) {
  const [activeId, setActiveId] = useState(convos[0]?.id)
  const [takeover, setTakeover] = useState<Record<string, boolean>>({})
  const [sent, setSent] = useState<Record<string, string[]>>({})
  const [draft, setDraft] = useState("")
  const threadRef = useRef<HTMLDivElement>(null)

  const active = convos.find((c) => c.id === activeId) ?? convos[0]

  useEffect(() => {
    const el = threadRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [activeId, sent])

  const on = !!takeover[active.id]

  function send() {
    const v = draft.trim()
    if (!v) return
    setSent((prev) => ({ ...prev, [active.id]: [...(prev[active.id] ?? []), v] }))
    setDraft("")
  }

  return (
    <div className="convo-layout">
      <div className="panel convo-list-panel">
        <div className="panel-head">
          <div className="panel-title">Inbox</div>
          <div className="panel-meta">All channels</div>
        </div>
        <div>
          {convos.map((cv) => (
            <div
              key={cv.id}
              className={`convo-item ${cv.id === active.id ? "active" : ""}`}
              onClick={() => setActiveId(cv.id)}
            >
              <div className="convo-av">{cv.av}</div>
              <div className="convo-item-main">
                <div className="convo-item-top">
                  <span className="convo-item-name">{cv.n}</span>
                  <span className="convo-item-time">{cv.time}</span>
                </div>
                <div className="convo-item-last">{cv.last}</div>
                <span className="convo-item-ch">
                  {cv.ch} · {cv.st}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="panel convo-thread-panel">
        <div className="thread-head">
          <div className="convo-av">{active.av}</div>
          <div>
            <div className="thread-name">{active.n}</div>
            <div className="thread-sub">
              <span className="dot" />
              {active.ch} · {active.st}
            </div>
          </div>
        </div>
        <div className="convo-thread" ref={threadRef}>
          {active.msgs.map((m, i) => (
            <div key={i} className={`cbub ${m[0] === 1 ? "me" : "them"}`}>
              {m[1]}
              {m[2] ? <small>{m[2]}</small> : null}
            </div>
          ))}
          {(sent[active.id] ?? []).map((txt, i) => (
            <div key={`sent-${i}`} className="cbub me">
              {txt}
              <small>You · just now</small>
            </div>
          ))}
        </div>
        <div className="compose">
          {on ? (
            <>
              <input
                type="text"
                placeholder="Type a reply as the team..."
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") send()
                }}
                autoFocus
              />
              <button className="compose-send" onClick={send}>
                Send
              </button>
              <button className="takeover on" onClick={() => setTakeover((p) => ({ ...p, [active.id]: false }))}>
                Janice: off
              </button>
            </>
          ) : (
            <>
              <span className="compose-tag">
                <i />
                Janice is replying automatically
              </span>
              <button
                className="takeover"
                style={{ marginLeft: "auto" }}
                onClick={() => setTakeover((p) => ({ ...p, [active.id]: true }))}
              >
                Take over
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

/* ── Schedule (day strip + agenda) ── */
function ScheduleView({ sched, now }: { sched: import("@/lib/dashboard-mock-data").SchedRow[][]; now: Date }) {
  const [calDay, setCalDay] = useState<string>("all")

  const groups = sched
    .map((items, i) => ({ items, i }))
    .filter(({ items, i }) => (calDay === "all" || String(calDay) === String(i)) && items.length > 0)

  return (
    <>
      <div className="cal-strip">
        <button className={`cal-day ${calDay === "all" ? "active" : ""}`} onClick={() => setCalDay("all")}>
          <span className="cal-wd">All</span>
          <span className="cal-num" style={{ fontSize: "13px" }}>
            Week
          </span>
        </button>
        {sched.map((items, i) => {
          const m = dayMeta(now, i)
          return (
            <button
              key={i}
              className={`cal-day ${String(calDay) === String(i) ? "active" : ""}`}
              onClick={() => setCalDay(String(i))}
            >
              <span className="cal-wd">{m.ab}</span>
              <span className="cal-num">{m.num}</span>
              {items.length ? <span className="cal-dot">{items.length}</span> : null}
            </button>
          )
        })}
      </div>
      <div>
        {groups.length === 0 ? (
          <p style={{ color: "var(--text3)", fontSize: "13px", padding: "12px 4px" }}>
            Nothing booked for this day.
          </p>
        ) : (
          groups.map(({ items, i }) => {
            const m = dayMeta(now, i)
            return (
              <div className="appt-group" key={i}>
                <div className="appt-day">
                  {m.full} · {m.ab} {m.num}
                </div>
                {items.map((a, j) => (
                  <div className="appt-row" key={j}>
                    <div className="appt-time">{a[0]}</div>
                    <div className="appt-main">
                      <div className="appt-who">{a[1]}</div>
                      <div className="appt-svc">{a[2]}</div>
                    </div>
                    <span className={`pill ${a[4]}`}>{a[3]}</span>
                  </div>
                ))}
              </div>
            )
          })
        )}
      </div>
    </>
  )
}

/* ── Review card (approve / edit-inline) ── */
function ReviewCard({ review }: { review: Review }) {
  const [posted, setPosted] = useState(false)
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(review.draft)
  const stars = Array.from({ length: 5 }, (_, i) => (i < review.stars ? "★" : "☆")).join("")

  return (
    <div className={`review ${posted ? "posted" : ""}`}>
      <div className="review-head">
        <div className="review-av">{review.av}</div>
        <div>
          <div className="review-name">{review.n}</div>
          <div className="review-meta">
            {review.ch} · {review.when}
          </div>
        </div>
        <div className="review-stars">{stars}</div>
      </div>
      <div className="review-text">{review.text}</div>
      <div className="review-draft">
        <div className="review-draft-label">
          <span>✨</span>Janice drafted a reply
        </div>
        {editing ? (
          <textarea value={draft} onChange={(e) => setDraft(e.target.value)} autoFocus />
        ) : (
          <p>{draft}</p>
        )}
      </div>
      <div className="review-actions">
        <button className="btn-approve" onClick={() => setPosted(true)}>
          <CheckIcon /> Approve &amp; post
        </button>
        <button className="btn-edit" onClick={() => setEditing((v) => !v)}>
          {editing ? "Done" : "Edit"}
        </button>
      </div>
      <div className="review-posted">
        <CheckIcon /> Posted
      </div>
    </div>
  )
}
