console.log("run api_controller.js");

var express = require('express')
//Load router-level middleware by using the router.use() and router.METHOD() functions.
var router = express.Router();
const db = require("../models");

//POST Routes
router.post("/noun", function (req, res) {
  //req.body holds parameters that are sent up from the client as part of a POST request.
  const noun = req.body;
  db.Noun.create(req.body).then(function (dbNoun) {
    //The res (or response) object represents the HTTP response that an Express application sends when it gets an HTTP request.
    //res.json is like res.send but fixes it to make sure it is a json
    res.json(dbNoun);
  }).catch(function (err) {
    //Sets the response HTTP status code to statusCode and send its string representation as the response body.
    res.sendStatus(err.statuscode).send(err.message).end()
  });
});

router.post("/phrase", function (req, res) {
  const phrase = req.body;
  db.Phrase.create(req.body).then(function (dbPhrase) {
    res.json(dbPhrase);
  }).catch(function (err) {
    res.sendStatus(err.statuscode).send(err.message).end()
  });
});

router.post("/adjective", function (req, res) {
  const adjective = req.body;
  db.Adjective.create(req.body).then(function (dbAdjective) {
    res.json(dbAdjective);
  }).catch(function (err) {
    res.sendStatus(err.statuscode).send(err.message).end()
  });
});

router.post("/adverb", function (req, res) {
  const adverb = req.body;
  db.Adverb.create(req.body).then(function (dbAdverb) {
    res.json(dbAdverb);
  }).catch(function (err) {
    res.sendStatus(err.statuscode).send(err.message).end()
  });
});

router.post("/verbreg", function (req, res) {
  const verbreg = req.body;
  db.Verbreg.create(req.body).then(function (dbVerbreg) {
    res.json(dbVerbreg);
  }).catch(function (err) {
    res.sendStatus(err.statuscode).send(err.message).end()
  });
});

//GET Routes
router.get("/noun", function (req,res) {
  
});

//PUT Routes  
router.put("/noun", function (req,res) {
  
});

//DELETE Routes
router.delete("/noun", function (req,res) {
  
});


module.exports = router;