"use client"

import Link from "next/link"
import { useContactModal } from "./ContactModalProvider"
import { NAV_CATEGORIES } from "@/lib/nav"

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

export default function Footer() {
  const { open } = useContactModal()
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-mark">
              <i />
              <i />
              <i />
            </div>
            <span className="footer-wordmark">
              pacific<span className="ai">edge.ai</span>
            </span>
          </div>
          <p className="footer-tagline">
            AI consulting and automation for local Vancouver small businesses. Done-for-you.
            Transparent terms. Real results.
          </p>
          <div className="footer-meta">
            <button type="button" className="footer-meta-item" onClick={open}>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M2.5 4l5.5 4.5L13.5 4" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              hello@pacificedge.ai
            </button>
            <Link href="/" className="footer-meta-item">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.2" />
                <path d="M2 8h12M8 2c2 2 2 10 0 12M8 2c-2 2-2 10 0 12" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              pacificedge.ai
            </Link>
            <span className="footer-meta-item">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 1.5C5.2 1.5 3 3.7 3 6.5c0 3.7 5 8 5 8s5-4.3 5-8c0-2.8-2.2-5-5-5z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
                <circle cx="8" cy="6.5" r="1.5" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              Vancouver, BC
            </span>
          </div>
        </div>

        {NAV_CATEGORIES.map((cat) => (
          <div className="footer-col" key={cat.key}>
            <div className="footer-col-label">{cat.label}</div>
            {cat.items.map((i) => (
              <Link key={i.href + i.name} href={i.href}>
                {i.name}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <p className="footer-sources" id="sources">
        <span className="footer-sources-title">Sources &amp; References:</span>{" "}
        {SOURCES.map((s, i) => (
          <span key={i}>
            [{i + 1}] {s}{" "}
          </span>
        ))}
      </p>

      <div className="footer-bottom">
        <span>&copy; {year} Pacific Edge AI. All rights reserved.</span>
        <span>Vancouver, British Columbia, Canada</span>
      </div>
    </footer>
  )
}
