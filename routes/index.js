var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Movie Library',
    punchLine: 'Welcome fellow movie enthusiasts',
    message: 'This is a my personal movie library. All the movies that I own and watched are on this website. For each movie we have the plot, the main actors and directors and a rating for it, according to my opnion. You, as a visitor and movie lover can also give you opnion under each movie. If you liked or not your opnion is always welcome.',
    thankYou: 'Thank you for being you!!!'
  });
});

module.exports = router;
