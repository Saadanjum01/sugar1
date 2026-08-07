'use client'

import Link from 'next/link'
import { ArrowRight, Eye, Droplet, AlertTriangle, Glasses, Waves, ScanEye, Smile, Target } from 'lucide-react'

const highlights = [
  { icon: Eye, title: 'Comprehensive Eye Exams', blurb: 'A thorough assessment of vision and eye health, not just your prescription.' },
  { icon: Droplet, title: 'Diabetic Eye Exams', blurb: 'Early detection and management of diabetic retinopathy.' },
  { icon: AlertTriangle, title: 'Red Eye Care', blurb: 'Prompt care for irritation, infection, and painful red eyes.' },
  { icon: Glasses, title: 'Specialty Contact Lenses', blurb: 'Custom fittings for multifocal, toric, and hard-to-fit eyes.' },
]

const services = [
  { icon: Eye, title: 'Comprehensive Eye Exam', blurb: 'A full evaluation of vision and overall eye health.', slug: 'comprehensive-eye-exam' },
  { icon: Glasses, title: 'Contact Lens Exam', blurb: 'Precise fittings for daily, multifocal, and specialty lenses.', slug: 'contact-lens-exam' },
  { icon: Droplet, title: 'Diabetic Eye Exam', blurb: 'Detecting and managing diabetic retinopathy early.', slug: 'diabetic-eye-exam' },
  { icon: AlertTriangle, title: 'Emergency Eye Exam', blurb: 'Prompt care for injuries, foreign objects, and sudden vision changes.', slug: 'emergency-medical-exam' },
  { icon: Waves, title: 'Migraine Management', blurb: 'Identifying visual triggers and management strategies for migraines.', slug: 'migraine-management' },
  { icon: ScanEye, title: 'Myopia Control', blurb: 'Slowing nearsightedness progression in children and young adults.', slug: 'myopia-control' },
  { icon: Smile, title: 'Child Eye Exam', blurb: 'Specialized, engaging exams designed for young eyes.', slug: 'child-eye-exam' },
  { icon: Target, title: 'Sports Vision', blurb: 'Sharpening visual skills for a competitive athletic edge.', slug: 'sports-vision' },
]

