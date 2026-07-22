import type { Metadata } from "next"
import { Bebas_Neue, Outfit, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import "@/styles/legacy.css"
import "@/styles/containers.css"
import "@/components/site/chrome.css"
import LenisProvider from "@/components/providers/LenisProvider"
import ToastProvider from "@/components/site/ToastProvider"
import ContactModalProvider from "@/components/site/ContactModalProvider"
import HashScroll from "@/components/site/HashScroll"
import ScrollTop from "@/components/site/ScrollTop"

// Display / headlines
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
})

// Body / UI
const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

// Eyebrows / labels / mono
const jetbrains = JetBrains_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://pacificedge.ai"),
  title: {
    default: "AI Consulting Vancouver | Pacific Edge AI",
    template: "%s | Pacific Edge AI",
  },
  description:
    "AI consulting Vancouver, BC for local business. Pacific Edge AI builds custom AI automation for dental clinics, restaurants, and salons & spas. No tech team needed. Free discovery call.",
  applicationName: "Pacific Edge AI",
  authors: [{ name: "Pacific Edge AI" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Pacific Edge AI",
    locale: "en_CA",
    url: "https://pacificedge.ai/",
    title: "AI Consulting Vancouver | Pacific Edge AI",
    description:
      "AI consulting in Vancouver, BC for local business. Custom AI automation for dental clinics, restaurants, and salons & spas. No tech team needed.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pacific Edge AI · AI consulting in Vancouver, BC for local business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consulting Vancouver | Pacific Edge AI",
    description:
      "AI consulting in Vancouver, BC for local business. Custom AI automation. No tech team needed.",
    images: ["/og-image.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${outfit.variable} ${jetbrains.variable}`}
    >
      <body>
        <LenisProvider>
          <ToastProvider>
            <ContactModalProvider>
              <HashScroll />
              <ScrollTop />
              {children}
            </ContactModalProvider>
          </ToastProvider>
        </LenisProvider>
        {/* No-JS fallback: reveal-on-scroll content stays visible */}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              "<style>.reveal{opacity:1 !important;transform:none !important}</style>",
          }}
        />
      </body>
    </html>
  )
}
