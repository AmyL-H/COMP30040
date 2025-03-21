const express = require('express');
const router = express.Router();
const Discussion = require('../models/discussionModel');

// Fetch all discussion posts
router.get('/', async (req, res) => {
  try {
    const discussions = await Discussion.find().sort({ createdAt: -1 });
    res.status(200).json(discussions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching discussions' });
  }
});

// Create a new discussion post
router.post('/', async (req, res) => {
  try {
    const { username, message } = req.body;
    if (!username || !message) {
      return res.status(400).json({ message: 'Username and message are required' });
    }

    const newDiscussion = new Discussion({ username, message });
    await newDiscussion.save();

    res.status(201).json(newDiscussion);
  } catch (error) {
    res.status(500).json({ message: 'Error creating discussion post' });
  }
});

module.exports = router;
