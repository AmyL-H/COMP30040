const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const progressRoutes = require('./routes/progressRoutes');
const discussionRoutes = require('./routes/discussionRoutes');

dotenv.config();

// Import the User model (ensure you have this file and model defined)
const User = require('./models/userModel');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Mount routes
app.use('/api/users', userRoutes);
app.use('/api/progress', progressRoutes);

// Leaderboard Endpoint
app.get('/api/leaderboard', async (req, res) => {
  try {
    // Fetch users from the database, sorting them directly in MongoDB
    const users = await User.find({})
      .select('name xp')
      .sort({ xp: -1 }) // Sort in descending order
      .exec();

    res.json(users);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    res.status(500).json({ error: 'Failed to fetch leaderboard data' });
  }
});

console.log("MongoDB URI:", process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/community', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Routes
app.use('/api/discussions', discussionRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
