// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express App
var app = express();
var PORT = 3500;

var reservations = [ 
  {
    name: "dummy",
    phoneNumber: "dumb",
    email: "d@b.com",
    uniqueId: "yoyo"
  }
];

app.get("/reservations", function(req, res) {
  res.json(reservations);
});

// Routes to html files
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newreservation = req.body;

  console.log(newreservation);

  // We then add the json the user sent to the character array
  reservations.push(newreservation);

  // We then display the JSON to the users
  res.json(newreservation);
});

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});