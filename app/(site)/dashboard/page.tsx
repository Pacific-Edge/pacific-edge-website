import DashboardMock from "@/components/dashboard/DashboardMock"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata = createPageMetadata({
  title: "Dashboard",
  description: "One dashboard for calls answered, chairs filled, and recalls managed at your dental clinic.",
  path: "/dashboard",
})

export default function DashboardPage() {
  return (
    <div className="section-py pt-28 sm:pt-32">
      <div className="container-x">
        <div className="max-w-2xl mb-10 lg:mb-14">
          <p className="eyebrow text-ash-500 mb-4">Product</p>
          <h1 className="text-display-lg text-midnight-900 mb-4">Your clinic, at a glance</h1>
          <p className="font-ui text-sm text-midnight-900/55 mb-6">
            One dashboard for calls answered, chairs filled, and recalls managed.
          </p>
          <Button asChild variant="transparent" tone="dark" size="sm">
            <Link href="/login">Client login</Link>
          </Button>
        </div>

        <DashboardMock industry="dental" />
      </div>
    </div>
  )
}
