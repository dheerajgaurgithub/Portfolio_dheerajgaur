const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Allow all origins (no credentials). For cookies/auth, switch to an explicit allowlist.
app.use(cors({
  origin: '*',
  credentials: false,
  methods: ['GET','POST','OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
// Handle preflight requests without using a wildcard path to avoid path-to-regexp errors
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return res.sendStatus(204);
  }
  next();
});
app.use(express.json());
app.use((req, _res, next) => { console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`); next(); });

// SMTP settings (prefer environment variables)
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const RAW_PASS = process.env.SMTP_PASS || '';
const SMTP_PASS = RAW_PASS.replace(/\s+/g, '');
const SMTP_USER = process.env.SMTP_USER || '';
const CONTACT_TO = process.env.CONTACT_TO || SMTP_USER;
const CONTACT_FROM = process.env.CONTACT_FROM || SMTP_USER;

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    // Verify SMTP configuration before attempting to send
    try {
      await transporter.verify();
    } catch (e) {
      console.error('SMTP verify failed:', e?.code, e?.message);
      return res.status(500).json({ error: 'SMTP verify failed', code: e?.code, msg: e?.message });
    }

    await transporter.sendMail({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${String(message).replace(/\n/g, '<br/>')}</p>`,
    });

    res.json({ ok: true });
  } catch (err) {
    console.error('Email send error:', err?.code, err?.message);
    res.status(500).json({ error: 'Failed to send message', code: err?.code, msg: err?.message });
  }
});

app.get('/api/health', (req, res) => res.json({ ok: true }));
app.get('/api/contact', (req, res) => res.json({ ok: true, hint: 'POST name, email, message to send email' }));
app.use((req, res) => { res.status(404).json({ error: 'Not Found', path: req.path }); });

app.listen(PORT, () => {
  console.log(`Contact API listening on http://localhost:${PORT}`);
});
