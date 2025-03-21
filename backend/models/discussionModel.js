const mongoose = require('mongoose');

const ReplySchema = new mongoose.Schema({
  username: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const DiscussionSchema = new mongoose.Schema({
  username: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  replies: [ReplySchema] // ✅ Add replies array
});

module.exports = mongoose.model('Discussion', DiscussionSchema);
