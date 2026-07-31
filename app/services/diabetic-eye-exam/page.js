'use client'

import Link from 'next/link'
import { Check, Clock, Eye, AlertCircle } from 'lucide-react'

export default function DiabeticEyeExamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-40 px-8 lg:px-16 overflow-hidden bg-[#0A1828] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600"
            alt="Diabetic eye exam"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1828] via-[#0A1828]/90 to-[#1a2332]"></div>
        </div>
        <div className="relative z-10">
          <Link href="/services" className="inline-flex items-center space-x-2 text-sm font-bold mb-12 hover:text-[#C85A3E] transition-colors">
            <span>←</span>
            <span>BACK TO SERVICES</span>
          </Link>
          <div className="text-[#C85A3E] text-sm font-bold mb-6 tracking-widest">SPECIALIZED SCREENING</div>
          <h1 className="font-display text-7xl md:text-8xl lg:text-9xl leading-none mb-8">
            DIABETIC<br/>EYE<br/>EXAM
          </h1>
          <p className="text-xl text-[#B8C4CE] max-w-2xl">
            Critical retinopathy screening for patients with diabetes. Early detection is the key to protecting your vision for life.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="text-center p-10 bg-[#0A1828] text-white">
            <div className="font-display text-7xl mb-4">30-45</div>
            <div className="text-[#B8C4CE] text-lg">MINUTES PER EXAM</div>
          </div>
          <div className="text-center p-10 bg-[#C85A3E] text-white">
            <div className="font-display text-7xl mb-4">1 in 3</div>
            <div className="text-white/80 text-lg">DIABETICS HAVE RETINOPATHY</div>
          </div>
          <div className="text-center p-10 bg-[#0A1828] text-white">
            <div className="font-display text-7xl mb-4">95%</div>
            <div className="text-[#B8C4CE] text-lg">PREVENTABLE VISION LOSS</div>
          </div>
        </div>

        {/* What We Screen For */}
        <div className="mb-20">
          <h2 className="font-display text-5xl lg:text-7xl mb-6">WHAT WE SCREEN FOR</h2>
          <div className="h-2 w-32 bg-[#C85A3E]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-[#0A1828]">
          {[
            { title: 'DIABETIC RETINOPATHY', desc: 'Damage to blood vessels in the retina caused by high blood sugar' },
            { title: 'MACULAR EDEMA', desc: 'Swelling in the central retina that blurs central vision' },
            { title: 'CATARACTS', desc: 'Diabetics develop cataracts earlier than the general population' },
            { title: 'GLAUCOMA', desc: 'Elevated eye pressure linked to diabetes risk factors' },
            { title: 'RETINAL DETACHMENT', desc: 'Scar tissue from retinopathy can pull the retina away' },
            { title: 'NEOVASCULARIZATION', desc: 'Abnormal blood vessel growth that threatens vision' }
          ].map((item) => (
            <div key={item.title} className="border-r-2 border-b-2 border-[#0A1828] p-10 hover:bg-[#C85A3E] hover:text-white group transition-all">
              <h3 className="font-display text-3xl mb-3 group-hover:text-white">{item.title}</h3>
              <p className="text-[#8B9A9F] text-lg group-hover:text-white/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Diabetics Need Annual Exams */}
      <section className="py-32 px-8 lg:px-16 bg-[#0A1828] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-5xl lg:text-7xl mb-20 text-center">WHY ANNUAL EXAMS MATTER</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'NO EARLY SYMPTOMS', desc: 'Diabetic retinopathy causes no pain or noticeable vision changes in early stages. By the time symptoms appear, significant damage may already be done.' },
              { title: 'RAPID PROGRESSION', desc: 'Blood sugar fluctuations can accelerate eye damage quickly. Annual (or more frequent) monitoring allows us to catch changes early.' },
              { title: 'TREATMENT WORKS', desc: 'When caught early, diabetic eye disease can be effectively managed. Early intervention dramatically improves outcomes.' },
              { title: 'SYSTEMIC HEALTH', desc: 'Eye exams give your care team important information about how diabetes is affecting your blood vessels throughout your body.' }
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-[#C85A3E] pl-8">
                <div className="w-16 h-16 bg-[#C85A3E] flex items-center justify-center mb-6">
                  <AlertCircle size={32} />
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
              { num: '1', title: 'MEDICAL HISTORY', desc: 'Review of your diabetes type, duration, medications, and A1C levels' },
              { num: '2', title: 'VISUAL ACUITY', desc: 'Standard vision testing to establish baseline and detect changes' },
              { num: '3', title: 'EYE DILATION', desc: 'Dilating drops widen your pupils for a complete retinal view' },
              { num: '4', title: 'RETINAL IMAGING', desc: 'High-resolution imaging to document and track retinal health over time' },
              { num: '5', title: 'RESULTS & COORDINATION', desc: 'Full report provided — we coordinate with your primary care physician as needed' }
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
              <h4 className="font-display text-2xl mb-2">DURATION: 30–45 MINUTES</h4>
              <p className="text-[#B8C4CE]">Your eyes will be dilated — please arrange a driver or bring sunglasses</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 lg:px-16 bg-gradient-to-br from-[#C85A3E] to-[#0A1828] text-white text-center">
        <h2 className="font-display text-6xl lg:text-8xl mb-8">PROTECT YOUR SIGHT</h2>
        <p className="text-xl mb-12 opacity-90">Annual diabetic eye exams are essential — schedule yours today</p>
        <a href="#book" className="inline-block px-12 py-5 bg-white text-[#0A1828] font-bold text-lg hover:bg-[#0A1828] hover:text-white transition-all">
          BOOK APPOINTMENT
        </a>
      </section>
    </div>
  )
}
