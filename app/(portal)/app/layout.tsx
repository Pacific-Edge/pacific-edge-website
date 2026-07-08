import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata = createPageMetadata({
  title: "Client Dashboard",
  description: "Pacific Edge AI client dashboard.",
  path: "/app",
  noIndex: true,
})

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return children
}
