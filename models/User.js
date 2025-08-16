const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 4
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    age: {
        type: Number,
        min: 6
    },
    bio: {
        type: String
    },
    avatar: {
        type: String
    },
    boards: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Board'
}]
});

const User = mongoose.model('User', userSchema);

module.exports = User;