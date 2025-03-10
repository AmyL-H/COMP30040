require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const progressRoutes = require('./routes/progressRoutes'); // Ensure you have this if you update progress

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors());         // Enable Cross-Origin Resource Sharing

// Mount routes
app.use('/api/users', userRoutes);
app.use('/api/progress', progressRoutes);

console.log("MongoDB URI:", process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
