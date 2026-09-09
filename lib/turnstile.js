// Server-side verification for Cloudflare Turnstile tokens.
// See TURNSTILE_SECRET_KEY / NEXT_PUBLIC_TURNSTILE_SITE_KEY in .env.local.

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

/**
 * Returns true if the token is valid, or if Turnstile isn't configured yet
 * (no TURNSTILE_SECRET_KEY) -- so forms keep working, without bot
 * protection, until a real secret key is added. Once configured, a missing
 * or invalid token is rejected.
 */
export async function verifyTurnstile(token, ip) {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) return true
  if (!token) return false

  try {
    const res = await fetch(VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret,
        response: token,
        ...(ip ? { remoteip: ip } : {}),
      }),
    })
    const data = await res.json()
    return data.success === true
  } catch (err) {
    console.error('[turnstile] verification request failed:', err)
    // Fails open, like the chat critique pass -- a Cloudflare outage
    // shouldn't block every legitimate submission.
    return true
  }
}
