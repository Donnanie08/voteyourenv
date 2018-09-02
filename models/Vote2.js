const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const VoteSchema = new Scheme({
    vehicle:{
        type: String,
        required: true
    },
    points:{
        type: String,
        required: true
    }
});

const Vote = mongoose.model('Vote2', VoteSchema);

module.exports = Vote;