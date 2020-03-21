// Sets dependencies
var express = require("express");
    notes = require("./db/db.json");
    compression = require("compression");

// const fs = require("fs");

// Set up express app on server port 3000
var app = express();
var PORT = process.env.PORT || 3000;

// Routes
var apiRoutes = require("./routes/apiRoutes");
var htmlRoutes = require("./routes/htmlRoutes");

// Setting up middleware, routes, and parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(compression());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// require("./routes/apiRoutes")(app, notes);
// require("./routes/htmlRoutes")(app, notes);

// App listening on server port 3000
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});