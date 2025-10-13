import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRouter from './src/routes/contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigin = process.env.FRONTEND_ORIGIN || '*';
app.use(cors({ origin: allowedOrigin }));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/', (req, res) => {
  res.json({ message: 'Portfolio backend is running', docs: ['/api/health', 'POST /api/contact'] });
});

app.use('/api/contact', contactRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
