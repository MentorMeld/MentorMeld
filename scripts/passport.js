// require passport
const passport = require('passport');
// require Google passport strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// require api keys
const keys = require('../config/keys');

// user model
const User = require('../models/user-model');

// serializeUser
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// deserializeUser
passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => {
        done(null, user);
    });
});


passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
}, function (accessToken, refreshToken, profile, done) {
    // query database to find if user exists
    
        User.findOne({
            where :{
                googleid: profile.id
            }
        }).then((existingUser) => {
            if (existingUser) {
                // console.log(existingUser)
                return done(null, existingUser);
            } else {
                // console.log('else')
                User.create({
                    googleid: profile.id
                }).then(user => done(null, user));
            }
        })
    
}));