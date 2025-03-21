const express = require('express');
const router = express.Router();
const { updateProgress, updateXP } = require('../controllers/progressController');
const { protect } = require('../middleware/authMiddleware');

router.put('/update', protect, updateProgress);
router.put('/updateXP', protect, updateXP);

module.exports = router;