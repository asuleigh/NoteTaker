// Sets dependencies
var path = require("path");
var router = require("express").Router();

// GETs the notes file to join with the index page
router.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Routes for the index page
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;