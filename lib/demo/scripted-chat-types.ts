export type ScriptedBubble =
  | { type: "timestamp"; text: string }
  | { type: "customer"; text: string; delayMs?: number; meta?: string }
  | { type: "assistant"; text: string; delayMs?: number; meta?: string }
  | { type: "typing"; durationMs: number }
  | { type: "badge"; text: string; delayMs?: number }

export type ScriptedChatScript = {
  industry: string
  businessName: string
  headerSub: string
  bubbles: ScriptedBubble[]
}
