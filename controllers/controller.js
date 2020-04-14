const express = require("express");
const handlebars = require('express-handlebars');


let router = express.Router();

// Import the model to use its database functions.
var Basic = require("../models");

// Create the routes
router.get("/", function(req, res) {
    res.render("index")
});

router.get("/nouns", function(req, res) {
    res.render("nouns")
});

router.get("/phrases", function(req, res) {
    res.render("phrases")
});

router.get("/verbs", function(req, res) {
    res.render("verbs")
});

router.get("/adverbs", function(req, res) {
    res.render("adverbs")
});

router.get("/adjectives", function(req, res) {
    res.render("adjectives")
});

router.get("/otherparts", function(req, res) {
    res.render("otherparts")
});




module.exports = router