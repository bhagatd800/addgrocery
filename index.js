const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const path = require('path'),
    { mongoUri } = require('./config/config'),
    { grocery } = require('./services/index'),
    db = mongoose.connect(mongoUri, { useMongoClient: true })
        .then(_ => {
            console.log('connect to db');
            return grocery();
        })
        .catch(err => console.log(err));