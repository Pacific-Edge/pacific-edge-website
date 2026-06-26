import type { Metadata } from "next"
import { Syne, DM_Sans } from "next/font/google"
import "./globals.css"
import Nav from "@/components/nav/Nav"
import Footer from "@/components/Footer"
import Preloader from "@/components/Preloader"
import LenisProvider from "@/components/providers/LenisProvider"

/* ── FONTS ────────────────────────────────────────────────────────────────
   Syne → display headlines. DM Sans → UI/body. CSS variables are referenced
   in globals.css @theme → --font-display, --font-ui.
   ──────────────────────────────────────────────────────────────────────── */
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Pacific Edge AI — Done-For-You Operations for Local Businesses",
  description:
    "Vancouver-based AI operations for restaurants, salons, clinics, trades, and retail. Missed calls answered, bookings filled, reviews managed — running quietly in the background.",
  openGraph: {
    title: "Pacific Edge AI",
    description: "Done-for-you AI operations for Vancouver local businesses.",
    url: "https://pacificedge.ai",
    siteName: "Pacific Edge AI",
    locale: "en_CA",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable}`}
    >
      <body className="bg-cream-50 text-navy-900 antialiased">
        <LenisProvider>
          <Preloader />
          <Nav />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  )
}
