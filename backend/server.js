import express from 'express';
import cors from 'cors';
import contactRouter from './src/routes/contact.js';

const app = express();
const PORT = 5000;

// ✅ Frontend origin without trailing slash
const FRONTEND_ORIGIN = 'https://dheerajgaurofficial.netlify.app';

// ✅ Define detailed CORS configuration
const corsOptions = {
  origin: FRONTEND_ORIGIN,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

// ✅ Apply CORS middleware globally
app.use(cors(corsOptions));

// ✅ Handle all preflight (OPTIONS) requests
app.options('*', cors(corsOptions));

app.use(express.json());

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Root info route
app.get('/', (req, res) => {
  res.json({
    message: 'Portfolio backend is running 🚀',
    docs: ['/api/health', 'POST /api/contact'],
  });
});

// Contact route
app.use('/api/contact', contactRouter);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌐 Allowed origin: ${FRONTEND_ORIGIN}`);
});
