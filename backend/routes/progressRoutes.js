const express = require('express');
const router = express.Router();
const { updateProgress, updateXP, completeLesson } = require('../controllers/progressController');
const { protect } = require('../middleware/authMiddleware');

router.put('/update', protect, updateProgress);
router.put('/updateXP', protect, updateXP);

// --- ✅ New completeLesson route ---
router.post('/completeLesson', protect, completeLesson);

module.exports = router;
