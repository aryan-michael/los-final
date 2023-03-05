const mongoose = require('mongoose')

const loanSchema = mongoose.Schema({
    loanType: {
        type: String
    },
    loanAmount: {
        type: Number
    },
    empStatus: {
        type: String,
    },
    firmAddress: {
        type: String,
    },
    businessName: {
        type: String
    },
    applicationDate: {
        type: Date,
        default: Date.now()
    },
    applicationStatus: {
        type: String,
        default :"Pending"
    }
}, {
    timestampes: true
})

module.exports = mongoose.model("Loan",loanSchema)