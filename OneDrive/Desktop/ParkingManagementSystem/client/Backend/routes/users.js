// routes/users.js
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
    const { name, email, phone, password, role } = req.body;

    try {
        const newUser  = new User({ name, email, phone, password, role });
        await newUser.save();
        res.status(201).json({ message: 'User  created successfully' });
    } catch (error) {
        console.error('Error creating user:', error); // Log the full error
        res.status(500).json({ error: 'Error creating user' });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: 'User  not found' });

        // Check if the password matches (this is a simple check, not secure)
        if (user.password !== password) return res.status(400).json({ error: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' });
    }
});

module.exports = router;