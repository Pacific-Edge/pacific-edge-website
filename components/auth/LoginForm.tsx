/**
 * Client-login placeholder. The real client dashboard is archived (see
 * archive/dashboard/) — this page just shows the sign-in shell with the
 * submit button disabled until the product ships.
 */
export default function LoginForm() {
  return (
    <div className="auth-center">
      <div className="auth">
        <div className="auth-card">
          <div className="auth-badge">
            <i />
            Client Portal
          </div>
          <h1>
            Welcome <span className="a">Back.</span>
          </h1>
          <p className="auth-sub">
            Sign in to view your live dashboard. Every call, review, and booking, tracked in one
            place.
          </p>

          <form noValidate>
            <div className="field">
              <label htmlFor="email">Email</label>
              <div className="field-wrap">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@yourbusiness.com"
                  autoComplete="username"
                  disabled
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <div className="field-wrap">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  disabled
                />
              </div>
            </div>
            <button type="button" className="btn" disabled aria-disabled="true">
              Coming soon
            </button>
          </form>

          <div className="divider">Not a client yet</div>
          <p className="auth-foot">
            Want a dashboard like this?{" "}
            <a href="https://cal.com/pacificedge" target="_blank" rel="noopener">
              Book a free call
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
