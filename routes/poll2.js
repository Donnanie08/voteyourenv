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
    // Vote.find().then(votes => res.json({success: true, votes: votes}));
    res.send('POLL2');
});

router.post('/', (req, res) => {
    //save the points to database
    const newVote = {
        vehicle: req.body.vehicle,
        points: 1
    }

    //add to database
    new Vote(newVote).save().then(vote => {
        //send out the trigger
        //trigger pusher client
        pusher.trigger('vehicle-poll', 'vehicle-vote', {
            points: parseInt(vote.points),
            vehicle: vote.vehicle
        });
    });
    
    

    return res.json({success: true, message: "thank your for voting"});
});

module.exports = router;