import nodemailer from 'nodemailer'
import { readFileSync } from 'fs'
import path from 'path'
import { LOGO_CID } from './emailTemplate'

// Gmail/Workspace SMTP via an App Password (not the account password).
// See EMAIL_USER/EMAIL_PASS in .env.local -- never hardcode credentials here.
let transporter = null

export function getTransporter() {
  if (transporter) return transporter
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return null

  transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })
  return transporter
}

// Embedded as a CID attachment (see lib/emailTemplate.js) instead of a
// hosted <img src>, since most clients block remote images by default --
// read once per cold start, not per send.
let logoAttachment = null
function getLogoAttachment() {
  if (logoAttachment) return logoAttachment
  try {
    const filePath = path.join(process.cwd(), 'public', 'images', 'logo-mark.png')
    logoAttachment = {
      filename: 'logo-mark.png',
      content: readFileSync(filePath),
      cid: LOGO_CID,
    }
  } catch (err) {
    console.warn('[mailer] could not read logo for embedding:', err)
    logoAttachment = false
  }
  return logoAttachment
}

export async function sendMail({ to, subject, text, html, replyTo }) {
  const t = getTransporter()
  if (!t) throw new Error('Email is not configured (missing EMAIL_USER/EMAIL_PASS).')

  const logo = getLogoAttachment()

  return t.sendMail({
    from: `"First Colony Vision" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
    html,
    ...(replyTo ? { replyTo } : {}),
    ...(logo ? { attachments: [logo] } : {}),
  })
}
