'use client'

import Link from 'next/link'
import { Clock, Phone, AlertCircle, Shield } from 'lucide-react'

export default function EmergencyMedicalExamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-20 sm:py-32 lg:py-40 px-5 sm:px-8 lg:px-16 overflow-hidden bg-[#0A1828] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600"
            alt="Eye emergency care"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1828] via-[#0A1828]/90 to-[#1a2332]"></div>
        </div>
        <div className="relative z-10">
          <Link href="/services" className="inline-flex items-center space-x-2 text-sm font-bold mb-12 hover:text-[#C85A3E] transition-colors">
            <span>←</span>
            <span>BACK TO SERVICES</span>
          </Link>
          <div className="text-[#C85A3E] text-sm font-bold mb-6 tracking-widest">URGENT EYE CARE</div>
          <h1 className="font-display text-4xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-8">
            EMERGENCY<br/>EYE<br/>CARE
          </h1>
          <p className="text-xl text-[#B8C4CE] max-w-2xl">
            Immediate care for eye injuries and infections. We prioritize urgent cases to protect your vision and prevent complications.
          </p>
        </div>
      </section>

      {/* Emergency Call Banner */}
      <section className="py-12 px-8 lg:px-16 bg-[#C85A3E] text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <Phone size={36} className="flex-shrink-0" />
            <div>
              <div className="text-sm font-bold tracking-widest opacity-80">EYE EMERGENCY? CALL NOW</div>
              <a href="tel:281-916-2020" className="font-display text-4xl hover:opacity-80 transition-opacity">281-916-2020</a>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm opacity-80">Office Hours</div>
            <div className="font-bold text-lg">Tue–Fri: 9:30 AM – 6:00 PM</div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-16">
        <div className="mb-20">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl mb-6">CONDITIONS WE TREAT</h2>
          <div className="h-2 w-32 bg-[#C85A3E]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-[#0A1828]">
          {[
            { title: 'EYE INJURIES', desc: 'Blunt trauma, cuts, and impact injuries to the eye or surrounding area' },
            { title: 'FOREIGN OBJECTS', desc: 'Metal, wood, glass, or debris embedded in or on the eye' },
            { title: 'CHEMICAL EXPOSURE', desc: 'Eye contact with household chemicals, cleaning agents, or industrial substances' },
            { title: 'SUDDEN VISION LOSS', desc: 'Rapid changes in vision clarity, blind spots, or complete loss in one or both eyes' },
            { title: 'PAINFUL RED EYE', desc: 'Severe redness, pain, or discharge suggesting infection or injury' },
            { title: 'FLASHES & FLOATERS', desc: 'New or sudden increase in floaters or flashing lights — a potential retinal emergency' }
          ].map((item) => (
            <div key={item.title} className="border-r-2 border-b-2 border-[#0A1828] p-10 hover:bg-[#C85A3E] hover:text-white group transition-all">
              <h3 className="font-display text-3xl mb-3 group-hover:text-white">{item.title}</h3>
              <p className="text-[#8B9A9F] text-lg group-hover:text-white/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-16 bg-[#0A1828] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl mb-20 text-center">WHY COME TO US</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'FASTER THAN THE ER', desc: 'Eye emergencies seen faster at our office than a general emergency room. We specialize in eye care — no waiting behind unrelated cases.' },
              { title: 'SPECIALIST CARE', desc: 'Dr. Virani is trained specifically in eye emergencies. You get expert optometric care from the first moment — not a general practitioner.' },
              { title: 'ADVANCED EQUIPMENT', desc: 'Slit-lamp examination, imaging, and diagnostic tools specifically designed for emergency eye evaluation on-site.' },
              { title: 'INSURANCE COVERED', desc: 'Most vision and medical insurance plans cover emergency eye exams. We verify coverage and handle the billing.' }
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-[#C85A3E] pl-8">
                <div className="w-16 h-16 bg-[#C85A3E] flex items-center justify-center mb-6">
                  <Shield size={32} />
                </div>
                <h3 className="font-display text-3xl mb-4">{item.title}</h3>
                <p className="text-[#B8C4CE] text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First Aid While You Wait */}
      <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl mb-20">WHILE YOU WAIT</h2>
          <div className="space-y-12">
            {[
              { num: '1', title: 'DO NOT RUB YOUR EYE', desc: 'Rubbing can worsen injuries and drive foreign objects deeper into the tissue' },
              { num: '2', title: 'RINSE WITH CLEAN WATER', desc: 'For chemical exposure — flush continuously with clean water for 15+ minutes before calling us' },
              { num: '3', title: 'COVER IF INJURED', desc: 'For physical injuries, gently cover the eye with a clean cloth — do not apply pressure' },
              { num: '4', title: 'CALL US IMMEDIATELY', desc: 'Call 281-916-2020 so we can prepare for your arrival and provide guidance' }
            ].map((step) => (
              <div key={step.num} className="flex items-start space-x-8 border-b-2 border-[#0A1828]/10 pb-8">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-[#C85A3E] text-white flex items-center justify-center flex-shrink-0">
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
            <AlertCircle size={48} className="text-[#C85A3E] flex-shrink-0" />
            <div>
              <h4 className="font-display text-2xl mb-2">AFTER-HOURS EMERGENCIES</h4>
              <p className="text-[#B8C4CE]">If you experience a vision-threatening emergency outside office hours, go directly to your nearest emergency room</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-16 bg-gradient-to-br from-[#C85A3E] to-[#0A1828] text-white text-center">
        <h2 className="font-display text-3xl sm:text-6xl lg:text-8xl mb-8">DON'T WAIT</h2>
        <p className="text-xl mb-4 opacity-90">Eye emergencies require immediate attention</p>
        <p className="text-2xl font-bold mb-12">Call us now: <a href="tel:281-916-2020" className="underline">281-916-2020</a></p>
        <a href="#book" className="inline-block w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-white text-[#0A1828] font-bold text-lg hover:bg-[#0A1828] hover:text-white transition-all">
          SCHEDULE URGENT VISIT
        </a>
      </section>
    </div>
  )
}
