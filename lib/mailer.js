import nodemailer from 'nodemailer'

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

export async function sendMail({ to, subject, text, html, replyTo }) {
  const t = getTransporter()
  if (!t) throw new Error('Email is not configured (missing EMAIL_USER/EMAIL_PASS).')

  return t.sendMail({
    from: `"First Colony Vision" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
    html,
    ...(replyTo ? { replyTo } : {}),
  })
}
