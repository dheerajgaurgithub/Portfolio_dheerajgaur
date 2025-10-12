import { Router } from 'express';
import { sendContactEmail } from '../lib/mailer.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body || {};

    if (!name || typeof name !== 'string' || name.length > 200) {
      return res.status(400).json({ error: 'Invalid name' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email' });
    }
    if (!message || typeof message !== 'string' || message.length < 5) {
      return res.status(400).json({ error: 'Message too short' });
    }

    await sendContactEmail({ name: name.trim(), email: email.trim(), message: message.trim() });
    return res.json({ ok: true });
  } catch (err) {
    console.error('Contact error:', err);
    return res.status(500).json({ error: 'Failed to send message' });
  }
});

export default router;
