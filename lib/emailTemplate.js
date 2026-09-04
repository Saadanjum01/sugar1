// Shared branded HTML shell for outgoing emails. Table-based layout and
// inline styles throughout -- email clients (Outlook especially) don't
// support modern CSS, so this deliberately avoids flexbox/grid/classes.

const BRAND = {
  teal: '#0D5D62',
  tealDark: '#093F42',
  tealDarker: '#062931',
  accent: '#37B2B8',
  orange: '#E2895B',
  orangeDark: '#B85E31',
  mint: '#E2F3F0',
  cream: '#FBF7F1',
  border: '#E7EBEA',
  text: '#16201E',
  textMuted: '#6E7C77',
}

const SITE_URL = 'https://www.firstcolonyvision.com'

// Embedded via Content-ID (see lib/mailer.js's LOGO_ATTACHMENT) rather than a
// hosted URL -- most email clients block remote images by default, which
// would otherwise show a broken image in every email until the recipient
// clicks "show images".
const LOGO_CID = 'fcv-logo'

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

// rows: [[label, value], ...] -- rendered as a bordered summary card.
export function summaryTable(rows) {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border:1px solid ${BRAND.border};border-radius:12px;overflow:hidden;">
      ${rows
        .map(
          ([label, value], i) => `
        <tr style="background:${i % 2 === 0 ? '#ffffff' : BRAND.cream};">
          <td style="padding:12px 16px;font-family:sans-serif;font-size:13px;font-weight:600;color:${BRAND.tealDark};width:140px;vertical-align:top;border-bottom:${i === rows.length - 1 ? 'none' : `1px solid ${BRAND.border}`};">
            ${escapeHtml(label)}
          </td>
          <td style="padding:12px 16px;font-family:sans-serif;font-size:14px;color:${BRAND.text};vertical-align:top;border-bottom:${i === rows.length - 1 ? 'none' : `1px solid ${BRAND.border}`};">
            ${escapeHtml(value).replace(/\n/g, '<br/>')}
          </td>
        </tr>`,
        )
        .join('')}
    </table>
  `
}

// body: raw HTML string for the main content area.
export function emailLayout({ preheader = '', body }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>First Colony Vision</title>
</head>
<body style="margin:0;padding:0;background:${BRAND.cream};font-family:sans-serif;">
  ${preheader ? `<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>` : ''}
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:${BRAND.cream};padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 1px 2px rgba(16,40,42,.05);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(120deg, ${BRAND.tealDarker} 0%, ${BRAND.tealDark} 42%, ${BRAND.teal} 100%);padding:28px 32px;">
              <img src="cid:${LOGO_CID}" alt="First Colony Vision" height="24" style="height:24px;width:auto;display:block;" />
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              ${body}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 32px;background:${BRAND.mint};border-top:1px solid ${BRAND.border};">
              <p style="margin:0 0 4px;font-family:sans-serif;font-size:12.5px;color:${BRAND.tealDark};font-weight:600;">
                First Colony Vision
              </p>
              <p style="margin:0 0 2px;font-family:sans-serif;font-size:12px;color:${BRAND.textMuted};">
                16126 Southwest Fwy, Ste 180, Sugar Land, TX 77479
              </p>
              <p style="margin:0;font-family:sans-serif;font-size:12px;color:${BRAND.textMuted};">
                <a href="tel:281-916-2020" style="color:${BRAND.teal};text-decoration:none;">281-916-2020</a>
                &nbsp;&middot;&nbsp;
                <a href="${SITE_URL}" style="color:${BRAND.teal};text-decoration:none;">firstcolonyvision.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export function button(label, href) {
  return `
    <a href="${href}" style="display:inline-block;background:${BRAND.teal};color:#ffffff;text-decoration:none;font-family:sans-serif;font-size:14px;font-weight:600;padding:12px 24px;border-radius:10px;">
      ${escapeHtml(label)}
    </a>
  `
}

export { BRAND, SITE_URL, LOGO_CID, escapeHtml }
