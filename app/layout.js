import './globals.css'
import { Roboto } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import NewsletterPopup from '@/components/NewsletterPopup'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'swap'
})

export const metadata = {
  title: 'Sugar Land Vision — Premium Eye Care',
  description: 'Advanced eye care for the modern patient. Expert optometry in Sugar Land, Texas.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="font-roboto antialiased bg-white">
        <Header />
        <main className="pt-32 sm:pt-28">
          {children}
        </main>
        <Footer />
        
        <a href="/book" className="fixed bottom-8 right-8 z-50 flex items-center gap-2 h-14 pl-4 pr-5 bg-[#B33951] text-white hover:bg-[#1E2749] transition-all shadow-2xl rounded-full group" aria-label="Book appointment">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
            <rect x="3" y="5" width="18" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
            <path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="text-sm font-bold tracking-wide">Book</span>
        </a>

        <ChatWidget />
        <NewsletterPopup />
      </body>
    </html>
  )
}
