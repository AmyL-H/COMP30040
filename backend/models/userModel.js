const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Use a Map to store progress for lessons (e.g., "lesson1": 75)
  progress: { type: Map, of: Number, default: {} },
  // XP field (initialize to 0)
  xp: { type: Number, default: 0 },
  streakCount: { type: Number, default: 0 },
  lastVisitDate: { type: Date, default: null },
  streakCalendar: [
    {
      date: String,
      active: Boolean,
    }
  ],
}, { timestamps: true });

// Pre-save middleware for password hashing
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model('User', userSchema);
