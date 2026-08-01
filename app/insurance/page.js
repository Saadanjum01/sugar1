'use client'

import Link from 'next/link'
import { Check } from 'lucide-react'

export default function InsurancePage() {
  const insuranceProviders = [
    { name: 'Aetna', featured: true },
    { name: 'Blue Cross Blue Shield', featured: true },
    { name: 'Cigna', featured: false },
    { name: 'EyeMed', featured: true },
    { name: 'Medicare', featured: true },
    { name: 'Spectera', featured: false },
    { name: 'Superior Vision', featured: false },
    { name: 'United Healthcare', featured: false },
    { name: 'VSP', featured: true }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-16 bg-[#0A1828] text-white">
        <Link href="/" className="inline-flex items-center space-x-2 text-sm font-medium mb-8 sm:mb-12 hover:text-[#C85A3E] transition-colors">
          <span>←</span>
          <span>BACK</span>
        </Link>

        <div className="max-w-6xl">
          <div className="text-[#C85A3E] text-xs tracking-[0.3em] mb-4 sm:mb-6">COVERAGE & PAYMENT</div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-8xl font-black leading-none mb-6 sm:mb-8">
            INSURANCE<br/>& PAYMENT
          </h1>
          <p className="text-base sm:text-xl text-[#B8C4CE] leading-relaxed max-w-2xl">
            Quality eye care shouldn't be complicated. We work with most major vision insurance plans.
          </p>
        </div>
      </section>

      {/* Featured Plans - Bold Cards */}
      <section className="py-12 sm:py-20 lg:py-32 px-5 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 sm:mb-16">
            <div className="text-xs tracking-[0.3em] text-[#C85A3E] mb-3 sm:mb-4">FEATURED PLANS</div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black">MOST COMMONLY ACCEPTED</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {insuranceProviders.filter(p => p.featured).map((provider) => (
              <div 
                key={provider.name}
                className="aspect-square border-2 border-[#0A1828] p-4 sm:p-6 flex flex-col items-center justify-center text-center hover:bg-[#0A1828] hover:text-white transition-all group rounded-xl"
              >
                <Check className="text-[#C85A3E] group-hover:text-[#C85A3E] mb-3 sm:mb-4" size={28} />
                <span className="font-bold text-xs sm:text-sm leading-tight">{provider.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Plans - Elegant List */}
      <section className="py-12 sm:py-20 lg:py-32 px-5 sm:px-8 lg:px-16 bg-[#0A1828]/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 sm:mb-12">
            <div className="text-xs tracking-[0.3em] text-[#C85A3E] mb-3 sm:mb-4">ALL ACCEPTED PLANS</div>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black">COMPLETE LIST</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {insuranceProviders.map((provider) => (
              <div 
                key={provider.name}
                className="flex items-center space-x-3 p-3 sm:p-4 border-b border-[#0A1828]/10"
              >
                <Check className="text-[#C85A3E] flex-shrink-0" size={20} />
                <span className="text-[#0A1828] text-sm sm:text-base">{provider.name}</span>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-[#8B9A9F] mt-8 sm:mt-12">
            Don't see your plan? Call us at <a href="tel:281-916-2020" className="text-[#C85A3E] hover:text-[#0A1828] font-medium transition-colors">281-916-2020</a> to discuss your coverage options.
          </p>
        </div>
      </section>

      {/* Payment & Brands - Side by Side Blocks */}
      <section className="py-12 sm:py-20 lg:py-32 px-5 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            
            {/* Payment Options Block */}
            <div className="bg-[#0A1828] text-white p-6 sm:p-12 rounded-2xl">
              <div className="text-xs tracking-[0.3em] text-[#C85A3E] mb-4 sm:mb-6">PAYMENT OPTIONS</div>
              <h3 className="font-display text-2xl sm:text-3xl font-black mb-6 sm:mb-8">WE ACCEPT</h3>
              <div className="space-y-3 text-base sm:text-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#C85A3E] rounded-full"></div>
                  <span>Cash</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#C85A3E] rounded-full"></div>
                  <span>Check</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#C85A3E] rounded-full"></div>
                  <span>Credit & Debit Cards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#C85A3E] rounded-full"></div>
                  <span>HSA & FSA</span>
                </div>
              </div>
            </div>

            {/* Frame Brands Block */}
            <div className="border-2 border-[#0A1828] p-6 sm:p-12 rounded-2xl">
              <div className="text-xs tracking-[0.3em] text-[#C85A3E] mb-4 sm:mb-6">PREMIUM EYEWEAR</div>
              <h3 className="font-display text-2xl sm:text-3xl font-black mb-6 sm:mb-8">FRAME BRANDS</h3>
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="text-xl sm:text-2xl font-bold">Tom Ford</div>
                <div className="text-xl sm:text-2xl font-bold">Wiley X</div>
              </div>
              <p className="text-xs sm:text-sm text-[#8B9A9F] italic">
                More designer brands added regularly
              </p>
              <Link 
                href="/frames"
                className="inline-block mt-6 sm:mt-8 text-[#C85A3E] hover:text-[#0A1828] font-bold text-xs sm:text-sm transition-colors border-b-2 border-[#C85A3E] hover:border-[#0A1828] pb-1"
              >
                VIEW ALL FRAMES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-16 bg-gradient-to-br from-[#C85A3E] to-[#0A1828] text-white text-center">
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">READY TO USE YOUR BENEFITS?</h2>
        <p className="text-base sm:text-xl mb-8 sm:mb-12 opacity-90">Schedule your appointment today</p>
        <a href="#book" className="inline-block w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-white text-[#0A1828] font-bold text-xs sm:text-sm tracking-wider hover:bg-[#0A1828] hover:text-white transition-all rounded-xl">
          BOOK APPOINTMENT
        </a>
      </section>
    </div>
  )
}
