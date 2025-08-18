const express = require('express');
const router = require('express').Router();

const secureRoute = require('../middleware/secureRoute');
const { getProfile, updateProfile, deleteAccount } = require('../controllers/User');

router.get('/profile', secureRoute, getProfile);
router.put('/profile/:id', secureRoute, updateProfile);
router.delete('/profile/:id', secureRoute, deleteAccount);

module.exports = router;