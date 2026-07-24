import type { ReactNode } from "react"
import { Section, PhoneShowcase, type ShowStep } from "@/components/ui/sections"

/**
 * "What It Looks Like" section: the scripted-chat phone demo with three
 * numbered steps. The eyebrow is fixed; industry keys the chat script in
 * lib/demo/scripted-chats.ts.
 */
interface WhatItLooksLikeSectionProps {
  id?: string
  industry: string
  title: ReactNode
  lead: ReactNode
  steps: ShowStep[]
}

export function WhatItLooksLikeSection({ id = "example", industry, title, lead, steps }: WhatItLooksLikeSectionProps) {
  return (
    <Section id={id}>
      <PhoneShowcase industry={industry} eyebrow="What It Looks Like" title={title} lead={lead} steps={steps} />
    </Section>
  )
}
