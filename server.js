// Import express package
const express = require('express');

// Import passport package
const passport = require('passport');

// Database connection

// Setup instance of express
const app = (express);


// Routes


// PORT
const PORT = process.env.PORT || 3001;


// Setup server to listen 
app.listen(PORT, function() {
    console.log("App listening on localhost: " + PORT);
})