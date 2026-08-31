'use client'

import { useState, useEffect } from 'react'

const STORAGE_KEY = 'fcv-newsletter-dismissed'
const DELAY_MS = 6000

// Mirrors WelcomePopup's own expiry/storage key -- while that campaign is
// live, wait for it to be dismissed first so the two modals never stack.
const WELCOME_STORAGE_KEY = 'fcv-welcome-dismissed'
const WELCOME_EXPIRES_AT = new Date('2026-09-30T23:59:59-05:00')
const WELCOME_CHECK_INTERVAL_MS = 500

export default function NewsletterPopup() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (localStorage.getItem(STORAGE_KEY)) return

    const welcomeStillActive = Date.now() <= WELCOME_EXPIRES_AT.getTime()

    if (!welcomeStillActive || localStorage.getItem(WELCOME_STORAGE_KEY)) {
      const timer = setTimeout(() => setOpen(true), DELAY_MS)
      return () => clearTimeout(timer)
    }

    // Welcome popup hasn't been dismissed yet -- poll until it has, then
    // start this popup's own delay from that point.
    const poll = setInterval(() => {
      if (localStorage.getItem(WELCOME_STORAGE_KEY)) {
        clearInterval(poll)
        setTimeout(() => setOpen(true), DELAY_MS)
      }
    }, WELCOME_CHECK_INTERVAL_MS)
    return () => clearInterval(poll)
  }, [])

  function dismiss() {
    setOpen(false)
    localStorage.setItem(STORAGE_KEY, '1')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim() || submitting) return

    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setSubmitted(true)
      localStorage.setItem(STORAGE_KEY, '1')
      setTimeout(dismiss, 1800)
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/50" onClick={dismiss} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 text-center">
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-[#6E7C77] hover:bg-[#FBF7F1] transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        </button>

        {submitted ? (
          <div className="py-6">
            <div className="w-14 h-14 rounded-full bg-[#E2F3F0] flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0D5D62" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <h3 className="font-display text-xl font-semibold text-[#16201E] mb-1" style={{ letterSpacing: '-0.02em' }}>You&apos;re subscribed!</h3>
            <p className="text-[#6E7C77] text-sm">Thanks for joining the First Colony Vision list.</p>
          </div>
        ) : (
          <>
            <div className="text-[#B85E31] text-xs font-bold mb-3 tracking-widest">STAY IN TOUCH</div>
            <h3 className="font-display text-2xl font-semibold text-[#16201E] mb-3" style={{ letterSpacing: '-0.02em' }}>Join our newsletter</h3>
            <p className="text-[#6E7C77] text-sm leading-relaxed mb-6">
              Eye health tips, seasonal reminders, and news from First Colony Vision — straight to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-[#16201E]/15 text-sm text-[#16201E] focus:outline-none focus:border-[#0D5D62] transition-colors"
              />
              {error && <p className="text-[13px] font-medium text-[#B33951] text-left">{error}</p>}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-[#0D5D62] text-white font-semibold text-sm rounded-xl hover:bg-[#093F42] transition-colors disabled:opacity-60"
              >
                {submitting ? 'Subscribing…' : 'Subscribe'}
              </button>
            </form>
            <button onClick={dismiss} className="text-[#6E7C77] text-xs mt-4 hover:text-[#16201E] transition-colors">
              No thanks
            </button>
          </>
        )}
      </div>
    </div>
  )
}
