// Server-side verification for Google reCAPTCHA v2 tokens.
// See RECAPTCHA_SECRET_KEY / NEXT_PUBLIC_RECAPTCHA_SITE_KEY in .env.local.

const VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify'

/**
 * Returns true if the token is valid, or if reCAPTCHA isn't configured yet
 * (no RECAPTCHA_SECRET_KEY) -- so forms keep working, without bot
 * protection, until a real secret key is added. Once configured, a missing
 * or invalid token is rejected.
 */
export async function verifyRecaptcha(token, ip) {
  const secret = process.env.RECAPTCHA_SECRET_KEY
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
    if (data.success !== true) {
      // Google names the reason ('invalid-input-secret', 'timeout-or-
      // duplicate', ...) -- worth logging, since a misconfigured secret
      // otherwise looks identical to a genuine bot rejection.
      console.warn('[recaptcha] rejected:', data['error-codes'])
    }
    return data.success === true
  } catch (err) {
    console.error('[recaptcha] verification request failed:', err)
    // Fails open, like the chat critique pass -- a Google outage shouldn't
    // block every legitimate submission.
    return true
  }
}
