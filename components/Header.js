'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1828] text-white shadow-lg">
      <div className="mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="font-display text-2xl lg:text-3xl tracking-wider hover:text-[#C85A3E] transition-colors">
            SUGAR LAND VISION
          </Link>
          
          <div className="hidden lg:flex items-center space-x-12">
            <Link href="/" className="text-sm font-medium hover:text-[#C85A3E] transition-colors">HOME</Link>
            <Link href="/services" className="text-sm font-medium hover:text-[#C85A3E] transition-colors">SERVICES</Link>
            <Link href="/doctor" className="text-sm font-medium hover:text-[#C85A3E] transition-colors">DOCTOR</Link>
            <Link href="/insurance" className="text-sm font-medium hover:text-[#C85A3E] transition-colors">INSURANCE</Link>
            <Link href="/frames" className="text-sm font-medium hover:text-[#C85A3E] transition-colors">FRAMES</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-[#C85A3E] transition-colors">CONTACT</Link>
          </div>

          <a href="#book" className="hidden lg:block px-8 py-3 bg-[#C85A3E] text-white text-sm font-bold hover:bg-[#D67C5F] transition-all">
            BOOK NOW
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1.5"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <>
                <span className="w-6 h-0.5 bg-white"></span>
                <span className="w-6 h-0.5 bg-white"></span>
                <span className="w-6 h-0.5 bg-white"></span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A1828] border-t border-white/10">
          <div className="px-8 py-6 space-y-4">
            <Link href="/" className="block text-sm font-medium hover:text-[#C85A3E] transition-colors">HOME</Link>
            <Link href="/services" className="block text-sm font-medium hover:text-[#C85A3E] transition-colors">SERVICES</Link>
            <Link href="/doctor" className="block text-sm font-medium hover:text-[#C85A3E] transition-colors">DOCTOR</Link>
            <Link href="/insurance" className="block text-sm font-medium hover:text-[#C85A3E] transition-colors">INSURANCE</Link>
            <Link href="/frames" className="block text-sm font-medium hover:text-[#C85A3E] transition-colors">FRAMES</Link>
            <Link href="/contact" className="block text-sm font-medium hover:text-[#C85A3E] transition-colors">CONTACT</Link>
            <a href="#book" className="block w-full text-center px-8 py-3 bg-[#C85A3E] text-white text-sm font-bold mt-4">
              BOOK NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
