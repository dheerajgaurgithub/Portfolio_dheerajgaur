import nodemailer from 'nodemailer';

// 🔒 Environment variables ONLY - no hardcoded values
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const TO_EMAIL = process.env.TO_EMAIL;

// Validate environment variables
if (!SMTP_USER || !SMTP_PASS || !TO_EMAIL) {
  console.error('❌ Missing required environment variables:');
  console.error('SMTP_USER:', SMTP_USER ? 'SET' : 'NOT SET');
  console.error('SMTP_PASS:', SMTP_PASS ? 'SET' : 'NOT SET');
  console.error('TO_EMAIL:', TO_EMAIL ? 'SET' : 'NOT SET');
  console.error('Please set these environment variables in Render dashboard');
}

console.log('📧 SMTP Configuration:', {
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
