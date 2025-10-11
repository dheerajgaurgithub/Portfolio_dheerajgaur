import nodemailer from 'nodemailer';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  // Hardcoded SMTP settings (as requested)
  const SMTP_HOST = 'smtp.gmail.com';
  const SMTP_PORT = 587;
  const SMTP_USER = 'dheerajgaur.0fficial@gmail.com';
  const SMTP_PASS_WITH_SPACES = 'msct xvep hduw hsay';
  const SMTP_PASS = SMTP_PASS_WITH_SPACES.replace(/\s+/g, '');
  const CONTACT_TO = 'dheerajgaur.0fficial@gmail.com';
  const CONTACT_FROM = 'dheerajgaur.0fficial@gmail.com';

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
            <p>${message.replace(/\n/g, '<br/>')}</p>`,
    });

    res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('Email send error:', err);
    res.status(500).json({ error: 'Failed to send message' });
  }
}
