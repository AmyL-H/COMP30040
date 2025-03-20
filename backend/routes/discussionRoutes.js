const express = require('express');
const mongoose = require('mongoose');
const DiscussionPost = require('../models/discussionModel');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Get all discussion posts (sorted by latest first)
router.get('/', async (req, res) => {
  try {
    const posts = await DiscussionPost.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// Create a new discussion post (requires authentication)
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { userId, content } = req.body;
    if (!content) {
      return res.status(400).json({ error: 'Content cannot be empty' });
    }

    const newPost = new DiscussionPost({ userId, content });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
});

module.exports = router;
