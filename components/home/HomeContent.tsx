"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import CoverageMap from "./CoverageMap"
import { useContactModal } from "@/components/site/ContactModalProvider"
import { getLenis } from "@/lib/lenis"

const CAL = "https://cal.com/pacificedge"

const MARQUEE = [
  "AI Automation", "Review Management", "Missed Call Recovery", "Customer Follow-Ups",
  "Appointment Booking", "Social Media AI", "Lead Capture", "Workflow Optimization",
]

const SCENES = [
  { i: 0, h: "Answers every lead in seconds", p: "Every missed call gets texted back in seconds and every message is answered around the clock, so a hot lead never goes cold or calls the place down the street." },
  { i: 1, h: "Turns interest into booked jobs", p: "Janice offers your real open times and fills last-minute cancellations from the waitlist, dropping each one straight into the calendar you already use." },
  { i: 2, h: "Builds a 5-star reputation", p: "On-brand replies to every review in a tap, and more 5-star ratings nudged from your happiest customers, while the competition stays quiet." },
  { i: 3, h: "Custom-built around your business", p: "Not a template. We map how your business actually runs, then build the workflows and a live dashboard that fit the tools you already have." },
]

const COMPARE = [
  { ico: "🌙", cat: "After-hours coverage", before: "Leads go cold overnight", after: "Answered 24/7, in seconds" },
  { ico: "📞", cat: "Missed calls", before: "Lost lead, gone by morning", after: "Texted back in 23 seconds, booked" },
  { ico: "⭐", cat: "Reviews", before: "Hours to reply, if at all", after: "Drafted in seconds, you approve" },
  { ico: "⏱️", cat: "Your time", before: "14+ hours a week on admin", after: "18+ hours handed back to you" },
  { ico: "📊", cat: "Visibility", before: "Best guess on what's working", after: "Live dashboard on every lead" },
  { ico: "💸", cat: "Revenue", before: "$3K+ leaking out monthly", after: "Recovered revenue, every month" },
]

const JED = [
  { i: "📞", t: "Missed call answered", s: "Texted back in 19 seconds", p: "Booked" },
  { i: "🔁", t: "Cancellation refilled", s: "Offered to your waitlist", p: "+$220" },
  { i: "⭐", t: "New 5-star review", s: "On-brand reply drafted", p: "Ready" },
  { i: "📅", t: "After-hours message", s: "Appointment booked", p: "Done" },
]

const INDUSTRIES = [
  { href: "/dental", icon: "🦷", name: "Dental & Health Clinics", desc: "New-patient calls to voicemail, no-shows, missed recalls. We keep the schedule full and the front desk free.", more: "Explore dental AI" },
  { href: "/real-estate", icon: "🏡", name: "Real Estate", desc: "Leads that go cold in minutes, after-hours inquiries, showings missed. We answer first and book the showing, for agents & developers.", more: "Explore real estate AI" },
  { href: "/restaurants", icon: "🍽️", name: "Restaurants & Food Service", desc: "Missed reservation calls, unanswered reviews, no-shows. We turn the dinner rush into booked tables.", more: "Explore restaurant AI" },
  { href: "/salons", icon: "💆", name: "Salons, Spas & Wellness", desc: "Empty chairs, after-hours DMs, clients who never rebook. We keep your calendar full and your regulars regular.", more: "Explore salon & spa AI" },
  { href: "/trades", icon: "🔧", name: "Trades & Home Services", desc: "Calls missed on the job, quotes gone cold. We capture every lead and follow up, completely hands-free.", more: "Explore trades AI" },
  { href: "/retail", icon: "🛍️", name: "Retail & Local Shops", desc: "One-time buyers, unanswered questions, slow weeks. We turn first-time shoppers into loyal regulars.", more: "Explore retail AI" },
]

