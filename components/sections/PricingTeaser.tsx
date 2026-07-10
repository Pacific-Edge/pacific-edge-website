"use client"

import Link from "next/link"
import PricingTable from "@/components/ui/modern-pricing-table"
import RollInText from "@/components/ui/RollInText"
import { Button } from "@/components/ui/button"
import { PRICING, PRICING_PLANS } from "@/lib/content"

export default function PricingTeaser() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-14 md:pt-12 md:pb-16 lg:pt-14 lg:pb-20">
      <div className="container-x relative z-10">
        <RollInText
          as="h2"
          by="word"
          stagger={0.08}
          className="mb-12 block text-center font-display text-midnight-900"
          style={{
            fontSize: "clamp(2.25rem, 4.5vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          Plans and Pricing
        </RollInText>

        <PricingTable plans={PRICING_PLANS} showHeader={false} badgeTone="black" />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild variant="black">
            <Link href="/contact">{PRICING.cta}</Link>
          </Button>
          <Button asChild variant="transparent" tone="dark">
            <Link href="/pricing">See full details</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
