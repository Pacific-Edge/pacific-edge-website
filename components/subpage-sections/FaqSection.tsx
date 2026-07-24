import type { ReactNode } from "react"
import { Section, SectionHeader, FaqList, type FaqEntry } from "@/components/ui/sections"

/**
 * FAQ section: centered "Questions" eyebrow + per-page title over the
 * one-open-at-a-time accordion (wired by LegacyBehaviors). Omit `title` on
 * pages whose hero already names the FAQ (e.g. /faq) to skip the header.
 */
interface FaqSectionProps {
  title?: ReactNode
  items: FaqEntry[]
}

export function FaqSection({ title, items }: FaqSectionProps) {
  return (
    <Section id="faq">
      {title && <SectionHeader center eyebrow="Questions" title={title} />}
      <FaqList items={items} />
    </Section>
  )
}
