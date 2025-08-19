const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const SECRET = process.env.JWT_SECRET;

exports.register = async (req, res) => {
    try {
        const { username, email, password, name, bio } = req.body;

        const existing = await User.findOne({ username });

        if (existing) {
            return res.status(400).json({message: 'Username already exists'});
        }

        const passwordHash = await bcrypt.hash(password, 8);

        const newUser = new User({username, email, passwordHash, name, bio});
        await newUser.save();

        res.status(201).json({message: 'User registered successfully'});
    } catch (error) {
        res.status(500).json({message: 'Server error'});
    }
};

exports.login = async (req, res) => {
    console.log(process.env.JWT_SECRET)
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' })
        }

        const isValid = await user.validatePassword(password)
        if (!isValid) {
            return res.status(401).json({ message: 'Invalid username or password' })
        }

        const payload = { 
            id: user._id,
            username: user.username,
            email: user.email,
            name: user.name,
            bio: user.bio,
            avatar: user.avatar
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h'});

        res.json({token});
    } catch (error) {
        res.status(500).json({message: 'Server error'});
    }
}

exports.changePassword = async (req, res) => {
    try{
        const { currentPassword, newPassword } = req.body
        const userId = req.user.id

        const  user = await User.findById(userId)
        if (!user){
            return res.status(404).json({message: 'User not found'})
        }

        const isValidPass = await user.validatePassword(currentPassword)
        if(!isValidPass){
            return res.status(401).json({message: 'Current password is incorrect'})
        }

        const newPasswordHash = await bcrypt.hash(newPassword, 8)
        await user.save()

    }catch(error){
        res.status(500).json({message: 'Server error', error: error.message})
    }
}