'use client'

import Link from 'next/link'
import { Mail } from 'lucide-react'
import { IconPhone, IconCal, IconPin, IconClock, IconHeart } from '@/components/BrandIcons'
import NewsletterForm from '@/components/NewsletterForm'

const methods = [
  {
    Icon: IconPhone,
    label: 'Call us',
    body: '281-916-2020',
    note: 'Fastest way to reach the front desk.',
    href: 'tel:281-916-2020',
    cta: 'Call now',
  },
  {
    Icon: IconCal,
    label: 'Book online',
    body: 'Request an appointment',
    note: 'Takes under a minute — we confirm by phone.',
    href: '/book',
    cta: 'Book appointment',
    primary: true,
  },
  {
    Icon: Mail,
    label: 'Email us',
    body: 'info@firstcolonyvision.com',
    note: 'For non-urgent questions about your visit.',
    href: 'mailto:info@firstcolonyvision.com',
    cta: 'Send email',
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div className="bg-[#FBF7F1] border-b border-[#E7EBEA]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 pt-16 pb-14 lg:pt-20 lg:pb-16">
          <div className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#0D5D62] mb-4">
            <IconHeart size={15} className="text-[#B85E31]" />
            Contact us
          </div>
          <h1
            className="font-display text-[38px] sm:text-[50px] text-[#16201E] mb-4"
            style={{ letterSpacing: '-0.03em' }}
          >
            We&apos;d love to hear from you
          </h1>
          <p className="text-[#6E7C77] text-[16.5px] leading-relaxed max-w-xl">
            Call, book online, or drop us a note — whichever is easiest for you.
          </p>
        </div>
      </div>

      {/* Contact methods */}
      <section className="px-5 sm:px-8 lg:px-16 py-14 sm:py-16">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
          {methods.map((m) => (
              <div
                key={m.label}
                className={`rounded-2xl p-6 flex flex-col shadow-lg ${
                  m.primary ? 'bg-[#0D5D62] text-white' : 'bg-white border border-[#E7EBEA]'
                }`}
              >
                <div className={`w-[46px] h-[46px] rounded-[12px] flex items-center justify-center mb-4 ${m.primary ? 'bg-white/15 text-white' : 'bg-[#E2F3F0] text-[#0D5D62]'}`}>
                  <m.Icon size={23} /></div>
                <div className={`text-[11px] font-semibold tracking-widest mb-1.5 ${m.primary ? 'text-white/70' : 'text-[#37B2B8]'}`}>
                  {m.label.toUpperCase()}
                </div>
                <p className={`font-semibold text-[17px] mb-1.5 ${m.primary ? 'text-white' : 'text-[#093F42]'}`}>{m.body}</p>
                <p className={`text-sm leading-relaxed mb-5 ${m.primary ? 'text-white/80' : 'text-[#6E7C77]'}`}>{m.note}</p>
                <Link
                  href={m.href}
                  className={`mt-auto text-center py-3 rounded-xl font-semibold text-sm transition-colors ${
                    m.primary
                      ? 'bg-white text-[#0D5D62] hover:bg-[#093F42] hover:text-white'
                      : 'bg-[#F7F8F7] text-[#093F42] hover:bg-[#093F42] hover:text-white'
                  }`}
                >
                  {m.cta}
                </Link>
              </div>
          ))}
        </div>
      </section>

      {/* Office info + map */}
      <section className="py-14 sm:py-20 lg:py-[100px] px-5 sm:px-8 lg:px-16">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
          <div>
            <div className="text-[#37B2B8] text-xs font-semibold mb-3 tracking-widest">VISIT US</div>
            <h2
              className="font-display text-2xl sm:text-3xl font-medium text-[#093F42] mb-7"
              style={{ letterSpacing: '-0.03em' }}
            >
              Our Sugar Land office
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-[46px] h-[46px] rounded-[12px] bg-[#E2F3F0] flex items-center justify-center shrink-0 text-[#0D5D62]">
                  <IconPin size={23} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#093F42] tracking-widest mb-1">ADDRESS</div>
                  <p className="text-[#6E7C77] text-[15px] leading-relaxed">
                    16126 Southwest Fwy, Ste 180<br />Sugar Land, TX 77479
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[46px] h-[46px] rounded-[12px] bg-[#E2F3F0] flex items-center justify-center shrink-0 text-[#0D5D62]">
                  <IconClock size={23} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#093F42] tracking-widest mb-1">HOURS</div>
                  <p className="text-[#6E7C77] text-[15px] leading-relaxed">
                    Tuesday &ndash; Friday<br />9:30 AM &ndash; 6:00 PM
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[46px] h-[46px] rounded-[12px] bg-[#E2F3F0] flex items-center justify-center shrink-0 text-[#0D5D62]">
                  <IconPhone size={23} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#093F42] tracking-widest mb-1">PHONE</div>
                  <a href="tel:281-916-2020" className="text-[#6E7C77] text-[15px] hover:text-[#0D5D62] transition-colors">
                    281-916-2020
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-44 mt-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/office-exterior.jpg" alt="First Colony Vision office exterior" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden h-[420px] lg:h-full lg:min-h-[520px]">
            <iframe
              title="First Colony Vision location map"
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
      <section className="py-14 sm:py-16 px-5 sm:px-8 lg:px-16 bg-[#FBF7F1]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[#37B2B8] text-xs font-semibold mb-3 tracking-widest">STAY IN TOUCH</div>
          <h2
            className="font-display text-2xl sm:text-3xl font-medium text-[#093F42] mb-3"
            style={{ letterSpacing: '-0.03em' }}
          >
            Join our newsletter
          </h2>
          <p className="text-[#6E7C77] text-[15.5px] mb-7 max-w-lg mx-auto">
            Eye health tips, seasonal reminders, and news from First Colony Vision — straight to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterForm variant="light" />
          </div>
        </div>
      </section>

      {/* Emergency note */}
      <div className="bg-[#E2F3F0] border-y border-[#C6E4DF]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-[14.5px] text-[#093F42] font-medium">
            <span className="font-semibold">Eye emergency?</span> Call us right away and we&apos;ll get you in as quickly as possible.
          </p>
          <a
            href="tel:281-916-2020"
            className="shrink-0 px-6 py-2.5 bg-[#0D5D62] text-white text-sm font-semibold rounded-xl hover:bg-[#093F42] transition-colors"
          >
            Call 281-916-2020
          </a>
        </div>
      </div>
    </div>
  )
}
