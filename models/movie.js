// model for Movies

// reference to mongoose
const mongoose = require('mongoose');

// Movie Schema
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Movie title is required.'
    },
    yearRelease: {
        type: Number,
        required: 'The Year that the movie was released is required.'
    },
    storyLine: {
        type: String,
        required: 'The storyline of the movie is required'
    }, 
    mainActor: {
        type: String,
        required: 'Name of the main actor is required'
    },
    director: {
        type: String,
        required: 'Name of the director is required'
    },
    comments: [{
        type: String
    }]
});

module.exports = mongoose.model('Movie', movieSchema);