export * from "./janice-chat-tree"
export * from "./scripted-chat-types"
export * from "./scripted-chats"

/** Industry keys for {@link SCRIPTED_CHATS} — use with ScriptedChatDemo. */
export const SCRIPTED_CHAT_INDUSTRIES = [
  "dental",
  "salons",
  "front-desk-demo",
  "professional-services",
  "trades",
  "retail",
] as const

export type ScriptedChatIndustry = (typeof SCRIPTED_CHAT_INDUSTRIES)[number]
