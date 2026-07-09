"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { useReducedMotion } from "framer-motion"
import { getScriptedChat } from "@/lib/demo"
import type { ScriptedBubble } from "@/lib/demo"
import {
  BUBBLE_RECEIVED_CLASS,
  BUBBLE_SENT_CLASS,
  PHONE_CHAT_CLASS,
  PHONE_FRAME_CLASS,
  PHONE_NOTCH_CLASS,
  PHONE_SCREEN_CLASS,
  PHONE_SHELL_CLASS,
  TYPING_INDICATOR_CLASS,
} from "@/components/demo/phone-chat-styles"

type RenderedBubble =
  | { key: string; kind: "timestamp"; text: string }
  | { key: string; kind: "customer"; text: string; meta?: string }
  | { key: string; kind: "janice"; text: string; meta?: string }
  | { key: string; kind: "badge"; text: string }

export type ScriptedChatDemoProps = {
  industry: string
  className?: string
}

function TypingIndicator() {
  return (
    <div className={TYPING_INDICATOR_CLASS} aria-hidden>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-navy-900/35 animate-pulse"
          style={{ animationDelay: `${i * 150}ms` }}
        />
      ))}
    </div>
  )
}

function bubbleToRendered(bubble: ScriptedBubble, index: number): RenderedBubble | null {
  switch (bubble.type) {
    case "timestamp":
      return { key: `ts-${index}`, kind: "timestamp", text: bubble.text }
    case "customer":
      return { key: `cust-${index}`, kind: "customer", text: bubble.text, meta: bubble.meta }
    case "janice":
      return {
        key: `jan-${index}`,
        kind: "janice",
        text: bubble.text,
        meta: bubble.meta,
      }
    case "badge":
      return { key: `badge-${index}`, kind: "badge", text: bubble.text }
    case "typing":
      return null
    default:
      return null
  }
}

function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms))
}

export default function ScriptedChatDemo({ industry, className = "" }: ScriptedChatDemoProps) {
  const reduceMotion = useReducedMotion()
  const script = getScriptedChat(industry)
  const containerRef = useRef<HTMLDivElement>(null)
  const chatRef = useRef<HTMLDivElement>(null)
  const playedRef = useRef(false)
  const [visible, setVisible] = useState<RenderedBubble[]>([])
  const [typing, setTyping] = useState(false)
  const [started, setStarted] = useState(false)

  const scrollToBottom = useCallback(() => {
    const el = chatRef.current
    if (!el) return
    el.scrollTop = el.scrollHeight
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [visible, typing, scrollToBottom])

  const playScript = useCallback(async () => {
    if (!script || playedRef.current) return
    playedRef.current = true
    setStarted(true)

    if (reduceMotion) {
      const all = script.bubbles
        .map((b, i) => bubbleToRendered(b, i))
        .filter((b): b is RenderedBubble => b !== null)
      setVisible(all)
      return
    }

    for (let i = 0; i < script.bubbles.length; i++) {
      const bubble = script.bubbles[i]

      if (bubble.type === "typing") {
        setTyping(true)
        await sleep(bubble.durationMs)
        setTyping(false)
        await sleep(160)
        continue
      }

      const delay =
        bubble.type === "timestamp"
          ? 0
          : "delayMs" in bubble
            ? (bubble.delayMs ?? 260)
            : 260

      if (delay > 0) await sleep(delay)

      const rendered = bubbleToRendered(bubble, i)
      if (rendered) setVisible((prev) => [...prev, rendered])
    }
  }, [reduceMotion, script])

  useEffect(() => {
    const el = containerRef.current
    if (!el || !script) return

    if (!("IntersectionObserver" in window)) {
      void playScript()
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            void playScript()
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.35 },
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [playScript, script])

  if (!script) return null

  return (
    <div ref={containerRef} className={`${PHONE_SHELL_CLASS} ${className}`}>
      <div className={PHONE_FRAME_CLASS}>
        <div className={PHONE_NOTCH_CLASS} aria-hidden />

        <div className={PHONE_SCREEN_CLASS}>
          <div className="flex shrink-0 items-center gap-3 border-b border-ash-300/30 px-4 py-3 pt-7">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-bold text-cream-50">
              {script.businessName.charAt(0)}
            </div>
            <div className="min-w-0">
              <p className="truncate font-ui text-sm font-medium text-navy-900">
                {script.businessName}
              </p>
              <p className="truncate font-ui text-[11px] text-navy-900/45">{script.headerSub}</p>
            </div>
          </div>

          <div
            ref={chatRef}
            className={PHONE_CHAT_CLASS}
            aria-live="polite"
            aria-busy={started && typing}
          >
            {!started && (
              <p className="text-center font-ui text-[10px] uppercase tracking-wide text-navy-900/35">
                Scroll to play
              </p>
            )}

            {visible.map((msg) => {
              if (msg.kind === "timestamp") {
                return (
                  <p
                    key={msg.key}
                    className="text-center font-ui text-[10px] uppercase tracking-wide text-navy-900/35"
                  >
                    {msg.text}
                  </p>
                )
              }
              if (msg.kind === "badge") {
                return (
                  <p
                    key={msg.key}
                    className="mx-2 rounded-lg border border-ash-400/30 bg-ash-400/10 px-3 py-2 text-center font-ui text-[11px] leading-snug text-navy-800"
                  >
                    {msg.text}
                  </p>
                )
              }
              const isCustomer = msg.kind === "customer"
              return (
                <div
                  key={msg.key}
                  className={isCustomer ? BUBBLE_SENT_CLASS : BUBBLE_RECEIVED_CLASS}
                >
                  {msg.text}
                  {"meta" in msg && msg.meta ? (
                    <span className="mt-1 block text-[9px] uppercase tracking-wide opacity-70">
                      {msg.meta}
                    </span>
                  ) : null}
                </div>
              )
            })}
            {typing && <TypingIndicator />}
          </div>
        </div>
      </div>
    </div>
  )
}
