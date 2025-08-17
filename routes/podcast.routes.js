const express = require('express');
const router = require('express').Router();
const { getAllPodcasts, showPodcast } = require('../controllers/Podcasts');
const secureRoute = require('../middleware/secureRoute');

router.get('/podcasts', secureRoute, getAllPodcasts);
router.get('/podcasts/:podcastId', showPodcast);

module.exports = router;