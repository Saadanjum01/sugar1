'use client'

import Link from 'next/link'
import { Clock, Eye, Brain, Activity } from 'lucide-react'

export default function MigraineManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-40 px-8 lg:px-16 overflow-hidden bg-[#0A1828] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600"
            alt="Migraine and vision"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1828] via-[#0A1828]/90 to-[#1a2332]"></div>
        </div>
        <div className="relative z-10">
          <Link href="/services" className="inline-flex items-center space-x-2 text-sm font-bold mb-12 hover:text-[#C85A3E] transition-colors">
            <span>←</span>
            <span>BACK TO SERVICES</span>
          </Link>
          <div className="text-[#C85A3E] text-sm font-bold mb-6 tracking-widest">HEADACHE CARE</div>
          <h1 className="font-display text-7xl md:text-8xl lg:text-9xl leading-none mb-8">
            MIGRAINE<br/>MANAGEMENT
          </h1>
          <p className="text-xl text-[#B8C4CE] max-w-2xl">
            Vision-related headache assessment and treatment. Many migraines have visual triggers — we help identify and address them.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="text-center p-10 bg-[#0A1828] text-white">
            <div className="font-display text-7xl mb-4">45</div>
            <div className="text-[#B8C4CE] text-lg">MINUTES PER EVALUATION</div>
          </div>
          <div className="text-center p-10 bg-[#C85A3E] text-white">
            <div className="font-display text-6xl mb-4">1 in 7</div>
            <div className="text-white/80 text-lg">PEOPLE HAVE MIGRAINES</div>
          </div>
          <div className="text-center p-10 bg-[#0A1828] text-white">
            <div className="font-display text-5xl mb-4">Visual</div>
            <div className="text-[#B8C4CE] text-lg">TRIGGERS ARE COMMON</div>
          </div>
        </div>

        {/* Visual Triggers We Assess */}
        <div className="mb-20">
          <h2 className="font-display text-5xl lg:text-7xl mb-6">VISUAL TRIGGERS WE ASSESS</h2>
          <div className="h-2 w-32 bg-[#C85A3E]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-[#0A1828]">
          {[
            { title: 'UNCORRECTED REFRACTIVE ERROR', desc: 'Undiagnosed or outdated prescriptions cause eye strain that triggers headaches' },
            { title: 'BINOCULAR VISION DISORDERS', desc: 'Eyes that struggle to work together create tension and frequent headaches' },
            { title: 'EYE MUSCLE IMBALANCE', desc: 'Compensating for misaligned eye muscles consumes energy and causes pain' },
            { title: 'PHOTOPHOBIA', desc: 'Abnormal light sensitivity that triggers or worsens migraine attacks' },
            { title: 'DIGITAL EYE STRAIN', desc: 'Prolonged screen use without proper correction or protection' },
            { title: 'VESTIBULO-OCULAR IMBALANCE', desc: 'Mismatch between visual and balance systems triggering vestibular migraines' }
          ].map((item) => (
            <div key={item.title} className="border-r-2 border-b-2 border-[#0A1828] p-10 hover:bg-[#C85A3E] hover:text-white group transition-all">
              <h3 className="font-display text-3xl mb-3 group-hover:text-white">{item.title}</h3>
              <p className="text-[#8B9A9F] text-lg group-hover:text-white/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Treatment Approaches */}
      <section className="py-32 px-8 lg:px-16 bg-[#0A1828] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-5xl lg:text-7xl mb-20 text-center">HOW WE HELP</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'PRECISE PRESCRIPTION', desc: 'Even small uncorrected refractive errors can drive chronic headaches. We fine-tune your prescription to eliminate unnecessary eye strain.' },
              { title: 'BLUE LIGHT PROTECTION', desc: 'Specialized lens coatings and tints that reduce screen-related photostimulation linked to migraine triggers.' },
              { title: 'VISION THERAPY', desc: 'Structured exercises to improve how your eyes coordinate and reduce the strain that triggers headaches.' },
              { title: 'TINTED LENSES', desc: 'Precision tinted lenses (FL-41 and others) clinically proven to reduce photophobia and migraine frequency.' }
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-[#C85A3E] pl-8">
                <div className="w-16 h-16 bg-[#C85A3E] flex items-center justify-center mb-6">
                  <Brain size={32} />
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
              { num: '1', title: 'HEADACHE HISTORY', desc: 'Review of frequency, duration, triggers, and pattern of your headaches' },
              { num: '2', title: 'COMPREHENSIVE VISION EXAM', desc: 'Full assessment including prescription, eye coordination, and focusing ability' },
              { num: '3', title: 'BINOCULAR VISION TESTING', desc: 'Detailed evaluation of how your eyes work together under visual stress' },
              { num: '4', title: 'TRIGGER IDENTIFICATION', desc: 'Correlating your visual findings with headache patterns to identify treatable causes' },
              { num: '5', title: 'PERSONALIZED RECOMMENDATIONS', desc: 'Prescription updates, lens options, or vision therapy referral as appropriate' }
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
              <h4 className="font-display text-2xl mb-2">DURATION: 45 MINUTES</h4>
              <p className="text-[#B8C4CE]">Please bring a log of recent headache episodes if available — it helps us identify patterns</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 lg:px-16 bg-gradient-to-br from-[#C85A3E] to-[#0A1828] text-white text-center">
        <h2 className="font-display text-6xl lg:text-8xl mb-8">END THE CYCLE</h2>
        <p className="text-xl mb-12 opacity-90">Visual causes of migraines are often treatable — let's find yours</p>
        <a href="#book" className="inline-block px-12 py-5 bg-white text-[#0A1828] font-bold text-lg hover:bg-[#0A1828] hover:text-white transition-all">
          BOOK MIGRAINE EVALUATION
        </a>
      </section>
    </div>
  )
}
