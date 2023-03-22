const mongoose = require('mongoose')

const documentSchema = mongoose.Schema({
    file_name: {
        type: String,
        requried: [true, 'Please provide file name']
    },
    file_location: {
        type: String,
        required:[true,'Please provide file location']
    }
})

module.exports = mongoose.model("Document",documentSchema)