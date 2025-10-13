import { Router } from 'express';
import { sendContactEmail } from '../lib/mailer.js';

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
      }
    ]
  });
});

router.post('/', async (req, res) => {
  try {
    console.log('📧 Contact form submission received:', {
      body: req.body,
      origin: req.headers.origin,
      userAgent: req.headers['user-agent']
    });

    const { name, email, message } = req.body || {};

    if (!name || typeof name !== 'string' || name.length > 200) {
      console.log('❌ Invalid name:', name);
      return res.status(400).json({ error: 'Invalid name' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
      console.log('❌ Invalid email:', email);
      return res.status(400).json({ error: 'Invalid email' });
    }
    if (!message || typeof message !== 'string' || message.length < 5) {
      console.log('❌ Invalid message:', message);
      return res.status(400).json({ error: 'Message too short' });
    }

    console.log('✅ Validating email sending...');
    await sendContactEmail({ name: name.trim(), email: email.trim(), message: message.trim() });
    console.log('✅ Email sent successfully');
    return res.json({ ok: true });
  } catch (err) {
    console.error('❌ Contact error:', err);
    return res.status(500).json({ error: 'Failed to send message' });
  }
});

export default router;