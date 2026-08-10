'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)

  function handleNewsletterSubmit(e) {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    // TODO: wire up to a real email service once one is set up -- currently UI only.
    setNewsletterSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-16 bg-[#1E2749] text-white text-center">
        <div className="text-[#D5929F] text-xs sm:text-sm font-bold mb-4 tracking-widest">CONTACT US</div>
        <h1 className="font-display text-3xl sm:text-5xl font-black mb-5">Book your visit at Sugar Land Vision</h1>
        <p className="text-base sm:text-lg text-[#C0C3CC] max-w-2xl mx-auto leading-relaxed">
          We&apos;d love to see you. Reach out by phone, or request an appointment online.
        </p>
        <a href="/book" className="inline-block mt-6 px-7 py-3.5 bg-[#B33951] text-white font-bold text-sm rounded-xl hover:bg-white hover:text-[#1E2749] transition-all">
          BOOK AN APPOINTMENT
        </a>
      </section>

      {/* Info + Form */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="text-[#B33951] text-xs font-bold mb-3 tracking-widest">GET IN TOUCH</div>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-[#1E2749] mb-6">We&apos;re here to help</h2>

            <div className="space-y-5 mb-6">
              <div>
                <div className="text-xs font-bold text-[#B33951] tracking-widest mb-1">ADDRESS</div>
                <p className="text-[#33415C]">16126 Southwest Fwy, Ste 180<br />Sugar Land, TX 77479</p>
              </div>
              <div>
                <div className="text-xs font-bold text-[#B33951] tracking-widest mb-1">PHONE</div>
                <a href="tel:281-916-2020" className="text-[#33415C] hover:text-[#B33951] transition-colors">281-916-2020</a>
              </div>
              <div>
                <div className="text-xs font-bold text-[#B33951] tracking-widest mb-1">HOURS</div>
                <p className="text-[#33415C]">Tuesday &ndash; Friday, 9:30 AM &ndash; 6:00 PM</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-48">
              <img src="/images/office-exterior.jpg" alt="Sugar Land Vision office exterior" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="bg-[#F6F6F8] rounded-2xl p-7 sm:p-8 flex flex-col justify-center">
            {newsletterSubmitted ? (
              <p className="text-sm text-[#1E2749] font-bold text-center">You&apos;re subscribed! Thanks for joining the list.</p>
            ) : (
              <>
                <h3 className="font-bold text-lg text-[#1E2749] mb-1">Join our newsletter</h3>
                <p className="text-[#59607A] text-sm mb-4">Eye health tips and news, straight to your inbox.</p>
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-[#1E2749]/15 bg-white text-[#1E2749] focus:outline-none focus:border-[#B33951] transition-colors"
                  />
                  <button
                    type="submit"
                    className="shrink-0 px-6 py-3.5 bg-[#1E2749] text-white font-bold text-sm rounded-xl hover:bg-[#B33951] transition-all"
                  >
                    SUBSCRIBE
                  </button>
                </form>
              </>
            )}

            <div className="border-t border-[#1E2749]/10 mt-7 pt-7 text-center">
              <p className="text-[#59607A] text-sm mb-3">Ready to schedule your visit?</p>
              <a href="/book" className="inline-block px-7 py-3.5 bg-[#B33951] text-white font-bold text-sm rounded-xl hover:bg-[#1E2749] transition-all">
                BOOK AN APPOINTMENT
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 lg:px-16 bg-[#F6F6F8]">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <div className="text-[#B33951] text-xs font-bold mb-3 tracking-widest">FIND US</div>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-[#1E2749]">Visit our Sugar Land office</h2>
        </div>
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden h-[380px]">
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
