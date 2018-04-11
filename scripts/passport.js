// require passport
const passport = require('passport');
// require Google passport strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// require api keys
const keys = require('../config/keys');







passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    // callback URL
    callbackURL: '/auth/google/callback'
}, function (accessToken, refreshToken, profile, done) {
    // query database to find if user exists
    
}))