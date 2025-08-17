const express = require('express');
const router = require('express').Router();
const { getProfile } = require('../controllers/User');

router.get('/users', getProfile);

module.exports = router;