"use client"

import { useCallback, useEffect, useId, useRef, useState } from "react"
import { useReducedMotion } from "framer-motion"
import {
  JANICE_GREETING,
  JANICE_QUICK_CHIPS,
  createJaniceChatState,
  getJaniceReply,
} from "@/lib/demo"

type ChatMessage = {
  id: string
  role: "user" | "janice" | "badge" | "timestamp"
  text: string
  meta?: string
}

export type LiveChatDemoProps = {
  className?: string
  businessName?: string
}

function TypingIndicator() {
  return (
    <div
      className="self-start flex items-center gap-1 px-3.5 py-3 rounded-2xl rounded-bl-md bg-cream-100 border border-ash-300/30"
      aria-label="Janice is typing"
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-navy-900/35 animate-pulse"
          style={{ animationDelay: `${i * 150}ms` }}
        />
      ))}
    </div>
  )
}

export default function LiveChatDemo({
  className = "",
  businessName = "Pacific Edge AI",
}: LiveChatDemoProps) {
  const reduceMotion = useReducedMotion()
  const formId = useId()
  const chatRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const stateRef = useRef(createJaniceChatState())
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "greeting",
      role: "timestamp",
      text: "Now · Live demo · text Janice anything",
    },
    {
      id: "janice-0",
      role: "janice",
      text: JANICE_GREETING.text,
    },
  ])
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const [sending, setSending] = useState(false)

  const scrollToBottom = useCallback(() => {
    const el = chatRef.current
    if (!el) return
    el.scrollTop = el.scrollHeight
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, typing, scrollToBottom])

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim()
      if (!trimmed || sending) return

      setSending(true)
      setInput("")
      const userId = `user-${Date.now()}`
      setMessages((prev) => [...prev, { id: userId, role: "user", text: trimmed }])

      const reply = getJaniceReply(trimmed, stateRef.current)
      const delay = reduceMotion ? 0 : 900 + Math.min(trimmed.length * 12, 400)

      if (delay > 0) {
        setTyping(true)
        await new Promise((r) => setTimeout(r, delay))
        setTyping(false)
      }

      const janiceId = `janice-${Date.now()}`
      setMessages((prev) => [
        ...prev,
        { id: janiceId, role: "janice", text: reply.text },
      ])

      if (reply.badge) {
        setMessages((prev) => [
          ...prev,
          { id: `badge-${Date.now()}`, role: "badge", text: reply.badge! },
        ])
      }

      setSending(false)
      inputRef.current?.focus()
    },
    [reduceMotion, sending],
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    void sendMessage(input)
  }

  return (
    <div className={`mx-auto w-full max-w-[340px] ${className}`}>
      <div className="relative rounded-[2.25rem] border border-ash-300/50 bg-navy-950 p-2.5 shadow-card">
        <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-navy-950" aria-hidden />

        <div className="overflow-hidden rounded-[1.75rem] bg-cream-50">
          <div className="flex items-center gap-3 border-b border-ash-300/30 px-4 py-3 pt-7">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-bold text-cream-50">
              J
            </div>
            <div className="min-w-0">
              <p className="truncate font-ui text-sm font-medium text-navy-900">
                Janice · {businessName}
              </p>
              <p className="font-ui text-[11px] text-navy-900/45">Online now</p>
            </div>
          </div>

          <div
            ref={chatRef}
            className="flex max-h-[min(52vh,420px)] min-h-[280px] flex-col gap-2 overflow-y-auto px-3 py-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-live="polite"
            aria-relevant="additions"
          >
            {messages.map((msg) => {
              if (msg.role === "timestamp") {
                return (
                  <p
                    key={msg.id}
                    className="text-center font-ui text-[10px] uppercase tracking-wide text-navy-900/35"
                  >
                    {msg.text}
                  </p>
                )
              }
              if (msg.role === "badge") {
                return (
                  <p
                    key={msg.id}
                    className="mx-2 rounded-lg border border-ash-400/30 bg-ash-400/10 px-3 py-2 text-center font-ui text-[11px] leading-snug text-navy-800"
                  >
                    {msg.text}
                  </p>
                )
              }
              const isJanice = msg.role === "janice"
              return (
                <div
                  key={msg.id}
                  className={`max-w-[88%] px-3.5 py-2.5 font-ui text-sm leading-relaxed ${
                    isJanice
                      ? "self-end rounded-2xl rounded-br-md bg-navy-900 text-cream-50"
                      : "self-start rounded-2xl rounded-bl-md border border-ash-300/30 bg-cream-100 text-navy-900"
                  }`}
                >
                  {msg.text}
                  {msg.meta && (
                    <span className="mt-1 block text-[9px] uppercase tracking-wide opacity-70">
                      {msg.meta}
                    </span>
                  )}
                </div>
              )
            })}
            {typing && <TypingIndicator />}
          </div>

          <div className="flex flex-wrap gap-1.5 border-t border-ash-300/25 px-3 py-2.5">
            {JANICE_QUICK_CHIPS.map((chip) => (
              <button
                key={chip.label}
                type="button"
                disabled={sending}
                onClick={() => void sendMessage(chip.message)}
                className="rounded-pill border border-ash-300/50 bg-cream-50 px-2.5 py-1 font-ui text-[11px] text-navy-800 transition-colors hover:border-navy-900/25 hover:bg-cream-100 disabled:opacity-50"
              >
                {chip.label}
              </button>
            ))}
          </div>

          <form
            id={formId}
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-ash-300/30 px-3 py-3"
          >
            <label htmlFor={`${formId}-input`} className="sr-only">
              Type a message to Janice
            </label>
            <input
              ref={inputRef}
              id={`${formId}-input`}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message…"
              maxLength={160}
              disabled={sending}
              className="min-w-0 flex-1 rounded-lg border border-ash-300/40 bg-cream-100 px-3 py-2.5 font-ui text-sm text-navy-900 placeholder:text-navy-900/35 focus:border-navy-900/30 focus:outline-none disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={sending || !input.trim()}
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 font-ui text-cream-50 transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              →
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
