import nodemailer from 'nodemailer';

// 🔒 Environment variables ONLY - no hardcoded values
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const TO_EMAIL = process.env.TO_EMAIL;
const EMAIL_SERVICE = process.env.EMAIL_SERVICE || 'gmail'; // gmail, webhook, or log

console.log('📧 Email Configuration:', {
  service: EMAIL_SERVICE,
  user: SMTP_USER || 'NOT SET',
  pass: SMTP_PASS ? '***SET***' : 'NOT SET',
  to: TO_EMAIL || 'NOT SET'
});

// Only create transporter if all env vars are set
let transporter = null;
if (SMTP_USER && SMTP_PASS && TO_EMAIL) {
  transporter = nodemailer.createTransport({
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
    },
    connectionTimeout: 60000, // 60 seconds
    greetingTimeout: 30000,   // 30 seconds
    socketTimeout: 60000      // 60 seconds
  });
} else {
  console.error('❌ Cannot create SMTP transporter - missing environment variables');
}

// 📩 Function to send contact email
export async function sendContactEmail({ name, email, message }) {
  console.log('📧 Attempting to send email:', { name, email, message: message.substring(0, 50) + '...' });
  
  // Check if transporter is available
  if (!transporter) {
    throw new Error('SMTP transporter not configured - missing environment variables');
  }
  
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

// 🌐 Webhook-based email service (more reliable for Render)
export async function sendWebhookEmail({ name, email, message }) {
  console.log('🌐 Attempting to send email via webhook...');
  
  try {
    // Using a free email service like EmailJS or Formspree
    const webhookUrl = process.env.WEBHOOK_URL || 'https://formspree.io/f/xpwgqkqv';
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
        _subject: `New contact from ${name}`,
        _replyto: email,
        _captcha: 'false'
      })
    });
    
    if (response.ok) {
      console.log('✅ Webhook email sent successfully');
      return {
        messageId: 'webhook-' + Date.now(),
        webhook: true
      };
    } else {
      throw new Error(`Webhook failed: ${response.status}`);
    }
  } catch (error) {
    console.error('❌ Webhook email failed:', error.message);
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
