"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { readClientSession } from "@/lib/auth/demo-session"
import { Button } from "@/components/ui/button"

export default function LoginForm() {
  const router = useRouter()

  useEffect(() => {
    if (readClientSession()) {
      router.replace("/app")
    }
  }, [router])

  return (
    <div className="w-full max-w-md">
      <Link
        href="/"
        className="block text-center font-display text-lg font-bold text-midnight-900 mb-8 hover:text-midnight-700 transition-colors"
      >
        Pacific Edge
      </Link>

      <div className="card p-8 sm:p-10">
        <p className="eyebrow text-ash-500 mb-4">Client portal</p>
        <h1 className="text-display-sm text-midnight-900 mb-2">Welcome back</h1>
        <p className="font-ui text-sm text-midnight-900/55 mb-8">
          Sign in to view your live dashboard, calls, bookings, and reviews in one place.
        </p>

        <form className="space-y-4" noValidate>
          <div>
            <label htmlFor="username" className="block font-ui text-xs font-medium text-midnight-900/70 mb-1.5">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              disabled
              className="w-full font-ui text-sm px-4 py-3 rounded-lg border border-ash-300/60 bg-white-50 text-midnight-900 placeholder:text-midnight-900/30 focus:outline-none focus:ring-2 focus:ring-midnight-900/20 focus:border-midnight-900/30 disabled:opacity-60 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-ui text-xs font-medium text-midnight-900/70 mb-1.5">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              disabled
              className="w-full font-ui text-sm px-4 py-3 rounded-lg border border-ash-300/60 bg-white-50 text-midnight-900 placeholder:text-midnight-900/30 focus:outline-none focus:ring-2 focus:ring-midnight-900/20 focus:border-midnight-900/30 disabled:opacity-60 disabled:cursor-not-allowed"
            />
          </div>

          <div className="flex items-center justify-between pt-1">
            <label className="flex items-center gap-2 font-ui text-sm text-midnight-900/60 cursor-not-allowed opacity-60">
              <input type="checkbox" disabled className="rounded border-ash-300" />
              Remember me
            </label>
          </div>

          <Button
            type="button"
            disabled
            variant="black"
            className="w-full mt-2 opacity-60 cursor-not-allowed"
          >
            Coming soon
          </Button>
        </form>
      </div>

      <Link
        href="/"
        className="block text-center mt-8 font-ui text-sm text-midnight-900/45 hover:text-midnight-900 transition-colors"
      >
        Back to site
      </Link>
    </div>
  )
}
