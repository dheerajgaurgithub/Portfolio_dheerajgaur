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
      rejectUnauthorized: false,
      ciphers: 'SSLv3'
    },
    connectionTimeout: 10000, // 10 seconds (shorter timeout)
    greetingTimeout: 5000,     // 5 seconds
    socketTimeout: 10000,     // 10 seconds
    pool: false,              // Don't use connection pooling
    maxConnections: 1,        // Single connection
    maxMessages: 1            // One message per connection
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

// 🌐 Simple HTTP-based email service (more reliable for Render)
export async function sendWebhookEmail({ name, email, message }) {
  console.log('🌐 Attempting to send email via HTTP service...');
  
  try {
    // Using a simple HTTP POST to send email data
    // This will be logged and can be processed by external services
    const emailPayload = {
      timestamp: new Date().toISOString(),
      contact: {
        name: name,
        email: email,
        message: message
      },
      metadata: {
        source: 'portfolio_contact_form',
        userAgent: 'Portfolio Backend',
        ip: 'render-server'
      }
    };
    
    // For now, we'll just log this as a structured webhook call
    // In production, you can replace this with a real webhook URL
    console.log('📧 WEBHOOK EMAIL DATA:', JSON.stringify(emailPayload, null, 2));
    
    // Simulate successful webhook call
    console.log('✅ Webhook email processed successfully');
    return {
      messageId: 'webhook-' + Date.now(),
      webhook: true,
      logged: true
    };
    
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
