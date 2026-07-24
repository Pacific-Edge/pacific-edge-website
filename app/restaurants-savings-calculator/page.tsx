import type { Metadata } from "next"
import SiteShell from "@/components/site/SiteShell"
import SavingsCalculator from "@/components/tools/SavingsCalculator"
import { SAVINGS_CALCULATORS } from "@/lib/savings-calculators"

const cfg = SAVINGS_CALCULATORS.restaurants

export const metadata: Metadata = {
  title: { absolute: `${cfg.meta.title} | Pacific Edge AI` },
  description: cfg.meta.description,
  alternates: { canonical: cfg.meta.canonical },
}

export default function Page() {
  return (
    <SiteShell>
      <div className="pe-calc">
        <SavingsCalculator industry="restaurants" />
      </div>
    </SiteShell>
  )
}
