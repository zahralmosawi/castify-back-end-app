const router = require('express').Router();
const bcrypt = require('bcrypt');

const User = require('../models/User');
const isLoggedIn = require('../middleware/isLoggedIn');

const multer = require('multer');
const { avatarStorage } = require('../config/cloudinary');
const upload = multer({ storage: avatarStorage });