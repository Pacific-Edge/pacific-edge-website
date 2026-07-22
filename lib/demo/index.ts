export * from "./scripted-chat-types"
export * from "./scripted-chats"

/** Industry keys for {@link SCRIPTED_CHATS} — use with ScriptedChatDemo. */
export const SCRIPTED_CHAT_INDUSTRIES = ["dental", "front-desk-demo"] as const

export type ScriptedChatIndustry = (typeof SCRIPTED_CHAT_INDUSTRIES)[number]
