const User = require('../models/userModel');

// Update lesson progress (unlock next lesson if score ≥ 50%)
exports.updateProgress = async (req, res) => {
  const { lessonId, score, nextLessonId } = req.body; // score is a percentage
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    // Only update progress if score is at least 50%
    if (score >= 50) {
      user.progress.set(lessonId, score);
      // Unlock the next lesson if it hasn't been unlocked yet
      if (nextLessonId && !user.progress.has(nextLessonId)) {
        user.progress.set(nextLessonId, 0);
      }
      await user.save();
      return res.status(200).json({ msg: 'Progress updated', updatedUser: user });
    } else {
      return res.status(400).json({ msg: 'Score too low to unlock next lesson' });
    }
  } catch (error) {
    console.error('Progress update error:', error);
    return res.status(500).json({ msg: 'Server error' });
  }
};

// Update user XP (add xpEarned to existing XP)
exports.updateXP = async (req, res) => {
  const { xpEarned } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    user.xp = (user.xp || 0) + xpEarned;
    await user.save();
    return res.status(200).json({ msg: 'XP updated', xp: user.xp });
  } catch (error) {
    console.error('XP update error:', error);
    return res.status(500).json({ msg: 'Server error while updating XP' });
  }
};
