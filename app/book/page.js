'use client'

import { useState } from 'react'
import {
  IconCal, IconPin, IconClock, IconPhone, IconCheck,
  IconId, IconCardPay, IconGlasses, IconList, IconEye, IconFamily,
} from '@/components/BrandIcons'

const REASONS = [
  'Comprehensive eye exam',
  'Contact lens fitting / exam',
  'Child / pediatric exam',
  'Diabetic eye exam',
  'Emergency / urgent eye care',
  'Migraine / headache evaluation',
  'Myopia control',
  'Sports vision',
  'Eyewear / frames only',
  'Something else',
]

const TIMES = [
  '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
  '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
  '5:00 PM', '5:30 PM',
]

const whatToBring = [
  { Icon: IconId,      label: 'Photo ID' },
  { Icon: IconCardPay, label: 'Insurance card' },
  { Icon: IconGlasses, label: 'Current glasses or contacts' },
  { Icon: IconList,    label: 'List of current medications' },
  { Icon: IconEye,     label: 'Sunglasses (pupils may be dilated)' },
  { Icon: IconFamily,  label: 'A parent, for patients under 18' },
]

export default function BookPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    insurance: '',
    reason: REASONS[0],
    date: '', time: '',
    newPatient: 'yes',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  function set(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || submitting) return

    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setSubmitted(true)
    } catch (err) {
      setError(err.message || "Sorry, we couldn't submit your request. Please call us at 281-916-2020.")
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass =
    'w-full px-4 py-3.5 rounded-xl border border-[#E7EBEA] bg-white text-[#16201E] text-[14.5px] focus:outline-none focus:border-[#37B2B8] focus:ring-2 focus:ring-[#37B2B8]/20 transition-all placeholder:text-[#B0B8B5]'
  const labelClass = 'block text-[12px] font-semibold text-[#093F42] tracking-wide mb-1.5'

  return (
    <div className="min-h-screen bg-[#FBF7F1]">

      {/* Page header */}
      <div className="bg-[#FBF7F1] border-b border-[#E7EBEA]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 pt-16 pb-14 lg:pt-20 lg:pb-16">
          <div className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#0D5D62] mb-4">
            <IconCal size={15} className="text-[#B85E31]" />
            Appointments
          </div>
          <h1
            className="font-display text-[38px] sm:text-[50px] text-[#16201E] mb-4"
            style={{ letterSpacing: '-0.03em' }}
          >
            Schedule your visit
          </h1>
          <p className="text-[#6E7C77] text-[16.5px] leading-relaxed max-w-xl">
            Fill in a few details and we&apos;ll reach out to confirm. Most visits take about an hour — and the time is genuinely yours.
          </p>
        </div>
      </div>

      {/* Two-column layout */}
      <section className="py-14 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-16">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.55fr] gap-10 lg:gap-14 items-start">

          {/* ── Left column: office details ── */}
          <div className="space-y-6">

            {/* Contact + hours */}
            <div
              className="bg-white rounded-2xl p-7"
              style={{ boxShadow: '0 1px 2px rgba(16,40,42,.05),0 16px 32px -22px rgba(13,93,98,.2)' }}
            >
              <h3
                className="font-display font-semibold text-[17px] text-[#093F42] mb-5"
                style={{ letterSpacing: '-0.02em' }}
              >
                Prefer to call us?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-[10px] bg-[#E2F3F0] flex items-center justify-center shrink-0 text-[#0D5D62]">
                    <IconPhone size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-[#6E7C77] tracking-widest mb-0.5">PHONE</div>
                    <a
                      href="tel:281-916-2020"
                      className="font-semibold text-[15px] text-[#093F42] hover:text-[#0D5D62] transition-colors"
                    >
                      281-916-2020
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-[10px] bg-[#E2F3F0] flex items-center justify-center shrink-0 text-[#0D5D62]">
                    <IconClock size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-[#6E7C77] tracking-widest mb-0.5">HOURS</div>
                    <p className="text-[15px] text-[#093F42] font-medium">Tue – Fri &nbsp;9:30 AM – 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-[10px] bg-[#E2F3F0] flex items-center justify-center shrink-0 text-[#0D5D62] mt-0.5">
                    <IconPin size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-[#6E7C77] tracking-widest mb-0.5">ADDRESS</div>
                    <p className="text-[15px] text-[#093F42] font-medium leading-snug">
                      16126 Southwest Fwy, Ste 180<br />Sugar Land, TX 77479
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to bring */}
            <div
              className="bg-white rounded-2xl p-7"
              style={{ boxShadow: '0 1px 2px rgba(16,40,42,.05),0 16px 32px -22px rgba(13,93,98,.2)' }}
            >
              <h3
                className="font-display font-semibold text-[17px] text-[#093F42] mb-1"
                style={{ letterSpacing: '-0.02em' }}
              >
                What to bring
              </h3>
              <p className="text-[13px] text-[#6E7C77] mb-5">Especially helpful for first visits and comprehensive exams.</p>
              <div className="space-y-3">
                {whatToBring.map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 text-[14px] text-[#16201E] font-medium">
                    <div className="w-7 h-7 rounded-lg bg-[#E2F3F0] flex items-center justify-center shrink-0 text-[#0D5D62]">
                      <Icon size={14} />
                    </div>
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* Insurance callout */}
            <div className="bg-[#0D5D62] rounded-2xl p-6">
              <div className="flex items-start gap-3 mb-2.5">
                <IconCheck size={17} className="text-[#37B2B8] shrink-0 mt-0.5" />
                <p className="text-white font-semibold text-[14.5px] leading-snug">
                  We verify your insurance before your visit
                </p>
              </div>
              <p className="text-[13.5px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
                We accept EyeMed, VSP, BCBS, Cigna, Medicare, UnitedHealthcare, Spectera, Superior Vision, and Aetna. Your costs are quoted before you arrive — no surprises.
              </p>
            </div>
          </div>

          {/* ── Right column: form ── */}
          <div id="appointment-form" className="scroll-mt-[140px]">
            {submitted ? (
              <div
                className="bg-white rounded-2xl p-10 text-center"
                style={{ boxShadow: '0 1px 2px rgba(16,40,42,.05),0 16px 32px -22px rgba(13,93,98,.2)' }}
              >
                <div className="w-16 h-16 rounded-full bg-[#E2F3F0] flex items-center justify-center mx-auto mb-5">
                  <IconCheck size={28} className="text-[#0D5D62]" />
                </div>
                <h2
                  className="font-display text-[28px] text-[#093F42] mb-3"
                  style={{ letterSpacing: '-0.03em' }}
                >
                  Request received!
                </h2>
                <p className="text-[#6E7C77] text-[15.5px] max-w-sm mx-auto leading-relaxed">
                  Thanks, {form.name.split(' ')[0]}. We&apos;ll call {form.phone || form.email} within one business day to confirm your appointment.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-7 sm:p-9 space-y-5"
                style={{ boxShadow: '0 1px 2px rgba(16,40,42,.05),0 16px 32px -22px rgba(13,93,98,.2)' }}
              >
                <h2
                  className="font-display font-semibold text-[21px] text-[#093F42] mb-1"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Request an appointment
                </h2>
                <p className="text-[13.5px] text-[#6E7C77] !mt-1">
                  Fields marked * are required.
                </p>

                {/* New / returning */}
                <div>
                  <label className={labelClass}>Are you a new patient?</label>
                  <div className="flex gap-3">
                    {[
                      { v: 'yes', label: 'Yes, new patient' },
                      { v: 'no',  label: 'Returning patient' },
                    ].map(({ v, label }) => (
                      <label
                        key={v}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 text-[13.5px] font-semibold cursor-pointer transition-all ${
                          form.newPatient === v
                            ? 'border-[#0D5D62] bg-[#E2F3F0] text-[#0D5D62]'
                            : 'border-[#E7EBEA] text-[#6E7C77] hover:border-[#37B2B8]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="newPatient"
                          value={v}
                          checked={form.newPatient === v}
                          onChange={set('newPatient')}
                          className="sr-only"
                        />
                        {label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Full name *</label>
                    <input
                      required
                      value={form.name}
                      onChange={set('name')}
                      placeholder="Jane Doe"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Phone number *</label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={set('phone')}
                      placeholder="(281) 555-0100"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className={labelClass}>Email address *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={set('email')}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>

                {/* Reason */}
                <div>
                  <label className={labelClass}>Reason for visit</label>
                  <select value={form.reason} onChange={set('reason')} className={inputClass}>
                    {REASONS.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>

                {/* Insurance */}
                <div>
                  <label className={labelClass}>Insurance plan (optional)</label>
                  <input
                    value={form.insurance}
                    onChange={set('insurance')}
                    placeholder="e.g. EyeMed, VSP, Blue Cross…"
                    className={inputClass}
                  />
                </div>

                {/* Date + Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Preferred date</label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={set('date')}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Preferred time</label>
                    <select value={form.time} onChange={set('time')} className={inputClass}>
                      <option value="">Any time works</option>
                      {TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className={labelClass}>Additional notes (optional)</label>
                  <textarea
                    rows={3}
                    value={form.notes}
                    onChange={set('notes')}
                    placeholder="Anything else we should know — symptoms, concerns, or questions for Dr. Virani."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {error && (
                  <p className="text-[13.5px] text-[#B85E31] bg-[#B85E31]/10 rounded-xl px-4 py-3">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-[#0D5D62] text-white font-semibold text-[15px] rounded-xl hover:bg-[#093F42] transition-colors disabled:opacity-60"
                >
                  {submitting ? 'Sending…' : 'Send appointment request'}
                </button>

                <p className="text-[12.5px] text-[#6E7C77] text-center !mt-3">
                  We confirm within one business day. Urgent?{' '}
                  <a href="tel:281-916-2020" className="text-[#0D5D62] font-semibold hover:underline">
                    Call 281-916-2020
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
