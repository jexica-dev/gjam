import 'dotenv/config';
import db from './db/connection.js';
import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import routes from './routes/index.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// API Routes
app.use('/api', routes);

// Static Files (React Build)
app.use(express.static(path.join(__dirname, 'client', 'build')));

// The "Zero-Syntax" Catch-all
// This handles client-side routing and MUST stay at the bottom of the middleware stack
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// Database Connection & Server Start
db.on('connected', () => {
  console.log('Connected to MongoDB!');
  app.listen(PORT, () =>
    console.log(`Express server application is running on port ${PORT}`),
  );
});
