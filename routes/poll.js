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
    Vote.find().then(votes => res.json({success: true, votes: votes}));

});

router.post('/', (req, res) => {
    console.log(data);
    //save the points to database
    const newVote = {
        env: req.body.env,
        points: 1
    }

    //add to database
    new Vote(newVote).save().then(vote => {
        //send out the trigger
        //trigger pusher client
        pusher.trigger('env-poll', 'env-vote', {
            points: parseInt(vote.points),
            env: vote.env
        });
    });



    return res.json({success: true, message: "thank your for voting environment"});
});

module.exports = router;
