// scripts/seedPodcast.js
require('dotenv').config();
const mongoose = require('mongoose');
const Podcast = require('../models/Podcast');

(async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log('Mongo connected');

    const doc = await Podcast.create({
      title: 'Intro to Web Dev',
      description: 'Episode 1: HTML, CSS, and JS basics.',
      audio_url: {
        url: 'https://example.com/audio/intro-web-dev.mp3',
        duration: 1800 // seconds (30 mins)
      },
      podcastImage: {
        url: 'https://example.com/images/intro-web-dev.jpg'
      },
      creator: 'Admin'
    });

    console.log('Seeded podcast _id:', doc._id.toString());
  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
})();
