/** Shared layout + bubble styles for scripted and live phone chat demos. */

export const PHONE_SHELL_CLASS =
  "relative mx-auto w-full max-w-[393px] h-[802px]"

export const PHONE_FRAME_CLASS =
  "relative flex h-full flex-col rounded-[2.25rem] border border-ash-300/50 bg-navy-950 p-2.5 shadow-card"

export const PHONE_NOTCH_CLASS =
  "absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-navy-950"

export const PHONE_SCREEN_CLASS =
  "flex min-h-0 flex-1 flex-col overflow-hidden rounded-[1.75rem] bg-cream-50"

export const PHONE_CHAT_CLASS =
  "flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-3 py-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"

/** Patient / customer messages (this phone). */
export const BUBBLE_SENT_CLASS =
  "max-w-[88%] self-end rounded-2xl rounded-br-md bg-[#007AFF] px-3.5 py-2.5 font-ui text-sm leading-relaxed text-white"

/** Clinic / business replies. */
export const BUBBLE_RECEIVED_CLASS =
  "max-w-[88%] self-start rounded-2xl rounded-bl-md bg-[#E9E9EB] px-3.5 py-2.5 font-ui text-sm leading-relaxed text-navy-900"

export const TYPING_INDICATOR_CLASS =
  "self-start flex items-center gap-1 rounded-2xl rounded-bl-md bg-[#E9E9EB] px-3.5 py-3"
