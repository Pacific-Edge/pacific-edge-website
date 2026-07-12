// Minimal Next.js shell. The live site is the static HTML in `public/`,
// which `next build` (output: "export") copies verbatim into `out/`.
// This shell only exists so the Cloudflare Pages "static Next.js" build
// still runs and produces `out/`. No marketing routes live here.
export const metadata = {
  title: "Pacific Edge AI",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
