// dependencies
// model
const db = require('../models/post-model');

// Routes
module.exports = function(app) {

    // GET route for getting all of the todos
    app.get('/dashboard', function(req, res) {
        db.Post.findAll({}).then(function(dbPosts) {
            res.json(dbPosts);
        })
    });

    // POST route for saving a new volunteer post
    app.post('/dashboard/newpost', function(req, res) {

    });
}