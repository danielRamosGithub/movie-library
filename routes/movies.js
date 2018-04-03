// references
var express = require('express');
var router = express.Router();
const Movie = require('../models/movie');

// GET: /movies
router.get('/', (req, res, next) => {
    // get movie documents from db
    Movie.find((err, movies) => {
        if(err) {
            console.log(err);
        } else {
            res.render('movies/index', {
                title: 'Movie List',
                movies: movies
                // ,
                // user: req.user
            });
        }
    });
});

// make it public
module.exports = router;