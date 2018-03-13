var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

var app = express();
mongoose.connect('mongodb://localhost/basic-mern-boilerplate')

const PORT = process.env.PORT || 3010;

app.use(express.static(path.resolve(__dirname, 'client', 'build')));

app.get('/api', (req,res) => {
  res.send("You have the api endpoint");
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () =>{
  console.log(`App listening on port ${PORT}`);
});

module.exports = app;
