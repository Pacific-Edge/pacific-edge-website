import LoginForm from "@/components/auth/LoginForm"
import { createPageMetadata } from "@/lib/seo/metadata"

export const metadata = createPageMetadata({
  title: "Client Login",
  description: "Sign in to your Pacific Edge AI client dashboard.",
  path: "/login",
  noIndex: true,
})

export default function LoginPage() {
  return (
    <div className="min-h-dvh flex items-center justify-center px-4 py-16">
      <LoginForm />
    </div>
  )
}
