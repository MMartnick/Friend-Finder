// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Links CSS
// =============================================================
app.use(express.static(__dirname + '/public'));


// Sets up the routing
// =============================================================
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("APP listening on PORT " + PORT);
});