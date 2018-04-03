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

// GET: /movies/add
router.get('/add', (req, res, next) => {
    res.render('movies/add', {
        title: 'Add a new movie to the List'
    });
});

// POST: /movies/add
router.post('/add', (req, res, next) => {
    Movie.create({
        title: req.body.title,
        yearRelease: req.body.yearRelease,
        storyLine: req.body.storyLine,
        mainActor: req.body.mainActor,
        director: req.body.director
    }, (err, car) => {
        if(err) {
            console.log('err');
        } else {
            res.redirect('/movies');
        }
    });
});

// GET: /movies/delete/abc123
router.get('/delete/:_id', (req, res, next) => {
    // get the _id parameter from the url and store in a local variable
    let _id = req.params._id;

    // use the Car model to delete the document with this id
    Movie.remove({_id: _id}, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/movies')
        }
    });
});

// GET: /movies/edit/abc123
router.get('/edit/:_id', (req, res, next) => {
    let _id = req.params._id;

    // use Car model to find the selected document
    Movie.findById(_id, (err, movie) => {
        if(err) {
            console.log(err);
        } else {
            res.render('movies/edit', {
                title: 'Movie Information',
                movie: movie
            });
        }
    });
});

// POST: /movies/edit/abc123
router.post('/edit/:_id', (req, res, next) => {
    // get the _id from URL
    let _id = req.params._id;

    // call Mongoose update method, passing the _id and the new car object
    Movie.update({_id: _id}, 
        {
            $set: {
                title: req.body.title,
                yearRelease: req.body.yearRelease,
                storyLine: req.body.storyLine,
                mainActor: req.body.mainActor,
                director: req.body.director
            }
        }, null, (err) => {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/movies');
            }
    });
});

// make it public
module.exports = router;