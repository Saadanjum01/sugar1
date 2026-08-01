'use client'

import Link from 'next/link'
import { Clock, Eye, TrendingDown, Shield } from 'lucide-react'

export default function MyopiaControlPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-20 sm:py-32 lg:py-40 px-5 sm:px-8 lg:px-16 overflow-hidden bg-[#0A1828] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600"
            alt="Child reading — myopia control"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1828] via-[#0A1828]/90 to-[#1a2332]"></div>
        </div>
        <div className="relative z-10">
          <Link href="/services" className="inline-flex items-center space-x-2 text-sm font-bold mb-12 hover:text-[#C85A3E] transition-colors">
            <span>←</span>
            <span>BACK TO SERVICES</span>
          </Link>
          <div className="text-[#C85A3E] text-sm font-bold mb-6 tracking-widest">PEDIATRIC VISION</div>
          <h1 className="font-display text-4xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-8">
            MYOPIA<br/>CONTROL
          </h1>
          <p className="text-xl text-[#B8C4CE] max-w-2xl">
            Evidence-based interventions to slow nearsightedness progression in children. Protect their long-term eye health.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="text-center p-10 bg-[#0A1828] text-white">
            <div className="font-display text-7xl mb-4">45 min</div>
            <div className="text-[#B8C4CE] text-lg">PER EVALUATION</div>
          </div>
          <div className="text-center p-10 bg-[#C85A3E] text-white">
            <div className="font-display text-7xl mb-4">78%</div>
            <div className="text-white/80 text-lg">PROGRESSION SLOWED</div>
          </div>
          <div className="text-center p-10 bg-[#0A1828] text-white">
            <div className="font-display text-5xl mb-4">Age 6+</div>
            <div className="text-[#B8C4CE] text-lg">IDEAL STARTING AGE</div>
          </div>
        </div>

        {/* Why Myopia Control Matters */}
        <div className="mb-20">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl mb-6">WHY IT MATTERS</h2>
          <div className="h-2 w-32 bg-[#C85A3E]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-[#0A1828]">
          {[
            { title: 'REDUCES LONG-TERM RISK', desc: 'Higher myopia increases risk of retinal detachment, glaucoma, and macular degeneration later in life' },
            { title: 'PROGRESSION IS PREVENTABLE', desc: 'Early intervention during childhood growth years can significantly slow worsening of prescription' },
            { title: 'BETTER QUALITY OF LIFE', desc: 'Less dependence on thick glasses and lower risk of vision-threatening complications' },
            { title: 'GROWING EPIDEMIC', desc: 'Myopia rates have doubled in 30 years — early treatment is now the standard of care' }
          ].map((item) => (
            <div key={item.title} className="border-r-2 border-b-2 border-[#0A1828] p-10 hover:bg-[#C85A3E] hover:text-white group transition-all">
              <h3 className="font-display text-3xl mb-3 group-hover:text-white">{item.title}</h3>
              <p className="text-[#8B9A9F] text-lg group-hover:text-white/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-16 bg-[#0A1828] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl mb-20 text-center">TREATMENT OPTIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'ORTHOKERATOLOGY (ORTHO-K)', desc: 'Specially shaped overnight contact lenses that gently reshape the cornea while sleeping — no lenses needed during the day.' },
              { title: 'ATROPINE EYE DROPS', desc: 'Low-dose atropine drops used nightly have been shown to slow myopia progression with minimal side effects.' },
              { title: 'MULTIFOCAL CONTACTS', desc: 'Specially designed daytime contact lenses that correct vision while slowing myopia progression simultaneously.' },
              { title: 'MULTIFOCAL GLASSES', desc: 'Advanced spectacle lenses designed with defocus zones to reduce the signal driving eye elongation.' }
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-[#C85A3E] pl-8">
                <div className="w-16 h-16 bg-[#C85A3E] flex items-center justify-center mb-6">
                  <TrendingDown size={32} />
                </div>
                <h3 className="font-display text-3xl mb-4">{item.title}</h3>
                <p className="text-[#B8C4CE] text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl mb-20">WHAT TO EXPECT</h2>
          <div className="space-y-12">
            {[
              { num: '1', title: 'MYOPIA ASSESSMENT', desc: 'Complete evaluation of current prescription and eye growth measurements' },
              { num: '2', title: 'RISK PROFILING', desc: 'Age, family history, and lifestyle factors are used to predict progression risk' },
              { num: '3', title: 'TREATMENT PLANNING', desc: 'We recommend the best-matched treatment approach for your child' },
              { num: '4', title: 'MONITORING', desc: 'Regular follow-up exams every 6 months to track prescription changes' },
              { num: '5', title: 'ADJUSTMENT', desc: 'Treatment plan updated as your child grows to maintain optimal control' }
            ].map((step) => (
              <div key={step.num} className="flex items-start space-x-8 border-b-2 border-[#0A1828]/10 pb-8">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-[#0A1828] text-white flex items-center justify-center flex-shrink-0">
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
              <h4 className="font-display text-2xl mb-2">INITIAL EVALUATION: 45 MINUTES</h4>
              <p className="text-[#B8C4CE]">Best started between ages 6–12 for maximum benefit during growth years</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-16 bg-gradient-to-br from-[#C85A3E] to-[#0A1828] text-white text-center">
        <h2 className="font-display text-3xl sm:text-6xl lg:text-8xl mb-8">PROTECT THEIR FUTURE</h2>
        <p className="text-xl mb-12 opacity-90">Early intervention can make a lifetime of difference for your child's vision</p>
        <a href="#book" className="inline-block w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-white text-[#0A1828] font-bold text-lg hover:bg-[#0A1828] hover:text-white transition-all">
          BOOK MYOPIA EVALUATION
        </a>
      </section>
    </div>
  )
}
