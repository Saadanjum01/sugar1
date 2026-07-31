import './globals.css'
import { Roboto } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="font-roboto antialiased bg-white">
        <Header />
        <main className="pt-24">
          {children}
        </main>
        <Footer />
        
        <a href="#book" className="fixed bottom-8 right-8 z-50 flex flex-col items-center justify-center w-20 h-20 bg-[#C85A3E] text-white hover:bg-[#0A1828] transition-all shadow-2xl rounded-full group" aria-label="Book appointment">
          <span className="font-display text-xl leading-none group-hover:scale-110 transition-transform">+</span>
          <span className="text-[9px] font-bold tracking-widest mt-0.5">BOOK</span>
        </a>
      </body>
    </html>
  )
}
