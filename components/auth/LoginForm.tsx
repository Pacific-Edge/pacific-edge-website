"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  DEMO_PASSWORD,
  DEMO_USERNAME,
  createDemoSession,
  readClientSession,
  validateDemoCredentials,
  writeClientSession,
} from "@/lib/auth/demo-session"

export default function LoginForm() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(true)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (readClientSession()) {
      router.replace("/app")
    }
  }, [router])

  function fillDemo() {
    setUsername(DEMO_USERNAME)
    setPassword(DEMO_PASSWORD)
    setError("")
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setLoading(true)

    if (!validateDemoCredentials(username, password)) {
      setError("Username or password did not match. Try the demo credentials below.")
      setLoading(false)
      return
    }

    const session = createDemoSession(username)
    writeClientSession(session, remember)
    router.push("/app")
  }

  return (
    <div className="w-full max-w-md">
      <Link
        href="/"
        className="block text-center font-display text-lg font-bold text-navy-900 mb-8 hover:text-navy-700 transition-colors"
      >
        Pacific Edge
      </Link>

      <div className="card p-8 sm:p-10">
        <p className="eyebrow text-ash-500 mb-4">Client portal</p>
        <h1 className="text-display-sm text-navy-900 mb-2">Welcome back</h1>
        <p className="font-ui text-sm text-navy-900/55 mb-8">
          Sign in to view your live dashboard, calls, bookings, and reviews in one place.
        </p>

        {error && (
          <div
            role="alert"
            className="mb-5 px-4 py-3 rounded-lg border border-red-300/50 bg-red-50 text-red-800 font-ui text-sm"
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label htmlFor="username" className="block font-ui text-xs font-medium text-navy-900/70 mb-1.5">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="demo"
              className="w-full font-ui text-sm px-4 py-3 rounded-lg border border-ash-300/60 bg-cream-50 text-navy-900 placeholder:text-navy-900/30 focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900/30"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-ui text-xs font-medium text-navy-900/70 mb-1.5">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full font-ui text-sm px-4 py-3 pr-20 rounded-lg border border-ash-300/60 bg-cream-50 text-navy-900 placeholder:text-navy-900/30 focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900/30"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 font-ui text-[10px] uppercase tracking-wide text-navy-900/40 hover:text-navy-900 px-2 py-1"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 font-ui text-sm text-navy-900/60 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="rounded border-ash-300"
              />
              Remember me
            </label>
          </div>

          <button type="submit" disabled={loading} className="btn-primary w-full mt-2 disabled:opacity-60">
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <p className="mt-6 text-center font-ui text-xs text-navy-900/45">
          Demo workspace:{" "}
          <button
            type="button"
            onClick={fillDemo}
            className="text-navy-700 underline underline-offset-2 hover:text-navy-900"
          >
            fill demo credentials
          </button>
        </p>
      </div>

      <Link
        href="/"
        className="block text-center mt-8 font-ui text-sm text-navy-900/45 hover:text-navy-900 transition-colors"
      >
        Back to site
      </Link>
    </div>
  )
}
