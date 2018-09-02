const mongoose = require('mongoose');

//Map global promises
mongoose.Promise = global.Promise;

//Connect Mongoose
mongoose.connect('mongodb://voteyourvehicle:voteyourvehicle1@ds239682.mlab.com:39682/voteyourvehicle')
    .then( () => console.log('MongoDB Connected'))
    .catch(err => console.log(err));