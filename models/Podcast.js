const mongoose = require('mongoose');
const {Schema, model} = require('mongoose')

const PodcastSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    audio_url:{
        url: {
            type: String,
            required: true
        }, 
        duration: {
            type: Number,
            min: 0
        }
    },
    podcastImage:{
        url: {
            type: String,
            required: true
        }
    },
    creator:{
        type: String,
        required: true
    }
})

const Podcast = mongoose.model('Podcast', PodcastSchema)
module.exports = Podcast