"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion"
import {
  Phone, Star, Clock, DollarSign,
  MessageSquare, Zap,
} from "lucide-react"
import WhyUsSection from "./WhyUsSection"
import TrustProofSection from "./TrustProofSection"
import ScriptedChatDemo from "@/components/demo/ScriptedChatDemo"
import ColorBends from "@/components/ui/ColorBends"
import StyledContainer from "@/components/ui/StyledContainer"
import EmbedLink from "@/components/ui/EmbedLink"
import HeroRoll from "@/components/ui/HeroRoll"
import HeroCountUp from "@/components/ui/HeroCountUp"
import OpsDashVisual from "./OpsDashVisual"
import { useContactModal } from "@/components/site/ContactModalProvider"

const CAL = "https://cal.com/pacificedge"

// Canvas/WebGL contexts can't read CSS custom properties directly (fillStyle/strokeStyle
// and shader uniforms need literals), so these are the single source of truth for the mint
// literal used below — keep in sync with --color-accent (#4af0c0) in app/globals.css.
const ACCENT_RGB = "74,240,192"
const ACCENT_HEX = "#4af0c0"

// 24/7 second dial: spins ~1.7 turns and lands (stops) on 7.
const SPIN_TO_7 = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "0", "1", "2", "3", "4", "5", "6", "7",
]

const MARQUEE = [
  "AI Automation", "Review Management", "Missed Call Recovery", "Customer Follow-Ups",
  "Appointment Booking", "Social Media AI", "Lead Capture", "Workflow Optimization",
]

type IntgCard = { ini: string; name: string; img?: string }
type IndustryDef = { href: string; name: string; desc: string; more: string; tools: IntgCard[] }
const INDUSTRIES: IndustryDef[] = [
  {
    href: "/dental", name: "Dental & Health Clinics",
    desc: "Never miss a new patient call.", more: "Explore dental AI",
    tools: [
      { ini: "Tk", name: "Tracker" }, { ini: "Dx", name: "Dentrix" }, { ini: "OD", name: "Open Dental" },
      { ini: "CD", name: "ClearDent" },
    ] as IntgCard[],
  },
  {
    href: "/restaurants", name: "Restaurants & Food Service",
    desc: "Fill more tables during your dinner rush.", more: "Explore restaurant AI",
    tools: [
      { ini: "OT", name: "OpenTable" }, { ini: "To", name: "Toast", img: "/logos/toast.png" },
      { ini: "Sq", name: "Square" }, { ini: "Cl", name: "Clover" },
    ] as IntgCard[],
  },
  {
    href: "/salons", name: "Salons, Spas & Wellness",
    desc: "Keep your chairs full.", more: "Explore salon & spa AI",
    tools: [
      { ini: "Ph", name: "Phorest" }, { ini: "Vg", name: "Vagaro" }, { ini: "Sq", name: "Square Appts" },
      { ini: "Bk", name: "Booksy" },
    ] as IntgCard[],
  },
  {
    href: "/trades", name: "Trades & Home Services",
    desc: "Win the job while you're still on site.", more: "Explore trades AI",
    tools: [
      { ini: "QB", name: "QuickBooks" }, { ini: "HS", name: "HomeStars" }, { ini: "Jb", name: "Jobber" },
      { ini: "ST", name: "ServiceTitan" },
    ] as IntgCard[],
  },
]

// Scroll-driven parallax rate per row (px of travel each side of rest).
// All rows share one timeline — the section's scroll progress — and move
// simultaneously; later rows travel further so the stack gently compresses
// upward as it crosses the viewport. Alternating rows never overlap.
const IND_PARALLAX_RATE = [25, 40, 55, 70]

