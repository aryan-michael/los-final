const mongoose = require('mongoose')

const userDocumentsSchema = mongoose.Schema({
    document_pan: {
        file_name: {
            type: String,
            requried: [true, "Please provide file name"]
        },
        file_verification: {
            type: String,
            default: "Unverified"
        },
        file_status: {
            type: String,
            default: "Pending"
        },
        file_location: {
            type:String
        }
    },
    document_aadhar: {
        file_name: {
            type: String,
            requried: [true, "Please provide file name"]
        },
        file_verification: {
            type: String,
            default: "Unverified"
        },
        file_status: {
            type: String,
            default: "Pending"
        },
        file_location: {
            type:String
        }
    },
    document_gst_return: {
        file_name: {
            type: String,
            requried: [true, "Please provide file name"]
        },
        file_verification: {
            type: String,
            default: "Unverified"
        },
        file_status: {
            type: String,
            default: "Pending"
        },
        file_location: {
            type: String
        }
    }
})

module.exports = mongoose.model("UserDocuments",userDocumentsSchema)