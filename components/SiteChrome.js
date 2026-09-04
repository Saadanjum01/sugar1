'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import NewsletterPopup from '@/components/NewsletterPopup'
import WelcomePopup from '@/components/WelcomePopup'

// Routes that render as standalone documents (printable forms, etc.) instead
// of a normal marketing page -- skip the nav/footer/floating widgets so
// nothing but the document itself shows on screen or in a print preview.
const BARE_ROUTES = ['/referrals']

export default function SiteChrome({ children }) {
  const pathname = usePathname()
  const bare = BARE_ROUTES.includes(pathname)

  if (bare) {
    return <main>{children}</main>
  }

  return (
    <>
      <Header />
      <main className="pt-32 sm:pt-28">
        {children}
      </main>
      <Footer />

      <a href="/book#appointment-form" className="fixed bottom-8 right-8 z-50 flex items-center gap-2 h-14 pl-4 pr-5 bg-[#0D5D62] text-white hover:bg-[#093F42] transition-all shadow-2xl rounded-full" aria-label="Book appointment">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
          <rect x="3" y="5" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
          <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="text-sm font-semibold tracking-wide">Book</span>
      </a>

      <ChatWidget />
      <WelcomePopup />
      <NewsletterPopup />
    </>
  )
}
