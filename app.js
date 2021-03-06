const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

//databse config file
// require('./config/db');
require('./config/db2');

const app = express();

const poll = require('./routes/poll');
const poll2 = require('./routes/poll2');

//setup public folder
app.use(express.static(path.join(__dirname, 'public')));

//Body-parser Meddleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Enable CORS
app.use(cors());

app.use('/poll', poll);
app.use('/poll2', poll2);

const port =  3000;

//Start server
app.listen(port, () => console. log(`Server started on port ${port}`));