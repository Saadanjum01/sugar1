import './globals.css'
import { DM_Sans, Inter } from 'next/font/google'
import SiteChrome from '@/components/SiteChrome'

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
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  )
}
