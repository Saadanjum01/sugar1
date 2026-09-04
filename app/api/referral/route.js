import { NextResponse } from 'next/server'
import { sendMail } from '@/lib/mailer'
import { emailLayout, summaryTable, button, BRAND, escapeHtml } from '@/lib/emailTemplate'

export const runtime = 'nodejs'

const PRACTICE_EMAIL = process.env.EMAIL_USER

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req) {
  let body
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const patientName = String(body.patientName ?? '').trim().slice(0, 200)
  const date = String(body.date ?? '').trim().slice(0, 50)
  const comments = String(body.comments ?? '').trim().slice(0, 2000)
  const reasons = Array.isArray(body.reasons)
    ? body.reasons.map((r) => String(r).trim().slice(0, 200)).filter(Boolean).slice(0, 20)
    : []
  const otherReason = String(body.otherReason ?? '').trim().slice(0, 200)
  const referringDr = String(body.referringDr ?? '').trim().slice(0, 200)
  const referringPhone = String(body.referringPhone ?? '').trim().slice(0, 50)
  const referringEmail = String(body.referringEmail ?? '').trim().slice(0, 200)

  if (!patientName || !referringDr) {
    return NextResponse.json({ error: 'Patient name and referring doctor are required.' }, { status: 400 })
  }
  if (referringEmail && !isValidEmail(referringEmail)) {
    return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 })
  }
  if (!PRACTICE_EMAIL) {
    console.error('[referral] EMAIL_USER not configured')
    return NextResponse.json(
      { error: "Sorry, we couldn't submit this right now. Please call us at 281-916-2020." },
      { status: 503 },
    )
  }

  const allReasons = otherReason ? [...reasons, `Other: ${otherReason}`] : reasons

  const summaryRows = [
    ['Patient name', patientName],
    ['Date', date || '—'],
    ['Reason for referral', allReasons.length ? allReasons.join(', ') : '—'],
    ['Comments', comments || '—'],
    ['Referring doctor', referringDr],
    ['Referring phone', referringPhone || '—'],
    ['Referring email', referringEmail || '—'],
  ]
  const textSummary = summaryRows.map(([k, v]) => `${k}: ${v}`).join('\n')

  const practiceHtml = emailLayout({
    preheader: `New patient referral for ${patientName}`,
    body: `
      <p style="margin:0 0 4px;font-family:sans-serif;font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:${BRAND.orangeDark};">New referral</p>
      <h1 style="margin:0 0 20px;font-family:sans-serif;font-size:22px;color:${BRAND.tealDark};">Referral for ${escapeHtml(patientName)}</h1>
      ${summaryTable(summaryRows)}
      <p style="margin:24px 0 0;font-family:sans-serif;font-size:13px;color:${BRAND.textMuted};">
        ${referringEmail ? `Reply directly to this email to reach Dr. ${escapeHtml(referringDr)}.` : `Referring phone: ${escapeHtml(referringPhone || '—')}.`}
      </p>
    `,
  })

  const confirmationHtml = emailLayout({
    preheader: `Referral received for ${patientName}`,
    body: `
      <p style="margin:0 0 4px;font-family:sans-serif;font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:${BRAND.accent};">Referral received</p>
      <h1 style="margin:0 0 16px;font-family:sans-serif;font-size:22px;color:${BRAND.tealDark};">Thanks, Dr. ${escapeHtml(referringDr)}</h1>
      <p style="margin:0 0 24px;font-family:sans-serif;font-size:15px;line-height:1.6;color:${BRAND.text};">
        We received your referral for <strong>${escapeHtml(patientName)}</strong> and our team will follow up shortly.
      </p>
      <p style="margin:0 0 12px;font-family:sans-serif;font-size:13px;font-weight:600;color:${BRAND.tealDark};">What was submitted</p>
      ${summaryTable(summaryRows)}
      <p style="margin:28px 0 0;font-family:sans-serif;font-size:14px;line-height:1.6;color:${BRAND.textMuted};">
        Questions in the meantime? Call us at <a href="tel:281-916-2020" style="color:${BRAND.teal};">281-916-2020</a>.
      </p>
      <div style="margin-top:24px;">
        ${button('Visit our website', 'https://www.firstcolonyvision.com')}
      </div>
    `,
  })

  try {
    // Notify the practice -- this must succeed for the request to count as
    // received, since it's the only place staff actually see the referral.
    await sendMail({
      to: PRACTICE_EMAIL,
      ...(referringEmail ? { replyTo: referringEmail } : {}),
      subject: `New patient referral — ${patientName}`,
      text: `New patient referral submitted from the website:\n\n${textSummary}`,
      html: practiceHtml,
    })

    // Confirm to the referring doctor, if they gave an email. Best-effort --
    // the practice notification above is what matters; if this fails we
    // still tell the submitter it went through, since it did.
    if (referringEmail) {
      try {
        await sendMail({
          to: referringEmail,
          subject: 'Referral received — First Colony Vision',
          text: `Thanks, Dr. ${referringDr}.\n\nWe received your referral for ${patientName} and our team will follow up shortly.\n\nWhat was submitted:\n${textSummary}\n\nQuestions in the meantime? Call us at 281-916-2020.\n\n— First Colony Vision\n16126 Southwest Fwy, Ste 180, Sugar Land, TX 77479`,
          html: confirmationHtml,
        })
      } catch (confirmationEmailError) {
        console.error('[referral] confirmation email to referring doctor failed:', confirmationEmailError)
      }
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[referral] failed to notify practice:', err)
    return NextResponse.json(
      { error: "Sorry, we couldn't submit this right now. Please call us at 281-916-2020." },
      { status: 502 },
    )
  }
}
