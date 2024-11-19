// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true }, // Store plain password (not recommended for production)
    role: { type: String, default: 'user' },
});

module.exports = mongoose.model('User ', UserSchema);