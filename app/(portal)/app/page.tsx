"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { readClientSession, type ClientSession } from "@/lib/auth/demo-session"
import ClientDashboard from "@/components/dashboard/ClientDashboard"

export default function AppPage() {
  const router = useRouter()
  const [session, setSession] = useState<ClientSession | null>(null)

  useEffect(() => {
    const stored = readClientSession()
    if (!stored) {
      router.replace("/login")
      return
    }
    setSession(stored)
  }, [router])

  if (!session) {
    return (
      <div className="min-h-dvh flex items-center justify-center">
        <p className="font-ui text-sm text-midnight-900/50">Loading your dashboard…</p>
      </div>
    )
  }

  return <ClientDashboard session={session} />
}
