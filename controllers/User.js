const User = require('../models/User');

async function getProfile(req, res) {
    try {
        const user = await User.findById(req.session.user._id);

        if (user) {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    getProfile
}