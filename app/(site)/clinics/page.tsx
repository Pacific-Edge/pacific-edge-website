import ClinicsPage from "@/components/clinics/ClinicsPage"
import { CLINICS_PAGE } from "@/lib/content/clinics"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata = createPageMetadata({
  title: "For Dental Clinics",
  description: CLINICS_PAGE.painHook,
  path: "/clinics",
})

export default function ClinicsRoute() {
  return <ClinicsPage />
}
