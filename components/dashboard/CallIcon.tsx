"use client"

import {
  Calendar,
  Megaphone,
  MessageSquare,
  Phone,
  RefreshCw,
  RotateCcw,
  Stethoscope,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react"

const ICON_MAP: Record<string, LucideIcon> = {
  phone: Phone,
  sms: MessageSquare,
  refill: RefreshCw,
  catering: UtensilsCrossed,
  dm: MessageSquare,
  rebook: RotateCcw,
  quote: MessageSquare,
  winback: RotateCcw,
  campaign: Megaphone,
  recall: Calendar,
  treatment: Stethoscope,
}

export function CallIcon({ name, className = "w-4 h-4" }: { name: string; className?: string }) {
  const Icon = ICON_MAP[name] ?? Phone
  return <Icon className={className} aria-hidden />
}
