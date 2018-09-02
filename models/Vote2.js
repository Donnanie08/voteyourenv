const mongoose = require('mongoose');
const Scheme2 = mongoose.Schema;

const VoteSchema2 = new Scheme({
    vehicle: {
        type: String,
        required: true
    },
    points: {
        type: String,
        required: true
    }
});

//Create collection and add scheme
const Vote2 = mongoose.model('Vote2', VoteSchema2);

module.exports = Vote2;