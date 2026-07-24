"use client"

import { useEffect } from "react"

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Ports the old ai-employee.html "Text Janice" interactive demo (front-end only,
 * no backend). Janice matches the message to a topic and replies in-browser.
 * Wires the static demo DOM (#jeChat / #jeForm / #jeInput / #jeChips) rendered
 * by the ai-employee page. Mounted only on that page.
 */
type Intent = { id: string; keys: string[]; reply: string[]; offer: string | null }

export default function JaniceDemo() {
  useEffect(() => {
    const chat = document.getElementById("jeChat")
    if (!chat) return
    const form = document.getElementById("jeForm") as HTMLFormElement | null
    const input = document.getElementById("jeInput") as HTMLInputElement | null
    const chips = document.getElementById("jeChips")
    if (!form || !input || !chips) return

    const ctx: { offer: string | null } = { offer: null }
    const rot: Record<string, number> = {}

    const AFFIRM = ["yes","yeah","yep","yup","ya","yea","sure","ok","okay","okey","kk","please","pls","definitely","absolutely","sounds good","sounds great","sounds perfect","perfect","great","works","that works","works for me","works great","go ahead","do it","lets do it","let's do it","sure thing","for sure","mhm","sounds amazing","yes please"]
    const DECLINE = ["no","nope","nah","not now","maybe later","just looking","no thanks","no thank you","im good","i'm good","all good","not right now","no thx"]
    const PICK = ["saturday","sat","11","11am","11 am","morning","second","the second","tomorrow","2","2:30","230","2 30","afternoon","first","the first","either","whatever"]

    const INTENTS: Intent[] = [
      { id:"capabilities", keys:["what can you do","what do you do","what can you help","what can you help with","what can i ask","what can you handle","what are you capable","everything you can do","what else can you do","what can you do for me","how can you help","what all can you do","what can you do for my business","what are you able"], reply:["I answer calls and texts 24/7, book and reschedule appointments, fill last-minute cancellations from your waitlist, send reminders, answer questions like hours and pricing, and reply to reviews, in your business's own voice. Want to try booking a time with me?"], offer:"times" },
      { id:"complaint", keys:["complaint","complain","unhappy","disappointed","refund","bad experience","terrible","awful","upset","issue with","problem with","not happy","worst","rude","was late"], reply:["I'm really sorry to hear that, that's not the experience we want you to have. I'm flagging this to the team right now so a real person can make it right. What's the best number to reach you on?"], offer:"callback" },
      { id:"cancel", keys:["cancel","reschedule","move my","change my","push back","cant make","can't make","running late","rebook my","need to change my"], reply:["No problem at all. What's your name and the day you're booked? I'll move it, and offer your old slot to the waitlist so it doesn't go to waste."], offer:null },
      { id:"cancelpolicy", keys:["cancellation policy","cancel policy","cancellation fee","fee for cancel","charge for cancel","late fee","no show fee","no-show fee","if i cancel"], reply:["No scary fine print, just give as much notice as you can, and I'll offer your spot to someone on the waitlist so nobody loses out. Need to change a booking you already have?"], offer:null },
      { id:"price", keys:["price","prices","pricing","cost","costs","how much","how much is","rate","rates","fee","fees","charge","charges","expensive","quote","cheap","affordable","budget","$"], reply:["Most visits run about $45–$120 depending on what you need. Want me to text over the full price list?"], offer:"pricelist" },
      { id:"hours", keys:["hours","open","opens","opening hours","close","closes","closing","closed","what time","when are you","still open","open today","open now","open sunday","open monday","open late","what days","holiday","holidays"], reply:["We're open Mon–Fri 9–7 and Sat 10–5, and I'm here 24/7 to take messages and bookings. Want me to grab you a time?"], offer:"times" },
      { id:"services", keys:["service","services","offer","offers","do you do","what do you","what services","menu","options","provide","treatments","do you sell"], reply:["We cover the works! Tell me what you're after and I'll point you to the right option, or I can text you the full menu."], offer:"menu" },
      { id:"walkin", keys:["walk in","walk-in","walkin","walk ins","no appointment","just show up","drop in","drop-in"], reply:["Walk-ins are welcome when we're quiet, but a quick booking guarantees your spot. Want me to lock one in?"], offer:"times" },
      { id:"location", keys:["where","address","located","location","directions","parking","find you","what area","get there","near you","close to"], reply:["We're in downtown Vancouver, BC, with parking right out back. Want me to text you directions?"], offer:"directions" },
      { id:"payment", keys:["pay","payment","card","credit card","debit","cash","etransfer","e-transfer","do you take","tap","visa","mastercard","how do i pay","deposit"], reply:["Easy, most folks pay by card, tap, or cash with the business directly. If a deposit's ever needed to hold a spot, I'll tell you up front when I book you. Want me to find you a time?"], offer:"times" },
      { id:"reminder", keys:["reminder","remind me","confirmation","will i get","do you remind","did it go through","is my booking","am i booked","get a text","send me a"], reply:["Yep, the moment you're booked I send a confirmation, then a friendly reminder before your appointment so it never slips. Want me to book you in now?"], offer:"times" },
      { id:"callme", keys:["call me","give me a call","phone me","your number","phone number","can you call","ring me"], reply:["Of course, want someone from the team to give you a quick call back?"], offer:"callback" },
      { id:"languages", keys:["speak french","speak spanish","speak punjabi","speak mandarin","speak cantonese","other language","other languages","do you speak","another language","en francais","habla espanol","translate"], reply:["I chat in clear, friendly English here, and the team can set me up to handle the other languages your customers speak too, Vancouver's wonderfully multilingual. How can I help?"], offer:null },
      { id:"urgent", keys:["urgent","emergency","asap","right now","as soon as","soonest","first available","earliest","need someone now","same day","today please"], reply:["Let's get you in fast. The soonest I've got is tomorrow at 2:30 PM, or Saturday at 11 AM, want me to grab the earliest one?"], offer:"times" },
      { id:"group", keys:["group","large party","big group","for a group","party of","table for","group booking","bridal","for my team","corporate","bunch of us","few of us"], reply:["Love a group booking! Tell me roughly how many people and your preferred day, and I'll line it up, for bigger events I'll loop in the team so it's perfect. Want to start with a date?"], offer:"times" },
      { id:"giftcard", keys:["gift card","gift cards","giftcard","giftcards","gift certificate","voucher","as a gift"], reply:["The team can set up a gift card for you. Want someone to give you a quick call to sort it out?"], offer:"callback" },
      { id:"accommodate", keys:["wheelchair","accessible","accessibility","kids","children","family friendly","bring my dog","pets","allergy","allergies","vegan","vegetarian","gluten"], reply:["Great question, I'll add that to your booking and flag anything the team should prep for. Want me to find you a time and pop the details on?"], offer:"times" },
      { id:"firsttime", keys:["first time","new customer","new here","never been","im new","i'm new","first visit","new patient","new client"], reply:["Welcome. First visits are easy, I'll get you set up and send everything you need beforehand. Want me to find you a time?"], offer:"times" },
      { id:"human", keys:["real person","human","robot","bot","a person","speak to someone","talk to someone","real human","are you a","is this a","automated","machine","are you ai"], reply:["Good question, I'm Janice, an AI employee from Pacific Edge AI. I handle the calls and texts so a real person never misses one, and I pass anything tricky straight to the team. How can I help?"], offer:null },
      { id:"howworks", keys:["how does this work","how do you work","what is this","how it works"], reply:["I'm an AI employee, I answer calls and texts 24/7, book appointments, fill cancellations, and reply to reviews, all in your business's own voice. Go on, try asking me to book a time!"], offer:null },
      { id:"getjanice", keys:["my business","for my","sign up","get janice","want this","interested in this","how do i get","hire you","use you for","our shop","our store","our restaurant","my shop","my store","my company"], reply:["The Pacific Edge team can set me up for your business, usually live within about a week. Tap “Book a Free 15-Min Demo” up top and they'll walk you through it."], offer:null },
      { id:"compliment", keys:["love this","you are great","youre great","you are awesome","amazing","so cool","impressive","you are helpful","best bot","love it","this is great","so helpful","well done","you are smart"], reply:["Thanks. I'm here 24/7, want me to book you in or help with anything else?"], offer:null },
      { id:"thanks", keys:["thanks","thank you","thank","ty","cheers","appreciate"], reply:["Anytime. I'm here 24/7 if you need anything else."], offer:null },
      { id:"greeting", keys:["hi","hello","hey","heya","yo","sup","howdy","good morning","good afternoon","good evening","greetings","hiya"], reply:["Hi there. I can check hours, share pricing, or get you booked in. What do you need?"], offer:null },
      { id:"bye", keys:["bye","goodbye","see ya","see you","later","gotta go","that is all","thats all","nothing else","im done","i'm done"], reply:["Take care. I'm here 24/7 whenever you need me, just text anytime."], offer:null },
      { id:"book", keys:["book","booking","appointment","appointments","appt","reserve","reservation","schedule","availability","available","slot","slots","opening","openings","table","spot","come in","fit me in","squeeze me in","any openings","do you have anything","this week","next week","weekend","sunday","monday","tuesday","wednesday","thursday","friday"], reply:["Happy to help! I've got tomorrow at 2:30 PM or Saturday at 11 AM open. Which works better?","Of course, I've got a couple of openings: tomorrow at 2:30 PM or Saturday at 11 AM. Which suits you?"], offer:"times" },
    ]
    const FALLBACK = [
      "I want to get that right for you, let me loop in the team and someone will follow up. In the meantime I can book you in, check hours, or share pricing. What would help most?",
      "That one's better for a human on our team, I'll pass it along so they can help. Meanwhile, want me to book you a time or answer the basics?",
    ]
    const QUESTION: Record<string, number> = { capabilities:1,complaint:1,cancel:1,cancelpolicy:1,price:1,hours:1,services:1,walkin:1,location:1,payment:1,reminder:1,callme:1,languages:1,urgent:1,group:1,giftcard:1,accommodate:1,firsttime:1,human:1,howworks:1,getjanice:1 }

    const norm = (s: string) => " " + s.toLowerCase().replace(/[^a-z0-9$:'\s]/g, " ").replace(/\s+/g, " ") + " "
    const hit = (t: string, words: string[]) => {
      for (let i = 0; i < words.length; i++) {
        if (t.indexOf(" " + words[i] + " ") >= 0) return true
      }
      return false
    }
    const vary = (arr: string[], id: string) => {
      const i = (rot[id] || 0) % arr.length
      rot[id] = (rot[id] || 0) + 1
      return arr[i]
    }
    const bookReply = (t: string) => {
      const sat = hit(t, ["saturday","sat","11","11am","11 am","morning","second","the second"])
      const when = sat ? "Saturday at 11 AM" : "tomorrow at 2:30 PM"
      return { text: "You're booked for " + when + ". I'll text a reminder beforehand. Anything else?", badge: "Booked in seconds, even after hours. Reminder scheduled." as string | undefined }
    }
    const asksQuestion = (t: string) => {
      for (let i = 0; i < INTENTS.length; i++) if (QUESTION[INTENTS[i].id] && hit(t, INTENTS[i].keys)) return true
      return false
    }

    const pick = (text: string): { text: string; badge?: string } => {
      const t = norm(text)
      if (hit(t, DECLINE)) { ctx.offer = null; return { text: vary(["No problem, I'm here 24/7 whenever you're ready.","All good, just text me anytime you'd like to book or have a question."], "dec") } }
      if (hit(t, ["book it","lock it in","book me in","just book it","book me"])) { ctx.offer = null; return bookReply(t) }
      if ((hit(t, AFFIRM) || hit(t, PICK)) && !asksQuestion(t)) {
        if (ctx.offer === "times") { ctx.offer = null; return bookReply(t) }
        if (ctx.offer === "pricelist") { ctx.offer = "times"; return { text: "Done, I've sent the full price list to your phone. 📄 Want me to get you booked in too?" } }
        if (ctx.offer === "menu") { ctx.offer = "times"; return { text: "Sent! 📋 The full menu's on its way to your phone. Want me to book you a time?" } }
        if (ctx.offer === "directions") { ctx.offer = null; return { text: "On their way! 📍 Directions are headed to your phone. Anything else I can do?" } }
        if (ctx.offer === "callback") { ctx.offer = null; return { text: "Perfect, someone from the team will give you a quick call shortly. 📞" } }
        ctx.offer = "times"; return { text: "Happy to! I've got tomorrow at 2:30 PM or Saturday at 11 AM open, which works better?" }
      }
      let best: Intent | null = null, bestScore = 0
      for (let i = 0; i < INTENTS.length; i++) {
        const it = INTENTS[i]; let score = 0
        for (let k = 0; k < it.keys.length; k++) {
          const key = it.keys[k]
          if (key.indexOf(" ") >= 0) { if (t.indexOf(" " + key + " ") >= 0) score += 2 } else if (t.indexOf(" " + key + " ") >= 0) score += 1
        }
        if (score > bestScore) { bestScore = score; best = it }
      }
      if (best) { ctx.offer = best.offer; return { text: vary(best.reply, best.id) } }
      ctx.offer = null
      return { text: vary(FALLBACK, "fb") }
    }

    const scrollDown = () => { chat.scrollTop = chat.scrollHeight }
    const bubble = (text: string, who: string) => {
      const b = document.createElement("div")
      b.className = "bubble " + who
      b.textContent = text
      chat.appendChild(b)
      requestAnimationFrame(() => { b.classList.add("in"); scrollDown() })
    }
    const badge = (text: string) => {
      const w = document.createElement("div"); w.className = "chat-badge"
      const i = document.createElement("span"); i.className = "chat-badge-ico"; i.textContent = "✅"
      const s = document.createElement("span"); s.textContent = text
      w.appendChild(i); w.appendChild(s); chat.appendChild(w)
      requestAnimationFrame(() => { w.classList.add("in"); scrollDown() })
    }
    const typing = () => {
      const t = document.createElement("div"); t.className = "typing"
      t.innerHTML = "<i></i><i></i><i></i>"
      chat.appendChild(t)
      requestAnimationFrame(() => { t.classList.add("in"); scrollDown() })
      return t
    }

    let busy = false
    const janice = (userText: string) => {
      const r = pick(userText)
      try { (window as any).peLogJanice?.(userText, r.text) } catch {}
      const t = typing()
      const delay = Math.min(2200, Math.max(750, 480 + r.text.length * 15))
      setTimeout(() => {
        if (t.parentNode) t.parentNode.removeChild(t)
        bubble(r.text, "them")
        if (r.badge) setTimeout(() => badge(r.badge as string), 450)
        busy = false
      }, delay)
    }
    const send = (text: string) => {
      text = (text || "").trim()
      if (!text || busy) return
      busy = true
      bubble(text, "me")
      janice(text)
    }

    const onSubmit = (e: Event) => { e.preventDefault(); send(input.value); input.value = ""; input.focus() }
    const onChip = (e: Event) => {
      const c = (e.target as HTMLElement).closest(".je-chip") as HTMLElement | null
      if (!c) return
      send(c.getAttribute("data-msg") || c.textContent || "")
    }
    form.addEventListener("submit", onSubmit)
    chips.addEventListener("click", onChip)

    let greeted = false
    const greet = () => {
      if (greeted) return
      greeted = true
      const t = typing()
      setTimeout(() => {
        if (t.parentNode) t.parentNode.removeChild(t)
        bubble("Hi, I'm Janice, the AI employee from Pacific Edge AI. I answer calls and texts for local businesses 24/7. Go ahead, text me like you're one of your customers.", "them")
      }, 900)
    }
    const io = new IntersectionObserver((ents) => {
      for (let i = 0; i < ents.length; i++) if (ents[i].isIntersecting) { greet(); io.disconnect(); break }
    }, { threshold: 0.35 })
    io.observe(chat)

    return () => {
      form.removeEventListener("submit", onSubmit)
      chips.removeEventListener("click", onChip)
      io.disconnect()
    }
  }, [])

  return null
}
