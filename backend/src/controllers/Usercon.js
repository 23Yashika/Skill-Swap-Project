import Usermodel from '../models/Usermodel.js';

// Register a new user
export const registerUser = async (req, res) => {
  const { fullName, username, email, password } = req.body;

  try {
    // Check if username or email exists
    const existingUser = await Usermodel.findOne({
      $or: [{ username }, { email }]
    });

    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }

    // Save user directly
    const newUser = await Usermodel.create({
      fullName,
      username,
      email,
      password
    });

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        email: newUser.email
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Login with username or email + password
export const loginUser = async (req, res) => {
  const { usernameOrEmail, password } = req.body;

  try {
    // Find by username or email
    const user = await Usermodel.findOne({
      $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }]
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check password (plain text match)
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        fullName: user.fullName,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Fetch user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await Usermodel.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
