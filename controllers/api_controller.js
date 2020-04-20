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
    db.Phrase.create(req.body).then(function(dbPhrase) {
        res.json(dbPhrase);
      }).catch ( function(err) {
        res.sendStatus(err.statuscode).send(err.message).end()
      });
});

router.post("/adjective", function(req, res) {
  const adjective = req.body;
  db.Adjective.create(req.body).then(function(dbAdjective) {
      res.json(dbAdjective);
    }).catch ( function(err) {
      res.sendStatus(err.statuscode).send(err.message).end()
    });
});

router.post("/adverb", function(req, res) {
  const adverb = req.body;
  db.Adverb.create(req.body).then(function(dbAdverb) {
      res.json(dbAdverb);
    }).catch ( function(err) {
      res.sendStatus(err.statuscode).send(err.message).end()
    });
});

router.post("/verbreg", function(req, res) {
  const verbreg = req.body;
  db.Verbreg.create(req.body).then(function(dbVerbreg) {
      res.json(dbVerbreg);
    }).catch ( function(err) {
      res.sendStatus(err.statuscode).send(err.message).end()
    });
});


module.exports = router;