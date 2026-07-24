"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getSession, setSession, niceName } from "@/lib/clientAuth"

/**
 * Client-login form — front-end mock only (no backend), ported faithfully from
 * login.html. Validates locally, writes a mock session, then opens /app. If a
 * session already exists on mount, it redirects straight to the dashboard.
 */
export default function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPw, setShowPw] = useState(false)
  const [remember, setRemember] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (getSession()) router.replace("/app")
  }, [router])

  function onDemoFill() {
    setEmail("demo@pacificedge.ai")
    setPassword("demo1234")
    setError(null)
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    const addr = email.trim()
    if (addr.indexOf("@") < 1 || addr.indexOf(".") < 0) {
      setError("Please enter a valid email address.")
      return
    }
    if (password.length < 4) {
      setError("Please enter your password (at least 4 characters).")
      return
    }
    setSession(
      { email: addr, name: niceName(addr), business: "Your Business", since: Date.now() },
      remember,
    )
    router.push("/app")
  }

  return (
    <div className="auth-center">
      <div className="auth">
        <div className="auth-card">
          <div className="auth-badge">
            <i />
            Client Portal
          </div>
          <h1>
            Welcome <span className="a">Back.</span>
          </h1>
          <p className="auth-sub">
            Sign in to view your live dashboard. Every call, review, and booking, tracked in one
            place.
          </p>

          <div className={`err ${error ? "show" : ""}`}>
            <span>⚠</span>
            <span>{error ?? "Please check your details."}</span>
          </div>

          <form onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="email">Email</label>
              <div className="field-wrap">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@yourbusiness.com"
                  autoComplete="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <div className="field-wrap">
                <input
                  type={showPw ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="toggle-pw"
                  aria-label={showPw ? "Hide password" : "Show password"}
                  onClick={() => setShowPw((v) => !v)}
                >
                  {showPw ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <div className="row-between">
              <label className="remember">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember me
              </label>
              <a
                href="https://cal.com/pacificedge"
                target="_blank"
                rel="noopener"
                className="forgot"
              >
                Need help?
              </a>
            </div>
            <button type="submit" className="btn">
              Sign in<span className="arr">→</span>
            </button>
          </form>

          <div className="demo-hint">
            <button type="button" onClick={onDemoFill}>
              Fill demo login
            </button>
          </div>

          <div className="divider">Not a client yet</div>
          <p className="auth-foot">
            Want a dashboard like this?{" "}
            <a href="https://cal.com/pacificedge" target="_blank" rel="noopener">
              Book a free call
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
