// Packages
const express = require("express");
const bodyParser = require("body-parser");
const passport = require('passport');

// db model 
require('./models/user-model');
require('./models/post-model');
const cookieSession = require('cookie-session');
// Import keys for cookie sesion
const keys = require('./config/keys');

// express instance
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view

// require passport script
require('./scripts/passport');

// tell express to use cookie-session
app.use(
  cookieSession({
    // last 30 days before expire
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  }));

// tell express to use passport to handle oauth
app.use(passport.initialize());
app.use(passport.session());

// require routes for auth
require('./routes/authRoutes')(app);
// require routes for db querys
require('./routes/apiRoutes')(app);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
