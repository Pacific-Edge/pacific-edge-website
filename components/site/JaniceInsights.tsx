"use client"

import { useEffect } from "react"

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Ports the old ai-employee.html analytics script: defines window.peLogJanice so
 * every message a visitor texts Janice is (a) saved to localStorage on this
 * device and (b) POSTed to a Google Apps Script Web App that appends it to your
 * Google Sheet ("Excel file"). Also restores the #insights viewer (open with
 * `#insights` in the URL or pressing "i" three times) with CSV export.
 *
 * The endpoint is read from NEXT_PUBLIC_JANICE_ENDPOINT at build time so the
 * private URL never has to be committed. Blank → localStorage-only (same as the
 * old public repo copy). Set it in Cloudflare Pages env vars to log to the Sheet.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_JANICE_ENDPOINT || ""

export default function JaniceInsights() {
  useEffect(() => {
    const KEY = "pe_janice_log"
    const CAP = 300
    const load = (): any[] => {
      try { return JSON.parse(localStorage.getItem(KEY) || "[]") } catch { return [] }
    }
    const save = (a: any[]) => {
      try { localStorage.setItem(KEY, JSON.stringify(a.slice(-CAP))) } catch {}
    }
    const visitorId = () => {
      try {
        let id = localStorage.getItem("pe_janice_vid")
        if (!id) { id = "v-" + Date.now().toString(36) + Math.floor(Math.random() * 1e6).toString(36); localStorage.setItem("pe_janice_vid", id) }
        return id
      } catch { return "v-unknown" }
    }

    ;(window as any).peLogJanice = function (message: string, reply: string) {
      message = ("" + message).trim(); if (!message) return
      reply = ("" + (reply || "")).trim()
      const a = load(); a.push({ t: Date.now(), m: message, r: reply }); save(a)
      if (ENDPOINT) {
        try {
          fetch(ENDPOINT, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify({ visitor: visitorId(), message, reply, ts: new Date().toISOString(), page: "ai-employee" }),
          })
        } catch {}
      }
    }

    const esc = (s: any) => ("" + s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c] as string))
    const openInsights = () => {
      if (document.getElementById("peInsights")) return
      const all = load(), a = all.slice().reverse()
      const freq: Record<string, number> = {}
      all.forEach((x: any) => { const k = x.m.toLowerCase().replace(/\s+/g, " ").trim(); freq[k] = (freq[k] || 0) + 1 })
      const top = Object.keys(freq).map((k) => ({ k, n: freq[k] })).sort((x, y) => y.n - x.n).slice(0, 12)
      const rows = a.length ? a.map((x: any) => '<div style="padding:11px 0;border-bottom:1px solid #f0ece2"><div style="font-family:monospace;font-size:11px;color:#aaa;margin-bottom:5px">' + new Date(x.t).toLocaleString() + '</div><div style="font-size:13.5px;color:#222;line-height:1.45"><b style="color:#0a7d5d">Customer:</b> ' + esc(x.m) + "</div>" + (x.r ? '<div style="font-size:13.5px;color:#555;line-height:1.45;margin-top:3px"><b style="color:#0a9d76">Janice:</b> ' + esc(x.r) + "</div>" : "") + "</div>").join("") : '<div style="padding:26px 0;color:#999;text-align:center">No messages captured on this device yet, try texting Janice above.</div>'
      const chips = top.length ? top.map((x) => '<span style="display:inline-flex;gap:6px;align-items:center;font-size:12px;background:#eafaf3;border:1px solid #b9ecd9;color:#0a7d5d;border-radius:100px;padding:4px 10px;margin:0 6px 6px 0">' + esc(x.k) + ' <b style="color:#04130f">&times;' + x.n + "</b></span>").join("") : ""
      const w = document.createElement("div"); w.id = "peInsights"
      w.setAttribute("style", "position:fixed;inset:0;z-index:99999;background:rgba(8,14,11,.62);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;padding:18px;font-family:Outfit,system-ui,sans-serif")
      w.innerHTML = '<div style="background:#fff;max-width:640px;width:100%;max-height:86vh;overflow:auto;border-radius:18px;padding:26px 24px;box-shadow:0 40px 90px -30px rgba(0,0,0,.5)">'
        + '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px"><h3 style="margin:0;font-family:\'Bebas Neue\',sans-serif;font-size:27px;letter-spacing:.5px;color:#1c1914">Janice Demo &middot; Visitor Messages</h3><button id="peClose" aria-label="Close" style="border:none;background:#f0ece2;border-radius:8px;width:30px;height:30px;cursor:pointer;font-size:16px;line-height:1">&times;</button></div>'
        + '<div style="font-size:13px;color:#777;margin-bottom:16px">' + all.length + " message" + (all.length === 1 ? "" : "s") + ' captured on <b>this device</b>. To collect from every visitor, set NEXT_PUBLIC_JANICE_ENDPOINT to your Apps Script URL.</div>'
        + (chips ? '<div style="font-family:monospace;font-size:11px;letter-spacing:1px;color:#0a7d5d;text-transform:uppercase;margin-bottom:8px">Most asked</div><div style="margin-bottom:18px">' + chips + "</div>" : "")
        + '<div style="font-family:monospace;font-size:11px;letter-spacing:1px;color:#0a7d5d;text-transform:uppercase;margin-bottom:4px">All messages (newest first)</div><div>' + rows + "</div>"
        + '<div style="display:flex;gap:10px;margin-top:18px"><button id="peExport" style="flex:1;border:1px solid #b9ecd9;background:#eafaf3;color:#0a7d5d;border-radius:10px;padding:10px;cursor:pointer;font-weight:600;font-size:13px">Export CSV</button><button id="peClear" style="border:1px solid #f0d0c5;background:#fbeee9;color:#c2603f;border-radius:10px;padding:10px 16px;cursor:pointer;font-weight:600;font-size:13px">Clear</button></div>'
        + "</div>"
      document.body.appendChild(w)
      const close = () => { w.remove(); if (location.hash === "#insights") history.replaceState(null, "", location.pathname) }
      ;(document.getElementById("peClose") as HTMLElement).onclick = close
      w.onclick = (e) => { if (e.target === w) close() }
      ;(document.getElementById("peClear") as HTMLElement).onclick = () => { if (confirm("Clear all messages captured on this device?")) { localStorage.removeItem(KEY); w.remove() } }
      ;(document.getElementById("peExport") as HTMLElement).onclick = () => {
        const d = load(), csv = "timestamp,customer_message,janice_reply\n" + d.map((x: any) => '"' + new Date(x.t).toISOString() + '","' + ("" + x.m).replace(/"/g, '""') + '","' + ("" + (x.r || "")).replace(/"/g, '""') + '"').join("\n")
        const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" })), link = document.createElement("a"); link.href = url; link.download = "janice-messages.csv"; link.click(); URL.revokeObjectURL(url)
      }
    }

    let openTimer = 0
    if (location.hash === "#insights") openTimer = window.setTimeout(openInsights, 300)
    const onHash = () => { if (location.hash === "#insights") openInsights() }
    window.addEventListener("hashchange", onHash)
    let seq = 0, lastT = 0
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "i" && e.key !== "I") { seq = 0; return }
      const now = Date.now(); if (now - lastT > 700) seq = 0; lastT = now; seq++
      if (seq >= 3) { seq = 0; openInsights() }
    }
    window.addEventListener("keydown", onKey)

    return () => {
      window.clearTimeout(openTimer)
      window.removeEventListener("hashchange", onHash)
      window.removeEventListener("keydown", onKey)
      try { delete (window as any).peLogJanice } catch {}
    }
  }, [])

  return null
}
