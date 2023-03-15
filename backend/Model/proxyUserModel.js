const mongoose = require('mongoose')

const proxyUser = mongoose.Schema({
    salutation: {
        type: String,
    },
    first_name: {
        type: String,
    },
    middle_name: {
        type: String
    },
    last_name: {
        type: String,
    },
    gender: {
        type: String,
    },
    dob: {
        type: Date,
    },
    address: {
        type: String,
    },
    pin: {
        type: Number,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    country: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    mobile: {
        type: String,
        maxlength: 10,
        unique: true
    },
    password: {
        type: String
    },
    role: {
        type: String,
        default: 'user'
    },
    loanInquiries: [{
        type: mongoose.Types.ObjectId,
        ref: "Loan"
    }],
    userOTP: String,
    otpExp: Date,
    otpToken: String,
})

module.exports = mongoose.model("ProxyUser",proxyUser)