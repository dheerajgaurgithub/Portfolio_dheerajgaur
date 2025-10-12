import nodemailer from 'nodemailer';

const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

if (!smtpUser || !smtpPass) {
  console.warn('SMTP_USER/SMTP_PASS not set');
}

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

export async function sendContactEmail({ name, email, message }) {
  const to = process.env.TO_EMAIL || smtpUser;
  const from = smtpUser;

  const info = await transporter.sendMail({
    from,
    to,
    subject: `New contact from ${name}`,
    replyTo: email,
    text: `From: ${name} <${email}>\n\n${message}`,
    html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(/\n/g, '<br/>')}</p>`,
  });
  return info;
}
