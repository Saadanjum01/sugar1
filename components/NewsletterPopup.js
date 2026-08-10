'use client'

import { useState, useEffect } from 'react'

const STORAGE_KEY = 'slv-newsletter-dismissed'
const DELAY_MS = 6000

export default function NewsletterPopup() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (localStorage.getItem(STORAGE_KEY)) return

    const timer = setTimeout(() => setOpen(true), DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  function dismiss() {
    setOpen(false)
    localStorage.setItem(STORAGE_KEY, '1')
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim()) return
    // TODO: wire up to real storage once confirmed -- currently UI only.
    setSubmitted(true)
    localStorage.setItem(STORAGE_KEY, '1')
    setTimeout(dismiss, 1800)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/50" onClick={dismiss} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 text-center">
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-[#59607A] hover:bg-[#F6F6F8] transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        </button>

        {submitted ? (
          <div className="py-6">
            <div className="w-14 h-14 rounded-full bg-[#1E2749]/10 flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#1E2749" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <h3 className="font-display text-xl font-black text-[#1E2749] mb-1">You&apos;re subscribed!</h3>
            <p className="text-[#59607A] text-sm">Thanks for joining the Sugar Land Vision list.</p>
          </div>
        ) : (
          <>
            <div className="text-[#B33951] text-xs font-bold mb-3 tracking-widest">STAY IN TOUCH</div>
            <h3 className="font-display text-2xl font-black text-[#1E2749] mb-3">Join our newsletter</h3>
            <p className="text-[#59607A] text-sm leading-relaxed mb-6">
              Eye health tips, seasonal reminders, and news from Sugar Land Vision — straight to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-[#1E2749]/15 text-sm text-[#1E2749] focus:outline-none focus:border-[#B33951] transition-colors"
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#B33951] text-white font-bold text-sm rounded-xl hover:bg-[#1E2749] transition-all"
              >
                SUBSCRIBE
              </button>
            </form>
            <button onClick={dismiss} className="text-[#59607A] text-xs mt-4 hover:text-[#1E2749] transition-colors">
              No thanks
            </button>
          </>
        )}
      </div>
    </div>
  )
}
