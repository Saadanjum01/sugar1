import { NextResponse } from 'next/server'
import { sendMail } from '@/lib/mailer'
import { emailLayout, summaryTable, BRAND, escapeHtml } from '@/lib/emailTemplate'

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

  try {
    await sendMail({
      to: PRACTICE_EMAIL,
      ...(referringEmail ? { replyTo: referringEmail } : {}),
      subject: `New patient referral — ${patientName}`,
      text: `New patient referral submitted from the website:\n\n${textSummary}`,
      html: practiceHtml,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[referral] failed to notify practice:', err)
    return NextResponse.json(
      { error: "Sorry, we couldn't submit this right now. Please call us at 281-916-2020." },
      { status: 502 },
    )
  }
}
