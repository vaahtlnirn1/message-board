const express = require('express');
const router = express.Router();

let channels = [
  { id: 1, name: 'General', messages: [] },
  { id: 2, name: 'Random', messages: [] },
  { id: 3, name: 'News', messages: [] }
];

router.get('/channels', (req, res) => {
  res.json(channels.map(channel => ({ id: channel.id, name: channel.name })));
});

module.exports = router;