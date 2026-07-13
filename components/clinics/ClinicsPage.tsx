"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { EASE_OUT } from "@/lib/motion"
import { CLINICS_PAGE } from "@/lib/content/clinics"
import ScriptedChatDemo from "@/components/demo/ScriptedChatDemo"
import PricingTeaser from "@/components/sections/PricingTeaser"
import DashboardMock from "@/components/dashboard/DashboardMock"
import FaqAccordion from "@/components/ui/FaqAccordion"
import ElectricMotif from "@/components/ui/ElectricMotif"
import SavingsCalculatorLink from "@/components/calculators/SavingsCalculatorLink"
import { Button } from "@/components/ui/button"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
}

export default function ClinicsPage() {
  const data = CLINICS_PAGE

  return (
    <>
      <section className="relative overflow-hidden section-py pt-28 sm:pt-32 bg-white-50">
        <ElectricMotif variant="beam" className="right-[-18rem] top-20" />
        <div className="container-x relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="max-w-3xl"
          >
            <motion.p variants={fadeUp} className="eyebrow text-ash-500 mb-6">
              {data.eyebrow}
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-display-lg text-midnight-900 mb-4">
              {data.headline}
              <br />
              <span className="text-gradient-electric">{data.headlineAccent}</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-ui text-base text-midnight-900/55 mb-8 max-w-xl">
              {data.painHook}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button asChild variant="black">
                <Link href="/contact">Book a Free 15-Min Call</Link>
              </Button>
              <SavingsCalculatorLink />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-py bg-white-100/50 border-y border-ash-300/30">
        <div className="container-x">
          <div className="max-w-2xl mb-8 lg:mb-12">
            <p className="eyebrow text-ash-500 mb-4">The problem</p>
            <h2 className="text-display-md text-midnight-900">Sound familiar?</h2>
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
                <p className="font-display text-lg text-midnight-900 mb-3">{pain.title}</p>
                <p className="font-ui text-sm text-midnight-900/55 leading-relaxed">{pain.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-category signpost */}
      <section className="bg-white-50 border-b border-ash-300/30">
        <div className="container-x py-10 sm:py-12">
          <p className="eyebrow text-ash-500 mb-6">Two ways we help you</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
            <div className="border-t-2 border-midnight-900 pt-4">
              <p className="font-display text-lg text-midnight-900 mb-1">AI Automations</p>
              <p className="font-ui text-sm text-midnight-900/55">
                Calls answered and reviews handled, backing up your front desk.
              </p>
            </div>
            <div className="border-t-2 border-electric-500 pt-4">
              <p className="font-display text-lg text-midnight-900 mb-1">Custom Software</p>
              <p className="font-ui text-sm text-midnight-900/55">
                A cancellation-fill system built around your clinic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category 1 — AI Automations */}
      <section className="relative overflow-hidden section-py bg-white-50">
        <ElectricMotif variant="arc" className="-left-40 top-16" />
        <div className="container-x relative z-10">
          <div className="max-w-2xl mb-10 lg:mb-12">
            <p className="eyebrow text-ash-500 mb-4">AI Automations</p>
            <h2 className="text-display-md text-midnight-900 mb-4">{data.aiAutomations.heading}</h2>
            <p className="font-ui text-sm text-midnight-900/55 max-w-md">{data.aiAutomations.lead}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.72fr)] gap-10 lg:gap-16 items-start">
            <div className="grid gap-4">
              {data.aiAutomations.items.map((item) => (
                <div key={item.title} className="card p-6 sm:p-7">
                  <p className="font-display text-lg text-midnight-900 mb-2">{item.title}</p>
                  <p className="font-ui text-sm text-midnight-900/55 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="relative mx-auto w-full max-w-[300px] [perspective:1200px]">
              <div className="absolute inset-x-8 -bottom-6 h-16 rounded-full bg-electric-500/18 blur-2xl" aria-hidden />
              <div className="relative rotate-[-2deg]">
                <ScriptedChatDemo industry="dental" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category 2 — Custom Software */}
      <section className="section-py bg-white-100/50 border-y border-ash-300/30">
        <div className="container-x">
          <div className="max-w-2xl mb-10 lg:mb-12">
            <p className="eyebrow text-ash-500 mb-4">Custom Software</p>
            <h2 className="text-display-md text-midnight-900 mb-4">{data.platformTitle}</h2>
            <p className="font-ui text-sm text-midnight-900/55 max-w-lg">{data.customSoftwareLead}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {data.platformCapabilities.map((cap) => (
              <div key={cap.title} className="border-t border-ash-300/70 pt-4">
                <p className="font-ui text-sm font-medium text-midnight-900 mb-1">{cap.title}</p>
                <p className="font-ui text-sm text-midnight-900/55">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden section-py bg-midnight-900 text-white-50">
        <ElectricMotif variant="grid-lines" intensity="normal" className="right-0 top-4" />
        <div className="container-x relative z-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] lg:items-end">
            <div>
              <p className="eyebrow text-ash-400 mb-4">{data.liveEyebrow}</p>
              <h2 className="text-display-md text-white-50 mb-4">{data.liveTitle}</h2>
              <p className="font-ui text-sm text-white-50/60">{data.liveDescription}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {data.platformCapabilities.slice(0, 3).map((cap) => (
                <div key={cap.title} className="rounded-xl border border-white-50/14 bg-white-50/[0.04] p-5">
                  <p className="font-display text-lg text-white-50">{cap.title}</p>
                  <p className="mt-2 font-ui text-xs leading-relaxed text-white-50/58">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-py bg-white-50">
        <div className="container-x">
          <div className="max-w-2xl mb-10 lg:mb-14">
            <p className="eyebrow text-ash-500 mb-4">Dashboard</p>
            <h2 className="text-display-md text-midnight-900 mb-4">See it all in one place</h2>
            <p className="font-ui text-sm text-midnight-900/55">
              Calls answered, slots filled, reviews managed, tailored to your business.
            </p>
          </div>
          <DashboardMock industry="all" />
        </div>
      </section>

      <section className="section-py bg-white-50">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow text-ash-500 mb-4">FAQ</p>
              <h2 className="text-display-md text-midnight-900">Common questions</h2>
            </div>
            <div className="lg:col-span-8">
              <FaqAccordion items={data.faq} />
            </div>
          </div>
        </div>
      </section>

      <PricingTeaser />

      <section className="section-py bg-white-100/50 border-t border-ash-300/30">
        <div className="container-x">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-md text-midnight-900 mb-6">Ready to see it in action?</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild variant="black">
                <Link href="/contact">Book Your Free Setup Call</Link>
              </Button>
              <SavingsCalculatorLink variant="secondary" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
