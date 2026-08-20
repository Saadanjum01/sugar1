'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const transparent = isHome && !scrolled

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? 'bg-transparent border-b border-transparent'
          : 'bg-white/96 backdrop-blur-sm border-b border-[#E7EBEA] shadow-sm'
      }`}
    >
      {/* Utility bar — only visible when header is solid */}
      {!transparent && (
        <div className="bg-[#0D5D62] text-white">
          <div className="mx-auto px-4 sm:px-8 lg:px-16 py-1.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-0.5 text-[11px] sm:text-xs font-semibold tracking-wide text-center">
            <span>TUE&ndash;FRI &nbsp;9:30 AM&ndash;6:00 PM</span>
            <span className="hidden sm:inline opacity-40">&bull;</span>
            <a href="tel:281-916-2020" className="hover:text-[#37B2B8] transition-colors">281-916-2020</a>
            <span className="hidden sm:inline opacity-40">&bull;</span>
            <span className="hidden sm:inline">16126 Southwest Fwy, Sugar Land</span>
          </div>
        </div>
      )}

      <div className="mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-6">

          {/* Brand wordmark — text until logo is finalised */}
          <Link
            href="/"
            className="flex items-center shrink-0 py-2"
            aria-label="First Colony Vision — home"
          >
            <div className="flex flex-col leading-none select-none">
              <span
                className="font-display font-semibold text-[16px] sm:text-[18px] transition-colors duration-300"
                style={{ letterSpacing: '-0.02em', color: transparent ? 'white' : '#0D5D62' }}
              >
                First Colony
              </span>
              <span
                className="text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] transition-colors duration-300"
                style={{ color: transparent ? 'rgba(255,255,255,0.7)' : '#37B2B8' }}
              >
                VISION
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div
            className={`hidden lg:flex items-center gap-6 xl:gap-8 text-[14px] font-medium transition-colors ${
              transparent ? 'text-white' : 'text-[#093F42]'
            }`}
          >
            <Link href="/" className="hover:opacity-75 transition-opacity">Home</Link>
            <Link href="/#services" className="hover:opacity-75 transition-opacity">Services</Link>
            <Link href="/#first-visit" className="hover:opacity-75 transition-opacity">First Visit</Link>
            <Link href="/doctor" className="hover:opacity-75 transition-opacity">Our Team</Link>
            <Link href="/frames" className="hover:opacity-75 transition-opacity">Frames</Link>
            <Link href="/insurance" className="hover:opacity-75 transition-opacity">Insurance</Link>
            <Link href="/#faq" className="hover:opacity-75 transition-opacity">FAQ</Link>
            <Link href="/book" className="hover:opacity-75 transition-opacity">Visit Us</Link>
          </div>

          {/* Book button */}
          <a
            href="/book"
            className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors shrink-0 ${
              transparent
                ? 'bg-white text-[#093F42] hover:bg-white/90'
                : 'bg-[#0D5D62] text-white hover:bg-[#093F42]'
            }`}
          >
            Book Appointment
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className={`lg:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 shrink-0 ${
              transparent ? 'text-white' : 'text-[#093F42]'
            }`}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <>
                <span className="w-6 h-0.5 bg-current" />
                <span className="w-6 h-0.5 bg-current" />
                <span className="w-6 h-0.5 bg-current" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E7EBEA]">
          <div className="px-6 py-6 space-y-4">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#093F42] hover:text-[#37B2B8] transition-colors">Home</Link>
            <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#093F42] hover:text-[#37B2B8] transition-colors">Services</Link>
            <Link href="/#first-visit" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#093F42] hover:text-[#37B2B8] transition-colors">First Visit</Link>
            <Link href="/doctor" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#093F42] hover:text-[#37B2B8] transition-colors">Our Team</Link>
            <Link href="/frames" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#093F42] hover:text-[#37B2B8] transition-colors">Frames</Link>
            <Link href="/insurance" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#093F42] hover:text-[#37B2B8] transition-colors">Insurance</Link>
            <Link href="/#faq" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#093F42] hover:text-[#37B2B8] transition-colors">FAQ</Link>
            <Link href="/book" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#093F42] hover:text-[#37B2B8] transition-colors">Visit Us</Link>
            <a
              href="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-8 py-3 bg-[#0D5D62] text-white text-sm font-semibold mt-4 rounded-xl hover:bg-[#093F42] transition-colors"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
