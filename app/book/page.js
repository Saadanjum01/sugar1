'use client'

import { useState } from 'react'

const REASONS = [
  'Comprehensive eye exam',
  'Contact lens fitting',
  'Eyewear / frames',
  'Dry eye consultation',
  'LASIK consultation',
  'Pediatric eye exam',
  'Something else',
]

export default function BookPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    reason: REASONS[0],
    date: '',
    time: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) return
    // TODO: wire up to a real booking/email service once one is set up -- currently UI only.
    setSubmitted(true)
  }

  const inputClass =
    'w-full px-4 py-3.5 rounded-xl border border-[#1E2749]/15 bg-white text-[#1E2749] focus:outline-none focus:border-[#B33951] transition-colors'
  const labelClass = 'block text-xs font-bold text-[#1E2749] tracking-wide mb-2'

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-16 bg-[#1E2749] text-white text-center">
        <div className="text-[#D5929F] text-xs sm:text-sm font-bold mb-4 tracking-widest">BOOK AN APPOINTMENT</div>
        <h1 className="font-display text-3xl sm:text-5xl font-black mb-5">Schedule your visit</h1>
        <p className="text-base sm:text-lg text-[#C0C3CC] max-w-2xl mx-auto leading-relaxed">
          Tell us a bit about what you need and when works best. We&apos;ll confirm your appointment shortly.
        </p>
      </section>

      {/* Form */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 lg:px-16">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="bg-[#F6F6F8] rounded-2xl p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-[#1E2749]/10 flex items-center justify-center mx-auto mb-5">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#1E2749" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h2 className="font-display text-2xl font-black text-[#1E2749] mb-2">Request received!</h2>
              <p className="text-[#59607A] text-sm max-w-sm mx-auto">
                Thanks, {form.name.split(' ')[0]}. We&apos;ll reach out at {form.email || form.phone} shortly to confirm your appointment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#F6F6F8] rounded-2xl p-7 sm:p-10 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Full name</label>
                  <input required value={form.name} onChange={handleChange('name')} placeholder="Jane Doe" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Phone number</label>
                  <input required type="tel" value={form.phone} onChange={handleChange('phone')} placeholder="(281) 555-0100" className={inputClass} />
                </div>
              </div>

              <div>
                <label className={labelClass}>Email</label>
                <input required type="email" value={form.email} onChange={handleChange('email')} placeholder="you@example.com" className={inputClass} />
              </div>

              <div>
                <label className={labelClass}>Reason for visit</label>
                <select value={form.reason} onChange={handleChange('reason')} className={inputClass}>
                  {REASONS.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>Preferred date</label>
                  <input type="date" value={form.date} onChange={handleChange('date')} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Preferred time</label>
                  <input type="time" value={form.time} onChange={handleChange('time')} className={inputClass} />
                </div>
              </div>

              <div>
                <label className={labelClass}>Additional notes (optional)</label>
                <textarea
                  rows={4}
                  value={form.notes}
                  onChange={handleChange('notes')}
                  placeholder="Anything else we should know?"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button type="submit" className="w-full py-4 bg-[#B33951] text-white font-bold text-sm rounded-xl hover:bg-[#1E2749] transition-all">
                SEND REQUEST
              </button>

              <p className="text-xs text-[#59607A] text-center">
                Or call us directly at{' '}
                <a href="tel:281-916-2020" className="text-[#B33951] font-bold hover:text-[#1E2749] transition-colors">281-916-2020</a>
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
