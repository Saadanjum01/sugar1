'use client'

import { useState } from 'react'
import { IconPin, IconPhone, IconGlobe, IconHeart } from '@/components/BrandIcons'

const LEFT_REASONS = [
  'Comprehensive Eye Exam',
  'Contact Lens Fitting',
  'Dry Eye Evaluation',
  'Glaucoma Suspect',
  'Plaquenil Testing',
]

const RIGHT_REASONS = [
  'Lasik Consult',
  'DMV Testing',
  'Diabetic Retinopathy',
  'Cataract Management',
]

const CONTACT_LENS_SUBOPTIONS = ['Regular', 'Specialty']

export default function ReferralsPage() {
  const [patientName, setPatientName] = useState('')
  const [date, setDate] = useState('')
  const [comments, setComments] = useState('')
  const [reasons, setReasons] = useState([])
  const [otherReason, setOtherReason] = useState('')
  const [otherChecked, setOtherChecked] = useState(false)
  const [referringDr, setReferringDr] = useState('')
  const [referringPhone, setReferringPhone] = useState('')
  const [referringEmail, setReferringEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function toggleReason(label) {
    setReasons((prev) =>
      prev.includes(label) ? prev.filter((r) => r !== label) : [...prev, label],
    )
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (submitting) return
    if (!patientName.trim() || !referringDr.trim()) {
      setError('Patient name and referring doctor are required.')
      return
    }

    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/referral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patientName,
          date,
          comments,
          reasons,
          otherReason: otherChecked ? otherReason : '',
          referringDr,
          referringPhone,
          referringEmail,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setSubmitted(true)
    } catch (err) {
      setError(err.message || "Sorry, we couldn't submit this. Please call us at 281-916-2020.")
    } finally {
      setSubmitting(false)
    }
  }

  const inputLineClass =
    'flex-1 bg-transparent border-0 border-b border-[#1E2E4A]/70 focus:border-[#0D5D62] outline-none px-1 py-1 text-[17px] text-[#1E2E4A] font-medium placeholder:text-[#1E2E4A]/30'

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10 px-4 print:py-0 print:px-0">
      <div
        className="w-full max-w-[820px] bg-white border-[3px] border-[#0D5D62] rounded-sm overflow-hidden print:border-0"
        style={{ boxShadow: '0 1px 2px rgba(16,40,42,.05),0 24px 48px -24px rgba(13,93,98,.3)' }}
      >
        {/* Logo header */}
        <div className="bg-[#FBF7F1] py-9 flex items-center justify-center border-b border-[#E7EBEA]">
          <img src="/images/logo-mark.png" alt="First Colony Vision" className="h-10 sm:h-12 w-auto" />
        </div>

        {submitted ? (
          <div className="px-8 sm:px-12 py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-[#E2F3F0] flex items-center justify-center mx-auto mb-5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#0D5D62" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <h2 className="font-display text-[26px] text-[#093F42] mb-2" style={{ letterSpacing: '-0.02em' }}>
              Referral received
            </h2>
            <p className="text-[#6E7C77] text-[15px] max-w-sm mx-auto leading-relaxed">
              Thank you. Our team will follow up on this referral shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-8 sm:px-14 py-10 sm:py-12 space-y-8">
            {/* Patient fields */}
            <div className="space-y-6">
              <div className="flex items-baseline gap-3">
                <label className="font-display font-bold text-[17px] text-[#1E2E4A] shrink-0">Patient Name:</label>
                <input
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className={inputLineClass}
                />
              </div>
              <div className="flex items-baseline gap-3">
                <label className="font-display font-bold text-[17px] text-[#1E2E4A] shrink-0">Date:</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={inputLineClass}
                />
              </div>
              <div className="flex items-baseline gap-3">
                <label className="font-display font-bold text-[17px] text-[#1E2E4A] shrink-0">Comments:</label>
                <textarea
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  rows={3}
                  className="flex-1 bg-transparent border-0 border-b border-[#1E2E4A]/70 focus:border-[#0D5D62] outline-none px-1 py-1 text-[17px] text-[#1E2E4A] font-medium resize-none"
                />
              </div>
            </div>

            {/* Reason checkboxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3.5 text-[#1E2E4A]">
              <div className="space-y-3.5">
                {LEFT_REASONS.map((label) => (
                  <div key={label}>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={reasons.includes(label)}
                        onChange={() => toggleReason(label)}
                        className="w-[18px] h-[18px] rounded-[3px] border-2 border-[#37B2B8] accent-[#0D5D62] shrink-0"
                      />
                      <span className="text-[17px]">{label}</span>
                    </label>
                    {label === 'Contact Lens Fitting' && (
                      <div className="pl-9 mt-2.5 space-y-2.5">
                        {CONTACT_LENS_SUBOPTIONS.map((sub) => (
                          <label key={sub} className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={reasons.includes(`Contact Lens Fitting — ${sub}`)}
                              onChange={() => toggleReason(`Contact Lens Fitting — ${sub}`)}
                              className="w-[15px] h-[15px] rounded-[3px] border-2 border-[#37B2B8] accent-[#0D5D62] shrink-0"
                            />
                            <span className="text-[15px]">{sub}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="space-y-3.5">
                {RIGHT_REASONS.map((label) => (
                  <label key={label} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={reasons.includes(label)}
                      onChange={() => toggleReason(label)}
                      className="w-[18px] h-[18px] rounded-[3px] border-2 border-[#37B2B8] accent-[#0D5D62] shrink-0"
                    />
                    <span className="text-[17px]">{label}</span>
                  </label>
                ))}
                <div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={otherChecked}
                      onChange={(e) => setOtherChecked(e.target.checked)}
                      className="w-[18px] h-[18px] rounded-[3px] border-2 border-[#37B2B8] accent-[#0D5D62] shrink-0"
                    />
                    <span className="text-[17px] whitespace-nowrap">Eye Health Other:</span>
                    <input
                      value={otherReason}
                      onChange={(e) => setOtherReason(e.target.value)}
                      className="flex-1 bg-transparent border-0 border-b border-[#1E2E4A]/70 focus:border-[#0D5D62] outline-none px-1 py-0.5 text-[15px] text-[#1E2E4A]"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="border-t border-[#E7EBEA] pt-6 space-y-5">
              <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3">
                <div className="flex items-baseline gap-2">
                  <label className="text-[14.5px] text-[#1E2E4A]">Referring Dr:</label>
                  <input
                    value={referringDr}
                    onChange={(e) => setReferringDr(e.target.value)}
                    className="w-48 bg-transparent border-0 border-b border-[#1E2E4A]/70 focus:border-[#0D5D62] outline-none px-1 py-1 text-[15px] text-[#1E2E4A] font-medium"
                  />
                </div>
                <div className="flex items-baseline gap-2">
                  <label className="text-[14.5px] font-semibold text-[#1E2E4A]">Phone#</label>
                  <input
                    value={referringPhone}
                    onChange={(e) => setReferringPhone(e.target.value)}
                    className="w-40 bg-transparent border-0 border-b border-[#1E2E4A]/70 focus:border-[#0D5D62] outline-none px-1 py-1 text-[15px] text-[#1E2E4A] font-medium"
                  />
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <label className="text-[14.5px] text-[#1E2E4A]">Email:</label>
                <input
                  type="email"
                  value={referringEmail}
                  onChange={(e) => setReferringEmail(e.target.value)}
                  placeholder="optional — for a reply confirmation"
                  className="flex-1 bg-transparent border-0 border-b border-[#1E2E4A]/70 focus:border-[#0D5D62] outline-none px-1 py-1 text-[15px] text-[#1E2E4A] font-medium placeholder:text-[#1E2E4A]/30 placeholder:font-normal"
                />
              </div>
            </div>

            {error && (
              <p className="text-[13.5px] text-[#B85E31] bg-[#B85E31]/10 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#0D5D62] text-white font-semibold text-[15px] rounded-xl hover:bg-[#093F42] transition-colors disabled:opacity-60 print:hidden"
            >
              {submitting ? 'Sending…' : 'Submit referral'}
            </button>
          </form>
        )}

        {/* Wave footer */}
        <div className="relative">
          <svg
            className="absolute -top-12 left-0 w-full h-12 text-[#0D5D62]"
            viewBox="0 0 820 48"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0 48 C 200 0, 620 48, 820 0 L 820 48 Z" fill="currentColor" />
            <path d="M0 48 C 220 10, 600 40, 820 6 L 820 48 Z" fill="#37B2B8" opacity="0.35" />
            <path d="M0 48 C 180 20, 500 44, 820 14 L 820 48 Z" fill="#E2895B" opacity="0.5" />
          </svg>

          <div className="bg-[#0D5D62] px-8 sm:px-12 py-9 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-8 items-center">
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#37B2B8] flex items-center justify-center shrink-0 text-white">
                  <IconPin size={16} />
                </div>
                <p className="text-white text-[14.5px] leading-snug pt-1">
                  16126 Southwest Fwy Ste 180<br />Sugar Land, TX 77479
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E2895B] flex items-center justify-center shrink-0 text-white">
                  <IconPhone size={15} />
                </div>
                <a href="tel:281-916-2020" className="text-white text-[14.5px] hover:text-[#C9E5E3] transition-colors">
                  281-916-2020
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#37B2B8] flex items-center justify-center shrink-0 text-white">
                  <IconGlobe size={15} />
                </div>
                <a href="https://www.firstcolonyvision.com/referrals" className="text-white text-[14.5px] hover:text-[#C9E5E3] transition-colors">
                  Firstcolonyvision.com/referrals
                </a>
              </div>
            </div>

            <svg width="130" height="90" viewBox="0 0 200 140" fill="none" className="opacity-30 justify-self-center sm:justify-self-end" aria-hidden="true">
              <path d="M20 90s30-70 80-70 80 70 80 70-30 45-80 45-80-45-80-45z" stroke="white" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </div>

          <div className="bg-[#37B2B8] py-4 flex items-center justify-center gap-4">
            <span className="hidden sm:block h-px w-16 bg-[#E2895B]" />
            <IconHeart size={16} className="text-[#E2895B]" />
            <p className="text-white text-[13px] font-semibold tracking-[0.25em]">
              CARING FOR THE EYES YOU LOVE
            </p>
            <IconHeart size={16} className="text-[#E2895B]" />
            <span className="hidden sm:block h-px w-16 bg-[#E2895B]" />
          </div>
        </div>
      </div>
    </div>
  )
}
