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

  const name = String(body.name ?? '').trim().slice(0, 200)
  const email = String(body.email ?? '').trim().slice(0, 200)
  const phone = String(body.phone ?? '').trim().slice(0, 50)
  const insurance = String(body.insurance ?? '').trim().slice(0, 200)
  const reason = String(body.reason ?? '').trim().slice(0, 200)
  const date = String(body.date ?? '').trim().slice(0, 50)
  const time = String(body.time ?? '').trim().slice(0, 50)
  const notes = String(body.notes ?? '').trim().slice(0, 2000)
  const newPatient = body.newPatient === 'no' ? 'Returning patient' : 'New patient'

  if (!name || !email || !phone) {
    return NextResponse.json({ error: 'Name, email, and phone are required.' }, { status: 400 })
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 })
  }
  if (!PRACTICE_EMAIL) {
    console.error('[book] EMAIL_USER not configured')
    return NextResponse.json(
      { error: "Sorry, we couldn't submit your request right now. Please call us at 281-916-2020." },
      { status: 503 },
    )
  }

  const summaryRows = [
    ['Name', name],
    ['Patient type', newPatient],
    ['Phone', phone],
    ['Email', email],
    ['Reason for visit', reason],
    ['Insurance', insurance || '—'],
    ['Preferred date', date || 'Any'],
    ['Preferred time', time || 'Any time works'],
    ['Notes', notes || '—'],
  ]
  const textSummary = summaryRows.map(([k, v]) => `${k}: ${v}`).join('\n')

  const practiceHtml = emailLayout({
    preheader: `New appointment request from ${name}`,
    body: `
      <p style="margin:0 0 4px;font-family:sans-serif;font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:${BRAND.orangeDark};">New request</p>
      <h1 style="margin:0 0 20px;font-family:sans-serif;font-size:22px;color:${BRAND.tealDark};">Appointment request from ${escapeHtml(name)}</h1>
      ${summaryTable(summaryRows)}
      <p style="margin:24px 0 0;font-family:sans-serif;font-size:13px;color:${BRAND.textMuted};">
        Reply directly to this email to reach ${escapeHtml(name.split(' ')[0])} at ${escapeHtml(email)}.
      </p>
    `,
  })

  const patientHtml = emailLayout({
    preheader: 'We received your appointment request',
    body: `
      <p style="margin:0 0 4px;font-family:sans-serif;font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:${BRAND.accent};">Request received</p>
      <h1 style="margin:0 0 16px;font-family:sans-serif;font-size:22px;color:${BRAND.tealDark};">Thanks, ${escapeHtml(name.split(' ')[0])}!</h1>
      <p style="margin:0 0 24px;font-family:sans-serif;font-size:15px;line-height:1.6;color:${BRAND.text};">
        We received your appointment request and will call <strong>${escapeHtml(phone)}</strong> within one business day to confirm.
      </p>
      <p style="margin:0 0 12px;font-family:sans-serif;font-size:13px;font-weight:600;color:${BRAND.tealDark};">What you requested</p>
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
    // Notify the practice -- reply-to is the patient's own email so staff can
    // hit "reply" directly without needing to copy it out of the body.
    await sendMail({
      to: PRACTICE_EMAIL,
      replyTo: email,
      subject: `New appointment request — ${name}`,
      text: `New appointment request from the website:\n\n${textSummary}`,
      html: practiceHtml,
    })

    // Confirm to the patient. Best-effort -- the practice notification above
    // is the one that must succeed; if this one fails we still tell the
    // patient their request went through, since it did.
    try {
      await sendMail({
        to: email,
        subject: 'Your appointment request — First Colony Vision',
        text: `Hi ${name.split(' ')[0]},\n\nThanks for requesting an appointment with First Colony Vision. We'll call ${phone} within one business day to confirm.\n\nWhat you requested:\n${textSummary}\n\nQuestions in the meantime? Call us at 281-916-2020.\n\n— First Colony Vision\n16126 Southwest Fwy, Ste 180, Sugar Land, TX 77479`,
        html: patientHtml,
      })
    } catch (patientEmailError) {
      console.error('[book] patient confirmation email failed:', patientEmailError)
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[book] failed to notify practice:', err)
    return NextResponse.json(
      { error: "Sorry, we couldn't submit your request right now. Please call us at 281-916-2020." },
      { status: 502 },
    )
  }
}
