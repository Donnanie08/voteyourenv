const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const VoteSchema = new Scheme({
    env: {
        type: String,
        required: true
    },
    points: {
        type: String,
        required: true
    }
});

//Create collection and add scheme
const Vote = mongoose.model('Vote', VoteSchema);

module.exports = Vote;