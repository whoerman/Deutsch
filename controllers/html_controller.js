console.log("run html_controller.js");

const express = require("express");
const handlebars = require('express-handlebars');

let router = express.Router();

// Import the model to use its database functions.
const db = require("../models");

// Create the page routes
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

router.get("/prepositions", function(req, res) {
    res.render("prepositions")
});

router.get("/verbsirreg", function(req, res) {
    res.render("verbsirreg")
});

router.get("/verbsreg", function(req, res) {
    res.render("verbsreg")
});

router.get("/quiz", function(req, res) {
    res.render("quiz")
});

module.exports = router