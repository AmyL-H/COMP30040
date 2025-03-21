const express = require('express');
const router = express.Router();
const Discussion = require('../models/discussionModel');

// Get posts by room
router.get('/:room', async (req, res) => {
  try {
    const posts = await Discussion.find({ room: req.params.room });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch discussions.' });
  }
});

// Post a new message to a room
router.post('/:room', async (req, res) => {
  const { username, message } = req.body;
  const room = req.params.room;

  try {
    const post = new Discussion({ username, message, room });
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ message: 'Failed to save post.' });
  }
});

// Add a reply to a post
router.post('/:room/:id/reply', async (req, res) => {
  const { username, message } = req.body;

  try {
    const post = await Discussion.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found.' });

    post.replies.push({ username, message });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Failed to save reply.' });
  }
});

module.exports = router;
