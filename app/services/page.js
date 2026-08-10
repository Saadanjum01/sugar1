'use client'

import Link from 'next/link'
import { Eye, Glasses, Droplet, AlertTriangle, Waves, ScanEye, Smile, Target } from 'lucide-react'

const services = [
  {
    icon: Eye,
    title: 'Comprehensive Eye Exam',
    blurb: 'A full evaluation of vision and overall eye health.',
    slug: 'comprehensive-eye-exam'
  },
  {
    icon: Glasses,
    title: 'Contact Lens Exam',
    blurb: 'Precise fittings for daily, multifocal, and specialty lenses.',
    slug: 'contact-lens-exam'
  },
  {
    icon: Droplet,
    title: 'Diabetic Eye Exam',
    blurb: 'Detecting and managing diabetic retinopathy early.',
    slug: 'diabetic-eye-exam'
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Eye Exam',
    blurb: 'Prompt care for injuries, foreign objects, and sudden vision changes.',
    slug: 'emergency-medical-exam'
  },
  {
    icon: Waves,
    title: 'Migraine Management',
    blurb: 'Identifying visual triggers and management strategies for migraines.',
    slug: 'migraine-management'
  },
  {
    icon: ScanEye,
    title: 'Myopia Control',
    blurb: 'Slowing nearsightedness progression in children and young adults.',
    slug: 'myopia-control'
  },
  {
    icon: Smile,
    title: 'Child Eye Exam',
    blurb: 'Specialized, engaging exams designed for young eyes.',
    slug: 'child-eye-exam'
  },
  {
    icon: Target,
    title: 'Sports Vision',
    blurb: 'Sharpening visual skills for a competitive athletic edge.',
    slug: 'sports-vision'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 sm:py-24 lg:py-28 px-5 sm:px-8 lg:px-16 bg-[#1E2749] text-white text-center">
        <div className="text-[#D5929F] text-xs sm:text-sm font-bold mb-4 tracking-widest">WHAT WE OFFER</div>
        <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black mb-5">
          Services for every stage of vision
        </h1>
        <p className="text-base sm:text-lg text-[#C0C3CC] max-w-2xl mx-auto leading-relaxed">
          From a child's first exam to sports vision training, our care grows with you and your family. Select a service below to learn more.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-[#F6F6F8] hover:bg-white border border-transparent hover:border-[#1E2749]/10 hover:shadow-xl rounded-2xl p-6 sm:p-7 flex flex-col gap-4 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-[#1E2749]/10 group-hover:bg-[#B33951] flex items-center justify-center transition-colors">
                  <Icon size={20} className="text-[#1E2749] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-[16.5px] text-[#1E2749] mb-2">{service.title}</h4>
                  <p className="text-sm text-[#59607A] leading-relaxed">{service.blurb}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 lg:px-16 bg-[#F6F6F8] text-center">
        <h2 className="font-display text-2xl sm:text-4xl font-black text-[#1E2749] mb-4">
          Not sure which service you need?
        </h2>
        <p className="text-[#59607A] text-base sm:text-lg max-w-xl mx-auto mb-8">
          Give us a call and our team will help point you in the right direction.
        </p>
        <a
          href="/book"
          className="inline-block px-9 py-4 bg-[#B33951] text-white font-bold text-sm hover:bg-[#1E2749] transition-all rounded-xl"
        >
          BOOK AN APPOINTMENT
        </a>
      </section>
    </div>
  )
}
