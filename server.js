// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express App
var app = express();
var PORT = 3500;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var reservations = [
  {
    name: "dummy",
    phoneNumber: "dumb",
    email: "d@b.com",
    uniqueId: "yoyo"
  }
];

var waitlist = [
  {
    name: "dummy",
    phoneNumber: "dumb",
    email: "d@b.com",
    uniqueId: "yoyo"
  }
];

app.use("/public", express.static(__dirname + '/public'));

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



app.post("/api/reservations", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newreservation = req.body;

  console.log(newreservation);

  if (reservations.length < 5) {
    reservations.push(newreservation);
      // We then display the JSON to the users
    res.json(true);
  }
  else {
    waitlist.push(newreservation);
    res.json(false);
  }

   console.log("waitlist" + waitlist.length)
   console.log("reservations" + reservations.length)


});



// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
