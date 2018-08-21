// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express App Set-up
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express at to use Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Server to begin listening: 
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });