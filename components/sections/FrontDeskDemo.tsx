"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import ScriptedChatDemo from "@/components/demo/ScriptedChatDemo"
import RollInText from "@/components/ui/RollInText"
import { Button } from "@/components/ui/button"
import { EASE_OUT, revealContainer, revealItem, viewportOnce } from "@/lib/motion"

const FloatingLines = dynamic(() => import("@/components/ui/FloatingLines"), { ssr: false })

const signals = [
  "Patient cancels",
  "Waitlist offered",
  "Chair filled",
] as const

/** Compact appointment day strip — a small proof motif beside the copy.
 *  One slot opens (cancellation) then fills (waitlist) as a quiet visual
 *  echo of the chat demo playing alongside it. */
const dayStrip = [
  { time: "9:00", label: "Hygiene · M. Patel", state: "booked" },
  { time: "9:40", label: "Exam · new patient", state: "booked" },
  { time: "10:20", label: "Filled from waitlist", state: "filled" },
  { time: "11:00", label: "Cleaning · J. Osei", state: "booked" },
  { time: "11:40", label: "Filling · Dr. Chen", state: "booked" },
] as const

export default function FrontDeskDemo() {
  return (
    <section className="relative overflow-hidden bg-schedule-lattice section-py">
      <div className="container-x relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.72fr)] lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={revealContainer(0.08)}
            className="max-w-2xl"
          >
            <motion.div
              variants={revealItem}
              className="relative overflow-hidden rounded-none border border-white-50/12 bg-midnight-950"
            >
              <div className="absolute inset-0">
                <FloatingLines
                  enabledWaves={["middle"]}
                  lineCount={16}
                  lineDistance={93.5}
                  bendRadius={26}
                  bendStrength={10.5}
                  interactive={false}
                  parallax={true}
                  animationSpeed={1.2}
                />
              </div>
              <div
                className="absolute inset-0 bg-gradient-to-b from-midnight-950/15 via-midnight-950/55 to-midnight-950/88"
                aria-hidden
              />

              <div className="relative z-10 px-8 py-14 sm:px-12 sm:py-20">
                <RollInText
                  as="p"
                  by="word"
                  className="font-ui text-sm text-electric-100/70"
                >
                  Cancellations filled automatically
                </RollInText>
                <RollInText
                  as="h2"
                  by="word"
                  stagger={0.07}
                  delay={0.08}
                  className="mt-5 font-display text-white-50"
                  style={{
                    fontSize: "clamp(2.25rem, 4.5vw, 4rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.04em",
                    lineHeight: 0.98,
                  }}
                >
                  Empty chairs do not stay empty.
                </RollInText>
                <RollInText
                  as="p"
                  by="word"
                  stagger={0.02}
                  delay={0.35}
                  className="mt-7 block max-w-lg font-ui text-base leading-relaxed text-white-50/62"
                >
                  When a patient cancels, Pacific Edge surfaces the right waitlist patient and keeps your front desk's booking flow moving.
                </RollInText>
              </div>
            </motion.div>

            {/* Day strip — quiet visual echo of the chat demo: a slot opens,
                then fills, without a scramble. */}
            <motion.div
              variants={revealItem}
              className="mt-8 overflow-hidden rounded-2xl border border-ash-300/60 bg-white-50"
              aria-hidden
            >
              {dayStrip.map((slot) => (
                <div
                  key={slot.time}
                  className="flex items-center gap-4 border-b border-ash-300/50 px-5 py-3 last:border-b-0"
                >
                  <span className="w-12 shrink-0 font-ui text-xs tabular-nums text-midnight-900/45">
                    {slot.time}
                  </span>
                  <span
                    className={`h-2 w-2 shrink-0 rounded-full ${
                      slot.state === "filled" ? "bg-electric-500" : "bg-midnight-900/20"
                    }`}
                  />
                  <span
                    className={`font-ui text-sm ${
                      slot.state === "filled" ? "text-electric-700 font-medium" : "text-midnight-900/70"
                    }`}
                  >
                    {slot.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={revealContainer(0.22)}
              className="mt-10 grid gap-3 sm:grid-cols-3"
            >
              {signals.map((signal, index) => (
                <motion.div
                  key={signal}
                  variants={revealItem}
                  className="border-t border-ash-300/70 pt-4"
                >
                  <span className="block overflow-hidden">
                    <motion.span
                      className="block font-display text-3xl font-bold text-electric-500"
                      variants={{
                        hidden: { y: "110%" },
                        visible: {
                          y: "0%",
                          transition: { duration: 0.6, ease: EASE_OUT, delay: 0.1 },
                        },
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </motion.span>
                  </span>
                  <span className="mt-2 block overflow-hidden">
                    <motion.span
                      className="block font-ui text-sm text-midnight-900/60"
                      variants={{
                        hidden: { y: "100%", opacity: 0 },
                        visible: {
                          y: "0%",
                          opacity: 1,
                          transition: { duration: 0.5, ease: EASE_OUT, delay: 0.18 },
                        },
                      }}
                    >
                      {signal}
                    </motion.span>
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 28, rotateX: 10, rotateY: -14, rotateZ: -3 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 4, rotateY: -9, rotateZ: -2 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, ease: EASE_OUT }}
              className="relative mx-auto w-full max-w-[300px] [perspective:1200px] sm:max-w-[340px]"
            >
              <div
                className="pointer-events-none absolute -inset-x-24 -top-28 -bottom-28 -z-10"
                style={{
                  background:
                    "radial-gradient(ellipse 62% 58% at 50% 36%, rgba(120,185,255,0.18) 0%, rgba(26,109,206,0.08) 34%, transparent 70%)",
                }}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-4 top-0 h-36 -z-10"
                style={{
                  background: "radial-gradient(ellipse 70% 100% at 50% 0%, rgba(26,109,206,0.12) 0%, transparent 78%)",
                }}
                aria-hidden
              />
              <div className="pointer-events-none absolute inset-x-6 -bottom-10 -z-10 h-24 rounded-full bg-electric-500/20 blur-3xl" aria-hidden />
              <div className="pointer-events-none absolute inset-x-16 -bottom-4 -z-10 h-10 rounded-full bg-midnight-900/8 blur-xl" aria-hidden />

              <div
                className="relative origin-center drop-shadow-[0_28px_60px_rgba(0,0,0,0.18)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div
                  className="pointer-events-none absolute -inset-2 rounded-[2.6rem]"
                  style={{
                    background:
                      "linear-gradient(128deg, rgba(26,109,206,0.12) 0%, rgba(26,109,206,0) 22%, rgba(26,109,206,0) 78%, rgba(26,109,206,0.1) 100%)",
                  }}
                  aria-hidden
                />
                <ScriptedChatDemo industry="front-desk-demo" />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={revealItem}
              className="relative z-10 mt-12 flex flex-wrap justify-center gap-4"
            >
              <Button asChild variant="blue">
                <Link href="/contact">Book a Call</Link>
              </Button>
              <Button asChild variant="transparent" tone="dark">
                <Link href="/solutions/janice">See the platform</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
