import Link from "next/link"
import {
  Phone,
  MessageSquare,
  Calendar,
  Users,
  Bell,
  Star,
  Mail,
  Globe,
} from "lucide-react"
import LiveChatDemo from "@/components/demo/LiveChatDemo"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata = createPageMetadata({
  title: "The Platform",
  description:
    "Done-for-you operations software that helps your front desk team answer leads, fill cancellations, send reminders, and manage reviews, without replacing anyone on staff.",
  path: "/solutions/janice",
})

const CAPABILITIES = [
  {
    title: "Captures every call",
    label: "Missed-call text-back in seconds",
    icon: Phone,
  },
  {
    title: "Every channel",
    label: "Phone, SMS, social, web, email",
    icon: MessageSquare,
  },
  {
    title: "Books & reschedules",
    label: "Real openings in your calendar",
    icon: Calendar,
  },
  {
    title: "Fills cancellations",
    label: "Waitlist outreach when a spot opens",
    icon: Users,
  },
  {
    title: "Confirms & reminds",
    label: "Fewer no-shows, recalls on schedule",
    icon: Bell,
  },
  {
    title: "Follows up & reviews",
    label: "On-brand replies and rating nudges",
    icon: Star,
  },
] as const

const CHANNELS = [
  { label: "Phone", icon: Phone },
  { label: "SMS", icon: MessageSquare },
  { label: "Social", icon: Users },
  { label: "Web chat", icon: Globe },
  { label: "Email", icon: Mail },
] as const

const FAQ = [
  {
    q: "Does this replace my receptionist?",
    a: "No. We are not building an AI receptionist. The platform is designed to help your front desk team work faster, keep the schedule full, and spend less time on repetitive coordination.",
  },
  {
    q: "Will patient messages sound robotic?",
    a: "We configure replies around your clinic's tone. Your team reviews and approves messaging before anything goes live.",
  },
  {
    q: "What channels does it cover?",
    a: "Phone, SMS, Instagram and Facebook messages, web chat, and email, from the number and tools you already use.",
  },
  {
    q: "How does a cancelled slot get filled?",
    a: "The moment something opens, the waitlist is surfaced. Your team confirms the offer and books the patient, often within minutes.",
  },
] as const

export default function JanicePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-py pt-28 sm:pt-32 bg-cream-50">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <div className="max-w-xl">
              <p className="eyebrow text-ash-400 mb-4">Product</p>
              <h1 className="text-display-lg text-navy-900 mb-4">
                Software for your front desk.
                <span className="block text-navy-700">Not a replacement for it.</span>
              </h1>
              <p className="font-ui text-sm text-navy-900/55 mb-8 leading-relaxed max-w-md">
                Pacific Edge builds a platform around the tools your team already uses: scheduling,
                waitlists, reminders, and reviews. For dental clinics, we are also developing
                insurance and payment integrations to simplify coordination between receptionist
                and patient.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#try-demo" className="btn-primary">
                  Try the demo
                </a>
                <Link href="/contact" className="btn-secondary text-sm">
                  Book a call
                </Link>
              </div>
            </div>

            <div id="try-demo" className="lg:justify-self-end w-full">
              <LiveChatDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-py bg-cream-100/50 border-y border-ash-300/25">
        <div className="container-x">
          <div className="max-w-2xl mb-12 lg:mb-16">
            <p className="eyebrow text-ash-500 mb-4">What it does</p>
            <h2 className="text-display-md text-navy-900">Helps your team, behind the scenes</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap) => (
              <article
                key={cap.title}
                className="rounded-xl border border-ash-300/40 bg-cream-50 p-6 shadow-soft transition-shadow hover:shadow-card"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-ash-300/40 bg-cream-100 text-navy-800">
                  <cap.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy-900 mb-1">
                  {cap.title}
                </h3>
                <p className="font-ui text-sm text-navy-900/50">{cap.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="section-py bg-cream-50">
        <div className="container-x text-center">
          <p className="eyebrow text-ash-400 mb-4">Channels</p>
          <h2 className="text-display-md text-navy-900 mb-10 lg:mb-14">
            One platform, every channel
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {CHANNELS.map((ch) => (
              <span
                key={ch.label}
                className="inline-flex items-center gap-2 rounded-pill border border-ash-300/50 bg-cream-50 px-4 py-2.5 font-ui text-sm text-navy-800 shadow-soft"
              >
                <ch.icon className="h-4 w-4 text-ash-500" strokeWidth={1.75} aria-hidden />
                {ch.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-cream-100/50 border-t border-ash-300/25">
        <div className="container-x">
          <div className="max-w-2xl mx-auto">
            <p className="eyebrow text-ash-500 mb-4 text-center">FAQ</p>
            <h2 className="text-display-sm text-navy-900 mb-10 text-center">Common questions</h2>

            <dl className="space-y-6">
              {FAQ.map((item) => (
                <div
                  key={item.q}
                  className="rounded-xl border border-ash-300/40 bg-cream-50 px-5 py-5 sm:px-6"
                >
                  <dt className="font-display text-base font-semibold text-navy-900 mb-2">
                    {item.q}
                  </dt>
                  <dd className="font-ui text-sm text-navy-900/55 leading-relaxed">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-navy-900">
        <div className="container-x text-center">
          <h2 className="text-display-sm text-cream-50 mb-4">
            Ready to see it on your tools?
          </h2>
          <p className="font-ui text-sm text-cream-50/60 mb-8 max-w-md mx-auto">
            Book a 15-minute call. We map your workflow and show you how the platform fits your team.
          </p>
          <Link href="/contact" className="btn-primary bg-cream-50 text-navy-900 hover:bg-cream-100">
            Book a call
          </Link>
        </div>
      </section>
    </>
  )
}
