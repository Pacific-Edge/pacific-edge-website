import type { Metadata } from "next"
import Link from "next/link"
import AuthShell from "@/components/auth/AuthShell"
import LoginForm from "@/components/auth/LoginForm"

export const metadata: Metadata = {
  title: { absolute: "Client Login | Pacific Edge AI" },
  description: "Sign in to your Pacific Edge AI client dashboard.",
  robots: { index: false, follow: false },
}

export default function Page() {
  return (
    <AuthShell
      actions={
        <Link href="/" className="auth-back">
          ← Back to site
        </Link>
      }
    >
      <LoginForm />
    </AuthShell>
  )
}
