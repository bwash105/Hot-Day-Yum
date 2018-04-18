// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// RESERVATIONS (DATA)
// =============================================================
var reservations = [{
    name: "Jim Carrey",
    phoneNumber: "7608675309",
    email: "Jimmyboy44@gmail.com",
    display_name: "J Carrey"
}];

var waitlist = [{
    name: "Bruce Wayne",
    phoneNumber: "7609982331",
    email: "thebat66@yahoo.com",
    display_name: "The Batman"
}];

// Routes
// =============================================================

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/make", function (req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});

// Displays all rezos
app.get("/api/reservations", function (req, res) {
    return res.json(reservations);
});

// Displays all characters
app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});

// New Reservations

app.post("/api/reservations", function (req, res) {
    var newreservation = req.body;
    console.log(newreservation);
    if (reservations.length <= 4) {
        reservations.push(newreservation);
    }
    else {
        waitlist.push(newreservation);
    }
    res.json(newreservation);
});

// Starts the server to begin listening

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
