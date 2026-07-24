/**
 * Barrel for the subpage section layer: full page sections composed from the
 * components/ui/sections primitives. Every industry subpage is built from
 * these in the template order:
 *   HeroSection -> Divider -> AlternatingTextSection -> Divider ->
 *   WhatItLooksLikeSection -> MetricsBandSection -> FaqSection -> GetStartedSection
 * with LiveDashboardSection (dental + trades) and the dental/* sections as
 * the only page-specific extras.
 */
export { HeroSection, type HeroCta } from "./HeroSection"
export { AlternatingTextSection, type WhatRow } from "./AlternatingTextSection"
export { ChipsSection } from "./ChipsSection"
export { ProcessStepsSection, type ProcessStep } from "./ProcessStepsSection"
export { WhatItLooksLikeSection } from "./WhatItLooksLikeSection"
export { MetricsBandSection } from "./MetricsBandSection"
export { FaqSection } from "./FaqSection"
export { GetStartedSection } from "./GetStartedSection"
export { LiveDashboardSection } from "./LiveDashboardSection"
export { PracticeTypesSection, type PracticeTypeCard } from "./dental/PracticeTypesSection"
export { PricingTiersSection, type PricingTier } from "./dental/PricingTiersSection"
export { CapabilitiesChipsSection, type Capability } from "./dental/CapabilitiesChipsSection"
