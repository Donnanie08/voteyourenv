const mongoose = require('mongoose');
const Scheme2 = mongoose.Schema;

const VoteSchema2 = new Scheme2({
    vehicle:{
        type: String,
        required: true
    },
    points:{
        type: String,
        required: true
    }
});

const Vote2 = mongoose.model('Vote2', VoteSchema2);

module.exports = Vote2;