/**
 * Cloudflare Pages Function: POST /api/lead
 *
 * Receives ROI-calculator lead submissions (work email + wizard answers) and
 * stores each one as a row in the LEADS KV namespace. Deployed automatically
 * by Cloudflare Pages because it lives in the top-level `functions/` directory
 * (Pages Functions run alongside the static `out/` export; no config needed).
 *
 * ONE-TIME SETUP (Cloudflare dashboard):
 *   Workers & Pages -> KV -> Create namespace: "pacific-edge-leads"
 *   Pages project -> Settings -> Bindings -> Add -> KV namespace:
 *     Variable name: LEADS   Namespace: pacific-edge-leads
 * Until that binding exists this endpoint returns 503 and the site continues
 * to work (the client fires-and-forgets; the browser also keeps a local log).
 *
 * Reading leads: dashboard KV browser, or `wrangler kv key list/get`.
 */

interface Env {
  LEADS?: KVNamespace
}

const MAX_BODY = 8_192 // bytes; a lead is ~300 bytes, anything huge is abuse
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.LEADS) {
    return new Response(JSON.stringify({ ok: false, error: "storage not configured" }), {
      status: 503,
      headers: { "Content-Type": "application/json" },
    })
  }

  const raw = await request.text()
  if (raw.length > MAX_BODY) return new Response(null, { status: 413 })

  let lead: Record<string, unknown>
  try {
    lead = JSON.parse(raw)
  } catch {
    return new Response(null, { status: 400 })
  }

  const email = typeof lead.email === "string" ? lead.email.trim().toLowerCase() : ""
  if (!EMAIL_RE.test(email)) return new Response(null, { status: 400 })

  // Sortable, collision-safe key: lead:<ISO timestamp>:<uuid>
  const key = `lead:${new Date().toISOString()}:${crypto.randomUUID()}`
  await env.LEADS.put(
    key,
    JSON.stringify({
      ...lead,
      email,
      ua: request.headers.get("User-Agent") ?? "",
      country: (request as { cf?: { country?: string } }).cf?.country ?? "",
      receivedAt: new Date().toISOString(),
    }),
  )

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}

// Anything but POST is a 405.
export const onRequest: PagesFunction<Env> = async ({ request, next }) => {
  if (request.method === "POST") return next()
  return new Response(null, { status: 405, headers: { Allow: "POST" } })
}
