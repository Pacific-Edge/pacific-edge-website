"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { clearClientSession } from "@/lib/auth/demo-session"
import type { ClientSession } from "@/lib/auth/demo-session"

export default function AppBar({ session }: { session: ClientSession }) {
  const router = useRouter()
  const initial = session.name.charAt(0).toUpperCase()

  function handleLogout() {
    clearClientSession()
    router.replace("/login")
  }

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-ash-300/40 bg-cream-50/90 backdrop-blur-xl">
      <div className="container-x h-full flex items-center justify-between gap-4">
        <Link
          href="/app"
          className="font-display text-navy-900 text-lg font-bold tracking-tight hover:text-navy-700 transition-colors shrink-0"
        >
          Pacific Edge
        </Link>

        <div className="flex items-center gap-3 sm:gap-5 min-w-0">
          <span className="hidden sm:inline-flex items-center gap-2 font-ui text-[10px] font-medium uppercase tracking-widest text-navy-700 px-3 py-1.5 rounded-full border border-navy-900/15 bg-navy-900/5">
            <span className="w-1.5 h-1.5 rounded-full bg-navy-700 animate-pulse" aria-hidden />
            Janice live
          </span>

          <div className="flex items-center gap-2.5 min-w-0">
            <div
              className="w-9 h-9 rounded-lg bg-navy-900 text-cream-50 flex items-center justify-center font-ui text-sm font-semibold shrink-0"
              aria-hidden
            >
              {initial}
            </div>
            <div className="hidden sm:block min-w-0">
              <p className="font-ui text-sm font-medium text-navy-900 truncate">{session.name}</p>
              <p className="font-ui text-[11px] text-navy-900/45 truncate">{session.business}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="font-ui text-sm text-navy-900/60 hover:text-red-700 px-3 py-2 rounded-lg border border-ash-300/60 hover:border-red-300/50 transition-colors shrink-0"
          >
            Log out
          </button>
        </div>
      </div>
    </header>
  )
}
