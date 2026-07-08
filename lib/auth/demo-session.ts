export const SESSION_STORAGE_KEY = "pe_client"

/** Demo credentials — not production auth */
export const DEMO_USERNAME = "demo"
export const DEMO_PASSWORD = "demo1234"

export type ClientSession = {
  username: string
  name: string
  business: string
  since: number
}

function niceName(username: string): string {
  const local = (username.split("@")[0] || "there").replace(/[._-]+/g, " ").trim()
  return (
    local
      .split(" ")
      .map((w) => (w ? w.charAt(0).toUpperCase() + w.slice(1) : w))
      .join(" ") || "there"
  )
}

export function validateDemoCredentials(username: string, password: string): boolean {
  const user = username.trim().toLowerCase()
  const pass = password
  const validUser = user === DEMO_USERNAME || user === "demo@pacificedge.ai"
  return validUser && pass === DEMO_PASSWORD
}

export function createDemoSession(username: string): ClientSession {
  const trimmed = username.trim()
  return {
    username: trimmed,
    name: niceName(trimmed),
    business: "Your Business",
    since: Date.now(),
  }
}

export function readClientSession(): ClientSession | null {
  if (typeof window === "undefined") return null
  try {
    const raw =
      localStorage.getItem(SESSION_STORAGE_KEY) ??
      sessionStorage.getItem(SESSION_STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as ClientSession
  } catch {
    return null
  }
}

export function writeClientSession(session: ClientSession, remember = true): void {
  if (typeof window === "undefined") return
  const payload = JSON.stringify(session)
  try {
    if (remember) {
      localStorage.setItem(SESSION_STORAGE_KEY, payload)
      sessionStorage.removeItem(SESSION_STORAGE_KEY)
    } else {
      sessionStorage.setItem(SESSION_STORAGE_KEY, payload)
      localStorage.removeItem(SESSION_STORAGE_KEY)
    }
  } catch {
    /* storage unavailable */
  }
}

export function clearClientSession(): void {
  if (typeof window === "undefined") return
  try {
    localStorage.removeItem(SESSION_STORAGE_KEY)
    sessionStorage.removeItem(SESSION_STORAGE_KEY)
  } catch {
    /* ignore */
  }
}

export function hasClientSession(): boolean {
  return readClientSession() !== null
}
