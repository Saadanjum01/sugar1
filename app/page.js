'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import {
  IconEye, IconGlasses, IconLens, IconFamily, IconDrop, IconPulse,
  IconMigraine, IconTarget, IconBolt, IconId, IconList, IconCardPay,
  IconCash, IconWallet, IconSend, IconCal, IconCheck, IconPin, IconPhone,
  IconClock, IconHeart, IconShield, IconCar, IconSpark,
} from '@/components/BrandIcons'
import HeroSlideshow from '@/components/HeroSlideshow'
import NewsletterForm from '@/components/NewsletterForm'

/* ── Data ─────────────────────────────────────────────── */

const services = [
  { Icon: IconEye,      title: 'Comprehensive Eye Exam', blurb: 'A full check of how well you see and how healthy your eyes are underneath.',               slug: 'comprehensive-eye-exam' },
  { Icon: IconLens,     title: 'Contact Lens Exam',      blurb: 'Fittings for daily, multifocal and specialty lenses, including the ones that are hard to fit.',  slug: 'contact-lens-exam' },
  { Icon: IconDrop,     title: 'Diabetic Eye Exam',      blurb: 'Regular monitoring so diabetic retinopathy gets caught early.',                        slug: 'diabetic-eye-exam' },
  { Icon: IconPulse,    title: 'Emergency Eye Exam',     blurb: 'Quick help with injuries, something stuck in your eye, or a sudden change in vision.',       slug: 'emergency-medical-exam' },
  { Icon: IconMigraine, title: 'Migraine Management',    blurb: 'Working out which visual triggers are behind your headaches, and what actually helps.',                slug: 'migraine-management' },
  { Icon: IconTarget,   title: 'Myopia Control',         blurb: 'Slowing down nearsightedness in children and young adults.',                   slug: 'myopia-control' },
  { Icon: IconFamily,   title: 'Child Eye Exam',         blurb: 'Short, friendly exams that keep kids comfortable the whole way through.',                 slug: 'child-eye-exam' },
  { Icon: IconBolt,     title: 'Sports Vision',          blurb: 'Training the visual skills athletes lean on, like tracking and reaction time.',                   slug: 'sports-vision' },
]

const firstVisitSteps = [
  { num: '1', title: 'Arrival and paperwork',   timing: '',                  body: "Quick check in with our welcoming staff who will help with going over items on our iPad." },
  { num: '2', title: 'Imaging and testing',     timing: 'About 15 minutes',  body: "A few quick scans that map out your eye health before you see the doctor. Nothing uncomfortable." },
  { num: '3', title: 'Time with Dr. Virani',   timing: 'About 25 minutes',  body: "Comprehensive exam to address the reason for your visit. Answering your questions and building a plan of action." },
  { num: '4', title: 'Frames',                   timing: 'Take your time',  body: "Our opticians can help you find a style which fits your needs and your price point." },
]

const whatToBring = [
  { Icon: IconId,      label: 'Photo ID' },
  { Icon: IconCardPay, label: 'Insurance card' },
  { Icon: IconGlasses, label: 'Current glasses and/or contacts' },
  { Icon: IconList,    label: 'A list of medications' },
  { Icon: IconEye,     label: 'Sunglasses for the drive home' },
  { Icon: IconFamily,  label: 'A guardian, for patients under 18' },
]

const insurers = [
  { name: 'EyeMed',           logo: '/images/insurance/eyemed.svg' },
  { name: 'VSP',              logo: '/images/insurance/vsp.png' },
  { name: 'Blue Cross Blue Shield', logo: '/images/insurance/bcbs.svg' },
  { name: 'Cigna',            logo: '/images/insurance/cigna.png' },
  { name: 'Medicare',         logo: '/images/insurance/medicare.png' },
  { name: 'UnitedHealthcare', logo: '/images/insurance/unitedhealthcare.png' },
  { name: 'Spectera',         logo: '/images/insurance/spectera.png' },
  { name: 'Superior Vision',  logo: '/images/insurance/superiorvision.png' },
  { name: 'Aetna',            logo: '/images/insurance/aetna.png' },
]

