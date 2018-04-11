// ********************************************************
// connection.js makes a connect to our database.
// ********************************************************


// Dependencies
var Sequelize = require('sequelize');

// Create a mysql connection using sequelize
var sequelize = new Sequelize('user', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5, 
        min: 0,
        idle: 1000
    }
});

module.exports = sequelize;