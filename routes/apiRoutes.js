// dependencies
// model
const db = require('../models/post-model');

// Routes
module.exports = function(app) {

    // GET route for getting all of the todos
    app.get('/api/dashboard', function(req, res) {
        db.findAll({}).then(function(dbPosts) {
            res.json(dbPosts);
        })
    });

    // POST route for saving a new volunteer post
    app.post('/api/newpost', function(req, res) {
        db.create({
            name: req.body.name,
            email: req.body.email,
            title: req.body.title,
            description: req.body.description
        })
        .then(function(dbNewPost) {
            console.log(dbNewPost);
        })
    });
}