// Dependencies
const Sequelize = require('sequelize');
// reference our db connection
const sequelize = require('../config/connection');

// create a new user model
const Post = sequelize.define("post", {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    tilte: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.string
    }
}, {
    timestamps: false
});

// sync to the database
Post.sync();

// export model 
module.exports = Post;