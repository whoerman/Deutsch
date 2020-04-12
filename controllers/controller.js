const express = require("express");

let router = express.Router();

// Import the model to use its database functions.
var Basic = require("../models");

// Create the routes
router.get("/", function(req, res) {
    res.render("index")
})

module.exports = router