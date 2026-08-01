'use client'

import Link from 'next/link'
import { Clock, Eye, Heart, Star } from 'lucide-react'

export default function PediatricEyeExamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-20 sm:py-32 lg:py-40 px-5 sm:px-8 lg:px-16 overflow-hidden bg-[#0A1828] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600"
            alt="Pediatric eye exam"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1828] via-[#0A1828]/90 to-[#1a2332]"></div>
        </div>
        <div className="relative z-10">
          <Link href="/services" className="inline-flex items-center space-x-2 text-sm font-bold mb-12 hover:text-[#C85A3E] transition-colors">
            <span>←</span>
            <span>BACK TO SERVICES</span>
          </Link>
          <div className="text-[#C85A3E] text-sm font-bold mb-6 tracking-widest">CHILDREN'S VISION</div>
          <h1 className="font-display text-4xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-8">
            PEDIATRIC<br/>EYE<br/>EXAM
          </h1>
          <p className="text-xl text-[#B8C4CE] max-w-2xl">
            Comprehensive vision care for infants, children, and teens. A comfortable, friendly environment designed for young patients.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="text-center p-10 bg-[#0A1828] text-white">
            <div className="font-display text-7xl mb-4">30-45</div>
            <div className="text-[#B8C4CE] text-lg">MINUTES PER EXAM</div>
          </div>
          <div className="text-center p-10 bg-[#C85A3E] text-white">
            <div className="font-display text-6xl mb-4">Age 1+</div>
            <div className="text-white/80 text-lg">WE SEE ALL AGES</div>
          </div>
          <div className="text-center p-10 bg-[#0A1828] text-white">
            <div className="font-display text-5xl mb-4">80%</div>
            <div className="text-[#B8C4CE] text-lg">LEARNING IS VISION-BASED</div>
          </div>
        </div>

        {/* What We Assess */}
        <div className="mb-20">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl mb-6">WHAT WE ASSESS</h2>
          <div className="h-2 w-32 bg-[#C85A3E]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-[#0A1828]">
          {[
            { title: 'REFRACTIVE ERROR', desc: 'Nearsightedness, farsightedness, and astigmatism affecting clear vision' },
            { title: 'AMBLYOPIA (LAZY EYE)', desc: 'Reduced vision in one eye due to abnormal visual development' },
            { title: 'STRABISMUS', desc: 'Eye misalignment — eyes that turn in, out, up, or down' },
            { title: 'FOCUSING PROBLEMS', desc: 'Difficulty sustaining clear focus, especially for reading tasks' },
            { title: 'EYE COORDINATION', desc: 'How both eyes work together — critical for reading and sports' },
            { title: 'DEVELOPMENTAL MILESTONES', desc: 'Age-appropriate visual skill tracking from infancy through teens' }
          ].map((item) => (
            <div key={item.title} className="border-r-2 border-b-2 border-[#0A1828] p-10 hover:bg-[#C85A3E] hover:text-white group transition-all">
              <h3 className="font-display text-3xl mb-3 group-hover:text-white">{item.title}</h3>
              <p className="text-[#8B9A9F] text-lg group-hover:text-white/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* When to Schedule */}
      <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-16 bg-[#0A1828] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl mb-20 text-center">WHEN TO SCHEDULE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: '6–12 MONTHS', desc: 'First comprehensive eye exam. We check alignment, focusing ability, and ensure both eyes are developing normally.' },
              { title: 'AGE 3', desc: 'Pre-school vision screening to catch amblyopia and refractive errors before they affect early learning.' },
              { title: 'AGE 5–6', desc: 'Before starting school — reading and classroom learning require optimal visual function.' },
              { title: 'ANNUALLY (SCHOOL AGE)', desc: 'Vision changes rapidly through the school years. Annual exams ensure prescriptions stay current and learning isn\'t impacted.' }
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-[#C85A3E] pl-8">
                <div className="w-16 h-16 bg-[#C85A3E] flex items-center justify-center mb-6">
                  <Heart size={32} />
                </div>
                <h3 className="font-display text-3xl mb-4">{item.title}</h3>
                <p className="text-[#B8C4CE] text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl mb-12">WARNING SIGNS TO WATCH</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Squinting or closing one eye',
              'Sitting too close to the TV',
              'Frequent headaches or eye rubbing',
              'Difficulty reading or avoiding books',
              'Poor hand-eye coordination',
              'Tilting head to one side',
              'Crossed or wandering eyes',
              'Sensitivity to light',
              'Short attention span for visual tasks'
            ].map((sign) => (
              <div key={sign} className="flex items-center space-x-4 p-6 border-2 border-[#0A1828]/20 hover:border-[#C85A3E] transition-colors">
                <div className="w-2 h-2 bg-[#C85A3E] flex-shrink-0"></div>
                <span className="text-lg">{sign}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 p-10 bg-[#0A1828] text-white flex items-center space-x-6">
            <Clock size={48} className="text-[#C85A3E] flex-shrink-0" />
            <div>
              <h4 className="font-display text-2xl mb-2">DURATION: 30–45 MINUTES</h4>
              <p className="text-[#B8C4CE]">We work at your child's pace — no rushing, no stress</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-16 bg-gradient-to-br from-[#C85A3E] to-[#0A1828] text-white text-center">
        <h2 className="font-display text-3xl sm:text-6xl lg:text-8xl mb-8">GIVE THEM CLEAR VISION</h2>
        <p className="text-xl mb-12 opacity-90">A child's vision is foundational to their learning and development</p>
        <a href="#book" className="inline-block w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-white text-[#0A1828] font-bold text-lg hover:bg-[#0A1828] hover:text-white transition-all">
          BOOK PEDIATRIC EXAM
        </a>
      </section>
    </div>
  )
}
