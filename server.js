import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

const colors = {
  appointment: {
    page: '#f2f7ff',
    heroA: '#073b82',
    heroB: '#0ea5e9',
    accent: '#ff2638',
    soft: '#fff1f3',
    noteBg: '#fff7ed',
    noteBorder: '#fdba74',
    noteText: '#9a3412',
  },
  contact: {
    page: '#effcf8',
    heroA: '#047857',
    heroB: '#06b6d4',
    accent: '#0f766e',
    soft: '#ecfdf5',
    noteBg: '#eff6ff',
    noteBorder: '#93c5fd',
    noteText: '#1e40af',
  },
}

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function displayValue(value, fallback = 'Not specified') {
  const trimmed = String(value || '').trim()
  return escapeHtml(trimmed || fallback)
}

function detailRow({ label, value, color, initial, multiline = false }) {
  return `
    <tr>
      <td style="padding:0 0 12px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e7edf7;border-radius:14px;overflow:hidden;">
          <tr>
            <td class="row-icon" width="56" style="width:56px;background:${color};color:#ffffff;text-align:center;font-size:16px;font-weight:800;letter-spacing:0;padding:16px 0;">${initial}</td>
            <td style="padding:14px 16px;">
              <div style="color:#64748b;font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:.7px;">${label}</div>
              <div style="color:#0f172a;font-size:${multiline ? '14px' : '16px'};font-weight:${multiline ? '600' : '800'};line-height:${multiline ? '1.65' : '1.4'};margin-top:4px;word-break:break-word;">${value}</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>`
}

function emailHtml({ type, title, subtitle, intro, rows, actionText }) {
  const theme = colors[type]

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="x-apple-disable-message-reformatting" />
  <title>${title}</title>
  <style>
    @media only screen and (max-width: 620px) {
      .email-wrap { padding: 18px 10px !important; }
      .email-card { width: 100% !important; border-radius: 18px !important; }
      .hero { padding: 28px 18px !important; }
      .content { padding: 22px 16px !important; }
      .brand-title { font-size: 21px !important; }
      .row-icon { width: 46px !important; font-size: 14px !important; }
      .pill { display: block !important; margin: 0 0 8px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:${theme.page};font-family:Arial,'Segoe UI',sans-serif;-webkit-text-size-adjust:100%;text-size-adjust:100%;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${theme.page};">
    <tr>
      <td class="email-wrap" align="center" style="padding:34px 14px;">
        <table role="presentation" class="email-card" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 22px 60px rgba(15,23,42,.14);">
          <tr>
            <td class="hero" style="background:${theme.heroA};background-image:linear-gradient(135deg,${theme.heroA},${theme.heroB});padding:34px 30px;text-align:left;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="64" style="width:64px;">
                    <div style="width:54px;height:54px;border-radius:18px;background:#ffffff;color:${theme.accent};font-size:19px;font-weight:900;line-height:54px;text-align:center;">RD</div>
                  </td>
                  <td>
                    <div class="brand-title" style="color:#ffffff;font-size:23px;font-weight:900;line-height:1.25;">Dr. Roshan's Dental Care</div>
                    <div style="color:rgba(255,255,255,.82);font-size:13px;font-weight:700;margin-top:5px;">${subtitle}</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background:${theme.soft};border-left:5px solid ${theme.accent};padding:16px 24px;">
              <p style="margin:0;color:#0f172a;font-size:15px;font-weight:800;line-height:1.45;">${intro}</p>
            </td>
          </tr>
          <tr>
            <td class="content" style="background:#ffffff;padding:28px 30px;">
              <p style="margin:0 0 18px;color:#475569;font-size:14px;font-weight:700;line-height:1.6;">Patient details from the website form:</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${rows.join('')}
              </table>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:10px;background:${theme.noteBg};border:1px solid ${theme.noteBorder};border-radius:14px;">
                <tr>
                  <td style="padding:16px 18px;">
                    <p style="margin:0;color:${theme.noteText};font-size:13px;font-weight:700;line-height:1.55;">${actionText}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background:#0f172a;padding:20px 26px;text-align:center;">
              <span class="pill" style="display:inline-block;color:#cbd5e1;font-size:12px;font-weight:700;">Dr. Roshan's Dental Care</span>
              <span class="pill" style="display:inline-block;color:#64748b;font-size:12px;font-weight:700;margin-left:8px;">info@drroshansdentalcare.com</span>
              <p style="margin:8px 0 0;color:#64748b;font-size:11px;line-height:1.5;">Automated notification from the website booking system.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function appointmentEmailHtml({ name, phone, treatment, date }) {
  return emailHtml({
    type: 'appointment',
    title: 'New Appointment Request',
    subtitle: 'New appointment request received',
    intro: 'A new patient has requested an appointment.',
    actionText: 'Action required: Please call the patient and confirm the appointment time.',
    rows: [
      detailRow({ label: 'Patient Name', value: displayValue(name), color: '#2563eb', initial: 'N' }),
      detailRow({ label: 'Phone Number', value: displayValue(phone), color: '#16a34a', initial: 'P' }),
      detailRow({ label: 'Treatment', value: displayValue(treatment), color: '#9333ea', initial: 'T' }),
      detailRow({ label: 'Preferred Date', value: displayValue(date), color: '#f97316', initial: 'D' }),
    ],
  })
}

function contactEmailHtml({ name, phone, email, treatment, message }) {
  const rows = [
    detailRow({ label: 'Name', value: displayValue(name), color: '#2563eb', initial: 'N' }),
    detailRow({ label: 'Phone', value: displayValue(phone), color: '#16a34a', initial: 'P' }),
  ]

  if (email) rows.push(detailRow({ label: 'Email', value: displayValue(email), color: '#ca8a04', initial: 'E' }))
  if (treatment && treatment !== 'Not specified') rows.push(detailRow({ label: 'Treatment Interest', value: displayValue(treatment), color: '#9333ea', initial: 'T' }))
  if (message) rows.push(detailRow({ label: 'Message', value: displayValue(message), color: '#475569', initial: 'M', multiline: true }))

  return emailHtml({
    type: 'contact',
    title: 'New Contact Message',
    subtitle: 'New contact message received',
    intro: 'Someone has sent a message through the website.',
    actionText: 'Action required: Please reply or call back as soon as possible.',
    rows,
  })
}

app.post('/api/send-email', async (req, res) => {
  const { type, name, phone, email, treatment, date, message } = req.body

  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone are required' })
  }

  const isContact = type === 'contact'

  try {
    await transporter.sendMail({
      from: `"Dr. Roshan's Dental Care" <${process.env.EMAIL_USER}>`,
      to: process.env.CLINIC_EMAIL,
      subject: isContact
        ? `New Message from ${name}`
        : `New Appointment Request - ${name}`,
      html: isContact
        ? contactEmailHtml({ name, phone, email, treatment, message })
        : appointmentEmailHtml({ name, phone, treatment, date }),
    })
    res.json({ success: true, message: 'Email sent successfully' })
  } catch (err) {
    console.error('Email error:', err.message)
    res.status(500).json({ error: 'Failed to send email' })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
