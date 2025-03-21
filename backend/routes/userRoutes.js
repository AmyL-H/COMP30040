const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');
const User = require('../models/userModel'); 

// Route for user registration
router.post('/register', registerUser);

// Route for user login
router.post('/login', loginUser);

// Route 
router.post('/streak/check', async (req, res) => {
    const userId = req.body.userId;
    const today = new Date();
    const startOfToday = new Date(today.setHours(0, 0, 0, 0));
  
    try {
      const user = await User.findById(userId);
      if (!user) return res.status(404).json({ message: "User not found" });
  
      const lastVisit = user.lastVisit ? new Date(user.lastVisit) : null;
      const yesterday = new Date(startOfToday);
      yesterday.setDate(yesterday.getDate() - 1);
  
      if (!lastVisit || lastVisit < yesterday) {
        // Reset streak
        user.streak = 1;
        user.xp += 1;
      } else if (
        lastVisit.getDate() === yesterday.getDate() &&
        lastVisit.getMonth() === yesterday.getMonth() &&
        lastVisit.getFullYear() === yesterday.getFullYear()
      ) {
        // Continued streak
        user.streak += 1;
        user.xp += user.streak;
      } else {
        // Already visited today
        return res.json({ message: "Already counted today", xp: user.xp, streak: user.streak });
      }
  
      user.lastVisit = new Date();
      await user.save();
  
      res.json({ message: "Streak updated", xp: user.xp, streak: user.streak });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  });

module.exports = router;
