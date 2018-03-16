var express = require('express');

var app = express();


// respond with "hello world" when a GET request is made to the homepage
app.post('/ask', function(req, res) {
    console.log(req);
});

module.exports = app;