import Link from "next/link"
import { getCalculatorConfig } from "@/lib/calculators/configs"
import { Button } from "@/components/ui/button"

type SavingsCalculatorLinkProps = {
  className?: string
  variant?: "primary" | "secondary"
}

/** Link to the savings calculator. */
export default function SavingsCalculatorLink({
  className = "",
  variant = "secondary",
}: SavingsCalculatorLinkProps) {
  const config = getCalculatorConfig("dental")
  if (!config) return null

  return (
    <Button
      asChild
      variant={variant === "primary" ? "black" : "transparent"}
      tone="dark"
      className={className}
    >
      <Link href={config.path}>Estimate what empty slots cost</Link>
    </Button>
  )
}
