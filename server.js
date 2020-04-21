// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

console.log("run server.js"); // just so we can watch the process in the terminal

// Dependencies
// =============================================================
// These two lines require() the express module and create an Express application. 
// This object, which is traditionally named app, has methods for routing HTTP requests, 
// configuring middleware, rendering HTML views, registering a template engine, and 
// modifying application settings that control how the application behaves (e.g. the 
//   environment mode, whether route definitions are case sensitive, etc.)
var express = require("express");
var app = express();

//allows the use of a .env file to hide the passwords and names of database
require("dotenv").config();

const path = require("path");

//make available the db model object set up by index.js
const db = require ("./models");

// Sets up the Express App
// =============================================================

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served with the handlebars, css, and images
app.use(express.static(__dirname + '/public'));

// Set up handlebars, points first to main.handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
require("handlebars-helpers");

// Import routes and give the server access to them
const apiroutes = require("./controllers/api_controller");
var routes = require("./controllers/html_controller.js");
app.use("/api", apiroutes)
app.use("/", routes);


// Starts the server to begin listening with sequelize
// =============================================================
console.log("in the server.js run the sequelize instance to make the tables"); //for observing in terminal

const sqSync = {
  force: false   //keeps from erasing the tables if false
};

//force: process.env.NODE_ENV !== "production" is another option instead of false

db.sequelize.sync(sqSync).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});

