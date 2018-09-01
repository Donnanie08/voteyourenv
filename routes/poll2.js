const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Vote = require('../models/Vote');

var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '590318',
  key: 'd3992811c04d6474365b',
  secret: '0c1bc08edc30da700048',
  cluster: 'us2',
  encrypted: true
});

router.get('/', (req, res) => {
    // Vote.find().then(votes => res.json({success: true, votes: votes}));
    // res.send('POLL2');
});

router.post('/', (req, res) => {
    //save the points to database
    const newVote = {
        veh: req.body.veh,
        points: 1
    }

    //add to database
    new Vote(newVote).save().then(vote => {
        //send out the trigger
        //trigger pusher client
        pusher.trigger('veh-poll', 'veh-vote', {
            points: parseInt(vote.points),
            veh: vote.veh
        });
    });
    
    

    return res.json({success: true, message: "thank your for voting"});
});

module.exports = router;