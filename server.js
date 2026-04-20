import express from 'express'
import nodemailer from 'nodemailer'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

// Configure SMTP for info@iivre.com — fill in your actual SMTP credentials
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true,
  auth: {
    user: process.env.SMTP_USER || 'info@iivre.com',
    pass: process.env.SMTP_PASS || 'YOUR_SMTP_PASSWORD',
  },
})

app.post('/api/send-lead', async (req, res) => {
  const { name, phone, purpose, budget, buttonTitle, submittedAt } = req.body

  if (!name || !phone) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const csvHeader = 'Name,Phone,Purpose,Budget,Button,Submitted At\n'
  const csvRow = [
    `"${name}"`,
    `"${phone}"`,
    `"${purpose || ''}"`,
    `"${budget || ''}"`,
    `"${buttonTitle || ''}"`,
    `"${submittedAt || new Date().toISOString()}"`,
  ].join(',')
  const csvContent = csvHeader + csvRow

  try {
    await transporter.sendMail({
      from: '"Greenz LP" <info@iivre.com>',
      to: 'socialmedia@iiver.com',
      subject: `New Lead: ${name} — ${buttonTitle || 'WhatsApp Enquiry'}`,
      text: `New lead submitted:\n\nName: ${name}\nPhone: ${phone}\nPurpose: ${purpose || 'Not specified'}\nBudget: ${budget || 'Not specified'}\nButton: ${buttonTitle || ''}\nTime: ${submittedAt || new Date().toISOString()}`,
      attachments: [
        {
          filename: `lead_${Date.now()}.csv`,
          content: csvContent,
          contentType: 'text/csv',
        },
      ],
    })
    res.json({ ok: true })
  } catch (err) {
    console.error('Email send error:', err)
    res.status(500).json({ error: 'Failed to send email' })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Lead server running on port ${PORT}`))
