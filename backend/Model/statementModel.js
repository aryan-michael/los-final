const mongoose = require('mongoose');

const statementSchema = mongoose.Schema({
    Author: {
        type: String,
        required: [true,'Please provide Author']
    },
    Quote: {
        type: String,
        required: [true,'Please provide Quote']
    }
})

module.exports = mongoose.model("Statement", statementSchema)

//In this file we are defining which values and of what type can be added to the database