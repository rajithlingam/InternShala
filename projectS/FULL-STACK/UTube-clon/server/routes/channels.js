import express from 'express';
import Channel from '../models/Channel.js';
import Video from '../models/Video.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

router.post('/', requireAuth, async (req, res) => {
  const { channelName, description, channelBanner } = req.body;
  const channel = await Channel.create({ channelName, description, channelBanner, owner: req.userId });
  res.status(201).json(channel);
});

router.get('/:id', async (req, res) => {
  const c = await Channel.findById(req.params.id).lean();
  if (!c) return res.status(404).json({ message: 'Channel not found' });
  res.json(c);
});

router.get('/:id/videos', async (req, res) => {
  const vids = await Video.find({ channel: req.params.id }).sort('-createdAt');
  res.json(vids);
});

export default router;
