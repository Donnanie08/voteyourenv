const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Vote = require('../models/Vote2');

var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '590490',
  key: '5df99ea18c802431eb03',
  secret: 'e815c8bfc675574b4ec0',
  cluster: 'us2',
  encrypted: true
});

router.get('/', (req, res) => {
    Vote.find().then(votes => res.json({success: true, votes: votes}));
});

router.post('/', (req, res) => {
    console.log(data);
    //save to database
    const newVote = {
        vehicle: req.body.vehicle,
        points: 1
    }

    new Vote(newVote).save().then(vote => {
        pusher.trigger('vehicle-poll', 'vehicle-vote', {
            points: parseInt(vote.points),
            vehicle: vote.vehicle
          });
          return res.json({success: true, message: "thank your for vehicle voting"});
    });

    });

module.exports = router;