const payments = [
  { name: 'Cash',        Icon: IconCash },
  { name: 'Credit Card', Icon: IconCardPay },
  { name: 'CareCredit',  Icon: IconWallet },
  { name: 'Zelle',       Icon: IconSend },
]

const faqs = [
  {
    q: 'How long does a first appointment take?',
    a: "We advise you to expect it to take about an hour. If you are looking for new frames we suggest giving yourself an additional 30 mins.",
  },
  {
    q: 'Do you take my insurance?',
    a: "We accept most major vision and medical plans, including EyeMed, VSP, Blue Cross Blue Shield, Cigna, Medicare, UnitedHealthcare, Spectera, Superior Vision and Aetna. We check your benefits before your visit. Call us if your plan is not on the list.",
  },
  {
    q: "What if I don't have vision insurance?",
    a: "We always have a variety of promotions and prompt pay options. These can't be combined with insurance, so they are just for you.",
  },
  {
    q: 'How young can my child be for a first exam?',
    a: "We see children starting at age five (when they are able to identify letters).",
  },
  {
    q: 'Do you handle eye emergencies?',
    a: "Yes. Irritation, eye infections, something stuck in your eye, injuries, sudden changes in vision. Call and we will get you in as fast as we can. For serious trauma or sudden total vision loss, go straight to an emergency room.",
  },
  {
    q: 'Can I use my own prescription to buy frames here?',
    a: "Of course. Bring a current prescription from any provider and our optician will help you find frames and lenses to match it.",
  },
  {
    q: 'Do I need an appointment, or can I walk in?',
    a: "Appointments are advised to ensure minimized wait time. Need same day? Call our office for immediate assistance.",
  },
]

/* ── Sub-components ────────────────────────────────────── */

