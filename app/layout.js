import './globals.css'
import { DM_Sans, Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import NewsletterPopup from '@/components/NewsletterPopup'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://www.firstcolonyvision.com'),
  title: 'First Colony Vision | Family Eye Care in Sugar Land, TX',
  description: 'Comprehensive, family-friendly eye care in Sugar Land, Texas. Routine exams, diabetic eye care, specialty contacts, and pediatric vision — guided by Dr. Shiroz Virani, O.D.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/images/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/images/apple-touch-icon.png',
  },
  openGraph: {
    title: 'First Colony Vision | Family Eye Care in Sugar Land, TX',
    description: 'Comprehensive, family-friendly eye care in Sugar Land, Texas.',
    images: ['/images/logo.png'],
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable}`}>
      <body className="font-inter antialiased bg-white">
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
        <NewsletterPopup />
      </body>
    </html>
  )
}
