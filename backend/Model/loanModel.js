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
    },
    loanTenor: {
        type: String
    },
    rateOfInterest: {
        type:Number
    },
    totalProcessingCharges: {
        type:Number
    },
    originationFee: {
        type:Number
    },
    sanctionDate: {
        type:Date
    },
    sanctionLetterValidity: {
        type :Date
    },
    emi: {
        type: Number
    }
}, {
    timestampes: true
})

module.exports = mongoose.model("Loan",loanSchema)