const bcrypt = require('bcrypt');
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
    passwordHash: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    bio: {
        type: String
    },
    boards: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Board'
    }],
    avatar: {
        type: String
    }
});

userSchema.methods.validatePassword = function(password) {
    return bcrypt.compare(password, this.passwordHash);
}

module.exports = mongoose.model('User', userSchema);