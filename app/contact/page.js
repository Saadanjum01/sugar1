'use client'

import Link from 'next/link'
import { MapPin, Phone, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Info-First Editorial Block */}
      <section className="py-20 lg:py-32 px-8 lg:px-16">
        <Link href="/" className="inline-flex items-center space-x-2 text-sm font-medium mb-16 hover:text-[#C85A3E] transition-colors">
          <span>←</span>
          <span>BACK</span>
        </Link>

        <div className="max-w-6xl mx-auto">
          {/* Essentials Block - Large Type */}
          <div className="mb-20">
            <h1 className="font-display text-5xl lg:text-7xl font-black mb-12 leading-none">
              VISIT US
            </h1>
            
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <MapPin className="text-[#C85A3E] flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-2xl lg:text-3xl font-light leading-relaxed">
                    16126 Southwest Fwy Ste 180<br/>
                    Sugar Land, TX 77479
                  </p>
                  <a 
                    href="https://maps.google.com/?q=16126+Southwest+Fwy+Ste+180+Sugar+Land+TX+77479"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#C85A3E] hover:text-[#0A1828] mt-2 inline-block border-b border-[#C85A3E] hover:border-[#0A1828] transition-colors"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <Phone className="text-[#C85A3E] flex-shrink-0 mt-1" size={24} />
                <a 
                  href="tel:281-916-2020" 
                  className="text-2xl lg:text-3xl font-light hover:text-[#C85A3E] transition-colors"
                >
                  281-916-2020
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <Clock className="text-[#C85A3E] flex-shrink-0 mt-1" size={24} />
                <div className="space-y-2">
                  <div className="grid grid-cols-[120px_1fr] gap-4 text-lg">
                    <span className="font-medium">Tue – Fri</span>
                    <span>9:30 AM – 6:00 PM</span>
                  </div>
                  <div className="grid grid-cols-[120px_1fr] gap-4 text-lg text-[#8B9A9F]">
                    <span>Sat, Sun, Mon</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Unequal Split: Form (55%) + Map (45%) */}
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-black mb-8">SEND A MESSAGE</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-widest text-[#8B9A9F] mb-2">NAME</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-[#0A1828]/20 focus:border-[#C85A3E] focus:outline-none transition-colors text-[#0A1828] rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest text-[#8B9A9F] mb-2">EMAIL</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white border border-[#0A1828]/20 focus:border-[#C85A3E] focus:outline-none transition-colors text-[#0A1828] rounded-lg"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest text-[#8B9A9F] mb-2">PHONE</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white border border-[#0A1828]/20 focus:border-[#C85A3E] focus:outline-none transition-colors text-[#0A1828] rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest text-[#8B9A9F] mb-2">MESSAGE</label>
                  <textarea
                    rows="6"
                    className="w-full px-4 py-3 bg-white border border-[#0A1828]/20 focus:border-[#C85A3E] focus:outline-none transition-colors resize-none text-[#0A1828] rounded-lg"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-10 py-4 bg-[#0A1828] text-white text-sm font-bold hover:bg-[#C85A3E] transition-colors rounded-xl"
                >
                  SEND MESSAGE
                </button>

                <p className="text-sm text-[#8B9A9F] mt-6">
                  For urgent matters, please call us directly.
                </p>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] overflow-hidden relative bg-[#0A1828]">
              <img 
                src="https://images.unsplash.com/photo-1538935732373-f7a495fea3f6?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                alt="Sugar Land, TX area"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1828]/80 to-[#0A1828]/20"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <MapPin className="text-[#C85A3E] mb-4" size={48} />
                <div className="text-lg font-bold tracking-widest mb-1">SUGAR LAND, TX</div>
                <div className="text-sm text-[#B8C4CE] text-center px-4">16126 Southwest Fwy Ste 180</div>
                <a
                  href="https://maps.google.com/?q=16126+Southwest+Fwy+Ste+180+Sugar+Land+TX+77479"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-6 py-2 border border-[#C85A3E] text-[#C85A3E] text-sm font-bold hover:bg-[#C85A3E] hover:text-white transition-all"
                >
                  GET DIRECTIONS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-16 px-8 lg:px-16 bg-[#0A1828] text-[#F4EFE6]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs tracking-widest text-[#C85A3E] mb-4">EYE EMERGENCY?</p>
          <p className="text-xl mb-6">Call us immediately at <a href="tel:281-916-2020" className="text-[#C85A3E] hover:text-white transition-colors font-bold">281-916-2020</a></p>
        </div>
      </section>
    </div>
  )
}
