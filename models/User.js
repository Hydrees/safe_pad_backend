const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Username is required'],
            unique: true,
            trim: true,
        },
        
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            trim: true,
            match: [],
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            // minlength: [6, 'Password must be at least 6 characters'],
        },
        
    },
    {
        timestamps: true,
    },
);


module.exports = mongoose.model('User', UserSchema);