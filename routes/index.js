var express = require('express');
var router = express.Router();
const passport  = require('passport');
const User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Movie Library',
    punchLine: 'Welcome fellow movie enthusiasts',
    message: 'This is a my personal movie library. All the movies that I own and watched are on this website. For each movie we have the plot, the main actors and directors and a rating for it, according to my opnion. You, as a visitor and movie lover can also give you opnion under each movie. If you liked or not your opnion is always welcome.',
    thankYou: 'Thank you for being you!!!',

    user: req.user
  });
});

// GET: /login
router.get('/login', (req, res, next) => {
  let messages = req.session.messages || [];

  req.session.messages = [];

  res.render('login', {
    title: 'Login',
    messages: messages,
    user: req.user
  });
});

// POST: //login
router.post('/login', passport.authenticate('local', {
  successRedirect: '/movies',
  failureRedirect: '/login',
  failureMessage: 'Invalid Login'
}));

// GET: /logout
router.get('/logout', (req, res, next) => {
  req.session.messages = [];
  req.logout();
  res.redirect('/');
});

// GET: /register
router.get('/register', (req, res, next) => {
  res.render('register', {
    title: 'Registration Page'
  });
});

// POST: /register
router.post('/register', (req, res, next) => {
  User.register(new User ({
    username: req.body.username
  }), req.body.password, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/login');
    }
  });
});

module.exports = router;
