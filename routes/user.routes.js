const express = require('express');
const router = require('express').Router();

const secureRoute = require('../middleware/secureRoute');
const { getProfile } = require('../controllers/User');

router.get('/profile', secureRoute, getProfile);

module.exports = router;