// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
require("dotenv").config();
const path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
const db = require("./models")

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static(__dirname + '/public'));

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
require("handlebars-helpers");

// Import routes and give the server access to them.
var routes = require("./controllers/controller.js");

app.use("/", routes);


// Starts the server to begin listening with sequelize
// =============================================================
// const sqSync = {
//   force: false,
// };

// db.sequelize.sync(sqSync).then(function () {
//   app.listen(PORT, function () {
//     console.log("App listening on PORT " + PORT);
//   });
// });

// // Starts the server to begin listening
// // =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});