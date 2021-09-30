const mongoose = require('mongoose');  

const options = {
    autoIndex: false,               // Don't build indexes
    poolSize: 10,                   // Maintain up to 10 socket connections
    bufferMaxEntries: 0,            // If not connected, return errors immediately rather than waiting for reconnect
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const connectDB = (url) => {
    return mongoose.connect(url, options)
};

module.exports = connectDB;