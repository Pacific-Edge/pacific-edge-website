"use client"

import { useContactModal } from "@/components/site/ContactModalProvider"

export default function ContactEmailButton() {
  const { open } = useContactModal()
  return (
    <button type="button" className="icta-email" onClick={open}>
      Or email hello@pacificedge.ai →
    </button>
  )
}
