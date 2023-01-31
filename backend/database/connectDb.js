const mongoose = require('mongoose');

mongoose.set('strictQuery', true); //ignore this

const connectDb = (url) => {
    mongoose.connect(url); //The url is assigned in the app.js file 
}

module.exports = connectDb;

// This js file makes the connection to the mongoDb database