type IntgCard = { c: string; ini: string; name: string; img?: string }
const INTG: { key: string; label: string; cards: IntgCard[] }[] = [
  { key: "dental", label: "Dental", cards: [
    { c: "#0B5394", ini: "Dx", name: "Dentrix" }, { c: "#2E8B57", ini: "OD", name: "Open Dental" }, { c: "#0072BC", ini: "CD", name: "ClearDent" },
    { c: "#5B6770", ini: "Tk", name: "Tracker" }, { c: "#C8102E", ini: "Ab", name: "AbelDent" }, { c: "#6B3FA0", ini: "Cv", name: "Curve Dental" },
  ] },
  { key: "restaurants", label: "Restaurants", cards: [
    { c: "#DA3743", ini: "OT", name: "OpenTable" }, { c: "#FF4C00", ini: "To", name: "Toast", img: "/logos/toast.png" }, { c: "#2C9AD6", ini: "TB", name: "TouchBistro" },
    { c: "#1F2A44", ini: "7s", name: "7shifts", img: "/logos/7shifts.png" }, { c: "#F5333F", ini: "Ls", name: "Lightspeed" }, { c: "#B11F2A", ini: "Rs", name: "Resy" },
  ] },
  { key: "salons", label: "Salons & Spas", cards: [
    { c: "#2B2B3A", ini: "Fr", name: "Fresha" }, { c: "#5C2D91", ini: "Vg", name: "Vagaro" }, { c: "#00B6B0", ini: "Bk", name: "Booksy" },
    { c: "#32B7A8", ini: "Mb", name: "Mindbody" }, { c: "#E2553C", ini: "GG", name: "GlossGenius" }, { c: "#1c1b16", ini: "Sq", name: "Square Appts" },
  ] },
  { key: "trades", label: "Trades", cards: [
    { c: "#12B886", ini: "Jb", name: "Jobber" }, { c: "#2F6BD6", ini: "ST", name: "ServiceTitan" }, { c: "#1768E5", ini: "HC", name: "Housecall Pro" },
    { c: "#00A0DC", ini: "M8", name: "ServiceM8" }, { c: "#F58220", ini: "HS", name: "HomeStars" }, { c: "#2CA01C", ini: "QB", name: "QuickBooks" },
  ] },
  { key: "retail", label: "Retail", cards: [
    { c: "#5E8E3E", ini: "Sh", name: "Shopify" }, { c: "#F5333F", ini: "Ls", name: "Lightspeed" }, { c: "#1c1b16", ini: "Sq", name: "Square" },
    { c: "#4CA22F", ini: "Cl", name: "Clover", img: "/logos/clover.png" }, { c: "#7F54B3", ini: "Wo", name: "WooCommerce" }, { c: "#1a1a1a", ini: "MC", name: "Mailchimp", img: "/logos/mailchimp.png" },
  ] },
]

const STEPS = [
  { h: "Discovery Call", p: "15 minutes. We learn about your business, find where you're bleeding time and money, and identify the highest-impact automations. No sales pitch - just clarity." },
  { h: "Deep-Dive Session", p: "A focused 60-minute session where we map out your entire workflow, pinpoint the bottlenecks costing you the most time and money, and identify exactly which automations will move the needle for your business." },
  { h: "Custom Build", p: "We design and build your AI workflows using battle-tested tools. You see a working prototype within the first week - not a slide deck, real software." },
  { h: "Launch & Train", p: "We deploy everything, walk your team through it in plain English, and make sure you're comfortable before we step back. No orphaned systems." },
  { h: "Optimize & Support", p: "Ongoing monitoring and tweaking. As your business grows, we scale your automations with you. You focus on running the business - we keep the systems humming." },
]

const DASH_ROWS = [
  { icon: "📞", label: "Missed call response", before: "~4 HRS", after: "INSTANT", src: "3" },
  { icon: "⭐", label: "Review response rate", before: "~36%", after: "~100%", src: "4" },
  { icon: "💬", label: "Customer follow-ups", before: "MANUAL", after: "AUTO" },
  { icon: "🕑", label: "Admin hours / week", before: "15+ HRS", after: "~5 HRS", src: "6" },
  { icon: "💰", label: "Revenue leaking", before: "$3K+/MO", after: "CAPTURED", src: "7" },
  { icon: "🚀", label: "Growth bottleneck", before: "YOU", after: "SOLVED" },
]

const TRUST = [
  { ico: "🔒", h: "Encrypted end to end", p: "Every conversation and customer record is encrypted in transit and at rest, protected the whole way through." },
  { ico: "🇨🇦", h: "Canadian privacy first", p: "Built to align with PIPEDA and BC's privacy rules, with personal information treated as exactly that, personal." },
  { ico: "🚫", h: "Never sold or shared", p: "Your data is yours. We never sell it, rent it, or hand it to third parties. Full stop." },
  { ico: "🔑", h: "You stay in control", p: "Strict access, only what is needed is ever touched. And if we ever part ways, everything is documented and handed back." },
]

const TESTIMONIALS = [
  { av: "CM", name: "Carter Macintosh", biz: "Pinnacle Ridge Contracting · Trades", q: "Every missed call gets texted back in seconds, and Janice holds the slot until my crew confirms it. We booked three extra jobs our first week." },
  { av: "AJ", name: "AJ", biz: "AJ Consulting · Professional Services", q: "The biggest surprise was how much time it gave us back. My team used to lose hours every week to callbacks and chasing cancelled slots, Pacific Edge AI handles all of it now. It's like adding a front-desk hire without the payroll." },
  { av: "PA", name: "Priya Anand", biz: "Coast Beauty Lounge · Salon & Spa", q: "Cancellations used to gut our schedule. The moment someone drops, Janice texts our waitlist and usually fills the spot within minutes, even overnight. My chairs stay full and my front desk isn't chasing anyone anymore." },
]

