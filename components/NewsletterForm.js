'use client'

import { useState } from 'react'

/**
 * Shared newsletter signup form. Used on the homepage contact card and the
 * contact page so the markup/behavior only lives in one place.
 *
 * variant="light"  -> for placing on a white/light card
 * variant="dark"   -> for placing on the navy card
 */
export default function NewsletterForm({ variant = 'light' }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim()) return
    // TODO: wire up to a real email service once one is set up -- currently UI only.
    setSubmitted(true)
  }

  const isDark = variant === 'dark'

  if (submitted) {
    return (
      <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-[#1E2749]'}`}>
        You&apos;re subscribed! Thanks for joining the list.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        required
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`w-full px-4 py-3.5 rounded-xl border text-[#1E2749] focus:outline-none focus:border-[#B33951] transition-colors ${
          isDark ? 'bg-white border-transparent' : 'bg-[#F6F6F8] border-[#1E2749]/15'
        }`}
      />
      <button
        type="submit"
        className="shrink-0 px-6 py-3.5 bg-[#B33951] text-white font-bold text-sm rounded-xl hover:bg-[#1E2749] transition-all"
      >
        SUBSCRIBE
      </button>
    </form>
  )
}
