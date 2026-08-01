'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0A1828]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-gradient-to-br from-[#1a2332] via-[#0f1a28] to-[#0A1828]"></div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1760446031441-65f456460d59?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGdsYXNzZXN8ZW58MHx8fHwxNzg1NDM2Mzg4fDA&ixlib=rb-4.1.0&q=85"
              alt=""
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1828] via-[#0A1828]/60 to-transparent"></div>
          </div>
        </div>
        
        <div className="relative z-10 w-full px-5 sm:px-8 lg:px-16 py-20 sm:py-32">
          <div className="max-w-4xl">
            <div className="text-[#C85A3E] text-xs sm:text-sm font-bold mb-4 sm:mb-6 tracking-widest">SUGAR LAND, TEXAS</div>
            <h1 className="font-display text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-[0.95] sm:leading-[0.9] mb-6 sm:mb-8">
              VISION<br/>
              BEYOND<br/>
              CLARITY
            </h1>
            <p className="text-base sm:text-xl text-[#B8C4CE] max-w-xl mb-8 sm:mb-12 leading-relaxed">
              Where advanced technology meets personalized care. Experience optometry designed for the modern patient.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#book" className="w-full sm:w-auto text-center px-8 sm:px-10 py-4 sm:py-5 bg-[#C85A3E] text-white text-sm font-bold hover:bg-[#0A1828] hover:scale-105 transition-all rounded-xl">
                SCHEDULE APPOINTMENT
              </a>
              <Link href="/services" className="w-full sm:w-auto text-center px-8 sm:px-10 py-4 sm:py-5 border-2 border-white text-white text-sm font-bold hover:bg-white hover:text-[#0A1828] transition-all rounded-xl">
                EXPLORE SERVICES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-16">
        <div className="mb-12 sm:mb-20">
          <div className="text-[#C85A3E] text-xs sm:text-sm font-bold mb-4 tracking-widest">OUR SERVICES</div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-8xl mb-6">COMPREHENSIVE CARE</h2>
          <p className="text-base sm:text-xl text-[#8B9A9F] max-w-2xl">
            State-of-the-art diagnostics and treatment for every aspect of your eye health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-0 border-0 sm:border-2 border-[#0A1828] rounded-2xl overflow-hidden">
          <Link href="/services/comprehensive-eye-exam" className="group relative aspect-square overflow-hidden border-2 sm:border-r-2 sm:border-b-2 border-[#0A1828] hover:bg-[#C85A3E] transition-all rounded-2xl sm:rounded-none">
            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
              <div className="text-5xl sm:text-6xl font-display text-[#0A1828] group-hover:text-white transition-colors">01</div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl text-[#0A1828] group-hover:text-white mb-2 transition-colors">COMPREHENSIVE EXAMS</h3>
                <ArrowRight className="text-[#C85A3E] group-hover:text-white transition-colors" size={24} />
              </div>
            </div>
          </Link>

          <Link href="/services/contact-lens-exam" className="group relative aspect-square overflow-hidden border-2 sm:border-r-2 sm:border-b-2 border-[#0A1828] hover:bg-[#C85A3E] transition-all rounded-2xl sm:rounded-none">
            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
              <div className="text-5xl sm:text-6xl font-display text-[#0A1828] group-hover:text-white transition-colors">02</div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl text-[#0A1828] group-hover:text-white mb-2 transition-colors">CONTACT LENSES</h3>
                <ArrowRight className="text-[#C85A3E] group-hover:text-white transition-colors" size={24} />
              </div>
            </div>
          </Link>

          <Link href="/services/diabetic-eye-exam" className="group relative aspect-square overflow-hidden border-2 sm:border-r-2 sm:border-b-2 border-[#0A1828] hover:bg-[#C85A3E] transition-all rounded-2xl sm:rounded-none">
            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
              <div className="text-5xl sm:text-6xl font-display text-[#0A1828] group-hover:text-white transition-colors">03</div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl text-[#0A1828] group-hover:text-white mb-2 transition-colors">DIABETIC CARE</h3>
                <ArrowRight className="text-[#C85A3E] group-hover:text-white transition-colors" size={24} />
              </div>
            </div>
          </Link>

          <Link href="/services/emergency-medical-exam" className="group relative aspect-square overflow-hidden border-2 sm:border-r-0 sm:border-b-2 border-[#0A1828] hover:bg-[#C85A3E] transition-all rounded-2xl sm:rounded-none">
            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
              <div className="text-5xl sm:text-6xl font-display text-[#0A1828] group-hover:text-white transition-colors">04</div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl text-[#0A1828] group-hover:text-white mb-2 transition-colors">EMERGENCY CARE</h3>
                <ArrowRight className="text-[#C85A3E] group-hover:text-white transition-colors" size={24} />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="bg-[#0A1828] text-white py-16 sm:py-24 lg:py-32">
        <div className="px-5 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div>
              <div className="text-[#C85A3E] text-xs sm:text-sm font-bold mb-4 tracking-widest">DR. SHIROZ VIRANI</div>
              <h2 className="font-display text-4xl sm:text-6xl lg:text-8xl mb-6 sm:mb-8 leading-none">EXPERT CARE, PERSONAL TOUCH</h2>
              <div className="h-1 w-24 bg-[#C85A3E] mb-6 sm:mb-8"></div>
              <p className="text-base sm:text-xl text-[#8B9A9F] mb-8 leading-relaxed">
                Board-certified optometrist dedicated to providing exceptional eye care through advanced technology and personalized attention.
              </p>
              <Link href="/doctor" className="inline-flex items-center space-x-3 text-[#C85A3E] font-bold hover:text-white transition-colors group">
                <span>LEARN MORE</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
              </Link>
            </div>
            <div className="aspect-[3/4] overflow-hidden relative rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
                alt="Dr. Shiroz Virani, Optometrist"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1828]/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-10 sm:py-16 bg-[#C85A3E] overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center space-x-8 sm:space-x-16 pr-8 sm:pr-16">
            <span className="font-display text-2xl sm:text-5xl text-white">ADVANCED TECHNOLOGY</span>
            <span className="text-white text-2xl sm:text-4xl">●</span>
            <span className="font-display text-2xl sm:text-5xl text-white">EXPERT CARE</span>
            <span className="text-white text-2xl sm:text-4xl">●</span>
            <span className="font-display text-2xl sm:text-5xl text-white">MODERN PRACTICE</span>
            <span className="text-white text-2xl sm:text-4xl">●</span>
            <span className="font-display text-2xl sm:text-5xl text-white">PATIENT FOCUSED</span>
            <span className="text-white text-2xl sm:text-4xl">●</span>
          </div>
          <div className="flex items-center space-x-8 sm:space-x-16 pr-8 sm:pr-16">
            <span className="font-display text-2xl sm:text-5xl text-white">ADVANCED TECHNOLOGY</span>
            <span className="text-white text-2xl sm:text-4xl">●</span>
            <span className="font-display text-2xl sm:text-5xl text-white">EXPERT CARE</span>
            <span className="text-white text-2xl sm:text-4xl">●</span>
            <span className="font-display text-2xl sm:text-5xl text-white">MODERN PRACTICE</span>
            <span className="text-white text-2xl sm:text-4xl">●</span>
            <span className="font-display text-2xl sm:text-5xl text-white">PATIENT FOCUSED</span>
            <span className="text-white text-2xl sm:text-4xl">●</span>
          </div>
        </div>
      </section>

      {/* Frames Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="text-[#C85A3E] text-xs sm:text-sm font-bold mb-4 tracking-widest">PREMIUM EYEWEAR</div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-8xl mb-6 sm:mb-8">DESIGNER FRAMES</h2>
            <p className="text-lg sm:text-xl text-[#8B9A9F] mb-8 sm:mb-12">
              Curated collection of luxury eyewear from world-renowned designers.
            </p>
            <div className="space-y-6 sm:space-y-8">
              <div className="border-l-4 border-[#C85A3E] pl-6">
                <h3 className="font-display text-2xl sm:text-3xl mb-2">TOM FORD</h3>
                <p className="text-[#8B9A9F]">Italian luxury meets modern sophistication</p>
              </div>
              <div className="border-l-4 border-[#0A1828] pl-6">
                <h3 className="font-display text-2xl sm:text-3xl mb-2">WILEY X</h3>
                <p className="text-[#8B9A9F]">Performance eyewear for active lifestyles</p>
              </div>
            </div>
            <Link href="/frames" className="inline-flex items-center space-x-3 text-[#C85A3E] font-bold hover:text-[#0A1828] transition-colors group mt-8 sm:mt-12">
              <span>VIEW COLLECTION</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/30271002/pexels-photo-30271002.jpeg"
                alt="Designer frames"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?crop=entropy&cs=srgb&fm=jpg&q=85&w=600"
                alt="Eyewear frame"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1508296695146-257a814070b4?crop=entropy&cs=srgb&fm=jpg&q=85&w=600"
                alt="Eyewear style"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1643110279326-6ff17149856a"
                alt="Luxury eyewear"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-16 bg-[#0A1828] text-white">
        <div className="text-center mb-12 sm:mb-20">
          <div className="text-[#C85A3E] text-xs sm:text-sm font-bold mb-4 tracking-widest">INSURANCE ACCEPTED</div>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-8xl mb-8">WE WORK WITH YOUR PLAN</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8 max-w-6xl mx-auto">
          {['EYEMED', 'VSP', 'BCBS', 'CIGNA', 'MEDICARE', 'UNITED', 'SPECTERA', 'SUPERIOR', 'AETNA'].map((ins) => (
            <div key={ins} className="aspect-square border-2 border-white/20 flex items-center justify-center hover:bg-[#C85A3E] hover:border-[#C85A3E] transition-all group rounded-xl">
              <span className="font-display text-base sm:text-xl group-hover:text-white">{ins}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 sm:py-32 lg:py-40 px-5 sm:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C85A3E] to-[#0A1828]"></div>
        <div className="relative z-10 text-center text-white">
          <h2 className="font-display text-4xl sm:text-7xl md:text-8xl lg:text-9xl mb-8 sm:mb-12 leading-none">
            EXPERIENCE<br/>THE DIFFERENCE
          </h2>
          <a href="#book" className="inline-block px-10 sm:px-16 py-5 sm:py-6 bg-white text-[#0A1828] font-display text-lg sm:text-xl hover:bg-white/90 transition-all rounded-xl">
            BOOK YOUR APPOINTMENT
          </a>
        </div>
      </section>
    </div>
  )
}
