const mongoose = require('mongoose');

//Map global promises
mongoose.Promise = global.Promise;

//Connect Mongoose
mongoose.connect('mongodb://voteyourenv:voteyourenv1@ds141812.mlab.com:41812/voteyourenv')
.then( () => console.log('MongoDB environment Connected'))
.catch(err => console.log(err));