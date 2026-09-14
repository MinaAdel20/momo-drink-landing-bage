"use client"

import { FormEvent, useEffect, useState } from "react"
import { X } from "lucide-react"

type ModalTopic = "discount" | "events" | "partners" | "quote" | "sponsor"

const topicCopy: Record<Exclude<ModalTopic, "discount">, { title: string; description: string }> = {
  events: { title: "Find Mo Mo Events", description: "Catch the next Blue Berry tasting near you." },
  partners: { title: "Partner With Mo Mo", description: "Bring clean energy to your gym or studio community." },
  quote: { title: "Get a Mo Mo Quote", description: "Tell us what your workplace needs and we will follow up." },
  sponsor: { title: "Sponsor an Event", description: "Power your next event with Mo Mo energy." },
}

export function InteractionModal({ topic, onClose }: { topic: ModalTopic | null; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    setSubmitted(false)
    setEmail("")
  }, [topic])

  useEffect(() => {
    if (!topic) return
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && onClose()
    document.addEventListener("keydown", onKeyDown)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
  }, [topic, onClose])

  if (!topic) return null

  const isDiscount = topic === "discount"
  const copy = isDiscount ? { title: "Claim 25% off", description: "Join the Mo Mo drop list for your exclusive code." } : topicCopy[topic]
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B132B]/80 p-4 backdrop-blur-sm" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div role="dialog" aria-modal="true" aria-labelledby="momo-modal-title" className="w-full max-w-md rounded-3xl border border-[#00D2FF]/40 bg-background p-6 text-foreground shadow-[0_0_60px_rgba(0,210,255,0.25)]">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#00D2FF]">Mo Mo energy</p>
            <h2 id="momo-modal-title" className="mt-2 text-2xl font-black tracking-tight">{copy.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{copy.description}</p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close dialog" className="rounded-full border border-border p-2 text-foreground hover:border-[#00D2FF] hover:text-[#00D2FF]"><X className="h-4 w-4" /></button>
        </div>
        {submitted ? (
          <div className="mt-6 rounded-2xl border border-[#00D2FF]/40 bg-[#00D2FF]/10 p-5 text-center">
            <p className="font-bold text-[#00D2FF]">{isDiscount ? "Code MOMO25 Applied Successfully!" : "Thank you for reaching out!"}</p>
            <button type="button" onClick={onClose} className="mt-4 text-sm font-bold text-foreground underline decoration-[#00D2FF] underline-offset-4">Close</button>
          </div>
        ) : topic === "events" ? (
          <div className="mt-6 space-y-3">
            {["Brooklyn · Sep 21 · 2–6 PM", "Austin · Oct 04 · 12–4 PM", "Los Angeles · Oct 18 · 3–7 PM"].map((event) => <div key={event} className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground">{event}</div>)}
            <button type="button" onClick={onClose} className="mt-2 w-full rounded-full bg-[#00D2FF] px-5 py-3 font-bold text-[#0B132B]">Got it</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-3">
            <label htmlFor="momo-email" className="sr-only">Email address</label>
            <input id="momo-email" required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" className="w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground outline-none placeholder:text-muted-foreground focus:border-[#00D2FF]" />
            <button type="submit" className="w-full rounded-full bg-[#00D2FF] px-5 py-3 font-bold text-[#0B132B] hover:brightness-105">{isDiscount ? "Claim Discount" : "Send Request"}</button>
          </form>
        )}
      </div>
    </div>
  )
}
