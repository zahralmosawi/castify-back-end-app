const express = require('express');
const router = require('express').Router();
const { getAllPodcasts, showPodcast } = require('../controllers/Podcasts');

router.get('/podcasts', getAllPodcasts);
router.get('/podcasts/:podcastId', showPodcast);
module.exports = router;