import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata = createPageMetadata({
  title: "Dashboard Preview",
  description: "See how Pacific Edge tracks calls, bookings, and reviews in one live dashboard.",
  path: "/dashboard",
})

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children
}
