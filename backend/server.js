import express from 'express';
import cors from 'cors';
import contactRouter from './src/routes/contact.js';

const app = express();
const PORT = 5000;

// ✅ Frontend origin without trailing slash
const FRONTEND_ORIGIN = 'https://dheerajgaurofficial.netlify.app';

// In server.js, update the CORS configuration to this:
const corsOptions = {
  origin: 'https://dheerajgaurofficial.netlify.app',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

// Add headers before the routes are defined
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://dheerajgaurofficial.netlify.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

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
