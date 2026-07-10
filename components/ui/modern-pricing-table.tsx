"use client"

import React, { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Check, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import RollInText from "@/components/ui/RollInText"
import SpeedBlobBackground from "@/components/ui/SpeedBlobBackground"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EASE_IN_OUT, EASE_OUT } from "@/lib/motion"
import { cn } from "@/lib/utils"

export interface Plan {
  title: string
  price: {
    monthly: number
    yearly: number
  }
  description: string
  features: string[]
  ctaText: string
  ctaHref: string
  isFeatured?: boolean
  /** Card surface treatment on light backgrounds. */
  accent?: "default" | "blue" | "dark"
}

interface PricingTableProps {
  plans: Plan[]
  title?: string
  description?: string
  showHeader?: boolean
  /** `dark` inverts surfaces for midnight section backgrounds. */
  tone?: "light" | "dark"
  /** `black` always renders the "Most Popular" badge as white text on black,
   *  regardless of card accent. `auto` (default) derives it from the card. */
  badgeTone?: "auto" | "black"
}

const AnimatedDigit: React.FC<{ digit: string; index: number; reduce: boolean | null }> = ({
  digit,
  index,
  reduce,
}) => {
  if (reduce) {
    return <span className="inline-block min-w-[1ch] text-center">{digit}</span>
  }

  return (
    <div className="relative inline-block min-w-[1ch] overflow-hidden text-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={digit}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{
            duration: 0.3,
            delay: index * 0.05,
            ease: EASE_IN_OUT,
          }}
          className="block"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

const ScrollingNumber: React.FC<{ value: number; reduce: boolean | null }> = ({
  value,
  reduce,
}) => {
  const numberString = value.toString()

  return (
    <div className="flex items-center">
      {numberString.split("").map((digit, index) => (
        <AnimatedDigit
          key={`${value}-${index}`}
          digit={digit}
          index={index}
          reduce={reduce}
        />
      ))}
    </div>
  )
}

