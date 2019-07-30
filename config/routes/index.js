const express = require('express');
const userRoutes = require('./user');
const authRoutes = require('./auth');
const bookRoutes = require('./book');

const router = express.Router();

router.get('/api-status', (req, res) =>
  res.json({ status: "ok" }));

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/books', bookRoutes);

module.exports = router;
