const express = require('express');
const router = express.Router();

let channels = [
  { id: 1, name: 'General', messages: [] },
  { id: 2, name: 'Random', messages: [] },
  { id: 3, name: 'News', messages: [] }
];

router.get('/messages/:channel', (req, res) => {
  const channelName = req.params.channel;
  const channel = channels.find(c => c.name === channelName);
  if (channel) {
    res.json(channel.messages);
  } else {
    res.status(404).json({ error: 'Channel not found' });
  }
});

router.post('/:channel', (req, res) => {
  const channelName = req.params.channel;
  const channel = channels.find(c => c.name === channelName);
  if (channel) {
    const newMessage = { text: req.body.message, timestamp: new Date().toISOString() };
    channel.messages.push(newMessage);
    res.status(201).json(newMessage);
  } else {
    res.status(404).json({ error: 'Channel not found' });
  }
});

module.exports = router;