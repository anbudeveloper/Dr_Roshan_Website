const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })
const express    = require('express')
const cors       = require('cors')
const nodemailer = require('nodemailer')

const app = express()
app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

app.post('/api/contact', async (req, res) => {
  const { name, phone, email, treatment, date, message } = req.body

  if (!name || !phone) {
    return res.status(400).json({ success: false, error: 'Name and phone are required' })
  }

  const html = `
    <div style="font-family:sans-serif;max-width:520px;margin:0 auto;border:1px solid #e4ecf8;border-radius:12px;overflow:hidden;">
      <div style="background:#071b57;padding:24px 28px;">
        <h2 style="margin:0;color:#fff;font-size:20px;">New Appointment Request</h2>
        <p style="margin:6px 0 0;color:rgba(255,255,255,0.7);font-size:13px;">Dr. Roshan's Dental Care — Trichy</p>
      </div>
      <div style="padding:24px 28px;background:#fff;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:8px 0;color:#5a6a8a;font-weight:600;width:130px;">Name</td><td style="padding:8px 0;color:#07133f;font-weight:700;">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#5a6a8a;font-weight:600;">Phone</td><td style="padding:8px 0;color:#07133f;font-weight:700;">${phone}</td></tr>
          ${email    ? `<tr><td style="padding:8px 0;color:#5a6a8a;font-weight:600;">Email</td><td style="padding:8px 0;color:#07133f;font-weight:700;">${email}</td></tr>` : ''}
          ${treatment? `<tr><td style="padding:8px 0;color:#5a6a8a;font-weight:600;">Treatment</td><td style="padding:8px 0;color:#07133f;font-weight:700;">${treatment}</td></tr>` : ''}
          ${date     ? `<tr><td style="padding:8px 0;color:#5a6a8a;font-weight:600;">Preferred Date</td><td style="padding:8px 0;color:#07133f;font-weight:700;">${date}</td></tr>` : ''}
          ${message  ? `<tr><td style="padding:8px 0;color:#5a6a8a;font-weight:600;vertical-align:top;">Message</td><td style="padding:8px 0;color:#07133f;font-weight:700;">${message}</td></tr>` : ''}
        </table>
      </div>
      <div style="padding:14px 28px;background:#f6f9fe;border-top:1px solid #e4ecf8;">
        <p style="margin:0;font-size:12px;color:#8a9ab8;">Sent from Dr. Roshan's Dental Care website</p>
      </div>
    </div>
  `

  try {
    await transporter.sendMail({
      from: `"Dr. Roshan's Dental Care" <${process.env.EMAIL_USER}>`,
      to:   process.env.CLINIC_EMAIL,
      subject: `New Appointment — ${treatment || 'General Inquiry'} | ${name}`,
      html,
    })
    res.json({ success: true })
  } catch (err) {
    console.error('Mail error:', err.message)
    res.status(500).json({ success: false, error: 'Failed to send email' })
  }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
