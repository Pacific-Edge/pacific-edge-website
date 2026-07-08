import Link from "next/link"
import { getCalculatorConfig } from "@/lib/calculators/configs"

type SavingsCalculatorLinkProps = {
  industry: string
  className?: string
  variant?: "primary" | "secondary"
}

/** Link to the standalone savings calculator — not an embedded form. */
export default function SavingsCalculatorLink({
  industry,
  className = "",
  variant = "secondary",
}: SavingsCalculatorLinkProps) {
  const config = getCalculatorConfig(industry)
  if (!config) return null

  const label =
    industry === "trades"
      ? "Estimate missed jobs"
      : industry === "retail"
        ? "Estimate lost sales"
        : "Estimate what empty slots cost"

  return (
    <Link
      href={config.path}
      className={
        variant === "primary"
          ? `btn-primary ${className}`
          : `btn-secondary ${className}`
      }
    >
      {label}
    </Link>
  )
}
