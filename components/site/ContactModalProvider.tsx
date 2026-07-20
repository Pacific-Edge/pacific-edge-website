"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import { getLenis } from "@/lib/lenis"

type ContactModalValue = { open: () => void; close: () => void }

const ContactModalContext = createContext<ContactModalValue | null>(null)

export function useContactModal(): ContactModalValue {
  const ctx = useContext(ContactModalContext)
  if (!ctx) throw new Error("useContactModal must be used within <ContactModalProvider>")
  return ctx
}

export default function ContactModalProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  // Scroll lock + Lenis pause + Escape + focus while open
  useEffect(() => {
    if (!isOpen) return
    const lenis = getLenis()
    document.body.classList.add("modal-open")
    lenis?.stop()
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => {
      document.body.classList.remove("modal-open")
      lenis?.start()
      document.removeEventListener("keydown", onKey)
    }
  }, [isOpen])

  // Reset the success view once the modal has closed
  useEffect(() => {
    if (isOpen) return
    const t = window.setTimeout(() => setSubmitted(false), 350)
    return () => window.clearTimeout(t)
  }, [isOpen])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (data.get("bot-field")) return // honeypot filled → drop silently
    const name = String(data.get("name") || "")
    const email = String(data.get("email") || "")
    const business = String(data.get("business") || "")
    const phone = String(data.get("phone") || "")
    const message = String(data.get("message") || "")
    const subject = `New enquiry from ${name || "the website"}`
    const body = `Name: ${name}\nEmail: ${email}\nBusiness: ${business}\nPhone: ${phone}\n\n${message}`
    // Static export has no server runtime, so hand the message off to the
    // visitor's mail client. Swap for a form endpoint (Cloudflare Pages
    // Function / Formspree / etc.) when one is available.
    window.location.href = `mailto:hello@pacificedge.ai?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    form.reset()
    setSubmitted(true)
  }

  return (
    <ContactModalContext.Provider value={{ open, close }}>
      {children}
      <div className={`contact-modal ${isOpen ? "open" : ""}`} aria-hidden={!isOpen}>
        <div className="contact-backdrop" onClick={close} />
        <div
          className="contact-panel"
          role="dialog"
          aria-labelledby="contact-title"
          aria-modal="true"
        >
          <button className="contact-close" onClick={close} aria-label="Close" ref={closeRef}>
            ×
          </button>

          {!submitted ? (
            <div className="contact-form-view">
              <div className="contact-eyebrow">
                <span className="contact-eyebrow-dot" />
                Get in Touch
              </div>
              <h3 className="contact-title" id="contact-title">
                Tell us about
                <br />
                <span className="a">your business.</span>
              </h3>
              <p className="contact-desc">
                The more you tell us, the sharper our reply. Our team reviews every message and
                responds in the order received.
              </p>
              <form className="contact-form" onSubmit={onSubmit} noValidate>
                <p className="hp">
                  <label>
                    Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="cf-name">Your name</label>
                    <input type="text" id="cf-name" name="name" required autoComplete="name" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="cf-email">Email</label>
                    <input type="email" id="cf-email" name="email" required autoComplete="email" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="cf-business">
                      Business name <span>(optional)</span>
                    </label>
                    <input type="text" id="cf-business" name="business" autoComplete="organization" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="cf-phone">
                      Phone <span>(optional)</span>
                    </label>
                    <input type="tel" id="cf-phone" name="phone" autoComplete="tel" />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="cf-message">What&apos;s costing you time or money?</label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Missed calls, manual follow-ups, slow review responses, anything..."
                  />
                </div>
                <button type="submit" className="contact-submit">
                  <span className="submit-text">Send Message</span> <span className="arrow">→</span>
                </button>
                <div className="contact-footnote">↳ We&apos;ll respond within 24 hours · Vancouver-based</div>
              </form>
            </div>
          ) : (
            <div className="contact-success-view">
              <div className="success-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M8 16l5 5 11-11"
                    stroke="#0a9d76"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="contact-title">
                <span className="a">Got it.</span>
              </h3>
              <p className="contact-desc">
                Thanks for reaching out. We&apos;ll get back to you within 24 hours at the email you
                provided.
              </p>
              <button
                className="btn-mint"
                onClick={close}
                style={{ fontSize: 14, padding: "14px 28px" }}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </ContactModalContext.Provider>
  )
}
