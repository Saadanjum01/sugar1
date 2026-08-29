'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import {
  IconEye, IconLens, IconDrop, IconPulse, IconMigraine,
  IconTarget, IconFamily, IconBolt, IconSpark,
} from '@/components/BrandIcons'

const services = [
  { Icon: IconEye,      title: 'Comprehensive Eye Exam', blurb: 'More than a prescription check — we map your eye health, catch early disease, and walk you through every finding.',    slug: 'comprehensive-eye-exam' },
  { Icon: IconLens,     title: 'Contact Lens Exam',      blurb: 'Lenses fitted to feel right all day, not just in the exam room — including specialty options for tricky prescriptions.', slug: 'contact-lens-exam' },
  { Icon: IconDrop,     title: 'Diabetic Eye Exam',      blurb: 'Consistent monitoring that catches retinopathy and related changes before they have a chance to affect your sight.',     slug: 'diabetic-eye-exam' },
  { Icon: IconPulse,    title: 'Emergency Eye Exam',     blurb: 'Something in your eye, sudden pain, or a vision change that worries you? Call first — we triage quickly.',             slug: 'emergency-medical-exam' },
  { Icon: IconMigraine, title: 'Migraine Management',    blurb: 'We trace which visual factors may be behind your headaches and work through practical ways to reduce them.',            slug: 'migraine-management' },
  { Icon: IconTarget,   title: 'Myopia Control',         blurb: 'Evidence-based treatments that slow how fast your child\'s prescription changes — best started as early as possible.',  slug: 'myopia-control' },
  { Icon: IconFamily,   title: 'Child Eye Exam',         blurb: 'Calm, age-appropriate exams for young patients — we make sure kids leave without dreading the next one.',              slug: 'child-eye-exam' },
  { Icon: IconBolt,     title: 'Sports Vision',          blurb: 'Building the reaction time and depth perception that give athletes a measurable advantage in their sport.',             slug: 'sports-vision' },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Page header */}
      <div className="bg-[#FBF7F1] border-b border-[#E7EBEA]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 pt-16 pb-14 lg:pt-20 lg:pb-16">
          <div className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#0D5D62] mb-4">
            <IconSpark size={15} className="text-[#B85E31]" />
            What we offer
          </div>
          <h1
            className="font-display text-[38px] sm:text-[50px] text-[#16201E] mb-4"
            style={{ letterSpacing: '-0.03em' }}
          >
            Services for every stage of vision
          </h1>
          <p className="text-[#6E7C77] text-[16.5px] leading-relaxed max-w-xl">
            We see patients from age five through every stage of life — one practice that doesn&apos;t ask you to start over somewhere new as you get older.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-[100px] px-5 sm:px-8 lg:px-16">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-[#F7F8F7] hover:bg-white border border-transparent hover:border-[#E7EBEA] hover:shadow-lg rounded-2xl p-6 sm:p-7 flex flex-col gap-4 transition-all"
            >
              <div className="w-[46px] h-[46px] rounded-[12px] bg-[#E2F3F0] group-hover:bg-[#0D5D62] flex items-center justify-center transition-colors text-[#0D5D62] group-hover:text-white shrink-0">
                <service.Icon size={23} />
              </div>
              <div>
                <h4 className="font-semibold text-[16px] text-[#093F42] mb-2">{service.title}</h4>
                <p className="text-sm text-[#6E7C77] leading-relaxed">{service.blurb}</p>
              </div>
              <div className="mt-auto flex items-center gap-1 text-xs font-semibold text-[#37B2B8] opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight size={12} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA callout */}
      <section className="py-16 sm:py-20 lg:py-[100px] px-5 sm:px-8 lg:px-16">
        <div className="max-w-[1180px] mx-auto">
          <div
            className="relative rounded-[24px] overflow-hidden text-center"
            style={{ background: '#0D5D62', padding: '64px 48px' }}
          >
            <svg
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] opacity-[.1] pointer-events-none"
              viewBox="0 0 200 200" fill="none" aria-hidden="true"
            >
              <circle cx="100" cy="100" r="96" stroke="white" strokeWidth="1.4" />
              <circle cx="100" cy="100" r="70" stroke="white" strokeWidth="1.4" />
              <circle cx="100" cy="100" r="44" stroke="white" strokeWidth="1.4" />
            </svg>
            <div className="relative z-10 max-w-[520px] mx-auto">
              <h2
                className="font-display text-[36px] text-white mb-4"
                style={{ letterSpacing: '-0.03em' }}
              >
                Not sure which service you need?
              </h2>
              <p className="text-[#C9E5E3] text-[16px] mb-8 leading-relaxed">
                Give us a call and we&apos;ll help point you in the right direction — no pressure, no jargon.
              </p>
              <a
                href="/book#appointment-form"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#0D5D62] rounded-xl text-[14.5px] font-semibold hover:bg-white/90 transition-opacity"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
