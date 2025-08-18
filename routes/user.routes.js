const express = require('express');
const router = require('express').Router();

const secureRoute = require('../middleware/secureRoute');
const { getProfile, updateProfile } = require('../controllers/User');

router.get('/profile', secureRoute, getProfile);
router.put('/profile', secureRoute, updateProfile);

module.exports = router;