const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,'Please provide name']
    },
    loanType: {
        type: String,
        required: [true,'Please provide loan type']
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required:[true,'Please provide gender']
    },
    agreement: {
        type: Boolean,
        default: false
    }
},)

module.exports = mongoose.model("Form",formSchema)