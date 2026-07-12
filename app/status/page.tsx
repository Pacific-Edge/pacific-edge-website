// Build placeholder so `next build` has at least one route to emit.
// Not linked anywhere; the real site is the static HTML in `public/`.
export const metadata = { title: "Status · Pacific Edge AI" }

export default function Status() {
  return <main style={{ fontFamily: "system-ui", padding: 24 }}>OK</main>
}
