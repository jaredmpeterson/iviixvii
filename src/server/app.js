/*jshint node:true*/
'use strict';

const express = require('express')
const app = express()

var favicon = require('serve-favicon')
var passport = require('passport')
var logger = require('morgan');
var session = require('express-session')
var FacebookStrategy = require('passport-facebook').Strategy

var config = require('./config')
var port = process.env.PORT || 1717
var environment = process.env.NODE_ENV;

app.use(favicon(__dirname + '/favicon.ico'));
app.use(logger('dev'));

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

app.use('/api', require('./routes'));

app.use(session({
    secret: config.secret,
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session())

passport.use(new FacebookStrategy({
  clientID: config.clientID,
  clientSecret: config.clientSecret,
  callbackURL: 'http://localhost:' + port + '/auth/facebook/callback'
}, function(token, refreshToken, profile, done) {
  return done(null, profile);
}));

app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/me',
    failureRedirect: '/login'
}), function(req, res, next) {
    res.redirect('/');
});

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get('/me', function (req, res, next) {
    res.json(req.user);
})

app.listen(port, function() {
  console.log('Express server listening on port ' + port);
  console.log('env = ' + app.get('env') +
    '\n__dirname = ' + __dirname +
    '\nprocess.cwd = ' + process.cwd());
});