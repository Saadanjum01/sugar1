'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white text-[#1E2749] shadow-lg">
      <div className="bg-[#B33951] text-white">
        <div className="mx-auto px-4 sm:px-8 lg:px-16 py-1.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-0.5 text-[11px] sm:text-xs font-bold tracking-wide text-center">
          <span>TUE&ndash;FRI, 9:30 AM&ndash;6:00 PM</span>
          <span className="hidden sm:inline opacity-60">&bull;</span>
          <a href="tel:281-916-2020" className="hover:underline">281-916-2020</a>
        </div>
      </div>
      <div className="mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* The nav bar is white so this navy-on-white lockup sits on its own
              native background at full size -- no containing box needed. */}
          <Link href="/" className="flex items-center shrink-0 py-2" aria-label="Sugar Land Vision Center — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="Sugar Land Vision Center"
              className="h-11 sm:h-14 lg:h-16 w-auto object-contain"
            />
          </Link>
          
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            <Link href="/" className="text-sm font-medium text-[#1E2749] hover:text-[#B33951] transition-colors">HOME</Link>
            <Link href="/services" className="text-sm font-medium text-[#1E2749] hover:text-[#B33951] transition-colors">SERVICES</Link>
            <Link href="/doctor" className="text-sm font-medium text-[#1E2749] hover:text-[#B33951] transition-colors">TEAM</Link>
            <Link href="/insurance" className="text-sm font-medium text-[#1E2749] hover:text-[#B33951] transition-colors">INSURANCE</Link>
            <Link href="/frames" className="text-sm font-medium text-[#1E2749] hover:text-[#B33951] transition-colors">FRAMES</Link>
            <Link href="/blog" className="text-sm font-medium text-[#1E2749] hover:text-[#B33951] transition-colors">BLOG</Link>
            <Link href="/contact" className="text-sm font-medium text-[#1E2749] hover:text-[#B33951] transition-colors">CONTACT</Link>
          </div>

          <a href="/book" className="hidden lg:block px-8 py-3 bg-[#B33951] text-white text-sm font-bold hover:bg-[#1E2749] transition-all rounded-xl">
            BOOK NOW
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5 flex-shrink-0"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <>
                <span className="w-6 h-0.5 bg-[#1E2749]"></span>
                <span className="w-6 h-0.5 bg-[#1E2749]"></span>
                <span className="w-6 h-0.5 bg-[#1E2749]"></span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#1E2749]/10">
          <div className="px-6 py-6 space-y-4">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#1E2749] hover:text-[#B33951] transition-colors">HOME</Link>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#1E2749] hover:text-[#B33951] transition-colors">SERVICES</Link>
            <Link href="/doctor" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#1E2749] hover:text-[#B33951] transition-colors">TEAM</Link>
            <Link href="/insurance" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#1E2749] hover:text-[#B33951] transition-colors">INSURANCE</Link>
            <Link href="/frames" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#1E2749] hover:text-[#B33951] transition-colors">FRAMES</Link>
            <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#1E2749] hover:text-[#B33951] transition-colors">BLOG</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-[#1E2749] hover:text-[#B33951] transition-colors">CONTACT</Link>
            <a href="/book" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center px-8 py-3 bg-[#B33951] text-white text-sm font-bold mt-4 rounded-xl">
              BOOK NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
