const express = require('express');
const router = express.Router();
const { updateProgress, updateXP } = require('../controllers/progressController');
const { protect } = require('../middleware/authMiddleware');

// Route to update lesson progress
router.put('/update', protect, updateProgress);

// Route to update user XP
router.put('/updateXP', protect, updateXP);

module.exports = router;
