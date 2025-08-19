const User = require('../models/User');
const bcrypt = require('bcrypt');

async function getProfile(req, res) {
    try {
        const user = await User.findById(req.user.id);

        if(!user) {
            return res.status(404).json({error: 'User not found'});
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

async function updateProfile(req, res) {
    try {
        const updates = {
            name: req.body.name,
            email: req.body.email,
            bio: req.body.bio
        }
        
        const user = await User.findByIdAndUpdate(
            req.user.id,
            updates,
            {new: true}
        )

        if (!user) {
            return res.status(404).json({error: "User not found"});
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

async function deleteAccount(req, res) {
    try {
        await User.findByIdAndDelete(req.user.id);
        res.status(200).json({message: "Account deleted successfully"});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    getProfile,
    updateProfile,
    deleteAccount
}