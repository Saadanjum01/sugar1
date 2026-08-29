import { NextResponse } from 'next/server'
import { sendMail } from '@/lib/mailer'
import { emailLayout, button, BRAND, escapeHtml } from '@/lib/emailTemplate'

export const runtime = 'nodejs'

const PRACTICE_EMAIL = process.env.EMAIL_USER

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// No mailing-list service is wired up yet -- this notifies the practice of
// each new signup (so it can be added to whatever list they actually send
// from) and confirms to the subscriber that they're on the list. It does
// not, by itself, deliver the "few times a year" newsletter content.
export async function POST(req) {
  let body
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const email = String(body.email ?? '').trim().slice(0, 200)

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 })
  }
  if (!PRACTICE_EMAIL) {
    console.error('[newsletter] EMAIL_USER not configured')
    return NextResponse.json({ error: 'Newsletter signup is not available right now.' }, { status: 503 })
  }

  const practiceHtml = emailLayout({
    preheader: `New newsletter signup: ${email}`,
    body: `
      <p style="margin:0 0 4px;font-family:sans-serif;font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:${BRAND.orangeDark};">New subscriber</p>
      <h1 style="margin:0 0 16px;font-family:sans-serif;font-size:22px;color:${BRAND.tealDark};">New newsletter signup</h1>
      <p style="margin:0;font-family:sans-serif;font-size:15px;color:${BRAND.text};">
        <strong>${escapeHtml(email)}</strong> signed up for the newsletter on the website.
      </p>
    `,
  })

  const subscriberHtml = emailLayout({
    preheader: "You're on the list",
    body: `
      <p style="margin:0 0 4px;font-family:sans-serif;font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:${BRAND.accent};">Subscribed</p>
      <h1 style="margin:0 0 16px;font-family:sans-serif;font-size:22px;color:${BRAND.tealDark};">You're on the list!</h1>
      <p style="margin:0 0 24px;font-family:sans-serif;font-size:15px;line-height:1.6;color:${BRAND.text};">
        Thanks for subscribing to First Colony Vision's newsletter. We send eye health tips and clinic news a few times a year — never more than that.
      </p>
      <div>
        ${button('Visit our website', 'https://www.firstcolonyvision.com')}
      </div>
    `,
  })

  try {
    await sendMail({
      to: PRACTICE_EMAIL,
      replyTo: email,
      subject: 'New newsletter signup',
      text: `New newsletter signup from the website: ${email}`,
      html: practiceHtml,
    })

    try {
      await sendMail({
        to: email,
        subject: "You're on the list — First Colony Vision",
        text: `Thanks for subscribing to First Colony Vision's newsletter. We send eye health tips and clinic news a few times a year — never more than that.\n\n— First Colony Vision\n16126 Southwest Fwy, Ste 180, Sugar Land, TX 77479\n281-916-2020`,
        html: subscriberHtml,
      })
    } catch (subscriberEmailError) {
      console.error('[newsletter] subscriber confirmation email failed:', subscriberEmailError)
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[newsletter] failed to notify practice:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 502 })
  }
}
