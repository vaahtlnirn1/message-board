const express = require('express');
const corsMiddleware = require('./middleware/cors');
const channelsRouter = require('./routes/channels');
const messagesRouter = require('./routes/messages');

const router = express();
const port = 3001;

router.use(corsMiddleware);
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use(channelsRouter);
router.use(messagesRouter);

router.listen(port, () => {
  console.log(`\nServer is running at http://localhost:${port}`);
});