"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { getScriptedChat } from "@/lib/demo"
import type { ScriptedBubble } from "@/lib/demo"
import { EASE_OUT } from "@/lib/motion"
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
  | { key: string; kind: "assistant"; text: string; meta?: string }
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
          className="h-1.5 w-1.5 rounded-full bg-neutral-900/35 animate-pulse"
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
    case "assistant":
      return {
        key: `jan-${index}`,
        kind: "assistant",
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
  const startedLoopRef = useRef(false)
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

  const runLoop = useCallback(
    async (isCancelled: () => boolean) => {
      if (!script) return
      setStarted(true)

      if (reduceMotion) {
        const all = script.bubbles
          .map((b, i) => bubbleToRendered(b, i))
          .filter((b): b is RenderedBubble => b !== null)
        setVisible(all)
        return
      }

      while (!isCancelled()) {
        for (let i = 0; i < script.bubbles.length; i++) {
          if (isCancelled()) return
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
                ? (bubble.delayMs ?? 450)
                : 450

          if (delay > 0) await sleep(delay)

          const rendered = bubbleToRendered(bubble, i)
          if (rendered) setVisible((prev) => [...prev, rendered])
        }

        if (isCancelled()) return
        await sleep(4800)
        if (isCancelled()) return
        setVisible([])
        await sleep(700)
      }
    },
    [reduceMotion, script],
  )

  useEffect(() => {
    const el = containerRef.current
    if (!el || !script) return

    let cancelled = false
    const isCancelled = () => cancelled

    const start = () => {
      if (startedLoopRef.current) return
      startedLoopRef.current = true
      void runLoop(isCancelled)
    }

    if (!("IntersectionObserver" in window)) {
      queueMicrotask(start)
      return () => {
        cancelled = true
      }
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            start()
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.35 },
    )

    obs.observe(el)
    return () => {
      cancelled = true
      obs.disconnect()
    }
  }, [runLoop, script])

  if (!script) return null

  return (
    <div ref={containerRef} className={`${PHONE_SHELL_CLASS} ${className}`}>
      <div className={PHONE_FRAME_CLASS}>
        <div className={PHONE_NOTCH_CLASS} aria-hidden />

        <div className={PHONE_SCREEN_CLASS}>
          <div className="flex shrink-0 items-center gap-2.5 border-b border-neutral-300/30 px-3 py-2.5 pt-6">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-900 font-system text-xs font-bold text-white">
              {script.businessName.charAt(0)}
            </div>
            <div className="min-w-0">
              <p className="truncate font-system text-xs font-medium text-neutral-900">
                {script.businessName}
              </p>
              <p className="truncate font-system text-[10px] text-neutral-900/45">{script.headerSub}</p>
            </div>
          </div>

          <div
            ref={chatRef}
            className={PHONE_CHAT_CLASS}
            aria-live="polite"
            aria-busy={started && typing}
          >
            {!started && (
              <p className="text-center font-system text-[10px] uppercase tracking-wide text-neutral-900/35">
                Live demo
              </p>
            )}

            <AnimatePresence initial={false}>
              {visible.map((msg) => {
                if (msg.kind === "timestamp") {
                  return (
                    <motion.p
                      key={msg.key}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, ease: EASE_OUT }}
                      className="text-center font-system text-[10px] uppercase tracking-wide text-neutral-900/35"
                    >
                      {msg.text}
                    </motion.p>
                  )
                }
                if (msg.kind === "badge") {
                  return (
                    <motion.p
                      key={msg.key}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: EASE_OUT }}
                      className="mx-2 rounded-lg border border-neutral-400/30 bg-neutral-400/10 px-2.5 py-1.5 text-center font-system text-[10px] leading-snug text-neutral-800"
                    >
                      {msg.text}
                    </motion.p>
                  )
                }
                const isCustomer = msg.kind === "customer"
                return (
                  <motion.div
                    key={msg.key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: EASE_OUT }}
                    className={isCustomer ? BUBBLE_SENT_CLASS : BUBBLE_RECEIVED_CLASS}
                  >
                    {msg.text}
                    {"meta" in msg && msg.meta ? (
                      <span className="mt-1 block text-[9px] uppercase tracking-wide opacity-70">
                        {msg.meta}
                      </span>
                    ) : null}
                  </motion.div>
                )
              })}
              {typing && (
                <motion.div
                  key="typing-indicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: EASE_OUT }}
                >
                  <TypingIndicator />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
