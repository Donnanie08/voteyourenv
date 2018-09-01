const mongoose = require('mongoose');
const Scheme2 = mongoose.Schema;

const VoteSchema2 = new Scheme({
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
const Vote2 = mongoose.model('Vote', VoteSchema2);

module.exports = Vote2;