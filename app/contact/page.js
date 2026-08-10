'use client'

import Link from 'next/link'
import { Phone, CalendarDays, MapPin, Clock, Mail } from 'lucide-react'
import NewsletterForm from '@/components/NewsletterForm'

const methods = [
  {
    icon: Phone,
    label: 'Call us',
    body: '281-916-2020',
    note: 'Fastest way to reach the front desk.',
    href: 'tel:281-916-2020',
    cta: 'Call now',
  },
  {
    icon: CalendarDays,
    label: 'Book online',
    body: 'Request an appointment',
    note: 'Takes under a minute — we confirm by phone.',
    href: '/book',
    cta: 'Book appointment',
    primary: true,
  },
  {
    icon: Mail,
    label: 'Email us',
    body: 'info@sugarlandvision.com',
    note: 'For non-urgent questions about your visit.',
    href: 'mailto:info@sugarlandvision.com',
    cta: 'Send email',
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-14 sm:py-16 px-5 sm:px-8 lg:px-16 bg-[#1E2749] text-white text-center">
        <div className="text-[#D5929F] text-xs sm:text-sm font-bold mb-4 tracking-widest">CONTACT US</div>
        <h1 className="font-display text-3xl sm:text-5xl font-black mb-4">We&apos;d love to hear from you</h1>
        <p className="text-base sm:text-lg text-[#C0C3CC] max-w-xl mx-auto leading-relaxed">
          Call, book online, or drop us a note — whichever is easiest for you.
        </p>
      </section>

      {/* Contact methods */}
      <section className="px-5 sm:px-8 lg:px-16 -mt-8 sm:-mt-10 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
          {methods.map((m) => {
            const Icon = m.icon
            return (
              <div
                key={m.label}
                className={`rounded-2xl p-6 flex flex-col shadow-lg ${
                  m.primary ? 'bg-[#B33951] text-white' : 'bg-white border border-[#1E2749]/10'
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
                    m.primary ? 'bg-white/15' : 'bg-[#1E2749]/8'
                  }`}
                >
                  <Icon size={20} className={m.primary ? 'text-white' : 'text-[#1E2749]'} />
                </div>
                <div className={`text-[11px] font-bold tracking-widest mb-1.5 ${m.primary ? 'text-white/70' : 'text-[#B33951]'}`}>
                  {m.label.toUpperCase()}
                </div>
                <p className={`font-bold text-[17px] mb-1.5 ${m.primary ? 'text-white' : 'text-[#1E2749]'}`}>{m.body}</p>
                <p className={`text-sm leading-relaxed mb-5 ${m.primary ? 'text-white/80' : 'text-[#59607A]'}`}>{m.note}</p>
                <Link
                  href={m.href}
                  className={`mt-auto text-center py-3 rounded-xl font-bold text-sm transition-all ${
                    m.primary
                      ? 'bg-white text-[#B33951] hover:bg-[#1E2749] hover:text-white'
                      : 'bg-[#F6F6F8] text-[#1E2749] hover:bg-[#1E2749] hover:text-white'
                  }`}
                >
                  {m.cta}
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* Office info + map */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
          <div>
            <div className="text-[#B33951] text-xs font-bold mb-3 tracking-widest">VISIT US</div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1E2749] mb-7">Our Sugar Land office</h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F6F6F8] flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#B33951]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1E2749] tracking-widest mb-1">ADDRESS</div>
                  <p className="text-[#59607A] text-[15px] leading-relaxed">
                    16126 Southwest Fwy, Ste 180<br />Sugar Land, TX 77479
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F6F6F8] flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-[#B33951]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1E2749] tracking-widest mb-1">HOURS</div>
                  <p className="text-[#59607A] text-[15px] leading-relaxed">
                    Tuesday &ndash; Friday<br />9:30 AM &ndash; 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F6F6F8] flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-[#B33951]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1E2749] tracking-widest mb-1">PHONE</div>
                  <a href="tel:281-916-2020" className="text-[#59607A] text-[15px] hover:text-[#B33951] transition-colors">
                    281-916-2020
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-44 mt-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/office-exterior.jpg" alt="Sugar Land Vision office exterior" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden h-[420px] lg:h-full lg:min-h-[520px]">
            <iframe
              title="Sugar Land Vision location map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=16126+Southwest+Fwy+Ste+180+Sugar+Land+TX+77479&output=embed"
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-14 sm:py-16 px-5 sm:px-8 lg:px-16 bg-[#F6F6F8]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[#B33951] text-xs font-bold mb-3 tracking-widest">STAY IN TOUCH</div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1E2749] mb-3">Join our newsletter</h2>
          <p className="text-[#59607A] text-[15.5px] mb-7 max-w-lg mx-auto">
            Eye health tips, seasonal reminders, and news from Sugar Land Vision — straight to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterForm variant="light" />
          </div>
        </div>
      </section>

      {/* Emergency banner */}
      <section className="py-10 px-5 sm:px-8 lg:px-16 bg-[#1E2749] text-white text-center">
        <p className="text-xs tracking-widest text-[#D5929F] mb-2">EYE EMERGENCY?</p>
        <p className="text-lg">
          Call us immediately at{' '}
          <a href="tel:281-916-2020" className="text-[#D5929F] hover:text-white transition-colors font-bold">
            281-916-2020
          </a>
        </p>
      </section>
    </div>
  )
}
