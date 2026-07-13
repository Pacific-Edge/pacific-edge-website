"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { EASE_OUT } from "@/lib/motion"
import type { IndustryConfig } from "@/lib/content/industries"
import { CUSTOM_SOFTWARE_FLAGSHIP, INDUSTRIES_CLOSING } from "@/lib/content/industries"
import ScriptedChatDemo from "@/components/demo/ScriptedChatDemo"
import ElectricMotif from "@/components/ui/ElectricMotif"
import { Button } from "@/components/ui/button"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
}

export default function IndustryPage({ config }: { config: IndustryConfig }) {
  return (
    <>
      {/* Hero */}
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
              {config.eyebrow}
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-display-lg text-midnight-900 mb-4">
              {config.headline}
              <br />
              <span className="text-gradient-electric">{config.headlineAccent}</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-ui text-base text-midnight-900/55 mb-8 max-w-xl">
              {config.painHook}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button asChild variant="black">
                <Link href="/contact">Book a Free 15-Min Call</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Two-category signpost */}
      <section className="bg-white-100/50 border-y border-ash-300/30">
        <div className="container-x py-10 sm:py-12">
          <p className="eyebrow text-ash-500 mb-6">Two ways we help you</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
            <div className="border-t-2 border-midnight-900 pt-4">
              <p className="font-display text-lg text-midnight-900 mb-1">AI Automations</p>
              <p className="font-ui text-sm text-midnight-900/55">
                We answer, book, and reply for you.
              </p>
            </div>
            <div className="border-t-2 border-electric-500 pt-4">
              <p className="font-display text-lg text-midnight-900 mb-1">Custom Software</p>
              <p className="font-ui text-sm text-midnight-900/55">
                We build the tool your workflow is missing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category 1 — AI Automations */}
      <section className="relative overflow-hidden section-py bg-white-50">
        <ElectricMotif variant="arc" className="-left-40 top-16" />
        <div className="container-x relative z-10">
          <div className="max-w-2xl mb-10 lg:mb-14">
            <p className="eyebrow text-ash-500 mb-4">AI Automations</p>
            <h2 className="text-display-md text-midnight-900">
              Answered, booked, and reviewed.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.72fr)] gap-10 lg:gap-16 items-start">
            <div className="grid gap-4">
              {config.aiAutomations.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: EASE_OUT }}
                  className="card p-6 sm:p-7"
                >
                  <p className="font-display text-lg text-midnight-900 mb-2">{service.title}</p>
                  <p className="font-ui text-sm text-midnight-900/55 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
            {config.demoKey ? (
              <div className="relative mx-auto w-full max-w-[300px] [perspective:1200px]">
                <div className="absolute inset-x-8 -bottom-6 h-16 rounded-full bg-electric-500/18 blur-2xl" aria-hidden />
                <div className="relative rotate-[-2deg]">
                  <ScriptedChatDemo industry={config.demoKey} />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Category 2 — Custom Software */}
      <section className="section-py bg-white-100/50 border-y border-ash-300/30">
        <div className="container-x">
          <div className="max-w-2xl mb-10 lg:mb-12">
            <p className="eyebrow text-ash-500 mb-4">Custom Software</p>
            <h2 className="text-display-md text-midnight-900 mb-4">
              Built for your specific bottleneck.
            </h2>
            <p className="font-ui text-sm text-midnight-900/55 max-w-md">{config.customSoftware.lead}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {config.customSoftware.examples.map((example, i) => (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE_OUT }}
                className="card p-6 sm:p-8"
              >
                <p className="eyebrow text-electric-700 mb-3">Example</p>
                <p className="font-display text-lg text-midnight-900 mb-2">{example.title}</p>
                <p className="font-ui text-sm text-midnight-900/55 leading-relaxed">
                  {example.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 border-l-2 border-electric-500 pl-5 max-w-2xl">
            <p className="font-ui text-sm text-midnight-900/70 leading-relaxed">
              {CUSTOM_SOFTWARE_FLAGSHIP}
            </p>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="section-py bg-white-50">
        <div className="container-x">
          <div className="max-w-2xl mb-8 lg:mb-12">
            <p className="eyebrow text-ash-500 mb-4">Plays nice</p>
            <h2 className="text-display-md text-midnight-900">Works with your tools.</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-ash-300/40 border border-ash-300/40">
            {config.integrations.map((tool) => (
              <div
                key={tool}
                className="flex items-center justify-center bg-white-50 px-4 py-8 font-ui text-sm text-midnight-900/70"
              >
                {tool}
              </div>
            ))}
          </div>
          <p className="mt-6 font-ui text-sm text-midnight-900/50 max-w-xl">{INDUSTRIES_CLOSING}</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-py bg-white-100/50 border-y border-ash-300/30">
        <div className="container-x">
          <div className="max-w-2xl">
            <p className="eyebrow text-ash-500 mb-4">Pricing</p>
            <h2 className="text-display-md text-midnight-900 mb-4">Let&apos;s talk pricing.</h2>
            <p className="font-ui text-sm text-midnight-900/55 max-w-md mb-8">
              Every setup is built around your tools and team, so pricing fits what you
              actually need. Reach out and we&apos;ll put together a quote.
            </p>
            <Button asChild variant="black">
              <Link href="/contact">Contact Us for Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py bg-white-50">
        <div className="container-x">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-display-md text-midnight-900 mb-6">Ready to see it in action?</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild variant="black">
                <Link href="/contact">Book Your Free Setup Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
