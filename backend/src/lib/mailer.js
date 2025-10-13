import nodemailer from 'nodemailer';

// 🔒 Hardcoded configuration
const PORT = 5000;
const FRONTEND_ORIGIN = 'https://dheerajgaurofficial.netlify.app/';
const SMTP_USER = 'dheerajgaur.0fficial@gmail.com';
const SMTP_PASS = 'msctxvephduwhsay';
const TO_EMAIL = 'dheerajgaur.0fficial@gmail.com';

// ✅ Create transporter with Gmail SMTP
export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

// 📩 Function to send contact email
export async function sendContactEmail({ name, email, message }) {
  const info = await transporter.sendMail({
    from: SMTP_USER,
    to: TO_EMAIL,
    subject: `New contact from ${name}`,
    replyTo: email,
    text: `From: ${name} <${email}>\n\n${message}`,
    html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(/\n/g, '<br/>')}</p>`,
  });

  return info;
}
