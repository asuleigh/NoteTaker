var express = require("express");
var fs = require("fs");
var path = require("path");
var notes = require("./db.json");

// Set up express app/server port
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

require("./routes/apiRoutes")(app, notes);
require("./routes/htmlRoutes")(app, notes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});