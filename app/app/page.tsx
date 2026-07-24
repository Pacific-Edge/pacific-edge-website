import type { Metadata } from "next"
import Dashboard from "@/components/app/Dashboard"

export const metadata: Metadata = {
  title: { absolute: "Dashboard | Pacific Edge AI" },
  description: "Your Pacific Edge AI client dashboard.",
  robots: { index: false, follow: false },
}

export default function Page() {
  return <Dashboard />
}
