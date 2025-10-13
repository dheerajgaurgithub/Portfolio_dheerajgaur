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

// 🌐 Real email service using Resend (reliable for Render)
export async function sendWebhookEmail({ name, email, message }) {
  console.log('🌐 Attempting to send email via Resend service...');
  
  try {
    // Using Resend API - a reliable email service for developers
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      console.log('⚠️ No Resend API key found, falling back to logging');
      throw new Error('No Resend API key configured');
    }
    
    const emailData = {
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [TO_EMAIL || 'dheerajgaur.0fficial@gmail.com'],
      subject: `New contact from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #007bff;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">
            Sent from your portfolio contact form at ${new Date().toISOString()}
          </p>
        </div>
      `,
      reply_to: email
    };
    
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData)
    });
    
    if (response.ok) {
      const result = await response.json();
      console.log('✅ Resend email sent successfully:', result.id);
      return {
        messageId: result.id,
        webhook: true,
        service: 'resend'
      };
    } else {
      const error = await response.text();
      throw new Error(`Resend API error: ${response.status} - ${error}`);
    }
    
  } catch (error) {
    console.error('❌ Resend email failed:', error.message);
    
    // Fallback to logging if Resend fails
    console.log('📧 FALLBACK EMAIL DATA:', JSON.stringify({
      timestamp: new Date().toISOString(),
      contact: { name, email, message },
      metadata: { source: 'portfolio_contact_form', fallback: true }
    }, null, 2));
    
    return {
      messageId: 'fallback-' + Date.now(),
      webhook: true,
      logged: true,
      fallback: true
    };
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
