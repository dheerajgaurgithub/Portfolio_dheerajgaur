import { Router } from 'express';
import { sendContactEmail, sendWebhookEmail, logContactInfo } from '../lib/mailer.js';

const router = Router();

// GET /api/contact - Show available methods
router.get('/', (req, res) => {
  res.json({
    message: 'Contact API',
    availableMethods: [
      {
        method: 'POST',
        path: '/api/contact',
        description: 'Send a contact message',
        requiredFields: ['name', 'email', 'message'],
        example: {
          name: 'John Doe',
          email: 'john@example.com',
          message: 'Hello, this is a test message'
        }
      },
      {
        method: 'GET',
        path: '/api/contact/test',
        description: 'Test SMTP configuration'
      }
    ]
  });
});

// Test endpoint to check SMTP configuration
router.get('/test', async (req, res) => {
  try {
    console.log('🧪 Testing SMTP configuration...');
    
    // Check environment variables
    const smtpConfig = {
      user: process.env.SMTP_USER || 'NOT SET',
      pass: process.env.SMTP_PASS ? '***SET***' : 'NOT SET',
      to: process.env.TO_EMAIL || 'NOT SET'
    };
    
    console.log('📧 SMTP Config:', smtpConfig);
    
    // Try to create transporter
    const { transporter } = await import('../lib/mailer.js');
    
    // Test connection
    await transporter.verify();
    
    res.json({
      status: 'success',
      message: 'SMTP configuration is working',
      config: smtpConfig,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('❌ SMTP test failed:', error);
    res.status(500).json({
      status: 'error',
      message: 'SMTP configuration failed',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

router.post('/', async (req, res) => {
  try {
    console.log('📧 Contact form submission received:', {
      body: req.body,
      origin: req.headers.origin,
      userAgent: req.headers['user-agent'],
      timestamp: new Date().toISOString()
    });

    const { name, email, message } = req.body || {};

    // Validate name
    if (!name || typeof name !== 'string' || name.length > 200) {
      console.log('❌ Invalid name:', name);
      return res.status(400).json({ error: 'Invalid name' });
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
      console.log('❌ Invalid email:', email);
      return res.status(400).json({ error: 'Invalid email' });
    }
    
    // Validate message
    if (!message || typeof message !== 'string' || message.length < 5) {
      console.log('❌ Invalid message:', message);
      return res.status(400).json({ error: 'Message too short' });
    }

    console.log('✅ All validations passed, attempting to send email...');
    
    // Try multiple email methods in order of reliability
    let emailResult;
    const contactData = { 
      name: name.trim(), 
      email: email.trim(), 
      message: message.trim() 
    };
    
    try {
      // Method 1: Try webhook service first (most reliable for Render)
      console.log('🌐 Trying webhook email service...');
      emailResult = await sendWebhookEmail(contactData);
      console.log('✅ Webhook email sent successfully:', emailResult.messageId);
    } catch (webhookError) {
      console.log('⚠️ Webhook failed, trying SMTP:', webhookError.message);
      
      try {
        // Method 2: Try SMTP if webhook fails
        emailResult = await sendContactEmail(contactData);
        console.log('✅ SMTP email sent successfully:', emailResult.messageId);
      } catch (smtpError) {
        console.log('⚠️ SMTP failed, falling back to logging:', smtpError.message);
        // Method 3: Log as final fallback
        emailResult = await logContactInfo(contactData);
      }
    }
    
    return res.json({ 
      ok: true, 
      messageId: emailResult.messageId,
      method: emailResult.webhook ? 'webhook' : emailResult.logged ? 'logged' : 'smtp',
      timestamp: new Date().toISOString()
    });
    
  } catch (err) {
    console.error('❌ Contact error details:', {
      message: err.message,
      stack: err.stack,
      code: err.code,
      response: err.response,
      timestamp: new Date().toISOString()
    });
    
    // Return more specific error information
    return res.status(500).json({ 
      error: 'Failed to send message',
      details: err.message,
      timestamp: new Date().toISOString()
    });
  }
});

export default router;