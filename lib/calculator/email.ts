/**
 * Work-email gate for the ROI calculator.
 *
 * We require a company email before revealing results, so the lead is worth
 * following up on. Free / consumer providers (gmail, yahoo, icloud, personal
 * ISP mailboxes, big international webmail) are rejected. This is a lightweight
 * client-side check — it stops the obvious personal addresses, not a determined
 * spoofer.
 */

/** Common free / consumer mailbox domains, lower-cased. */
const FREE_EMAIL_DOMAINS = new Set<string>([
  // Google
  "gmail.com", "googlemail.com",
  // Microsoft
  "outlook.com", "outlook.co.uk", "outlook.fr", "hotmail.com", "hotmail.co.uk",
  "hotmail.fr", "hotmail.ca", "live.com", "live.ca", "live.co.uk", "msn.com",
  // Yahoo / AOL / Verizon
  "yahoo.com", "yahoo.co.uk", "yahoo.ca", "yahoo.com.au", "yahoo.fr", "yahoo.de",
  "ymail.com", "rocketmail.com", "aol.com", "aim.com",
  // Apple
  "icloud.com", "me.com", "mac.com",
  // Proton / privacy
  "proton.me", "protonmail.com", "pm.me", "tutanota.com", "tuta.io", "hushmail.com",
  // Other webmail
  "gmx.com", "gmx.de", "gmx.net", "web.de", "mail.com", "mail.ru", "yandex.com",
  "yandex.ru", "zoho.com", "hey.com", "fastmail.com", "inbox.com", "email.com",
  // Canadian consumer ISPs (relevant to a Vancouver customer base)
  "shaw.ca", "telus.net", "rogers.com", "bell.net", "sympatico.ca", "cogeco.ca", "eastlink.ca",
  // US consumer ISPs
  "comcast.net", "sbcglobal.net", "verizon.net", "att.net", "cox.net", "charter.net",
  "bellsouth.net", "earthlink.net", "frontier.com",
  // Large international webmail
  "qq.com", "163.com", "126.com", "sina.com", "naver.com", "hanmail.net", "daum.net",
])

export interface EmailCheck {
  ok: boolean
  reason?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function checkWorkEmail(raw: string): EmailCheck {
  const email = (raw || "").trim().toLowerCase()
  if (!email) return { ok: false, reason: "Enter your email to continue." }
  if (!EMAIL_RE.test(email)) return { ok: false, reason: "That doesn't look like a valid email." }

  const domain = email.slice(email.lastIndexOf("@") + 1)

  // Exact match, or a subdomain of a known free provider (e.g. mail.gmail.com).
  const isFree =
    FREE_EMAIL_DOMAINS.has(domain) ||
    [...FREE_EMAIL_DOMAINS].some((d) => domain.endsWith("." + d))

  if (isFree) {
    return {
      ok: false,
      reason: "Please use your work email (you@yourbusiness.com), not a personal one.",
    }
  }
  return { ok: true }
}
