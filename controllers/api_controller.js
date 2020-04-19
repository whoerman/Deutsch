var express = require('express')
var router = express.Router();
const db = require("../models");

router.post("/noun", function(req, res) {
    const noun = req.body;
    db.Noun.create(req.body).then(function(dbNoun) {
        res.json(dbNoun);
      }).catch ( function(err) {
        res.sendStatus(err.statuscode).send(err.message).end()
      });
});

router.post("/phrase", function(req, res) {
    const phrase = req.body;
    db.Phrase.create(req.body).then(function(dbNoun) {
        res.json(dbPhrase);
      }).catch ( function(err) {
        res.sendStatus(err.statuscode).send(err.message).end()
      });
});


module.exports = router;