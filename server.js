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

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

app.use('/api', routes);
// Serve React build files
app.use(express.static(path.join(__dirname, 'client/build')));
// Catch-all route to serve React app
// Updated syntax for Express 5 compatibility
app.get('/:any*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

db.on('connected', () => {
  console.log('Connected to MongoDB!');
  app.listen(PORT, () =>
    console.log(`Express server application is running on port ${PORT}`),
  );
});
