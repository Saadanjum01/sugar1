'use client'

import Link from 'next/link'
import { Check, Clock, Eye } from 'lucide-react'

export default function ContactLensExamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-40 px-8 lg:px-16 overflow-hidden bg-[#0A1828] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1583947581924-860bda6a26df?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600"
            alt="Contact lens fitting"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1828] via-[#0A1828]/90 to-[#1a2332]"></div>
        </div>
        <div className="relative z-10">
          <Link href="/services" className="inline-flex items-center space-x-2 text-sm font-bold mb-12 hover:text-[#C85A3E] transition-colors">
            <span>←</span>
            <span>BACK TO SERVICES</span>
          </Link>
          <div className="text-[#C85A3E] text-sm font-bold mb-6 tracking-widest">VISION CORRECTION</div>
          <h1 className="font-display text-7xl md:text-8xl lg:text-9xl leading-none mb-8">
            CONTACT<br/>LENS<br/>EXAM
          </h1>
          <p className="text-xl text-[#B8C4CE] max-w-2xl">
            Custom fitting for every lens type. From daily disposables to specialty lenses — we find your perfect match.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="text-center p-10 bg-[#0A1828] text-white">
            <div className="font-display text-7xl mb-4">60-75</div>
            <div className="text-[#B8C4CE] text-lg">MINUTES PER EXAM</div>
          </div>
          <div className="text-center p-10 bg-[#C85A3E] text-white">
            <div className="font-display text-7xl mb-4">10+</div>
            <div className="text-white/80 text-lg">LENS TYPES FITTED</div>
          </div>
          <div className="text-center p-10 bg-[#0A1828] text-white">
            <div className="font-display text-7xl mb-4">100%</div>
            <div className="text-[#B8C4CE] text-lg">CUSTOM FIT</div>
          </div>
        </div>

        {/* Lens Types */}
        <div className="mb-20">
          <h2 className="font-display text-5xl lg:text-7xl mb-6">LENS TYPES WE FIT</h2>
          <div className="h-2 w-32 bg-[#C85A3E]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-[#0A1828]">
          {[
            { title: 'DAILY DISPOSABLES', desc: 'Fresh lens every day — maximum hygiene' },
            { title: 'BI-WEEKLY / MONTHLY', desc: 'Cost-effective scheduled replacement lenses' },
            { title: 'MULTIFOCAL LENSES', desc: 'Clear vision at all distances, no glasses needed' },
            { title: 'TORIC LENSES', desc: 'Specially designed to correct astigmatism' },
            { title: 'SPECIALTY LENSES', desc: 'Scleral and rigid gas-permeable for complex Rx' },
            { title: 'EXTENDED WEAR', desc: 'FDA-approved lenses for overnight use' }
          ].map((item) => (
            <div key={item.title} className="border-r-2 border-b-2 border-[#0A1828] p-10 hover:bg-[#C85A3E] hover:text-white group transition-all">
              <h3 className="font-display text-3xl mb-3 group-hover:text-white">{item.title}</h3>
              <p className="text-[#8B9A9F] text-lg group-hover:text-white/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="py-32 px-8 lg:px-16 bg-[#0A1828] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-5xl lg:text-7xl mb-20 text-center">WHAT'S INCLUDED</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'CORNEAL MAPPING', desc: 'Precise measurement of your cornea curvature for optimal lens fit.' },
              { title: 'TRIAL FITTING', desc: 'Try lenses in-office before committing to a prescription.' },
              { title: 'INSERTION TRAINING', desc: 'Expert guidance on safe lens handling and care routines.' },
              { title: 'FOLLOW-UP CARE', desc: 'Scheduled check-ins to ensure comfort and lens performance.' }
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-[#C85A3E] pl-8">
                <div className="w-16 h-16 bg-[#C85A3E] flex items-center justify-center mb-6">
                  <Eye size={32} />
                </div>
                <h3 className="font-display text-3xl mb-4">{item.title}</h3>
                <p className="text-[#B8C4CE] text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-5xl lg:text-7xl mb-20">WHAT TO EXPECT</h2>
          <div className="space-y-12">
            {[
              { num: '1', title: 'EYE HEALTH CHECK', desc: 'Confirm your eyes are healthy for contact lens wear' },
              { num: '2', title: 'CORNEAL MEASUREMENTS', desc: 'Precise sizing to match lens curvature to your eye' },
              { num: '3', title: 'TRIAL LENS SELECTION', desc: 'We select trial lenses based on your prescription and lifestyle' },
              { num: '4', title: 'IN-OFFICE FIT CHECK', desc: 'Evaluate comfort, vision, and lens movement on your eye' },
              { num: '5', title: 'TRAINING & TAKE-HOME', desc: 'Learn proper insertion, removal, and care before you leave' }
            ].map((step) => (
              <div key={step.num} className="flex items-start space-x-8 border-b-2 border-[#0A1828]/10 pb-8">
                <div className="w-24 h-24 bg-[#0A1828] text-white flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-5xl">{step.num}</span>
                </div>
                <div className="pt-4">
                  <h3 className="font-display text-3xl mb-3">{step.title}</h3>
                  <p className="text-[#8B9A9F] text-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 p-10 bg-[#0A1828] text-white flex items-center space-x-6">
            <Clock size={48} className="text-[#C85A3E] flex-shrink-0" />
            <div>
              <h4 className="font-display text-2xl mb-2">DURATION: 60–75 MINUTES</h4>
              <p className="text-[#B8C4CE]">Please bring your current glasses prescription if available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 lg:px-16 bg-gradient-to-br from-[#C85A3E] to-[#0A1828] text-white text-center">
        <h2 className="font-display text-6xl lg:text-8xl mb-8">FIND YOUR FIT</h2>
        <p className="text-xl mb-12 opacity-90">Discover the comfort of perfectly fitted contact lenses</p>
        <a href="#book" className="inline-block px-12 py-5 bg-white text-[#0A1828] font-bold text-lg hover:bg-[#0A1828] hover:text-white transition-all">
          BOOK APPOINTMENT
        </a>
      </section>
    </div>
  )
}
