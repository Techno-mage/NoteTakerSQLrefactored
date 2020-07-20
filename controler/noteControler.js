const express = require('express');
const router = express.Router();
const notes = require("../model/notes.js");

router.get("/api/notes", (req, res) => {
    //console.log('triggered')
    notes.selectAll()
    .then(results =>  res.json(results))
    .catch(err => res.json(err))
})

router.post("/api/notes", function(req, res) {
    //console.log(req.body)
    
    notes.create([req.body.title, req.body.text])
    .then(results =>  res.json(results))
    .catch(err => res.json(err))
})

router.delete("/api/notes/:itemId", function(req, res) {
    console.log(req.params.itemId)

    notes.remove(req.params.itemId)
    .then(results =>  res.json(results))
    .catch(err => res.json(err))
    
})

module.exports = router;