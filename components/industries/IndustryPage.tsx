"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { EASE_OUT } from "@/lib/motion"
import type { IndustryPageData } from "@/lib/content/industries"
import { INDUSTRY_SUB_PAGES } from "@/lib/content/industries"
import ScriptedChatDemo from "@/components/demo/ScriptedChatDemo"
import DashboardMock from "@/components/dashboard/DashboardMock"
import FaqAccordion from "@/components/ui/FaqAccordion"
import SavingsCalculatorLink from "@/components/calculators/SavingsCalculatorLink"
import type { DashboardIndustry } from "@/lib/dashboard"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
}

type IndustryPageProps = {
  data: IndustryPageData
}

export default function IndustryPage({ data }: IndustryPageProps) {
  const dashboardIndustry = data.slug as DashboardIndustry
  const dentalSubPages = data.slug === "dental" ? INDUSTRY_SUB_PAGES : []

  return (
    <>
      {/* Hero */}
      <section className="section-py pt-28 sm:pt-32 bg-cream-50">
        <div className="container-x">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="max-w-3xl"
          >
            <motion.p variants={fadeUp} className="eyebrow text-ash-500 mb-6">
              {data.eyebrow}
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-display-lg text-navy-900 mb-4">
              {data.headline}
              <br />
              <span className="text-gradient-electric">{data.headlineAccent}</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-ui text-base text-navy-900/55 mb-8 max-w-xl">
              {data.painHook}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Book a Free 15-Min Call
              </Link>
              <SavingsCalculatorLink industry={data.slug} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pain cards */}
      <section className="section-py bg-cream-100/50 border-y border-ash-300/30">
        <div className="container-x">
          <div className="max-w-2xl mb-12 lg:mb-16">
            <p className="eyebrow text-ash-500 mb-4">The problem</p>
            <h2 className="text-display-md text-navy-900">Sound familiar?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.pains.map((pain, i) => (
              <motion.div
                key={pain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE_OUT }}
                className="card p-6 sm:p-8"
              >
                <p className="font-display text-lg text-navy-900 mb-3">{pain.title}</p>
                <p className="font-ui text-sm text-navy-900/55 leading-relaxed">{pain.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform capabilities */}
      <section className="section-py bg-cream-50">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="eyebrow text-ash-500 mb-4">Platform</p>
              <h2 className="text-display-md text-navy-900 mb-10">{data.janiceTitle}</h2>
              <div className="space-y-6">
                {data.janiceCapabilities.map((cap) => (
                  <div key={cap.title} className="border-l-2 border-ash-400/60 pl-5">
                    <p className="font-ui text-sm font-medium text-navy-900 mb-1">{cap.title}</p>
                    <p className="font-ui text-sm text-navy-900/55">{cap.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <ScriptedChatDemo industry={data.slug} />
          </div>
        </div>
      </section>

      {/* Live automation story */}
      <section className="section-py bg-navy-900 text-cream-50">
        <div className="container-x">
          <div className="max-w-2xl mb-10">
            <p className="eyebrow text-ash-400 mb-4">{data.liveEyebrow}</p>
            <h2 className="text-display-md text-cream-50 mb-4">{data.liveTitle}</h2>
            <p className="font-ui text-sm text-cream-50/60">{data.liveDescription}</p>
          </div>
        </div>
      </section>

      {/* Dashboard glimpse */}
      <section className="section-py bg-cream-50">
        <div className="container-x">
          <div className="max-w-2xl mb-10 lg:mb-14">
            <p className="eyebrow text-ash-500 mb-4">Dashboard</p>
            <h2 className="text-display-md text-navy-900 mb-4">See it all in one place</h2>
            <p className="font-ui text-sm text-navy-900/55">
              Calls answered, slots filled, reviews managed, tailored to {data.name.toLowerCase()}.
            </p>
          </div>
          <DashboardMock industry={dashboardIndustry} />
        </div>
      </section>

      {/* Dental sub-pages */}
      {dentalSubPages.length > 0 && (
        <section className="section-py bg-cream-100/50 border-y border-ash-300/30">
          <div className="container-x">
            <div className="max-w-2xl mb-10">
              <p className="eyebrow text-ash-500 mb-4">Practice types</p>
              <h2 className="text-display-md text-navy-900">Built for every type of practice</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dentalSubPages.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className="card p-6 sm:p-8 hover:-translate-y-0.5 transition-transform duration-200 group"
                >
                  <p className="eyebrow text-ash-500 mb-3">{sub.eyebrow}</p>
                  <p className="font-display text-xl text-navy-900 mb-2 group-hover:text-navy-700 transition-colors">
                    {sub.title}
                  </p>
                  <p className="font-ui text-sm text-navy-900/55">{sub.headline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-py bg-cream-50">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow text-ash-500 mb-4">FAQ</p>
              <h2 className="text-display-md text-navy-900">Common questions</h2>
            </div>
            <div className="lg:col-span-8">
              <FaqAccordion items={data.faq} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-cream-100/50 border-t border-ash-300/30">
        <div className="container-x">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-md text-navy-900 mb-6">Ready to see it in action?</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book Your Free Setup Call
              </Link>
              <SavingsCalculatorLink industry={data.slug} variant="secondary" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
