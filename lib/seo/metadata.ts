import type { Metadata } from "next"
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
} from "./site"

type PageMetadataInput = {
  /** Short page title — "About" becomes "About | Pacific Edge AI" */
  title: string
  description?: string
  /** Path without domain, e.g. "/about" */
  path?: string
  noIndex?: boolean
  ogImage?: string
}

function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString()
}

function formatTitle(title: string) {
  if (title.includes("Pacific Edge")) return title
  return `${title} | ${SITE_NAME}`
}

/** Per-page metadata with canonical URL, Open Graph, and Twitter cards. */
export function createPageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  noIndex = false,
  ogImage = DEFAULT_OG_IMAGE,
}: PageMetadataInput): Metadata {
  const formattedTitle = formatTitle(title)
  const canonical = absoluteUrl(path)
  const imageUrl = absoluteUrl(ogImage)

  return {
    title: formattedTitle,
    description,
    alternates: { canonical },
    openGraph: {
      title: formattedTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} | done-for-you operations for Vancouver local businesses`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: formattedTitle,
      description,
      images: [imageUrl],
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  }
}

/** Root layout defaults — extended by per-page metadata. */
export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Done-For-You Operations for Local Businesses`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} | done-for-you operations for Vancouver local businesses`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
}
