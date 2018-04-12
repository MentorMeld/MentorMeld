const express = require("express");
const bodyParser = require("body-parser");
const passport = require('passport');

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

// tell express to use passport to handle oauth
app.use(passport.initialize());
app.use(passport.session());

// require routes
require('./routes/authRoutes')(app);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
