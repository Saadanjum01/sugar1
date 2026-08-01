'use client'

import Link from 'next/link'
import { Check, Clock, Eye } from 'lucide-react'

export default function ComprehensiveEyeExamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-20 sm:py-32 lg:py-40 px-5 sm:px-8 lg:px-16 bg-gradient-to-br from-[#1a2332] via-[#0f1a28] to-[#0A1828] text-white">
        <Link href="/services" className="inline-flex items-center space-x-2 text-sm font-bold mb-12 hover:text-[#C85A3E] transition-colors">
          <span>←</span>
          <span>BACK TO SERVICES</span>
        </Link>
        <div className="text-[#C85A3E] text-sm font-bold mb-6 tracking-widest">COMPREHENSIVE CARE</div>
        <h1 className="font-display text-4xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-8">
          COMPLETE<br/>EYE EXAM
        </h1>
        <p className="text-xl text-[#B8C4CE] max-w-2xl">
          Advanced diagnostic technology meets personalized care. More than just reading letters.
        </p>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="text-center p-10 bg-[#0A1828] text-white rounded-2xl">
            <div className="font-display text-7xl mb-4">45-60</div>
            <div className="text-[#B8C4CE] text-lg">MINUTES PER EXAM</div>
          </div>
          <div className="text-center p-10 bg-[#C85A3E] text-white rounded-2xl">
            <div className="font-display text-7xl mb-4">20+</div>
            <div className="text-white/80 text-lg">DIAGNOSTIC TESTS</div>
          </div>
          <div className="text-center p-10 bg-[#0A1828] text-white rounded-2xl">
            <div className="font-display text-7xl mb-4">100%</div>
            <div className="text-[#B8C4CE] text-lg">PERSONALIZED CARE</div>
          </div>
        </div>

        {/* What We Check */}
        <div className="mb-20">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl mb-6">WHAT WE EVALUATE</h2>
          <div className="h-2 w-32 bg-[#C85A3E]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-[#0A1828] rounded-2xl overflow-hidden">
          {[
            { title: 'VISUAL ACUITY', desc: 'Testing clarity at all distances' },
            { title: 'REFRACTIVE ERROR', desc: 'Precise prescription determination' },
            { title: 'EYE COORDINATION', desc: 'How your eyes work together' },
            { title: 'EYE PRESSURE', desc: 'Glaucoma screening' },
            { title: 'RETINAL HEALTH', desc: 'Examining internal structures' },
            { title: 'OVERALL HEALTH', desc: 'Disease detection & prevention' }
          ].map((item) => (
            <div key={item.title} className="border-r-2 border-b-2 border-[#0A1828] p-10 hover:bg-[#C85A3E] hover:text-white group transition-all">
              <h3 className="font-display text-3xl mb-3 group-hover:text-white">{item.title}</h3>
              <p className="text-[#8B9A9F] text-lg group-hover:text-white/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-16 bg-[#0A1828] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl mb-20 text-center">WHY IT MATTERS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#C85A3E] pl-8">
              <div className="w-16 h-16 bg-[#C85A3E] flex items-center justify-center mb-6">
                <Eye size={32} />
              </div>
              <h3 className="font-display text-3xl mb-4">EARLY DETECTION</h3>
              <p className="text-[#B8C4CE] text-lg leading-relaxed">
                Many eye diseases have no early symptoms. Regular exams can detect conditions like glaucoma and macular degeneration before vision loss occurs.
              </p>
            </div>

            <div className="border-l-4 border-[#C85A3E] pl-8">
              <div className="w-16 h-16 bg-[#C85A3E] flex items-center justify-center mb-6">
                <Check size={32} />
              </div>
              <h3 className="font-display text-3xl mb-4">HEALTH INSIGHTS</h3>
              <p className="text-[#B8C4CE] text-lg leading-relaxed">
                Your eyes reveal signs of systemic conditions like diabetes, high blood pressure, and high cholesterol. An eye exam may detect these first.
              </p>
            </div>

            <div className="border-l-4 border-[#C85A3E] pl-8">
              <div className="w-16 h-16 bg-[#C85A3E] flex items-center justify-center mb-6">
                <Eye size={32} />
              </div>
              <h3 className="font-display text-3xl mb-4">OPTIMAL VISION</h3>
              <p className="text-[#B8C4CE] text-lg leading-relaxed">
                Ensure you're seeing as clearly as possible. Proper correction reduces eye strain, headaches, and fatigue.
              </p>
            </div>

            <div className="border-l-4 border-[#C85A3E] pl-8">
              <div className="w-16 h-16 bg-[#C85A3E] flex items-center justify-center mb-6">
                <Check size={32} />
              </div>
              <h3 className="font-display text-3xl mb-4">PERSONALIZED CARE</h3>
              <p className="text-[#B8C4CE] text-lg leading-relaxed">
                Tailored recommendations based on your lifestyle, work environment, and personal risk factors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl mb-20">WHAT TO EXPECT</h2>
          
          <div className="space-y-12">
            {[
              { num: '1', title: 'MEDICAL HISTORY', desc: 'We discuss your vision concerns, health history, and medications' },
              { num: '2', title: 'VISUAL TESTING', desc: 'Comprehensive assessment of your vision at all distances' },
              { num: '3', title: 'REFRACTION', desc: 'Precise determination of your glasses or contact lens prescription' },
              { num: '4', title: 'EYE HEALTH EXAM', desc: 'Detailed examination of all internal and external eye structures' },
              { num: '5', title: 'RESULTS & PLAN', desc: 'Review findings and discuss personalized recommendations' }
            ].map((step) => (
              <div key={step.num} className="flex items-start space-x-8 border-b-2 border-[#0A1828]/10 pb-8">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-[#0A1828] text-white flex items-center justify-center flex-shrink-0 rounded-2xl">
                  <span className="font-display text-5xl">{step.num}</span>
                </div>
                <div className="pt-4">
                  <h3 className="font-display text-3xl mb-3">{step.title}</h3>
                  <p className="text-[#8B9A9F] text-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-10 bg-[#0A1828] text-white flex items-center space-x-6 rounded-2xl">
            <Clock size={48} className="text-[#C85A3E] flex-shrink-0" />
            <div>
              <h4 className="font-display text-2xl mb-2">DURATION: 45-60 MINUTES</h4>
              <p className="text-[#B8C4CE]">Please arrive 10 minutes early to complete paperwork</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-16 bg-gradient-to-br from-[#C85A3E] to-[#D67C5F] text-white text-center">
        <h2 className="font-display text-3xl sm:text-6xl lg:text-8xl mb-8">SCHEDULE YOUR EXAM</h2>
        <p className="text-xl mb-12 opacity-90">Protect your vision with expert care</p>
        <a href="#book" className="inline-block w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-white text-[#0A1828] font-bold text-lg hover:bg-[#0A1828] hover:text-white transition-all rounded-xl">
          BOOK APPOINTMENT
        </a>
      </section>
    </div>
  )
}
