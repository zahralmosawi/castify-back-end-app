const Podcast = require('../models/Podcast');

async function getAllPodcasts(req, res) {
    try {
        const allPodcasts = await Podcast.find();

        if(allPodcasts.length) {
            res.status(200).json(allPodcasts);
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

async function showPodcast(req, res) {
    try {
        const podcast = await Podcast.findById(req.params.podcastId);
        
        if(!podcast) {
            return res.sendStatus(404);
        }

        res.status(200).json(podcast);
    } catch(error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    getAllPodcasts,
    showPodcast
}