const FAQ = [
  { q: "Do I need to be tech-savvy?", a: "Not even a little. If you can use a smartphone, you can use what we build. We handle all the technical work and walk you through everything in plain English. Our whole business exists because most AI tools are built for developers - we translate that into something anyone can use." },
  { q: "How long does setup take?", a: "Most clients have a working prototype within the first week. Full deployment and training typically wraps up in two to three weeks depending on complexity. You'll see real results before most agencies finish their discovery phase." },
  { q: "How much does it cost?", a: "Every business is different - a single-location salon has very different needs than a multi-site restaurant group. Our solutions are custom-built around your specific workflows, team size, and goals, so pricing reflects exactly what you need and nothing you don't. Book a free discovery call and we'll put together a transparent quote tailored to your business." },
  { q: "What if I want to cancel?", a: "Your first month is on us, so you can make sure Janice is the right fit before anything kicks in. From there, engagements run for an initial 6 months, long enough to build, deploy, train your team, and prove real ROI. Pricing is transparent and agreed upfront, with no hidden fees and no surprise renewals. After that you can renew month-to-month, scale up, or part ways with everything we've built fully documented for handover." },
  { q: "Will this actually work for my industry?", a: "If your business relies on appointments, customer communication, or online reviews, the answer is almost certainly yes. We've designed our workflows specifically for hospitality, wellness, trades, and retail - the industries where these automations have the highest impact." },
  { q: "Will my data be safe?", a: "Absolutely. Security isn't an afterthought - it's built into everything we do. All data is encrypted, access is restricted to only what's needed, and we never share your information with third parties. Your business data stays your business data, period." },
  { q: "What happens on the discovery call?", a: "Fifteen minutes. We learn about your business, identify where you're losing time or money, and tell you exactly which automations would make the biggest difference. No pitch deck, no pressure. If we're not the right fit, we'll tell you that too." },
]

const SOURCES = [
  "Workflow automation reduces repetitive tasks by 60-95%, with time savings of up to 77% on routine activities. PS Global Consulting, citing Jobera et al.",
  "Approximately 75% of generative AI's value potential falls across customer operations, marketing/sales, software engineering, and R&D. McKinsey & Company.",
  "Average small business callback response time is approximately 4 hours; average lead response time across businesses is 47 hours. Medium; Dialzara.",
  "The average business responds to approximately 36% of its reviews. SOCi (2022).",
  "63% of consumers say businesses never responded to their review. ReplyOnTheFly.",
  "Small business owners spend an average of 14-16 hours per week on administrative tasks. Turnozo, citing Time Etc / SBA data; Venturu.",
  "A service business missing 3+ calls per week at average job values can lose $3,000+/month in opportunity cost. Netpartners.",
  "Businesses that respond to reviews earn up to 52% more revenue. Toister Solutions, citing Harvard Business Review.",
]

