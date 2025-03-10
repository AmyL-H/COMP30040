const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register user
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Check if the user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    // Create a new user instance
    user = new User({ name, email, password });
    await user.save();

    // Create a JWT token (expires in 1 hour)
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.status(201).json({
      msg: 'User created successfully',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        progress: user.progress
      }
    });
  } catch (err) {
    console.error('Registration error:', err);
    return res.status(500).json({ msg: 'Server Error during sign up' });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Compare provided password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Sign JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({
      msg: 'Logged in successfully',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        progress: user.progress
      }
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ msg: 'Server Error' });
  }
};
