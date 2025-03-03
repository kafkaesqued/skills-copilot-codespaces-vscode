// Create web server
// 1. Create a new Express app
// 2. Create a new route that responds to a POST request to /comments
// 3. Parse the form data
// 4. Add the comment to the comments array
// 5. Redirect the user back to the home page
// 6. Create a new route that responds to a GET request to /comments
// 7. Respond with a JSON representation of the comments array

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var comments = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/comments', function(req, res) {
  var comment = req.body.comment;
  comments.push(comment);
  res.redirect('/');
});

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});