function Kicker({ Icon, children }) {
  return (
    <div className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#0D5D62] mb-4">
      {Icon && <Icon size={15} className="text-[#B85E31]" />}
      {children}
    </div>
  )
}

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="border-b border-[#E7EBEA] last:border-b-0 first:border-t first:border-t-[#E7EBEA]">
      <button
        className="w-full flex items-center justify-between py-6 pr-10 text-left gap-4 relative"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="font-display font-medium text-[#16201E] text-[18px]" style={{ letterSpacing: '-0.025em' }}>
          {faq.q}
        </span>
        <ChevronDown
          size={18}
          className={`text-[#0D5D62] shrink-0 transition-transform duration-200 absolute right-2 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="pb-6 pr-14 text-[#6E7C77] text-[15px] leading-relaxed">
          {faq.a}
        </div>
      )}
    </div>
  )
}

/* ── Page ──────────────────────────────────────────────── */

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="min-h-screen bg-white text-[#16201E]">

      {/* ── Hero ──
          -mt-32 sm:-mt-28 cancels the layout.js padding-top so the hero
          bleeds behind the transparent fixed header. */}
      <section
        id="main"
        className="relative -mt-32 sm:-mt-28 overflow-hidden"
        style={{ background: 'linear-gradient(120deg, #062931 0%, #083438 42%, #0D5D62 70%, #37B2B8 100%)' }}
      >
        {/* Decorative ring */}
        <svg
          className="absolute top-[-120px] right-[-120px] w-[460px] h-[460px] opacity-40 z-0 pointer-events-none"
          viewBox="0 0 200 200" fill="none" aria-hidden="true"
        >
          <circle cx="100" cy="100" r="96" stroke="white" strokeWidth="1" strokeOpacity=".5" />
          <circle cx="100" cy="100" r="72" stroke="white" strokeWidth="1" strokeOpacity=".5" />
          <circle cx="100" cy="100" r="48" stroke="#E2895B" strokeWidth="1.4" />
        </svg>

        <div className="relative z-10 max-w-[1180px] mx-auto px-5 sm:px-8 pt-24 sm:pt-36 lg:pt-[152px] pb-14 sm:pb-24 lg:pb-[104px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[70px] items-center">

          {/* Left — copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/14 border border-white/22 rounded-full px-4 py-1.5 mb-6 text-[13px] font-semibold text-white">
              <span className="w-[7px] h-[7px] rounded-full bg-[#E2895B] shrink-0" />
              Now accepting new patients
            </div>
            <h1
              className="font-display text-[38px] sm:text-[52px] lg:text-[58px] mb-6"
              style={{ letterSpacing: '-0.03em', lineHeight: 1.1, color: '#ffffff' }}
            >
              Eye care for your whole family.
            </h1>
            <p className="text-[18px] max-w-[460px] mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.84)' }}>
              Your new practice in Sugar Land who puts the patient first. Our doctors and team use the latest technology to ensure this is the best eye doctor visit.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="/book#appointment-form"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#093F42] rounded-xl text-[14.5px] font-semibold hover:opacity-90 transition-opacity"
              >
                <IconCal size={16} />
                Book an appointment
              </a>
              <a
                href="#first-visit"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/50 rounded-xl text-[14.5px] font-semibold hover:bg-white/10 transition-colors"
                style={{ color: 'white' }}
              >
                See what a visit is like
              </a>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {['Most insurance accepted', 'Ages 5 and up', 'Same-week openings'].map((fact) => (
                <span key={fact} className="flex items-center gap-2 text-[13.5px] font-medium" style={{ color: 'white' }}>
                  <IconCheck size={16} />
                  {fact}
                </span>
              ))}
            </div>
          </div>

          {/* Right — photo slideshow */}
          <div className="relative">
            <HeroSlideshow />
            <div
              className="absolute -bottom-5 left-4 right-4 sm:left-auto sm:right-auto sm:-bottom-6 sm:-left-6 z-20 bg-white rounded-2xl px-5 py-4 sm:max-w-[240px]"
              style={{ boxShadow: '0 20px 40px -12px rgba(6,38,40,.35)' }}
            >
              <p className="font-display font-semibold text-[14.5px] text-[#093F42] mb-0.5" style={{ letterSpacing: '-0.015em' }}>
                Locally owned and operated
              </p>
              <p className="text-[13px] text-[#6E7C77] leading-snug">
                Our team has over 30 years of experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="border-y border-[#E7EBEA]">
        <div className="max-w-[1180px] mx-auto grid grid-cols-2 lg:grid-cols-4">
          {[
            { Icon: IconCal,    title: 'Open Tuesday to Friday',  body: '9:30 AM to 6:00 PM, by appointment' },
            { Icon: IconShield, title: 'Insurance Verification',   body: 'Insurance savings verified before your appointment' },
            { Icon: IconFamily, title: 'All ages',                 body: 'Exams to address all eye health areas' },
            { Icon: IconPin,    title: 'Easy Parking',              body: 'Off the Southwest Freeway in front of Target, parking is free' },
          ].map((cell, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 px-4 py-5 sm:px-7 sm:py-7 ${
                i % 2 === 0 ? 'border-r border-[#E7EBEA]' : ''
              } ${
                i < 2 ? 'border-b border-[#E7EBEA] lg:border-b-0' : ''
              } ${
                i > 0 && i % 2 !== 0 ? 'lg:border-l lg:border-[#E7EBEA]' : ''
              } ${
                i === 2 ? 'lg:border-l lg:border-[#E7EBEA]' : ''
              } ${
                i === 3 ? 'lg:border-l lg:border-[#E7EBEA]' : ''
              }`}
            >
              <div className="w-9 h-9 rounded-xl bg-[#E2F3F0] flex items-center justify-center shrink-0">
                <cell.Icon size={18} className="text-[#0D5D62]" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-[13.5px] sm:text-[14.5px] text-[#16201E] mb-1" style={{ letterSpacing: '-0.015em' }}>
                  {cell.title}
                </h4>
                <p className="text-[12px] sm:text-[13px] text-[#6E7C77] leading-snug">{cell.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-16 sm:py-24 lg:py-[100px] scroll-mt-[130px] bg-[#E2F3F0]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div className="max-w-[640px] mx-auto text-center mb-14">
            <Kicker Icon={IconSpark}>What we offer</Kicker>
            <h2 className="font-display text-[28px] sm:text-[42px] text-[#16201E] mb-4" style={{ letterSpacing: '-0.03em' }}>
              Services we offer
            </h2>
            <p className="text-[#6E7C77] text-[16.5px] leading-relaxed">
              Our doctors can help all your eye care needs from your yearly eye exam, eye infections and managing chronic diseases like cataracts or glaucoma.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-white border border-[rgba(15,50,52,.07)] rounded-2xl p-6 flex flex-col gap-4 transition-all hover:-translate-y-1"
                style={{ boxShadow: '0 1px 2px rgba(16,40,42,.05),0 16px 32px -22px rgba(13,93,98,.2)' }}
              >
                <div className="w-[46px] h-[46px] rounded-xl bg-[#E2F3F0] flex items-center justify-center text-[#0D5D62]">
                  <s.Icon size={23} />
                </div>
                <h3 className="font-display font-medium text-[19px] text-[#16201E]" style={{ letterSpacing: '-0.02em' }}>
                  {s.title}
                </h3>
                <p className="text-[13.5px] text-[#6E7C77] leading-relaxed">{s.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── First Visit ── */}
      <section
        id="first-visit"
        className="py-16 sm:py-24 lg:py-[100px] scroll-mt-[130px]"
        style={{ background: '#0D5D62' }}
      >
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div className="max-w-[640px] mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-white mb-4">
              <IconList size={15} className="text-[#E2895B]" />
              Your first visit
            </div>
            <h2 className="font-display text-[28px] sm:text-[42px] text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
              What happens at your first visit
            </h2>
            <p className="text-[16.5px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
              First appointments take an hour.
            </p>
          </div>

          {/* 4-step grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px] mb-8">
            {firstVisitSteps.map((step) => (
              <div key={step.num} className="py-1.5 px-1">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#E2895B] text-white font-display font-semibold text-[15px] mb-5">
                  {step.num}
                </div>
                <h3 className="font-display font-medium text-[18px] text-white mb-2" style={{ letterSpacing: '-0.02em' }}>
                  {step.title}
                </h3>
                <p className="text-[14px] leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.8)' }}>{step.body}</p>
                <span className="text-[12.5px] font-semibold text-[#F4E1D8]">{step.timing}</span>
              </div>
            ))}
          </div>

          {/* What to bring */}
          <div className="bg-white rounded-[20px] p-6 sm:p-9 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 sm:gap-10 items-center shadow-xl">
            <div>
              <h3 className="font-display text-[24px] text-[#16201E] mb-2" style={{ letterSpacing: '-0.02em' }}>
                What to bring
              </h3>
              <p className="text-[14.5px] text-[#6E7C77]">Six things to bring to your appointment.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
              {whatToBring.map((item) => (
                <div key={item.label} className="flex items-center gap-[10px] text-[14px] font-medium text-[#16201E]">
                  <item.Icon size={17} className="text-[#0D5D62] shrink-0" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Doctor ── */}
      <section id="team" className="py-16 sm:py-24 lg:py-[100px] scroll-mt-[130px] bg-[#F4E1D8]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-center">

          {/* Avatar / photo */}
          <div
            className="rounded-[20px] overflow-hidden relative"
            style={{ aspectRatio: '3/3.6', boxShadow: '0 26px 52px -24px rgba(13,93,98,.28)' }}
          >
            <img
              src="/images/doctor-portrait.jpg"
              alt="Dr. Shiroz Virani, O.D."
              className="w-full h-full object-cover"
            />
          </div>

          {/* Copy */}
          <div>
            <Kicker Icon={IconEye}>Meet your doctor</Kicker>
            <h2 className="font-display text-[28px] sm:text-[40px] text-[#16201E] mb-1.5" style={{ letterSpacing: '-0.03em' }}>
              Shiroz Virani, O.D.
            </h2>
            <p className="text-[14.5px] font-semibold text-[#37B2B8] mb-6">
              Optometrist and founder, First Colony Vision
            </p>
            <p className="text-[16px] text-[#6E7C77] leading-relaxed mb-4 max-w-[540px]">
              Dr. Virani opened First Colony Vision so she could practice the way she thinks eye care should work. Ask first, listen properly, then examine.
            </p>
            <p className="text-[16px] text-[#6E7C77] leading-relaxed mb-6 max-w-[540px]">
              She and her team take their time with every exam and explain what they are seeing as they go. You should walk out understanding your own eyes, not just holding a prescription.
            </p>
            <div className="flex flex-col gap-3 mb-8">
              {[
                'Doctor of Optometry',
                'Kids and family vision care',
                'Specialty and hard to fit contact lenses',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3 text-[14.5px] font-medium text-[#16201E]">
                  <IconCheck size={18} className="text-[#37B2B8] shrink-0" />
                  {point}
                </div>
              ))}
            </div>
            <a
              href="/book#appointment-form"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D5D62] text-white rounded-xl text-[14.5px] font-semibold hover:bg-[#093F42] transition-colors"
            >
              Book with Dr. Virani
            </a>
          </div>
        </div>
      </section>

      {/* ── Practice Gallery ── */}
      <section className="py-16 sm:py-24 lg:py-[100px] bg-white">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div className="max-w-[640px] mx-auto text-center mb-14">
            <Kicker Icon={IconHeart}>Inside the practice</Kicker>
            <h2 className="font-display text-[28px] sm:text-[42px] text-[#16201E] mb-4" style={{ letterSpacing: '-0.03em' }}>
              A welcoming office focused on your eye health
            </h2>
            <p className="text-[#6E7C77] text-[16.5px] leading-relaxed">
              Step into our office to meet your eye care team.
            </p>
          </div>

          {/* 3-photo gallery: stacks on mobile, tall-left + 2-right on sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-4 sm:h-[460px]">
            <div className="rounded-[18px] overflow-hidden relative h-56 sm:h-auto sm:row-span-2 group">
              <img
                src="/images/office-exterior.jpg"
                alt="First Colony Vision practice"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(9,63,66,.5)]" />
              <span className="absolute left-[18px] bottom-[15px] z-10 text-white font-display font-semibold text-[15px]" style={{ letterSpacing: '-0.015em' }}>
                Comprehensive exams to address your eye health needs
              </span>
            </div>
            <div className="rounded-[18px] overflow-hidden relative h-44 sm:h-auto group">
              <img
                src="/images/frames/frame-05.jpg"
                alt="Eyewear collection"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(9,63,66,.5)]" />
              <span className="absolute left-[18px] bottom-[15px] z-10 text-white font-display font-semibold text-[15px]" style={{ letterSpacing: '-0.015em' }}>
                Quality eyewear for everyone
              </span>
            </div>
            <div className="rounded-[18px] overflow-hidden relative h-44 sm:h-auto group">
              <img
                src="/images/frames-tomford.jpg"
                alt="Frames display"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(9,63,66,.5)]" />
              <span className="absolute left-[18px] bottom-[15px] z-10 text-white font-display font-semibold text-[15px]" style={{ letterSpacing: '-0.015em' }}>
                Newest advanced lens technology
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Insurance ── */}
      <section id="insurance" className="py-16 sm:py-24 lg:py-[100px] bg-[#FBF7F1] scroll-mt-[130px]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div className="max-w-[640px] mx-auto text-center mb-14">
            <Kicker Icon={IconShield}>Coverage</Kicker>
            <h2 className="font-display text-[28px] sm:text-[42px] text-[#16201E] mb-4" style={{ letterSpacing: '-0.03em' }}>
              Insurance we accept
            </h2>
            <p className="text-[#6E7C77] text-[16.5px] leading-relaxed">
              We work with most major vision and medical plans. Our team works to verify your coverage before your visit.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[14px] mb-7">
            {insurers.map((ins) => (
              <div
                key={ins.name}
                className={`border rounded-2xl h-[92px] flex items-center justify-center p-5 transition-all hover:-translate-y-0.5 ${
                  ins.dark
                    ? 'bg-[#093F42] border-transparent'
                    : 'bg-white border-[rgba(15,50,52,.07)]'
                }`}
                style={{ boxShadow: ins.dark ? 'none' : '0 1px 2px rgba(16,40,42,.05),0 16px 32px -22px rgba(13,93,98,.2)' }}
              >
                <img src={ins.logo} alt={ins.name} className="max-w-full max-h-[44px] w-auto object-contain" />
              </div>
            ))}
            <div className="border border-transparent rounded-2xl h-[92px] flex items-center justify-center bg-[#E2F3F0] font-display font-semibold text-[14px] text-[#093F42] text-center px-4" style={{ letterSpacing: '-0.015em' }}>
              And several more
            </div>
          </div>

          <p className="text-[14.5px] text-[#6E7C77] text-center">
            Don&apos;t see your plan? Call us at{' '}
            <a href="tel:281-916-2020" className="text-[#0D5D62] font-semibold hover:text-[#37B2B8] transition-colors">
              281-916-2020
            </a>.
          </p>
        </div>
      </section>

      {/* ── Payment ── */}
      <section className="py-16 sm:py-24 lg:py-[100px] bg-[#E2F3F0]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div
            className="bg-white border border-[rgba(15,50,52,.07)] rounded-[20px] p-6 sm:p-12 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 sm:gap-11 items-center"
            style={{ boxShadow: '0 1px 2px rgba(16,40,42,.05),0 16px 32px -22px rgba(13,93,98,.2)' }}
          >
            <div>
              <h2 className="font-display text-[30px] text-[#16201E] mb-2.5" style={{ letterSpacing: '-0.03em' }}>
                Ways to pay
              </h2>
              <p className="text-[15px] text-[#6E7C77]">Variety of payment options.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {payments.map((p) => (
                <div
                  key={p.name}
                  className="bg-white border border-[#E7EBEA] rounded-xl px-5 py-[17px] flex items-center gap-3"
                >
                  <p.Icon size={20} className="text-[#B85E31] shrink-0" />
                  <span className="font-display font-semibold text-[14.5px] text-[#093F42]" style={{ letterSpacing: '-0.015em' }}>
                    {p.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-16 sm:py-24 lg:py-[100px] scroll-mt-[130px] bg-white">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div className="max-w-[640px] mx-auto text-center mb-14">
            <Kicker Icon={IconList}>Common questions</Kicker>
            <h2 className="font-display text-[28px] sm:text-[42px] text-[#16201E] mb-4" style={{ letterSpacing: '-0.03em' }}>
              Questions we get a lot
            </h2>
            <p className="text-[#6E7C77] text-[16.5px] leading-relaxed">
              Still need answers? Give us a call.
            </p>
          </div>
          <div className="max-w-[820px] mx-auto">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Location ── */}
      <section id="location" className="py-16 sm:py-24 lg:py-[100px] bg-[#E2F3F0] scroll-mt-[130px]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <Kicker Icon={IconPin}>Come see us</Kicker>
            <h2 className="font-display text-[28px] sm:text-[40px] text-[#16201E] mb-8" style={{ letterSpacing: '-0.03em' }}>
              Find us in Sugar Land
            </h2>
            {[
              { Icon: IconPin,   title: 'Address',  body: <>16126 Southwest Fwy, Ste 180<br />Sugar Land, TX 77479</> },
              { Icon: IconClock, title: 'Hours',    body: <>Tuesday thru Friday, 9:30 AM to 6:00 PM<br />Closed Saturday through Monday</> },
              { Icon: IconPhone, title: 'Phone',    body: <a href="tel:281-916-2020" className="text-[#0D5D62] font-medium hover:text-[#37B2B8] transition-colors">281-916-2020</a> },
              { Icon: IconCar,   title: 'Parking',  body: 'Free surface parking directly outside Suite 180, with step-free access to the entrance.' },
            ].map((detail, i) => (
              <div
                key={i}
                className={`flex gap-4 py-5 ${i === 0 ? 'border-t border-b border-[#E7EBEA]' : 'border-b border-[#E7EBEA]'}`}
              >
                <div className="w-9 h-9 rounded-xl bg-[#E2F3F0] flex items-center justify-center shrink-0">
                  <detail.Icon size={18} className="text-[#0D5D62]" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-[14px] text-[#16201E] mb-1" style={{ letterSpacing: '-0.01em' }}>
                    {detail.title}
                  </h4>
                  <p className="text-[14.5px] text-[#6E7C77] leading-relaxed">{detail.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Office photo */}
          <div
            className="rounded-[20px] overflow-hidden"
            style={{ aspectRatio: '4/3.3', boxShadow: '0 26px 52px -24px rgba(13,93,98,.28)' }}
          >
            <img
              src="/images/office-exterior.jpg"
              alt="First Colony Vision office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="book" className="py-16 sm:py-24 lg:py-[100px] scroll-mt-[130px]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div
            className="relative rounded-[24px] overflow-hidden text-center px-6 py-14 sm:px-12 sm:py-20"
            style={{ background: '#0D5D62' }}
          >
            {/* Ring decoration */}
            <svg
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-[.12] pointer-events-none"
              viewBox="0 0 200 200" fill="none" aria-hidden="true"
            >
              <circle cx="100" cy="100" r="96" stroke="white" strokeWidth="1.4" />
              <circle cx="100" cy="100" r="70" stroke="white" strokeWidth="1.4" />
              <circle cx="100" cy="100" r="44" stroke="white" strokeWidth="1.4" />
            </svg>
            <div className="relative z-10 max-w-[560px] mx-auto">
              <h2 className="font-display text-[28px] sm:text-[44px] text-white mb-4" style={{ letterSpacing: '-0.03em' }}>
                Come and see us.
              </h2>
              <p className="text-[16.5px] text-[#C9E5E3] mb-8 leading-relaxed">
                Requesting an appointment online takes about a minute. We will confirm by phone or email and check your insurance before you arrive.
              </p>
              <a
                href="/book#appointment-form"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#0D5D62] rounded-xl text-[14.5px] font-semibold hover:bg-white/90 transition-opacity"
              >
                <IconCal size={16} />
                Book an appointment
              </a>
              <p className="mt-5 text-[14px] text-[#A2CCC9]">
                Or call us at{' '}
                <a href="tel:281-916-2020" className="text-white font-semibold hover:text-[#37B2B8] transition-colors">
                  281-916-2020
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-16 sm:py-24 lg:py-[100px] bg-[#E2F3F0]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div
            className="bg-white border border-[rgba(15,50,52,.07)] rounded-[20px] p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 sm:gap-10 items-center"
            style={{ boxShadow: '0 1px 2px rgba(16,40,42,.05),0 16px 32px -22px rgba(13,93,98,.2)' }}
          >
            <div>
              <h3 className="font-display text-[25px] text-[#16201E] mb-2" style={{ letterSpacing: '-0.025em' }}>
                A few emails a year, that is all
              </h3>
              <p className="text-[14.5px] text-[#6E7C77]">
                Eye health tips you can actually use, plus the occasional clinic update. The best part…exclusive discounts! A few times a year and no more than that.
              </p>
            </div>
            <NewsletterForm variant="light" />
          </div>
        </div>
      </section>


    </div>
  )
}