function IndustryRow({ ind, index, progress }: { ind: IndustryDef; index: number; progress: MotionValue<number> }) {
  const prefersReduced = useReducedMotion()
  const rate = IND_PARALLAX_RATE[index] ?? 20
  // Linear with scroll (Lenis supplies the smoothing): +rate when the section
  // enters at the bottom, -rate as it leaves at the top.
  const y = useTransform(progress, (t) => (prefersReduced ? 0 : rate * (1 - 2 * t)))

  return (
    <div className={`ind-frow r${index % 2 === 1 ? " rev" : ""}`}>
      <motion.div className="ind-frow-text" style={{ y }}>
        <h3 className="ind-frow-title">{ind.name}</h3>
        <p className="ind-frow-sub">{ind.desc}</p>
        <div className="ind-frow-tools">
          {ind.tools.map((tool) => (
            <span className="ind-tool" key={tool.name}>
              <span className="ind-tool-ico">
                {tool.img ? <img src={tool.img} alt={`${tool.name} logo`} loading="lazy" /> : null}
                <b>{tool.ini}</b>
              </span>
              {tool.name}
            </span>
          ))}
        </div>
        <EmbedLink href={ind.href} className="ind-row-btn">{ind.more}</EmbedLink>
      </motion.div>
    </div>
  )
}

const STEPS = [
  { h: "Discovery Call", p: "15 minutes to learn your business, find where time and money are slipping, and identify what to automate first. No sales pitch." },
  { h: "Deep-Dive Session", p: "A focused 60-minute session mapping your workflow to find what's costing you the most and which automations matter most." },
  { h: "Custom Build", p: "We design and build your AI workflows with proven tools. You see a working prototype within the first week." },
  { h: "Launch & Train", p: "We roll everything out, train your team, and confirm you're comfortable before we step back." },
  { h: "Optimize & Support", p: "Ongoing monitoring and refinement. As your business grows, we scale your automations with you." },
]

const DASH_ROWS = [
  { Icon: Phone, label: "Missed call response", before: "~4 HRS", after: "INSTANT", src: "3" },
  { Icon: Star, label: "Review response rate", before: "~36%", after: "~100%", src: "4" },
  { Icon: MessageSquare, label: "Customer follow-ups", before: "MANUAL", after: "AUTO" },
  { Icon: Clock, label: "Admin hours / week", before: "15+ HRS", after: "~5 HRS", src: "6" },
  { Icon: DollarSign, label: "Revenue leaking", before: "$3K+/MO", after: "CAPTURED", src: "7" },
  { Icon: Zap, label: "Growth bottleneck", before: "YOU", after: "SOLVED" },
]

