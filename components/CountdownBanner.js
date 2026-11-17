'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

// "Use It or Lose It" campaign deadline (Central time). Change this one value
// for next year's campaign; the year in the copy is read from it.
export const DEADLINE = '2026-12-31T23:59:59-06:00'

const END = Date.parse(DEADLINE)
const YEAR = DEADLINE.slice(0, 4)

// ms remaining, or null until mounted, so the server render and the first
// client render match (both show "--").
function useRemaining() {
  const [ms, setMs] = useState(null)
  useEffect(() => {
    const tick = () => {
      const left = Math.max(0, END - Date.now())
      setMs(left)
      if (left === 0) clearInterval(id)
    }
    const id = setInterval(tick, 1000)
    tick()
    return () => clearInterval(id)
  }, [])
  return ms
}

function split(ms) {
  if (ms === null) return { d: '--', h: '--', m: '--', s: '--', label: 'Time remaining until benefits reset' }
  const t = Math.floor(ms / 1000)
  const d = Math.floor(t / 86400)
  const pad = (n) => String(n).padStart(2, '0')
  const h = pad(Math.floor(t / 3600) % 24)
  const m = pad(Math.floor(t / 60) % 60)
  const s = pad(t % 60)
  return { d: String(d), h, m, s, label: `${d} days, ${h} hours, ${m} minutes until your ${YEAR} benefits reset` }
}

const Dot = () => <span className="w-1.5 h-1.5 rounded-full bg-[#E2895B] shrink-0" aria-hidden="true" />

// Variants:
//   bar     - slim h-9 (36px) link bar at the top of the fixed Header
//   spacer  - h-9 block at the top of <main>, offsets the bar; disappears with it
//   compact - inline pill (book page)
//   section - homepage section with day/hour/minute/second tiles
export default function CountdownBanner({ variant = 'bar', className = '' }) {
  const ms = useRemaining()
  if (ms === 0) return null
  if (variant === 'spacer') return <div aria-hidden="true" className="h-9" />

  const { d, h, m, s, label } = split(ms)
  const inline = (
    <span role="timer" aria-label={label} className="tabular-nums">
      {d}d {h}h {m}m {s}s
    </span>
  )

  if (variant === 'bar') {
    return (
      <Link href="/book" className={`block h-9 bg-[#093F42] text-white hover:bg-[#062931] transition-colors ${className}`}>
        <span className="h-full mx-auto px-4 flex items-center justify-center gap-2 text-[12px] md:text-[13px] font-semibold whitespace-nowrap overflow-hidden">
          <Dot />
          <span>
            Use It or Lose It<span className="md:hidden">:</span>
            <span className="hidden md:inline font-medium"> &middot; Your {YEAR} vision benefits expire in</span>
          </span>
          <span className="text-[#37B2B8]">{inline}</span>
          <span className="opacity-40" aria-hidden="true">&middot;</span>
          <span className="underline underline-offset-2 decoration-white/40">
            Book<span className="hidden md:inline"> now</span> &rarr;
          </span>
        </span>
      </Link>
    )
  }

  if (variant === 'compact') {
    return (
      <Link
        href="/book#appointment-form"
        className={`inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-xl bg-white border border-[#E7EBEA] px-4 py-2.5 text-[13.5px] text-[#093F42] hover:border-[#37B2B8] transition-colors ${className}`}
      >
        <Dot />
        <span className="font-semibold">Use It or Lose It:</span>
        <span className="text-[#6E7C77]">your {YEAR} benefits reset in</span>
        <span className="font-bold text-[#0D5D62]">{inline}</span>
      </Link>
    )
  }

  // variant === 'section'
  const tiles = [[d, 'Days'], [h, 'Hours'], [m, 'Minutes'], [s, 'Seconds']]
  return (
    <section aria-labelledby="benefits-countdown" className={`py-14 sm:py-20 bg-white ${className}`}>
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div
          className="rounded-3xl px-6 py-10 sm:px-12 sm:py-14 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 items-center"
          style={{ background: 'linear-gradient(120deg, #093F42 0%, #0D5D62 70%, #37B2B8 135%)' }}
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-5 text-[13px] font-semibold text-white">
              <Dot />
              Use It or Lose It
            </div>
            <h2
              id="benefits-countdown"
              className="font-display text-[30px] sm:text-[40px] text-white mb-4"
              style={{ letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              Use your {YEAR} benefits before they&apos;re gone
            </h2>
            <p className="text-[16px] leading-relaxed max-w-[480px] mb-7" style={{ color: 'rgba(255,255,255,0.84)' }}>
              Many vision plans reset on January 1, and unused benefits and FSA dollars often don&apos;t roll over.
              Book your exam or pick out new glasses while this year&apos;s benefits still count.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#093F42] rounded-xl text-[14.5px] font-semibold hover:opacity-90 transition-opacity"
            >
              Book your exam &rarr;
            </Link>
          </div>

          <div role="timer" aria-label={label} className="grid grid-cols-4 gap-2 sm:gap-3">
            {tiles.map(([value, unit]) => (
              <div key={unit} className="bg-white/10 border border-white/15 rounded-2xl py-4 sm:py-6 text-center" aria-hidden="true">
                <div className="font-display font-semibold text-[30px] sm:text-[44px] leading-none text-white tabular-nums" style={{ letterSpacing: '-0.02em' }}>
                  {value}
                </div>
                <div className="mt-2 text-[10px] sm:text-[12px] font-semibold uppercase tracking-wider sm:tracking-widest text-white/70">
                  {unit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
