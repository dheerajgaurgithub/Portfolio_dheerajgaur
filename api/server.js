const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

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

// Hardcoded SMTP settings (as requested)
const SMTP_HOST = 'smtp.gmail.com';
const SMTP_PORT = 587;
const SMTP_USER = 'dheerajgaur.0fficial@gmail.com';
const SMTP_PASS_WITH_SPACES = 'xmdo mwjn zmwe anoh';
const SMTP_PASS = SMTP_PASS_WITH_SPACES.replace(/\s+/g, '');
const CONTACT_TO = 'dheerajgaur.0fficial@gmail.com';
const CONTACT_FROM = 'dheerajgaur.0fficial@gmail.com';

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
    console.error('Email send error:', err);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

app.get('/api/health', (req, res) => res.json({ ok: true }));
app.use((req, res) => { res.status(404).json({ error: 'Not Found', path: req.path }); });

app.listen(PORT, () => {
  console.log(`Contact API listening on http://localhost:${PORT}`);
});
