const mongoose = require('mongoose')

const bankAccountSchema = mongoose.Schema({
    account_number: {
        type: Number,
        unique: true
    },
    card_number: {
        type: Number,
        unique: true
    },
    cvv: {
        type: Number,
        // unique: true
    },
    cardholder: {
        type: String,
    },
    expiry_date: {
        type: Date,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    otp: {
        type: String,
    },
    otpToken: {
        type: String
    },
    otpTokenExpiry: {
        type:Date
    }
}, {
    timestampes : true
})

module.exports = mongoose.model('BankAccount',bankAccountSchema)