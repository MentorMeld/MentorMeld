// Dependencies
const Sequelize = require('sequelize');
// reference our db connection
const sequelize = require('../config/connection');

// create a new user model
const User = sequelize.define("user", {
    googleid: {
        type: Sequelize.STRING
    },
}, {
    timestamps: false
});

// sync to the database
User.sync();

// export model 
module.exports = User;