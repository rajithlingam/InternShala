import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

import authRoutes from './routes/auth.js';
import channelRoutes from './routes/channels.js';
import videoRoutes from './routes/videos.js';
import commentRoutes from './routes/comments.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({ origin: (process.env.CLIENT_ORIGIN || '').split(',').filter(Boolean) || '*', credentials: true }));
app.use(morgan('dev'));

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.use('/api/auth', authRoutes);
app.use('/api/channels', channelRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/comments', commentRoutes);

const PORT = process.env.PORT || 5001;

(async () => {
  try {
    if (!process.env.MONGO_URI) throw new Error('Missing MONGO_URI');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log('API running on ' + PORT));
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
