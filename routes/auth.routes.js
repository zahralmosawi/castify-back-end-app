const router = require('express').Router();
const bcrypt = require('bcrypt');

const User = require('../models/User');

const multer = require('multer');
const { avatarStorage } = require('../config/cloudinary');
const upload = multer({ storage: avatarStorage });

module.exports = router;