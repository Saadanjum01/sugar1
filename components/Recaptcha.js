'use client'

import { useEffect, useRef, useId, forwardRef, useImperativeHandle } from 'react'

// Explicit rendering mode -- we call grecaptcha.render() ourselves once the
// container exists, rather than letting the script scan for .g-recaptcha
// divs, which it only does on its own initial load.
const SCRIPT_SRC = 'https://www.google.com/recaptcha/api.js?render=explicit'
let scriptPromise = null

function loadRecaptchaScript() {
  if (typeof window === 'undefined') return Promise.resolve()
  if (window.grecaptcha?.render) return Promise.resolve()
  if (scriptPromise) return scriptPromise

  scriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.async = true
    script.defer = true
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
  return scriptPromise
}

/**
 * Google reCAPTCHA v2 widget. Renders nothing if
 * NEXT_PUBLIC_RECAPTCHA_SITE_KEY isn't configured, so forms keep working
 * (without bot protection) until a real site key is added -- see
 * NEXT_PUBLIC_RECAPTCHA_SITE_KEY in .env.local.
 *
 * size="normal" (default) shows the "I'm not a robot" checkbox.
 * size="invisible" hides it; call the returned execute() to get a token.
 * The invisible variant suits one-field forms (newsletter) where a checkbox
 * would outweigh the form itself.
 */
const Recaptcha = forwardRef(function Recaptcha(
  { onVerify, onExpire, size = 'normal' },
  ref,
) {
  const containerId = useId().replace(/:/g, '')
  const widgetIdRef = useRef(null)
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  // Invisible widgets are driven imperatively: the parent calls execute()
  // on submit and waits for the callback to deliver a token.
  useImperativeHandle(ref, () => ({
    execute() {
      if (!siteKey || widgetIdRef.current === null) return false
      try {
        window.grecaptcha?.execute(widgetIdRef.current)
        return true
      } catch {
        return false
      }
    },
    reset() {
      if (widgetIdRef.current === null) return
      try {
        window.grecaptcha?.reset(widgetIdRef.current)
      } catch {
        // Widget gone with its container -- nothing to reset.
      }
    },
  }))

  useEffect(() => {
    if (!siteKey) return

    let cancelled = false
    loadRecaptchaScript()
      .then(() => {
        if (cancelled || !window.grecaptcha) return
        // grecaptcha.ready defers until the API is fully initialised; the
        // script's onload alone doesn't guarantee render() is safe to call.
        window.grecaptcha.ready(() => {
          if (cancelled || widgetIdRef.current !== null) return
          const el = document.getElementById(containerId)
          if (!el) return
          widgetIdRef.current = window.grecaptcha.render(el, {
            sitekey: siteKey,
            size,
            callback: (token) => onVerify?.(token),
            'expired-callback': () => onExpire?.(),
            'error-callback': () => onExpire?.(),
          })
        })
      })
      .catch((err) => console.error('[recaptcha] script failed to load:', err))

    return () => {
      cancelled = true
      // reCAPTCHA has no remove(); reset() clears the token so a remounted
      // widget never reuses a stale one.
      if (widgetIdRef.current !== null && window.grecaptcha?.reset) {
        try {
          window.grecaptcha.reset(widgetIdRef.current)
        } catch {
          // Widget already torn down with its container -- nothing to reset.
        }
      }
      widgetIdRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteKey, containerId])

  if (!siteKey) return null

  return <div id={containerId} />
})

export default Recaptcha
