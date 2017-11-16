// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express App
var app = express();
var PORT = 3500;

var reservations = [

  {
    name: "",
    phoneNumber: "",
    email: "",
    uniqueId: ""
  },

];


// Routes to html files

app.use("/public", express.static(__dirname + '/public')); // Make public folder accesible

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});


app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/public/app.js", function(req, res) {
  res.sendFile(path.join(__dirname, "app.js"));
});


// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
