var express = require('express');

// Create our app
var app = express();

app.use(express.static('public')); // Which folder we want to server.

app.listen(3000, function () {
  console.log('Express server is up on port 3000');
});
