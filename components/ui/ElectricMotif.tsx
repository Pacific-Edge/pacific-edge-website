"use client"

import {
  LIGHT_PILLAR_BOTTOM_COLOR,
  LIGHT_PILLAR_TOP_COLOR,
} from "@/components/ui/LightPillar"

type ElectricMotifVariant = "beam" | "arc" | "wash" | "grid-lines"

type ElectricMotifProps = {
  variant?: ElectricMotifVariant
  className?: string
  intensity?: "quiet" | "normal"
}

const intensityClass = {
  quiet: "opacity-35",
  normal: "opacity-55",
} as const

export default function ElectricMotif({
  variant = "beam",
  className = "",
  intensity = "quiet",
}: ElectricMotifProps) {
  const baseStyle = {
    "--pillar-top": LIGHT_PILLAR_TOP_COLOR,
    "--pillar-bottom": LIGHT_PILLAR_BOTTOM_COLOR,
  } as React.CSSProperties

  return (
    <div
      aria-hidden="true"
      className={`electric-motif electric-motif-${variant} ${intensityClass[intensity]} ${className}`}
      style={baseStyle}
    />
  )
}
