import { NextResponse } from 'next/server'
import { sendMail } from '@/lib/mailer'

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

  try {
    await sendMail({
      to: PRACTICE_EMAIL,
      replyTo: email,
      subject: 'New newsletter signup',
      text: `New newsletter signup from the website: ${email}`,
      html: `<p>New newsletter signup from the website: <strong>${email.replace(/</g, '&lt;')}</strong></p>`,
    })

    try {
      await sendMail({
        to: email,
        subject: "You're on the list — First Colony Vision",
        text: `Thanks for subscribing to First Colony Vision's newsletter. We send eye health tips and clinic news a few times a year — never more than that.\n\n— First Colony Vision\n16126 Southwest Fwy, Ste 180, Sugar Land, TX 77479\n281-916-2020`,
        html: `
          <p>Thanks for subscribing to First Colony Vision's newsletter. We send eye health tips and clinic news a few times a year — never more than that.</p>
          <p>— First Colony Vision<br/>16126 Southwest Fwy, Ste 180, Sugar Land, TX 77479<br/>281-916-2020</p>
        `,
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
