'use client'

import { useState, useEffect } from 'react'

const STORAGE_KEY = 'fcv-welcome-dismissed'
const DELAY_MS = 1200
const EXPIRES_AT = new Date('2026-09-30T23:59:59-05:00')

export default function WelcomePopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (Date.now() > EXPIRES_AT.getTime()) return
    if (localStorage.getItem(STORAGE_KEY)) return

    const timer = setTimeout(() => setOpen(true), DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  function dismiss() {
    setOpen(false)
    localStorage.setItem(STORAGE_KEY, '1')
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/50" onClick={dismiss} />
      <div
        className="relative w-full max-w-md rounded-2xl overflow-hidden text-center"
        style={{ boxShadow: '0 40px 80px -20px rgba(6,38,40,.5)' }}
      >
        {/* Graphic header */}
        <div
          className="relative px-8 pt-10 pb-14"
          style={{ background: 'linear-gradient(120deg, #062931 0%, #083438 42%, #0D5D62 70%, #37B2B8 100%)' }}
        >
          <svg
            className="absolute top-[-60px] right-[-60px] w-[220px] h-[220px] opacity-40 pointer-events-none"
            viewBox="0 0 200 200" fill="none" aria-hidden="true"
          >
            <circle cx="100" cy="100" r="96" stroke="white" strokeWidth="1" strokeOpacity=".5" />
            <circle cx="100" cy="100" r="72" stroke="white" strokeWidth="1" strokeOpacity=".5" />
            <circle cx="100" cy="100" r="48" stroke="#E2895B" strokeWidth="1.4" />
          </svg>
          <button
            onClick={dismiss}
            aria-label="Close"
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:bg-white/10 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>

          <div className="relative z-10 flex flex-col items-center">
            <img src="/images/logo-mark-white.png" alt="First Colony Vision" className="h-8 sm:h-9 w-auto mb-6" />
            <h2 className="font-display text-[26px] sm:text-[28px] text-white" style={{ letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Welcome Today&apos;s Vision clients to the First Colony Vision family
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="bg-white px-8 pt-7 pb-8">
          <p className="text-[#6E7C77] text-[15px] leading-relaxed mb-6">
            You&apos;re in the right place. Your care continues here, with the same team you know.
          </p>
          <button
            onClick={dismiss}
            className="w-full py-3.5 bg-[#0D5D62] text-white font-semibold text-sm rounded-xl hover:bg-[#093F42] transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}
