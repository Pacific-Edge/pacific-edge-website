/** Shared layout + bubble styles for scripted and live phone chat demos. */

export const PHONE_SHELL_CLASS =
  "relative mx-auto w-full max-w-[393px] aspect-[393/760] [transform-style:preserve-3d]"

export const PHONE_FRAME_CLASS =
  "relative flex h-full flex-col rounded-[2.35rem] border border-white-50/18 bg-[linear-gradient(145deg,#050505,#151515_55%,#030303)] p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_36px_90px_rgba(0,0,0,0.28)]"

export const PHONE_NOTCH_CLASS =
  "absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-midnight-950"

export const PHONE_SCREEN_CLASS =
  "flex min-h-0 flex-1 flex-col overflow-hidden rounded-[1.75rem] bg-white-50 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]"

export const PHONE_CHAT_CLASS =
  "flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-3.5 py-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"

/** Patient / customer messages (this phone). */
export const BUBBLE_SENT_CLASS =
  "max-w-[88%] self-end rounded-[1.15rem] bg-[#007AFF] px-3.5 py-2.5 font-ui text-sm leading-relaxed text-white"

/** Clinic / business replies. */
export const BUBBLE_RECEIVED_CLASS =
  "max-w-[88%] self-start rounded-[1.15rem] bg-[#E9E9EB] px-3.5 py-2.5 font-ui text-sm leading-relaxed text-midnight-900"

export const TYPING_INDICATOR_CLASS =
  "self-start flex items-center gap-1 rounded-[1.15rem] bg-[#E9E9EB] px-3.5 py-3"
