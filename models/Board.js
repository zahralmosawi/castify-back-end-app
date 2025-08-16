const mongoose = require('mongoose')
const {Schema, model} = require('mongoose')
const Podcast = require('./Podcast')

const BoardSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    podcasts: [{
        type: Schema.Types.ObjectId,
        ref: 'Podcast'
    }],
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: {
        type: String
    },
    isPublic: {
        type: Boolean,
    },
    tags: [{
        type: String,
        lowercase: true
    }]
})

const Board = mongoose.model('Board', BoardSchema)
module.exports = Board