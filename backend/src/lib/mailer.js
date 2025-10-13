import nodemailer from 'nodemailer';

// 🔒 Environment variables for production
const SMTP_USER = process.env.SMTP_USER || 'dheerajgaur.0fficial@gmail.com';
const SMTP_PASS = process.env.SMTP_PASS || 'msctxvephduwhsay';
const TO_EMAIL = process.env.TO_EMAIL || 'dheerajgaur.0fficial@gmail.com';

console.log('📧 SMTP Configuration:', {
  user: SMTP_USER,
  pass: SMTP_PASS ? '***hidden***' : 'NOT SET',
  to: TO_EMAIL
});

// ✅ Create transporter with Gmail SMTP
export const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false
  }
});

// 📩 Function to send contact email
export async function sendContactEmail({ name, email, message }) {
  console.log('📧 Attempting to send email:', { name, email, message: message.substring(0, 50) + '...' });
  
  try {
    // First verify the connection
    console.log('🔍 Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified');
    
    const info = await transporter.sendMail({
      from: SMTP_USER,
      to: TO_EMAIL,
      subject: `New contact from ${name}`,
      replyTo: email,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(/\n/g, '<br/>')}</p>`,
    });
    
    console.log('✅ Email sent successfully:', info.messageId);
    return info;
  } catch (error) {
    console.error('❌ Email sending failed:', {
      message: error.message,
      code: error.code,
      response: error.response,
      stack: error.stack
    });
    throw error;
  }
}

// 🆘 Fallback function - just log the contact info if email fails
export async function logContactInfo({ name, email, message }) {
  console.log('📝 CONTACT FORM SUBMISSION (Email failed, logging instead):');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  console.log('Timestamp:', new Date().toISOString());
  
  return {
    messageId: 'logged-' + Date.now(),
    logged: true
  };
}
