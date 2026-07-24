/**
 * Mock client session — front-end only, no backend (ported from the old
 * login.html / app.html inline scripts, which duplicated this logic on the
 * `pe_client` key). Shared by the login form, the dashboard, and its guard.
 * SSR-safe: every accessor no-ops on the server.
 */

const KEY = "pe_client"

export interface ClientSession {
  email: string
  name: string
  business: string
  since: number
}

/** Derive a display name from the email local-part ("jane.doe@x" -> "Jane Doe"). */
export function niceName(addr: string): string {
  const local = (addr.split("@")[0] || "there").replace(/[._-]+/g, " ").trim()
  return (
    local
      .split(" ")
      .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : w))
      .join(" ") || "there"
  )
}

export function getSession(): ClientSession | null {
  if (typeof window === "undefined") return null
  try {
    const raw = localStorage.getItem(KEY) ?? sessionStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as ClientSession) : null
  } catch {
    return null
  }
}

export function setSession(session: ClientSession, remember: boolean): void {
  if (typeof window === "undefined") return
  try {
    const store = remember ? localStorage : sessionStorage
    store.setItem(KEY, JSON.stringify(session))
    // Mirror to localStorage so the dashboard guard finds it either way.
    localStorage.setItem(KEY, JSON.stringify(session))
  } catch {
    /* storage unavailable (private mode, etc.) — session simply won't persist */
  }
}

export function clearSession(): void {
  if (typeof window === "undefined") return
  try {
    localStorage.removeItem(KEY)
    sessionStorage.removeItem(KEY)
  } catch {
    /* ignore */
  }
}
