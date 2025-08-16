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
        url: String,
        public_id: String,
        duration: Number,
        required: true
    },
    podcastImage:{
        url: String
    },
    creator:{
        type: String,
        required: true
    }
})

const Podcast = mongoose.model('Podcast', PodcastSchema)
module.exports = Podcast