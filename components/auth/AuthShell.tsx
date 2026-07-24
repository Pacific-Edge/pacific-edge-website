import Logo from "@/components/site/Logo"
import "@/styles/auth.css"

/**
 * Shared chrome for the authenticated surface (login + dashboard). Deliberately
 * minimal and consistent: the site Logo on the left (identical mark to the
 * marketing nav) and a right-hand actions slot — "Back to site" on login, the
 * user block + logout on the dashboard. This is NOT the marketing mega-nav; auth
 * pages get their own consistent bar so the chrome never varies within a surface.
 */
export default function AuthShell({
  actions,
  children,
}: {
  actions?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="pe-auth">
      <header className="auth-bar">
        <Logo href="/" />
        {actions ? <div className="auth-bar-actions">{actions}</div> : null}
      </header>
      <main className="auth-main">{children}</main>
    </div>
  )
}
