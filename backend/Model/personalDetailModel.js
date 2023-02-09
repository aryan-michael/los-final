const mongoose = require('mongoose');

const personalSchema = mongoose.Schema({
    salutation: {
        type: String,
        enum: ['Mr.', 'Mrs.', 'Ms.'],
        required: true
    },
    firstname: {
        type: String,
        required: [true, 'Firstname is required']
    },
    middlename: {
        type: String
    },
    lastname: {
        type: String,
        required: [true, 'Lastname is required']
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required:[true,'Gender is required']
    },
    dob: {
        type: Date,
        required:[true,'Date of birth is required']
    },
    loanAmount: {
        type: Number,
        required: [true, 'Loan Amount is required'],
        maxlength: 10
    },
    empStatus: {
        type: String,
        required:[true, 'Employement status required'],
        enum:['Self Employed','Job']
    },
    firmName: {
        type: String,
        required: [true, 'Firm name is required'],
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
    },
    pincode: {
        type: Number,
        required:[true,'Pincode is required']
    },
    city: {
        type: String,
        required: [true,'City is required']
    },
    district: {
        type: String,
        required:[true,'District is required']
    },
    state: {
        type: String,
        required:[true,'State is required']
    },
    country: {
        type: String,
        required:[true,'Country is required']
    },
    loanType: {
        type: String,
        required:[true,'Loan type is required']
    }
},{
    timestampes: true
})

module.exports = mongoose.model("Detail",personalSchema)