const PricingTable: React.FC<PricingTableProps> = ({
  plans,
  title = "Choose Your Plan",
  description = "Select the perfect plan for your needs. All plans include our core features with different limits and capabilities.",
  showHeader = true,
  tone = "light",
  badgeTone = "auto",
}) => {
  const [isYearly, setIsYearly] = useState(false)
  const reduce = useReducedMotion()
  const dark = tone === "dark"

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: EASE_OUT },
    },
  }

  return (
    <div className="mx-auto w-full max-w-7xl space-y-12 sm:space-y-16">
      {showHeader ? (
        <motion.div
          className="space-y-8 text-center"
          initial={reduce ? false : { opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <div className="space-y-4">
            <RollInText
              as="h2"
              by="word"
              stagger={0.06}
              delay={0.1}
              once={false}
              className={cn(
                "block text-display-lg",
                dark ? "text-white-50" : "text-midnight-900",
              )}
            >
              {title}
            </RollInText>
            {description ? (
              <RollInText
                as="p"
                by="word"
                stagger={0.015}
                delay={0.25}
                once={false}
                className={cn(
                  "mx-auto block max-w-2xl font-ui text-base leading-relaxed",
                  dark ? "text-white-50/60" : "text-midnight-900/58",
                )}
              >
                {description}
              </RollInText>
            ) : null}
          </div>

          <BillingToggle
            isYearly={isYearly}
            setIsYearly={setIsYearly}
            reduce={reduce}
            dark={dark}
          />
        </motion.div>
      ) : (
        <BillingToggle
          isYearly={isYearly}
          setIsYearly={setIsYearly}
          reduce={reduce}
          dark={dark}
        />
      )}

      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
        variants={reduce ? undefined : containerVariants}
        initial={reduce ? false : "hidden"}
        animate="visible"
      >
        {plans.map((plan, index) => {
          const monthlyDisplay = isYearly
            ? Math.round(plan.price.yearly / 12)
            : plan.price.monthly
          const yearlySavings = plan.price.monthly * 12 - plan.price.yearly
          const accent = plan.accent ?? (plan.isFeatured ? "blue" : "default")
          const isBlueBento = accent === "blue" && !dark
          const inverted = accent === "blue" || accent === "dark"

          return (
            <motion.div
              key={plan.title}
              variants={reduce ? undefined : cardVariants}
              className="relative"
            >
              {plan.isFeatured ? (
                <motion.div
                  initial={reduce ? false : { opacity: 0, scale: 0.8, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4, ease: EASE_OUT }}
                  className="absolute -top-4 left-1/2 z-10 -translate-x-1/2"
                >
                  <div
                    className={cn(
                      "flex items-center gap-2 rounded-pill px-4 py-2 font-ui text-sm font-medium shadow-soft",
                      badgeTone === "black"
                        ? "bg-midnight-900 text-white-50"
                        : inverted
                          ? "bg-white-50 text-midnight-900"
                          : dark
                            ? "bg-white-50 text-midnight-900"
                            : "bg-midnight-900 text-white-50",
                    )}
                  >
                    <Star className="size-3 fill-current" aria-hidden />
                    Most Popular
                  </div>
                </motion.div>
              ) : null}

              <div
                className={cn(
                  "relative flex h-full flex-col transition-transform duration-300 hover:-translate-y-1",
                  dark
                    ? plan.isFeatured
                      ? "rounded-2xl border border-white-50/25 bg-midnight-800 p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.55)] sm:p-8"
                      : "rounded-2xl border border-white-50/12 bg-midnight-900/60 p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)] sm:p-8"
                    : isBlueBento
                      ? "overflow-hidden rounded-none border border-white/15 bg-electric-500 p-6 shadow-soft sm:p-8"
                      : accent === "dark"
                        ? "rounded-2xl border border-midnight-900/20 bg-midnight-900 p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.55)] sm:p-8"
                        : plan.isFeatured
                          ? "rounded-2xl border border-midnight-900/30 bg-white-100 p-6 shadow-card sm:p-8"
                          : "rounded-2xl border border-ash-300/55 bg-white-50 p-6 shadow-card sm:p-8",
                )}
              >
                {isBlueBento ? <SpeedBlobBackground /> : null}

                <div className="relative z-10 flex h-full flex-col">
                <div className="mb-8 space-y-4 text-center">
                  <h3
                    className={cn(
                      "font-display text-2xl font-semibold",
                      inverted
                        ? "text-white-50"
                        : dark
                          ? "text-white-50"
                          : "text-midnight-900",
                    )}
                  >
                    {plan.title}
                  </h3>
                  <p
                    className={cn(
                      "font-ui text-sm leading-relaxed",
                      isBlueBento
                        ? "text-white-50/60"
                        : inverted
                          ? "text-white-50/70"
                          : dark
                            ? "text-white-50/55"
                            : "text-midnight-900/55",
                    )}
                  >
                    {plan.description}
                  </p>

                  <div className="space-y-2">
                    <div
                      className={cn(
                        "flex items-center justify-center font-display text-4xl font-bold tracking-tight sm:text-5xl",
                        inverted
                          ? "text-white-50"
                          : dark
                            ? "text-white-50"
                            : "text-midnight-900",
                      )}
                    >
                      $<ScrollingNumber value={monthlyDisplay} reduce={reduce} />
                      <span
                        className={cn(
                          "ml-1 font-ui text-lg font-normal",
                          isBlueBento
                            ? "text-white-50/60"
                            : inverted
                              ? "text-white-50/60"
                              : dark
                                ? "text-white-50/45"
                                : "text-midnight-900/45",
                        )}
                      >
                        /month
                      </span>
                    </div>
                    <motion.div
                      initial={reduce ? false : { opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn(
                        "flex items-center justify-center gap-2 font-ui text-sm",
                        isBlueBento
                          ? "text-white-50/60"
                          : inverted
                            ? "text-white-50/60"
                            : dark
                              ? "text-white-50/45"
                              : "text-midnight-900/45",
                      )}
                    >
                      <span>{isYearly ? "billed yearly" : "billed monthly"}</span>
                      {isYearly && yearlySavings > 0 ? (
                        <motion.span
                          initial={reduce ? false : { opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className={cn(
                            "rounded-pill px-2 py-0.5 text-xs font-medium",
                            isBlueBento
                              ? "bg-white-50/20 text-white-50"
                              : inverted
                                ? "bg-white-50/15 text-white-50"
                                : dark
                                  ? "bg-electric-400/15 text-electric-300"
                                  : "bg-electric-500/10 text-electric-700",
                          )}
                        >
                          Save ${yearlySavings}
                        </motion.span>
                      ) : null}
                    </motion.div>
                  </div>
                </div>

                <div className="mb-8 flex-1 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={reduce ? false : { opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.6 + index * 0.1 + featureIndex * 0.05,
                        duration: 0.35,
                        ease: EASE_OUT,
                      }}
                      className="flex items-center gap-3"
                    >
                      <div
                        className={cn(
                          "flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                          isBlueBento
                            ? "bg-white-50/20"
                            : inverted
                              ? "bg-white-50/15"
                              : dark
                                ? "bg-electric-400/15"
                                : "bg-electric-500/10",
                        )}
                      >
                        <Check
                          className={cn(
                            "size-3",
                            inverted
                              ? "text-white-50"
                              : dark
                                ? "text-electric-300"
                                : "text-electric-700",
                          )}
                          aria-hidden
                        />
                      </div>
                      <span
                        className={cn(
                          "font-ui text-sm",
                          isBlueBento
                            ? "text-white-50/85"
                            : inverted
                              ? "text-white-50/85"
                              : dark
                                ? "text-white-50/70"
                                : "text-midnight-900/70",
                        )}
                      >
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-auto w-full"
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.4, ease: EASE_OUT }}
                >
                  {(() => {
                    const buttonProps =
                      (!dark && inverted) || (dark && plan.isFeatured)
                        ? { variant: "white" as const }
                        : dark && !plan.isFeatured
                          ? { variant: "transparent" as const, tone: "light" as const }
                          : plan.isFeatured
                            ? { variant: "black" as const }
                            : { variant: "transparent" as const, tone: "dark" as const }

                    return (
                      <Button asChild size="lg" className="mx-auto w-full max-w-none" {...buttonProps}>
                        <Link href={plan.ctaHref}>{plan.ctaText}</Link>
                      </Button>
                    )
                  })()}
                </motion.div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

function BillingToggle({
  isYearly,
  setIsYearly,
  reduce,
  dark,
}: {
  isYearly: boolean
  setIsYearly: (value: boolean) => void
  reduce: boolean | null
  dark: boolean
}) {
  return (
    <motion.div
      className="flex items-center justify-center"
      initial={reduce ? false : { opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.6, ease: EASE_OUT }}
    >
      <Tabs
        value={isYearly ? "yearly" : "monthly"}
        onValueChange={(value) => setIsYearly(value === "yearly")}
      >
        <TabsList
          className={cn(
            "flex h-12 w-full max-w-sm cursor-pointer sm:w-auto",
            dark &&
              "border-white-50/15 bg-midnight-800 text-white-50/45 data-[state=active]:bg-transparent",
          )}
        >
          <TabsTrigger
            value="monthly"
            className={cn(
              "flex-1 cursor-pointer px-4 text-base font-medium sm:px-6",
              dark &&
                "hover:text-white-50/70 data-[state=active]:bg-white-50 data-[state=active]:text-midnight-900 data-[state=active]:shadow-none",
            )}
          >
            Monthly
          </TabsTrigger>
          <TabsTrigger
            value="yearly"
            className={cn(
              "flex flex-1 cursor-pointer items-center gap-2 px-4 text-base font-medium sm:px-6",
              dark &&
                "hover:text-white-50/70 data-[state=active]:bg-white-50 data-[state=active]:text-midnight-900 data-[state=active]:shadow-none",
            )}
          >
            Yearly
            <span
              className={cn(
                "rounded-pill px-2 py-1 text-xs font-medium",
                dark
                  ? "bg-electric-400/15 text-electric-300"
                  : "bg-electric-500/10 text-electric-700",
              )}
            >
              Save 20%
            </span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </motion.div>
  )
}

export default PricingTable
