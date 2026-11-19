'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRemaining, split, YEAR } from '@/components/CountdownBanner'

const DELAY_MS = 1200

// "Use It or Lose It" offer. Mounted only on the homepage (app/page.js).
// Deliberately no localStorage/IP gating: it opens on every homepage visit.
export default function OfferPopup() {
  const [open, setOpen] = useState(false)
  const ms = useRemaining()

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Hidden before mount, after dismissal, and once the campaign has ended.
  if (!open || ms === null || ms === 0) return null

  const { d, h, m, s, label } = split(ms)
  const close = () => setOpen(false)

  return (
    <div data-offer-popup className="fixed inset-0 z-[60] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/50" onClick={close} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="offer-popup-title"
        className="relative w-full max-w-md rounded-2xl overflow-hidden text-center"
        style={{ boxShadow: '0 40px 80px -20px rgba(6,38,40,.5)' }}
      >
        <div
          className="relative px-6 sm:px-8 pt-10 pb-8"
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
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:bg-white/10 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>

          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5 text-[13px] font-semibold text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E2895B]" aria-hidden="true" />
              Use It or Lose It
            </div>
            <h2
              id="offer-popup-title"
              className="font-display text-[26px] sm:text-[30px] text-white mb-6"
              style={{ letterSpacing: '-0.02em', lineHeight: 1.15 }}
            >
              Your {YEAR} vision benefits expire soon
            </h2>
            <div role="timer" aria-label={label} className="grid grid-cols-4 gap-2 w-full">
              {[[d, 'Days'], [h, 'Hours'], [m, 'Min'], [s, 'Sec']].map(([value, unit]) => (
                <div key={unit} className="bg-white/10 border border-white/15 rounded-xl py-3 sm:py-4" aria-hidden="true">
                  <div className="font-display font-semibold text-[28px] sm:text-[34px] leading-none text-white tabular-nums">{value}</div>
                  <div className="mt-1.5 text-[10.5px] sm:text-[11.5px] font-semibold uppercase tracking-wider text-white/70">{unit}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white px-6 sm:px-8 pt-6 pb-7">
          <p className="text-[#6E7C77] text-[15px] leading-relaxed mb-6">
            Many vision plans reset on January 1, and unused benefits and FSA dollars often don&apos;t roll over.
            Book your exam or pick out new glasses while this year&apos;s benefits still count.
          </p>
          <Link
            href="/book"
            onClick={close}
            autoFocus
            className="block w-full py-3.5 bg-[#0D5D62] text-white font-semibold text-[15px] rounded-xl hover:bg-[#093F42] transition-colors"
          >
            Book your exam &rarr;
          </Link>
          <button onClick={close} className="mt-3 text-[13.5px] font-medium text-[#6E7C77] hover:text-[#0D5D62] transition-colors">
            Maybe later
          </button>
        </div>
      </div>
    </div>
  )
}
