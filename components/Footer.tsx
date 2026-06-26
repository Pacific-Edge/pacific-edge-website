import Link from "next/link"
import { NAV_ITEMS } from "@/lib/nav"

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-cream-50">
      <div className="container-x section-py">
        {/* Top grid: brand + nav columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 pb-12 border-b border-cream-50/10">

          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link
              href="/"
              className="font-display text-xl text-cream-50 hover:text-ash-300 transition-colors block mb-3"
            >
              Pacific Edge
            </Link>
            <p className="font-ui text-sm text-cream-50/50 leading-relaxed max-w-[180px]">
              AI operations for Vancouver local businesses.
            </p>
            <a
              href="mailto:hello@pacificedge.ai"
              className="font-ui text-sm text-ash-400 hover:text-ash-300 transition-colors mt-4 block"
            >
              hello@pacificedge.ai
            </a>
            <p className="font-ui text-xs text-cream-50/30 mt-1">
              Vancouver, BC
            </p>
          </div>

          {/* Nav columns */}
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              <p className="eyebrow text-cream-50/30 mb-4">{item.label}</p>
              <div className="flex flex-col gap-2.5">
                {item.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-ui text-sm text-cream-50/55 hover:text-cream-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar: copyright + legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-ui text-xs text-cream-50/25">
            © {new Date().getFullYear()} Pacific Edge AI · Vancouver, British Columbia, Canada
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/terms"
              className="font-ui text-xs text-cream-50/30 hover:text-cream-50/60 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="font-ui text-xs text-cream-50/30 hover:text-cream-50/60 transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