export default function HomeContent() {
  const { open } = useContactModal()
  const reduce = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const indAltRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: indProgress } = useScroll({ target: indAltRef, offset: ["start end", "end start"] })
  const processRef = useRef<HTMLElement>(null)
  const pdFillRef = useRef<HTMLDivElement>(null)

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
        cx.fillStyle = `rgba(${ACCENT_RGB},${a.a})`
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
            cx.strokeStyle = `rgba(${ACCENT_RGB},${0.018 * (1 - d / 130)})`
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

  // Scroll-top toggle
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
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
      const sliderProgress = Math.min(1, progress / (2.5 / (total + 1)))
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

  return (
    <div className="pe-home">
      <canvas id="p" ref={canvasRef} />

      {/* HERO */}
      <section className="hero">
        <h1>
          The Unfair Edge
          <br />
          <span className="accent-line">Your Business Deserves.</span>
        </h1>
        <div className="hero-rule" />
        <p className="hero-sub">AI systems and custom software that answer missed calls, respond to reviews, and track bookings, built around how your business runs.</p>
        <div className="hero-actions">
          <a href={CAL} target="_blank" rel="noopener" className="btn-mint">
            Book a Free 15-Min Demo
          </a>
          <a href="#two-sides" className="btn-dark">
            See What We Do
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-val">
              <HeroCountUp to={77} delay={1.0} duration={1.6} />%<a href="#sources" className="stat-src">[1]</a>
            </div>
            <div className="hero-stat-lbl">Less admin</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-val">
              <HeroRoll sequence={["1", "2", "3"]} axis="x" enterFrom={-1} startDelayMs={2000} stepMs={450} />X
            </div>
            <div className="hero-stat-lbl">Faster response</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-val">
              <HeroRoll sequence={["19", "20", "21", "22", "23", "24"]} axis="y" enterFrom={-1} startDelayMs={1900} stepMs={190} />/
              <HeroRoll sequence={SPIN_TO_7} axis="y" enterFrom={1} startDelayMs={1200} stepMs={110} />
            </div>
            <div className="hero-stat-lbl">Always on</div>
          </div>
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

      {/* TWO SIDES TO OUR BUSINESS — full section */}
      <section className="twosides" id="two-sides">
        <span className="sn">01</span>
        <div className="r">
          <div className="sl">What We Do</div>
          <h2 className="st">How We <span className="a">Grow Your Business.</span></h2>
          <p className="sd">Two ways we help local businesses: AI agents that go live in days, and custom software built around how you work.</p>
        </div>
        <div className="ts-grid">
          <StyledContainer background="black" pattern="diag-wide" className="ts-card ts-ai">
            <div className="ts-body">
              <div className="ts-copy">
                <h3 className="ts-h">AI Solutions</h3>
                <p className="ts-p">We build AI agents that answer calls, chat with customers on your site, and train your team on the tools from day one.</p>
                <ul className="ts-inline">
                  <li>AI Voice Receptionist</li>
                  <li>AI Inquiry Chatbot</li>
                  <li>AI Training</li>
                </ul>
                <div className="ts-proof">
                  <span className="ts-proof-dot" aria-hidden="true" />
                  <span><strong>Live now:</strong> an AI voice receptionist answering calls, booking appointments, and walking callers through the business, 24/7.</span>
                </div>
                <EmbedLink href="/ai-employee" variant="dark">Explore AI agents</EmbedLink>
              </div>
              <div className="ts-phone">
                <ScriptedChatDemo industry="dental" />
              </div>
            </div>
          </StyledContainer>
          {/* Right side — Custom Software Builds. Uses the same .ts-* type
              system as the left card (identical fonts/sizes); the .ts-cb variant
              supplies the mint→ink gradient, white text, and wider copy. */}
          <StyledContainer
            background="mint"
            pattern="diag-tight"
            className="ts-card ts-cb"
          >
            <div className="ts-body">
              <div className="ts-copy">
                <h3 className="ts-h">Custom Software Builds</h3>
                <p className="ts-p">We build backend systems that bring clients in the door, help you manage them once they&apos;re booked, and run the day-to-day operation.</p>
                <ul className="ts-inline">
                  <li>Appointment Cancellation Management Software</li>
                  <li>CRM / Lead Tracking &amp; Sourcing</li>
                  <li>Reporting Dashboard</li>
                  <li>Review Management</li>
                  <li>Websites + SEO</li>
                </ul>
                <div className="ts-proof">
                  <span className="ts-proof-dot" aria-hidden="true" />
                  <span><strong>Live now:</strong> Janice, our AI cancellation-management platform, keeping the schedule full automatically.</span>
                </div>
                <EmbedLink href="/custom-builds" variant="dark">See custom builds</EmbedLink>
              </div>
              <div className="ts-cb-dash">
                <OpsDashVisual reduce={reduce} />
              </div>
            </div>
          </StyledContainer>
        </div>
      </section>

      <div className="divhr" />

      {/* INDUSTRIES */}
      <section id="industries">
        <span className="sn">02</span>
        <div className="r ind-head">
          <div className="sl">Industries</div>
          <h2 className="st ind-head-title">Industries We <span className="a">Serve.</span></h2>
        </div>
        <div className="ind-alt" ref={indAltRef}>
          {INDUSTRIES.map((ind, i) => (
            <IndustryRow ind={ind} index={i} progress={indProgress} key={ind.href} />
          ))}
        </div>
        <p className="intg-note">Don&apos;t see your tools? <b>We build custom integrations</b> for whatever you already run.</p>
      </section>

      <div className="divhr" />

      {/* PROCESS */}
      <section id="process" ref={processRef}>
        <span className="sn">04</span>
        <div className="r">
          <div className="sl">How It Works</div>
          <h2 className="st">Simple Process,<br /><span className="a">Powerful</span> Results</h2>
          <p className="sd">Here&apos;s how we take your business from first call to live automation.</p>
        </div>
        <div className="process-wrapper">
          <div className="steps-tl">
            {STEPS.map((s, i) => (
              <div className={`step r rd${i + 1}`} key={s.h}>
                <div className="step-circle">{i + 1}</div>
                <div className="step-body"><h3 className="title-step">{s.h}</h3><p>{s.p}</p></div>
              </div>
            ))}
          </div>
          <StyledContainer background="black" pattern="mesh" className="process-dash r rd2">
            <div className="pd-top">
              <div className="pd-progress">
                <div className="pd-progress-label"><span className="pd-before-label">Before</span><span className="pd-after-label">After</span></div>
                <div className="pd-progress-bar"><div className="pd-progress-fill" ref={pdFillRef} style={{ width: "0%" }} /></div>
              </div>
            </div>
            <div className="pd-body" id="dashBody">
              {DASH_ROWS.map((row) => (
                <div className="pd-row" key={row.label}>
                  <div className="pd-row-label"><div className="pd-row-icon"><row.Icon size={15} strokeWidth={2} /></div>{row.label}</div>
                  <div className="pd-row-value">
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
          </StyledContainer>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 28, padding: "40px 56px 0" }}>
          <a href={CAL} target="_blank" rel="noopener" className="btn-mint">
            Book a Free Consultation
          </a>
          <EmbedLink href="/how-it-works">See The Full Process</EmbedLink>
        </div>
      </section>

      <div className="divhr" />

      {/* WHY US */}
      <section className="about" id="about">
        <span className="sn">05</span>
        <div className="r" style={{ textAlign: "center" }}>
          <div className="sl" style={{ justifyContent: "center" }}>Why Us</div>
          <h2 className="st">We&apos;re Business Owners, <span className="a">Building For Business Owners</span></h2>
          <p className="sd" style={{ maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>We built the automation we wished we had running our own businesses.</p>
        </div>
        <WhyUsSection />
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <EmbedLink href="/about">Meet The Team</EmbedLink>
        </div>
      </section>

      <div className="divhr" />

      {/* TRUST + TESTIMONIALS */}
      <section id="testimonials">
        <div className="r" style={{ textAlign: "center" }}>
          <div className="sl" style={{ justifyContent: "center" }}>Trust &amp; Proof</div>
          <h2 className="st" style={{ margin: "0 auto 18px" }}>Trustworthy, <span className="a">Privacy-Focused </span><span style={{ color: "var(--color-text)" }}>Service.</span></h2>
          <p className="sd sd-oneline" style={{ margin: "0 auto" }}>We treat your customers&apos; data like it&apos;s our own, and local business owners feel the difference.</p>
        </div>
        <TrustProofSection />
      </section>

      <div className="divhr" />

      {/* CONTACT CTA */}
      <section className="cta" id="contact">
        <div className="cta-panel surface--ink">
          {/* ColorBends field — passive, non-interactive WebGL background glowing
              over the ink panel. Mint token ramp; pauses when off-screen. */}
          <div className="cta-bends" aria-hidden>
            {/* Bespoke 4-stop shader ramp (WebGL uniform, can't consume CSS vars) — only the
                3rd stop is the design token (--color-accent); the other 3 are one-off shades
                purpose-built for this gradient, not part of the site's token system. */}
            <ColorBends
              colors={["#0a7d5d", "#0a9d76", ACCENT_HEX, "#7ff5d5"]}
              interactive={false}
              speed={0.18}
              scale={1.3}
              intensity={1.0}
              noise={0.08}
              parallax={0}
              mouseInfluence={0}
            />
          </div>
          <div className="r">
            <div className="sl" style={{ justifyContent: "center" }}>No-Risk Start</div>
            <h2 className="cta-title">One Month<br /><span className="a" style={{ color: "#fff" }}>On Us.</span></h2>
            <p className="cta-desc">Put Janice to work in your business for a full month, on us. See the bookings she catches and the hours she saves, then decide. If she is not the right fit, walk away. No strings.</p>
            <div className="cta-actions">
              <a href={CAL} target="_blank" rel="noopener" className="btn-mint" style={{ fontSize: 16, padding: "18px 44px" }}>Book a Free 15-Min Demo</a>
              <EmbedLink variant="dark" onClick={open}>Or email hello@pacificedge.ai</EmbedLink>
            </div>
            <div className="cta-bullets">
              <span><i className="cta-dot" />Free discovery call</span>
              <span><i className="cta-dot" />Transparent pricing</span>
              <span><i className="cta-dot" />Working prototype in ~1 week</span>
              <span><i className="cta-dot" />Vancouver-based</span>
            </div>
          </div>
        </div>
      </section>

      {/* Floating controls */}
      <a href={CAL} target="_blank" rel="noopener" className={`float-book ${scrolled ? "show" : ""}`}>Book a Demo</a>
    </div>
  )
}
