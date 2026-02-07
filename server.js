import 'dotenv/config';
import db from './db/connection.js';
import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import routes from './routes/index.js';

const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// API Routes
app.use('/api', routes);

// Database Connection & Server Start
db.on('connected', () => {
  console.log('Connected to MongoDB!');
  app.listen(PORT, '0.0.0.0', () =>
    console.log(`Express server application is running on port ${PORT}`),
  );
});
