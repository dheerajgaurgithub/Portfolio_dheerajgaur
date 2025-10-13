import express from 'express';
import cors from 'cors';
import contactRouter from './src/routes/contact.js';

const PORT = 5000;
const FRONTEND_ORIGIN = 'https://dheerajgaurofficial.netlify.app'; // ✅ no slash

const app = express();

app.use(
  cors({
    origin: FRONTEND_ORIGIN,
  })
);

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/', (req, res) => {
  res.json({ message: 'Portfolio backend running', docs: ['/api/health', 'POST /api/contact'] });
});

app.use('/api/contact', contactRouter);

app.listen(PORT, () => {
  console.log(`✅ Server listening on port ${PORT}`);
  console.log(`🌐 Allowed origin: ${FRONTEND_ORIGIN}`);
});
