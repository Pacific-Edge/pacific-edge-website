"use client"

import { useEffect } from "react"

/**
 * Ports the interactive behaviors from the old industry.js so sub-pages can be
 * plain static markup: count-up (.count[data-to]), scripted chat ([data-chat]),
 * animated mock feeds (.mock[data-live]), one-open FAQ (<details.faq-item>), and
 * the embedded dashboard iframe autosize (#idash). Scroll-reveal (.reveal/.r)
 * lives in ScrollReveal. Reduced-motion collapses everything to its end state.
 */
export default function LegacyBehaviors() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const observers: IntersectionObserver[] = []
    const cleanups: Array<() => void> = []

    // ── count-up ──
    const animateCount = (el: Element) => {
      const toAttr = el.getAttribute("data-to") || "0"
      const to = parseFloat(toAttr)
      const dec = toAttr.indexOf(".") > -1 ? 1 : 0
      const prefix = el.getAttribute("data-prefix") || ""
      const dur = 1400
      let start: number | null = null
      const step = (ts: number) => {
        if (start === null) start = ts
        const p = Math.min((ts - start) / dur, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        const val = prefix + (to * eased).toFixed(dec)
        if (el.firstChild) (el.childNodes[0] as Text).nodeValue = val
        else el.textContent = val
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }
    const counts = Array.from(document.querySelectorAll(".count"))
    if (reduce) {
      counts.forEach((el) => {
        el.textContent = (el.getAttribute("data-prefix") || "") + el.getAttribute("data-to")
      })
    } else if (counts.length) {
      const obs = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) { animateCount(e.target); obs.unobserve(e.target) } }),
        { threshold: 0.6 },
      )
      counts.forEach((el) => obs.observe(el))
      observers.push(obs)
    }

    // ── scripted chat ──
    const playChat = (chat: Element) => {
      const nodes = Array.from(chat.children)
      if (reduce) {
        nodes.forEach((n) => { if (n.classList.contains("typing")) n.remove(); else n.classList.add("in") })
        return
      }
      let i = 0
      const next = () => {
        if (i >= nodes.length) return
        const n = nodes[i] as HTMLElement
        if (n.classList.contains("typing")) {
          const hold = parseInt(n.getAttribute("data-typing") || "1100", 10)
          n.classList.add("in")
          setTimeout(() => { n.classList.remove("in"); setTimeout(() => { i++; next() }, 160) }, hold)
        } else if (n.classList.contains("bubble") || n.classList.contains("chat-badge")) {
          const wait = parseInt(n.getAttribute("data-delay") || "260", 10)
          setTimeout(() => { n.classList.add("in"); (chat as HTMLElement).scrollTop = chat.scrollHeight; i++; next() }, wait)
        } else { n.classList.add("in"); i++; next() }
      }
      next()
    }
    const chats = Array.from(document.querySelectorAll("[data-chat]"))
    if (chats.length) {
      const obs = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) { playChat(e.target); obs.unobserve(e.target) } }),
        { threshold: 0.35 },
      )
      chats.forEach((c) => obs.observe(c))
      observers.push(obs)
    }

    // ── animated mock feed ──
    const playMock = (mock: Element) => {
      const rows = Array.from(mock.children).filter(
        (n) => n.classList && (n.classList.contains("mock-row") || n.classList.contains("mock-typing") || n.classList.contains("mock-reply")),
      )
      if (reduce) {
        rows.forEach((r) => { if (r.classList.contains("mock-typing")) (r as HTMLElement).style.display = "none"; else r.classList.add("in") })
        return
      }
      let i = 0
      const next = () => {
        if (i >= rows.length) return
        const r = rows[i] as HTMLElement
        if (r.classList.contains("mock-typing")) {
          const hold = parseInt(r.getAttribute("data-typing") || "1200", 10)
          r.classList.add("in")
          setTimeout(() => { r.classList.remove("in"); setTimeout(() => { r.style.display = "none"; i++; next() }, 180) }, hold)
        } else {
          const wait = parseInt(r.getAttribute("data-delay") || "480", 10)
          setTimeout(() => { r.classList.add("in"); i++; next() }, wait)
        }
      }
      next()
    }
    const mocks = Array.from(document.querySelectorAll(".mock[data-live]"))
    if (mocks.length) {
      const obs = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) { playMock(e.target); obs.unobserve(e.target) } }),
        { threshold: 0.4 },
      )
      mocks.forEach((m) => obs.observe(m))
      observers.push(obs)
    }

    // ── FAQ: one <details> open at a time ──
    const faqItems = Array.from(document.querySelectorAll("details.faq-item")) as HTMLDetailsElement[]
    faqItems.forEach((item) => {
      const onToggle = () => { if (item.open) faqItems.forEach((o) => { if (o !== item) o.open = false }) }
      item.addEventListener("toggle", onToggle)
      cleanups.push(() => item.removeEventListener("toggle", onToggle))
    })

    // ── dashboard iframe autosize ──
    const onMsg = (e: MessageEvent) => {
      if (e.data && e.data.type === "pe-dash-height" && e.data.height > 200) {
        const f = document.getElementById("idash") as HTMLIFrameElement | null
        if (f) f.style.height = e.data.height + "px"
      }
    }
    window.addEventListener("message", onMsg)
    cleanups.push(() => window.removeEventListener("message", onMsg))

    return () => {
      observers.forEach((o) => o.disconnect())
      cleanups.forEach((fn) => fn())
    }
  }, [])

  return null
}