const insurers = ['Eyemed', 'VSP', 'BCBS', 'Cigna', 'Medicare', 'United Healthcare', 'Spectera', 'Superior Vision', 'Aetna']
const payments = ['Cash', 'Credit Card', 'CareCredit', 'Zelle']

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#1E2749]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-gradient-to-br from-[#19203C] via-[#14192F] to-[#1E2749]"></div>
          <div className="relative">
            <img
              src="/images/hero-glasses.jpg"
              alt=""
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E2749] via-[#1E2749]/60 to-transparent"></div>
          </div>
        </div>

        <div className="relative z-10 w-full px-5 sm:px-8 lg:px-16 py-20 sm:py-32">
          <div className="max-w-4xl">
            <div className="text-[#B33951] text-xs sm:text-sm font-bold mb-4 sm:mb-6 tracking-widest">SUGAR LAND, TEXAS</div>
            <h1 className="font-display text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-[0.95] sm:leading-[0.9] mb-6 sm:mb-8">
              VISION<br/>
              BEYOND<br/>
              CLARITY
            </h1>
            <p className="text-base sm:text-xl text-[#C0C3CC] max-w-xl mb-8 sm:mb-12 leading-relaxed">
              Where advanced technology meets personalized care. Experience optometry designed for the modern patient.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#book" className="w-full sm:w-auto text-center px-8 sm:px-10 py-4 sm:py-5 bg-[#B33951] text-white text-sm font-bold hover:bg-[#1E2749] hover:scale-105 transition-all rounded-xl">
                SCHEDULE APPOINTMENT
              </a>
              <Link href="/services" className="w-full sm:w-auto text-center px-8 sm:px-10 py-4 sm:py-5 border-2 border-white text-white text-sm font-bold hover:bg-white hover:text-[#1E2749] transition-all rounded-xl">
                EXPLORE SERVICES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight cards */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 lg:px-16 bg-[#F6F6F8]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((h) => {
            const Icon = h.icon
            return (
              <div key={h.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-[#1E2749]/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#1E2749]" />
                </div>
                <h4 className="font-bold text-[#1E2749] text-[15.5px] mb-2">{h.title}</h4>
                <p className="text-[#59607A] text-sm leading-relaxed">{h.blurb}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Why choose us band */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 lg:px-16 bg-[#1E2749]">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 text-center">
          <div>
            <div className="font-display text-2xl sm:text-3xl font-black text-white mb-2">Patient-First</div>
            <p className="text-[#C0C3CC] text-sm leading-relaxed">Unhurried visits where every question gets answered — for every age.</p>
          </div>
          <div className="sm:border-x sm:border-white/15 sm:px-6">
            <div className="font-display text-2xl sm:text-3xl font-black text-white mb-2">Advanced Tech</div>
            <p className="text-[#C0C3CC] text-sm leading-relaxed">State-of-the-art diagnostics to catch issues early and treat them precisely.</p>
          </div>
          <div>
            <div className="font-display text-2xl sm:text-3xl font-black text-white mb-2">Family-Friendly</div>
            <p className="text-[#C0C3CC] text-sm leading-relaxed">From child eye exams to sports vision, care that grows with your family.</p>
          </div>
        </div>
      </section>

      {/* Doctor spotlight */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto bg-[#1E2749] rounded-3xl p-8 sm:p-12 grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-8 items-center text-center sm:text-left">
          <div className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] rounded-full overflow-hidden border-4 border-[#B33951] mx-auto sm:mx-0">
            <img src="/images/doctor-portrait.jpg" alt="Portrait of Dr. Shiroz Virani, O.D." className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="text-[#D5929F] text-xs font-bold mb-2 tracking-widest">MEET YOUR DOCTOR</div>
            <h3 className="font-display text-2xl sm:text-3xl font-black text-white mb-3">Shiroz Virani, O.D.</h3>
            <p className="text-[#C0C3CC] text-[15px] leading-relaxed mb-4">
              Dr. Virani and the Sugar Land Vision team take a patient-first approach to every visit — combining advanced technology with genuine, unhurried care for patients of every age.
            </p>
            <Link href="/doctor" className="inline-flex items-center gap-2 text-white font-bold text-sm hover:text-[#D5929F] transition-colors">
              Full Bio <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-[#B33951] text-xs font-bold mb-3 tracking-widest">WHAT WE OFFER</div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-[#1E2749] mb-3">Services for every stage of vision</h2>
          <p className="text-[#59607A] text-base">From a child&apos;s first exam to sports vision training, our care grows with you and your family.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-[#F6F6F8] hover:bg-white border border-transparent hover:border-[#1E2749]/10 hover:shadow-xl rounded-2xl p-6 flex flex-col gap-3 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1E2749]/10 group-hover:bg-[#B33951] flex items-center justify-center transition-colors">
                  <Icon size={18} className="text-[#1E2749] group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-bold text-[15px] text-[#1E2749]">{s.title}</h4>
                <p className="text-[13px] text-[#59607A] leading-relaxed">{s.blurb}</p>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Insurance */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 lg:px-16 bg-[#F6F6F8]">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="text-[#B33951] text-xs font-bold mb-3 tracking-widest">COVERAGE</div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-[#1E2749] mb-3">Insurances we accept</h2>
          <p className="text-[#59607A] text-[15px]">Don&apos;t see your plan listed? Give us a call — we&apos;re happy to help you understand your coverage.</p>
        </div>
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-3 mb-6">
          {insurers.map((name) => (
            <div key={name} className="bg-white rounded-full px-6 py-3 font-bold text-sm text-[#1E2749]">{name}</div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/insurance" className="text-[#B33951] font-bold text-sm hover:text-[#1E2749] transition-colors">
            View full insurance details &rarr;
          </Link>
        </div>
      </section>

      {/* Payment band */}
      <section className="py-10 px-5 sm:px-8 lg:px-16 bg-[#1E2749]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="font-display text-lg sm:text-xl font-black text-white">Payment options</div>
          <div className="flex flex-wrap justify-center gap-3">
            {payments.map((name) => (
              <div key={name} className="bg-white/10 rounded-full px-5 py-2.5 font-semibold text-[13px] text-[#C0C3CC]">{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto bg-[#1E2749] rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <div className="text-[#D5929F] text-xs font-bold mb-3 tracking-widest">CONTACT US</div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-white mb-6">Book your visit at Sugar Land Vision</h2>
            <div className="space-y-4 mb-6">
              <div>
                <div className="text-xs font-bold text-[#B33951] tracking-widest mb-1">ADDRESS</div>
                <p className="text-[#C0C3CC] text-[15px]">16126 Southwest Fwy, Ste 180<br />Sugar Land, TX 77479</p>
              </div>
              <div>
                <div className="text-xs font-bold text-[#B33951] tracking-widest mb-1">PHONE</div>
                <p className="text-[#C0C3CC] text-[15px]">281-916-2020</p>
              </div>
              <div>
                <div className="text-xs font-bold text-[#B33951] tracking-widest mb-1">HOURS</div>
                <p className="text-[#C0C3CC] text-[15px]">Tuesday &ndash; Friday, 9:30 AM &ndash; 6:00 PM</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-40">
              <img src="/images/office-exterior.jpg" alt="Sugar Land Vision office" className="w-full h-full object-cover" />
            </div>
          </div>
          <div id="book" className="bg-white rounded-2xl p-7">
            <h3 className="font-bold text-lg text-[#1E2749] mb-5">Request an appointment</h3>
            <form className="space-y-3.5">
              <input placeholder="Full name" required className="w-full px-4 py-3.5 rounded-xl border border-[#1E2749]/15 bg-[#F6F6F8] text-[#1E2749] focus:outline-none focus:border-[#B33951] transition-colors" />
              <input placeholder="Phone or email" required className="w-full px-4 py-3.5 rounded-xl border border-[#1E2749]/15 bg-[#F6F6F8] text-[#1E2749] focus:outline-none focus:border-[#B33951] transition-colors" />
              <input placeholder="Preferred day/time" className="w-full px-4 py-3.5 rounded-xl border border-[#1E2749]/15 bg-[#F6F6F8] text-[#1E2749] focus:outline-none focus:border-[#B33951] transition-colors" />
              <button type="submit" className="w-full py-4 bg-[#B33951] text-white font-bold text-sm rounded-xl hover:bg-[#1E2749] transition-all">
                SEND REQUEST
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