export default function HomeContent() {
  const { open } = useContactModal()
  const [scene, setScene] = useState(0)
  const [intg, setIntg] = useState("dental")
  const [feed, setFeed] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const swTrackRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLElement>(null)
  const pdFillRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Particle canvas background
  useEffect(() => {
    const cv = canvasRef.current
    const cx = cv?.getContext("2d")
    if (!cv || !cx) return
    let pts: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = []
    let raf = 0
    const resize = () => {
      cv.width = window.innerWidth
      cv.height = window.innerHeight
    }
    const create = () => {
      pts = []
      const n = Math.min(70, Math.floor(window.innerWidth / 20))
      for (let i = 0; i < n; i++)
        pts.push({ x: Math.random() * cv.width, y: Math.random() * cv.height, vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25, r: Math.random() * 1.1 + 0.4, a: Math.random() * 0.06 + 0.02 })
    }
    const draw = () => {
      cx.clearRect(0, 0, cv.width, cv.height)
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i]
        a.x += a.vx
        a.y += a.vy
        if (a.x < 0) a.x = cv.width
        if (a.x > cv.width) a.x = 0
        if (a.y < 0) a.y = cv.height
        if (a.y > cv.height) a.y = 0
        cx.beginPath()
        cx.arc(a.x, a.y, a.r, 0, Math.PI * 2)
        cx.fillStyle = "rgba(74,240,192," + a.a + ")"
        cx.fill()
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 130) {
            cx.beginPath()
            cx.moveTo(a.x, a.y)
            cx.lineTo(b.x, b.y)
            cx.strokeStyle = "rgba(74,240,192," + 0.018 * (1 - d / 130) + ")"
            cx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    const onResize = () => {
      resize()
      create()
    }
    resize()
    create()
    window.addEventListener("resize", onResize)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      draw()
      cancelAnimationFrame(raf)
    } else {
      draw()
    }
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  // Scroll-driven services scene (desktop pinned section) + scroll-top toggle
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 600)
      const track = swTrackRef.current
      if (track && window.innerWidth > 960) {
        const rect = track.getBoundingClientRect()
        const total = track.offsetHeight - window.innerHeight
        const p = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0
        setScene(Math.min(SCENES.length - 1, Math.floor(p * SCENES.length)))
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Janice activity feed loop
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = window.setInterval(() => setFeed((f) => (f + 1) % JED.length), 2600)
    return () => window.clearInterval(id)
  }, [])

  // Process before/after: scroll-scrubbed (ports the old updateDash) — the fill
  // bar grows and each row flips before->after as you scroll through the section.
  useEffect(() => {
    const section = processRef.current
    const fill = pdFillRef.current
    if (!section || !fill) return
    const rows = Array.from(section.querySelectorAll<HTMLElement>(".pd-row-val"))
    const afterLabel = section.querySelector<HTMLElement>(".pd-after-label")

    const apply = (row: HTMLElement, after: boolean) => {
      const val = after ? row.dataset.after : row.dataset.before
      if (val != null) row.textContent = val
      row.classList.toggle("after", after)
      row.classList.toggle("before", !after)
      row.dataset.current = after ? "after" : "before"
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      fill.style.width = "100%"
      afterLabel?.classList.add("lit")
      rows.forEach((r) => apply(r, true))
      return
    }

    let raf = 0
    const update = () => {
      const rect = section.getBoundingClientRect()
      const scrolled = -rect.top
      const progress = Math.max(0, Math.min(1, scrolled / (rect.height - window.innerHeight * 0.5)))
      const total = rows.length
      const sliderProgress = Math.min(1, progress / (4 / (total + 1)))
      fill.style.width = sliderProgress * 100 + "%"
      afterLabel?.classList.toggle("lit", sliderProgress > 0.9)
      rows.forEach((row, i) => {
        const shouldAfter = sliderProgress >= (i + 1) / total
        if (shouldAfter !== (row.dataset.current === "after")) apply(row, shouldAfter)
      })
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  // Dashboard iframe autosize
  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      if (e.data && e.data.type === "pe-dash-height" && e.data.height > 200 && iframeRef.current) {
        iframeRef.current.style.height = e.data.height + "px"
      }
    }
    window.addEventListener("message", onMsg)
    return () => window.removeEventListener("message", onMsg)
  }, [])

  const toTop = () => {
    const lenis = getLenis()
    if (lenis) lenis.scrollTo(0)
    else window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const activeIntg = INTG.find((t) => t.key === intg) ?? INTG[0]

  return (
    <div className="pe-home">
      <canvas id="p" ref={canvasRef} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-label">
          <span className="hero-label-dot" />
          AI Consulting · Vancouver, BC
        </div>
        <h1>
          The Unfair Edge
          <br />
          <span className="accent-line">Your Business Deserves.</span>
        </h1>
        <div className="hero-rule" />
        <p className="hero-sub">
          Every missed call recovered. Every review answered. Every booking tracked. Custom AI built
          around how your Vancouver business actually runs.
        </p>
        <div className="hero-pain">Tired of watching leads slip through the cracks?</div>
        <div className="hero-actions">
          <a href={CAL} target="_blank" rel="noopener" className="btn-primary">
            Book a Free 15-Min Demo{" "}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#services" className="btn-ghost">
            See What We Do
          </a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="hero-stat-val">
              77%<a href="#sources" className="stat-src">[1]</a>
            </div>
            <div className="hero-stat-lbl">Less admin</div>
          </div>
          <div className="hero-stat-divider" />
          <div>
            <div className="hero-stat-val">3X</div>
            <div className="hero-stat-lbl">Faster response</div>
          </div>
          <div className="hero-stat-divider" />
          <div>
            <div className="hero-stat-val">24/7</div>
            <div className="hero-stat-lbl">Always on</div>
          </div>
        </div>
        <div className="hero-trust">
          Built for Vancouver&apos;s restaurants, salons, trades &amp; shops · No tech team required
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-inner">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span className="marquee-item" key={i}>
              <span className="d" />
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES (pinned scroll scene) */}
      <section className="sw" id="services">
        <div className="sw-track" ref={swTrackRef}>
          <div className="sw-pin">
            <div className="sw-inner">
              <div className="sw-left">
                <div className="sl">Our Solutions</div>
                <h2 className="st sw-h">
                  What We
                  <br />
                  Build <span className="a">For You</span>
                </h2>
                <div className="sw-list">
                  {SCENES.map((s) => (
                    <button
                      key={s.i}
                      className={`sw-item ${scene === s.i ? "active" : ""}`}
                      type="button"
                      onClick={() => setScene(s.i)}
                    >
                      <span className="sw-rail" />
                      <h3>{s.h}</h3>
                      <p>{s.p}</p>
                    </button>
                  ))}
                </div>
                <Link href="/ai-employee" className="sw-watch">
                  Meet Janice
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
              <div className="sw-right">
                <div className={`sw-scene ${scene === 0 ? "active" : ""}`} data-s="0">
                  <div className="sw-iso">
                    <div className="iso-screen">
                      <div className="sw-msg-h"><i /><i /><i /><b>Messages</b></div>
                      <div className="sw-bub them">Missed call · 9:42 PM</div>
                      <div className="sw-bub me">Hi! Sorry we missed you, how can we help?</div>
                      <div className="sw-bub them">Need a quote for a bathroom reno</div>
                      <div className="sw-tag">⚡ Replied in 18s</div>
                    </div>
                  </div>
                </div>
                <div className={`sw-scene ${scene === 1 ? "active" : ""}`} data-s="1">
                  <div className="swc swc-cal">
                    <div className="swc-bar"><b>This Week</b><span>Booking</span></div>
                    <div className="cal-week">
                      <div className="cal-day">M<b>10</b></div><div className="cal-day">T<b>11</b></div><div className="cal-day">W<b>12</b></div><div className="cal-day">T<b>13</b></div><div className="cal-day">F<b>14</b></div><div className="cal-day on">S<b>15</b></div><div className="cal-day">S<b>16</b></div>
                    </div>
                    <div className="cal-appt"><div className="cal-av">JM</div><div><b>Sat 1:30 PM, Jordan M.</b><em>Filled from your waitlist · +$240</em></div><span className="cal-ok">✓</span></div>
                  </div>
                </div>
                <div className={`sw-scene ${scene === 2 ? "active" : ""}`} data-s="2">
                  <div className="swc swc-rev">
                    <div className="rev-score"><div className="rev-big">4.9</div><div><div className="rev-stars">★★★★★</div><div className="rev-meta">128 reviews · <b>▲ +12 this week</b></div></div></div>
                    <div className="rev-card"><div className="rev-stars">★★★★★</div><p>&ldquo;Best in town, they booked us the same day and answered every text.&rdquo;</p><span className="rev-tag">↳ Janice replied in seconds</span></div>
                  </div>
                </div>
                <div className={`sw-scene ${scene === 3 ? "active" : ""}`} data-s="3">
                  <div className="swc swc-dash">
                    <div className="swc-bar"><b>Your Dashboard</b><span>Live</span></div>
                    <div className="dash-tiles"><div className="dash-tile"><b>48</b><span>Calls answered</span></div><div className="dash-tile"><b>31</b><span>Jobs booked</span></div><div className="dash-tile"><b>9</b><span>Slots saved</span></div></div>
                    <div className="dash-chart"><i /><i /><i /><i /><i /><i /></div>
                    <div className="dash-int"><span>📞 Phone</span><span>📅 Calendar</span><span>⭐ Reviews</span><span>📁 Your CRM</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divhr" />

      {/* BEFORE & AFTER */}
      <section className="compare" id="compare">
        <div className="r">
          <div className="sl">The Difference</div>
          <h2 className="st">Before &amp; <span className="a">After.</span></h2>
          <p className="sd">What a week running your business looks like before and after Janice, your AI employee, starts working in the background.</p>
        </div>
        <div className="cmp">
          <div className="cmp-row cmp-head r">
            <div className="cmp-cell cmp-corner" />
            <div className="cmp-cell cmp-before">Without Pacific Edge AI</div>
            <div className="cmp-cell cmp-after"><span className="cmp-janice"><span className="cmp-jav">J</span><span className="cmp-jname">With Janice<span className="cmp-jsub">Your AI employee</span></span></span></div>
          </div>
          {COMPARE.map((row, i) => (
            <div className={`cmp-row r rd${i + 1}`} key={row.cat}>
              <div className="cmp-cell cmp-cat"><span className="cmp-ico">{row.ico}</span>{row.cat}</div>
              <div className="cmp-cell cmp-before">
                <span className="cmp-x"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#cf4444" strokeWidth="3.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg></span>
                {row.before}
              </div>
              <div className="cmp-cell cmp-after">
                <span className="cmp-check"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0a9d76" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4 11-13" /></svg></span>
                {row.after}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divhr" />

      {/* AURORA — bottom line */}
      <section className="aurora-wrap">
        <div className="aurora reveal">
          <div className="aurora-inner">
            <div className="sl">The Bottom Line</div>
            <h2>Every Empty Slot Is<br /><span className="a">Money Walking Out The Door.</span></h2>
            <p>A late cancellation nobody fills, a call that rings out, a review left hanging, it quietly adds up. The average local business loses thousands a month to empty slots and missed messages. Janice fills the gaps and catches every lead, day and night.</p>
          </div>
        </div>
      </section>

      <div className="divhr" />

      {/* AI EMPLOYEE TEASER */}
      <section id="ai-employee-teaser">
        <div className="je-band r">
          <div className="je-band-av">J</div>
          <div className="je-band-body">
            <div className="lbl">Powered by your AI employee</div>
            <h3>Say hello to Janice</h3>
            <p>Every recovered call, filled cancellation, and booked appointment is handled by Janice, the AI employee who works quietly in the background, around the clock and in your voice.</p>
            <Link href="/ai-employee" className="je-band-cta">See what Janice does <span className="arr">→</span></Link>
          </div>
          <div className="je-band-demo" aria-hidden="true">
            <div className="jed-head"><span className="jed-dot" />Janice · working now</div>
            <div className="jed-feed" id="jedFeed">
              {JED.map((x, i) => (
                <div className={`jed-item ${feed === i ? "show" : ""}`} key={x.t}>
                  <div className="jed-ico">{x.i}</div>
                  <div><div className="jed-txt">{x.t}</div><div className="jed-sub">{x.s}</div></div>
                  <span className="jed-pill">{x.p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divhr" />

      {/* INDUSTRIES */}
      <section id="industries">
        <span className="sn">02</span>
        <div className="r">
          <div className="sl">Industries</div>
          <h2 className="st">Built For<br /><span className="a">Your Business.</span></h2>
          <p className="sd">Six local industries we know inside out. Click yours to see exactly what we would automate, and what it looks like in action.</p>
        </div>
        <div className="ind-grid">
          {INDUSTRIES.map((ind, i) => (
            <Link href={ind.href} className={`ind r rd${i + 1}`} key={ind.href}>
              <span className="ind-icon">{ind.icon}</span>
              <h4>{ind.name}</h4>
              <p>{ind.desc}</p>
              <span className="ind-more">{ind.more} <span className="arr">→</span></span>
            </Link>
          ))}
        </div>
      </section>

      <div className="divhr" />

      {/* COVERAGE (Leaflet map) */}
      <CoverageMap />

      <div className="divhr" />

      {/* DASHBOARD */}
      <section className="edge-section" id="dashboard">
        <div className="edge-orb edge-orb-1" />
        <div className="edge-orb edge-orb-2" />
        <div className="edge-container">
          <div className="edge-eyebrow r rd1"><span className="edge-eyebrow-dot" />Pacific Edge AI · Vancouver</div>
          <h2 className="edge-headline r rd2">Your Unfair <span className="a">Edge.</span></h2>
          <p className="edge-sub r rd3">Every call, review, and booking. <span className="accent">Tracked, drafted, recovered.</span> One dashboard, built around how your business actually runs.</p>
          <div className="edge-dashboard r rd4">
            <iframe ref={iframeRef} src="/dashboard-mock.html" className="edge-dash-frame" id="edgeDashFrame" loading="lazy" title="Pacific Edge AI dashboard preview" scrolling="no" />
          </div>
          <div className="edge-meta-row r rd5">
            <span>↳ live demo · click any tab</span>
            <span className="a">BUILT FOR YOU</span>
          </div>
        </div>
      </section>

      <div className="divhr" />

      {/* INTEGRATIONS */}
      <section className="intg">
        <div className="r">
          <div className="sl">Plays Nice</div>
          <h2 className="st">Works With The Tools<br /><span className="a">You Already Run On.</span></h2>
          <p className="sd" style={{ margin: "0 auto" }}>No rip-and-replace. Janice plugs into your calendar, booking, payments, and inbox so everything keeps flowing in one place.</p>
        </div>
        <div className="intg-tabs r">
          {INTG.map((t) => (
            <button key={t.key} type="button" className={`intg-tab ${intg === t.key ? "active" : ""}`} onClick={() => setIntg(t.key)}>
              {t.label}
            </button>
          ))}
        </div>
        <div className="intg-panel active" data-ind={activeIntg.key}>
          {activeIntg.cards.map((card) => (
            <div className="intg-card" style={{ ["--c" as string]: card.c }} key={card.name}>
              <span className="intg-ico">
                {card.img ? <img src={card.img} alt={`${card.name} logo`} loading="lazy" /> : null}
                <b>{card.ini}</b>
              </span>
              <div className="intg-name">{card.name}</div>
            </div>
          ))}
        </div>
        <p className="intg-note">Don&apos;t see yours? <b>We build custom integrations</b> for whatever you already run.</p>
      </section>

      <div className="divhr" />

      {/* PROCESS */}
      <section id="process" ref={processRef}>
        <span className="sn">04</span>
        <div className="r">
          <div className="sl">How It Works</div>
          <h2 className="st">Simple Process,<br /><span className="a">Powerful</span> Results</h2>
          <p className="sd">Transparent terms, no confusing tech talk. Here&apos;s how we get your business running smarter in days, not months.</p>
        </div>
        <div className="process-wrapper">
          <div className="steps-tl">
            {STEPS.map((s, i) => (
              <div className={`step r rd${i + 1}`} key={s.h}>
                <div className="step-circle">{i + 1}</div>
                <div className="step-body"><h3>{s.h}</h3><p>{s.p}</p></div>
              </div>
            ))}
          </div>
          <div className="process-dash r rd2">
            <div className="pd-top">
              <div className="pd-status"><span className="pd-status-dot" />Live Dashboard Preview</div>
              <div className="pd-progress">
                <div className="pd-progress-label"><span className="pd-before-label">Before</span><span className="pd-after-label">After</span></div>
                <div className="pd-progress-bar"><div className="pd-progress-fill" ref={pdFillRef} style={{ width: "0%" }} /></div>
              </div>
            </div>
            <div className="pd-body" id="dashBody">
              {DASH_ROWS.map((row) => (
                <div className="pd-row" key={row.label}>
                  <div className="pd-row-label"><div className="pd-row-icon">{row.icon}</div>{row.label}</div>
                  <div>
                    <span className="pd-row-val before" data-before={row.before} data-after={row.after} data-current="before">{row.before}</span>
                    {row.src ? <a href="#sources" className="stat-src">[{row.src}]</a> : null}
                  </div>
                </div>
              ))}
            </div>
            <div className="pd-footer">
              <div className="pd-footer-stat"><div className="pd-footer-num">6</div><div className="pd-footer-label">Workflows automated</div></div>
              <div className="pd-footer-stat"><div className="pd-footer-num">24/7</div><div className="pd-footer-label">Always running</div></div>
              <div className="pd-footer-stat"><div className="pd-footer-num">W1</div><div className="pd-footer-label">First results</div></div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", padding: "40px 56px 0" }}>
          <a href={CAL} target="_blank" rel="noopener" className="btn-primary">
            Book a Free Consultation{" "}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </div>
      </section>

      <div className="divhr" />

      {/* ABOUT + FOUNDERS */}
      <section className="about" id="about">
        <span className="sn">05</span>
        <div className="r">
          <div className="sl">Why Us</div>
          <h2 className="st">Built By Operators,<br /><span className="a">Not Agencies</span></h2>
          <p className="sd">We&apos;re not a faceless dev shop. We&apos;re business owners who got tired of watching local companies drown in admin work that machines should be handling.</p>
        </div>
        <div className="about-grid">
          <div className="about-content r rd1">
            <h3>We speak business, not just code.</h3>
            <p>Most AI companies sell technology. We sell time back. Every automation we build starts with one question: what&apos;s costing you the most hours and dollars right now? Then we fix that first.</p>
            <p>We&apos;re based in Vancouver, we work face-to-face when you want it, and we don&apos;t disappear after launch. Your success is our case study.</p>
            <div className="about-values">
              <div className="about-val"><div className="about-val-num">01</div><div className="about-val-ico">💬</div><h4>No jargon</h4><p>We explain everything in plain English. If you don&apos;t understand it, we haven&apos;t done our job.</p></div>
              <div className="about-val"><div className="about-val-num">02</div><div className="about-val-ico">⚡</div><h4>Speed to value</h4><p>Working prototype in week one. Not month three. Not after a &ldquo;strategy phase.&rdquo;</p></div>
              <div className="about-val"><div className="about-val-num">03</div><div className="about-val-ico">🎯</div><h4>Built to deliver</h4><p>6-month engagements with transparent pricing upfront. Long enough to deliver real ROI, never longer than the value justifies.</p></div>
              <div className="about-val"><div className="about-val-num">04</div><div className="about-val-ico">📍</div><h4>Local &amp; hands-on</h4><p>Vancouver-based. We&apos;ll meet you at your shop, learn your workflow, and build around it.</p></div>
            </div>
          </div>
          <div className="about-highlight r rd2">
            <div className="about-founder">
              <div className="about-founder-av">PE</div>
              <div><div className="about-founder-name">The Pacific Edge team</div><div className="about-founder-role">Operators &amp; builders · Vancouver, BC</div></div>
            </div>
            <div className="about-highlight-quote">We Don&apos;t Just<br />Build Tools.<br /><span className="a">We Build Time.</span></div>
            <p>Every hour your staff spends chasing missed calls, copy-pasting review replies, or manually following up with customers is an hour they&apos;re not spending on the work that actually grows your business.</p>
            <p>We automated these exact workflows for our own businesses first. That is how Janice, your AI employee, was born. Now we bring what works to the businesses that need it most.</p>
            <div className="about-proof">
              {["Vancouver-based, face-to-face when you want it", "Working prototype in week one", "Transparent, flat pricing upfront", "We run it in our own businesses"].map((t) => (
                <span className="about-proof-item" key={t}><span className="about-proof-ck"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0a9d76" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4 11-13" /></svg></span>{t}</span>
              ))}
            </div>
          </div>
          <div className="founders-label r rd2">The Founders</div>
          <div className="founders">
            <div className="founder-card r rd3">
              <div className="founder-photo"><img src="/leone.png" alt="Leone Jiwani, co-founder of Pacific Edge AI" loading="lazy" width={124} height={124} /></div>
              <div className="founder-info">
                <div className="founder-name">Leone Jiwani <span className="founder-role">Co-Founder</span></div>
                <p className="founder-bio">A BBA graduate of BCIT, Leone has spent years building and scaling real ventures, leading finance for the BCIT Real Estate Association, running special projects at Concord Pacific, and growing his own brand, Glarehawks, past 23,500 followers. Across all of it, one pattern kept repeating: capable owners losing their nights to admin that good software could finish in minutes. He started Pacific Edge to hand that time back, without the enterprise price tag.</p>
              </div>
            </div>
            <div className="founder-card r rd4">
              <div className="founder-photo"><img src="/sam.jpg" alt="Sam Rezaei, co-founder of Pacific Edge AI" loading="lazy" width={124} height={124} /></div>
              <div className="founder-info">
                <div className="founder-name">Sam Rezaei <span className="founder-role">Co-Founder</span></div>
                <p className="founder-bio">A finance student at UBC Sauder and Dean&rsquo;s List honoree, Sam has worked on institutional real estate and finance at QuadReal and Wesgroup, and spent three years coordinating projects at a rebar fabrication plant, where he watched capable teams buried under busywork the right tools could have erased. He co-founded Pacific Edge AI to give local businesses that leverage: less manual work, and clear answers from the data they already have.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divhr" />

      {/* TRUST */}
      <section className="trust">
        <div className="trust-head r">
          <div className="sl">Built On Trust</div>
          <h2 className="st">Your Data <span className="a">Stays Yours.</span></h2>
          <p className="sd" style={{ margin: "0 auto" }}>We treat your customers&apos; information like it&apos;s our own. Here is exactly how we keep it safe.</p>
        </div>
        <div className="trust-grid">
          {TRUST.map((t, i) => (
            <div className={`trust-card r rd${i + 1}`} key={t.h}>
              <div className="trust-ico">{t.ico}</div><h3>{t.h}</h3><p>{t.p}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divhr" />

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <div className="r">
          <div className="sl">Proof</div>
          <h2 className="st">What Owners<br /><span className="a">Are Saying.</span></h2>
          <p className="sd">Real outcomes from local businesses across Greater Vancouver, in their own words.</p>
        </div>
        <div className="tst-grid tst-three">
          {TESTIMONIALS.map((t, i) => (
            <div className={`tst tst-feature r rd${i + 1}`} key={t.name + i}>
              <div className="tst-stars">★★★★★</div>
              <p className="tst-q">&quot;{t.q}&quot;</p>
              <div className="tst-by"><div className="tst-av">{t.av}</div><div><div className="tst-name">{t.name}</div><div className="tst-biz">{t.biz}</div></div></div>
            </div>
          ))}
        </div>
      </section>

      <div className="divhr" />

      {/* AURORA — speed wins */}
      <section className="aurora-wrap">
        <div className="aurora reveal">
          <div className="aurora-inner">
            <div className="sl">Why Speed Wins</div>
            <h2>The Business That Answers First<br /><span className="a">Wins The Customer.</span></h2>
            <p>While the competition lets it ring, Janice replies in seconds, books the job, and keeps your calendar full. Let&apos;s set her up for you.</p>
          </div>
        </div>
      </section>

      <div className="divhr" />

      {/* FAQ */}
      <section id="faq">
        <span className="sn">06</span>
        <div className="r">
          <div className="sl">FAQ</div>
          <h2 className="st">Common<br /><span className="a">Questions.</span></h2>
          <p className="sd">Can&apos;t find your question here? Email us directly at <button type="button" className="sd-link" onClick={open}>hello@pacificedge.ai</button></p>
        </div>
        <div className="faq-grid">
          {FAQ.map((item, i) => (
            <div className={`faq-item r rd${(i % 4) + 1}`} key={item.q}>
              <div className="faq-q" onClick={(e) => e.currentTarget.parentElement?.classList.toggle("open")}>
                <h4>{item.q}</h4>
                <div className="faq-icon"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg></div>
              </div>
              <div className="faq-a"><div className="faq-a-inner">{item.a}</div></div>
            </div>
          ))}
        </div>
      </section>

      <div className="divhr" />

      {/* FIRST MONTH FREE */}
      <section className="fmonth">
        <div className="fmonth-inner r">
          <div className="fmonth-glow" />
          <div className="fmonth-tag">No-Risk Start</div>
          <h2>Your First Month<br /><span className="a">Is On Us.</span></h2>
          <p>Put Janice to work in your business for a full month, on us. See the bookings she catches and the hours she saves for yourself, then decide. If she is not the right fit, walk away. No strings.</p>
          <a href={CAL} target="_blank" rel="noopener" className="btn-primary">Book Your Free Setup Call</a>
          <div className="fmonth-fine">Most owners see real results in the first week.</div>
        </div>
      </section>

      <div className="divhr" />

      {/* CONTACT CTA */}
      <section className="cta" id="contact">
        <div className="r">
          <div className="sl" style={{ justifyContent: "center" }}>Get Started</div>
          <h2 className="cta-title">Ready To Get<br /><span className="a">The Edge?</span></h2>
          <p className="cta-desc">Start with a free 15-minute discovery call. No pitch, no obligation. Just an honest conversation about what&apos;s costing your business the most right now.</p>
          <div className="cta-actions">
            <a href={CAL} target="_blank" rel="noopener" className="btn-primary" style={{ fontSize: 16, padding: "18px 44px" }}>Book a Free 15-Min Demo</a>
            <button type="button" className="cta-email" onClick={open}>Or email hello@pacificedge.ai →</button>
          </div>
          <div className="cta-bullets">
            <span><i className="cta-dot" />Free discovery call</span>
            <span><i className="cta-dot" />Transparent pricing</span>
            <span><i className="cta-dot" />Working prototype in ~1 week</span>
            <span><i className="cta-dot" />Vancouver-based</span>
          </div>
        </div>
      </section>

      {/* SOURCES */}
      <div className="sources" id="sources">
        <div className="sources-title">Sources &amp; References</div>
        <ol>
          {SOURCES.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      </div>

      {/* Floating controls */}
      <a href={CAL} target="_blank" rel="noopener" className={`float-book ${scrolled ? "show" : ""}`}>Book a Demo</a>
      <button className={`scroll-top ${scrolled ? "show" : ""}`} onClick={toTop} aria-label="Scroll to top">
        <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M8 13V3m0 0L4 7m4-4l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
    </div>
  )
}
