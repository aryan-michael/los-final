const mongoose = require('mongoose')

const userDocumentsSchema = mongoose.Schema({
    document_photoID: {
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
    document_addressProof: {
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
    document_bankStatement: {
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
    document_ITR: {
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
    document_incomeProof: {
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
    document_loans_debts: {
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
    document_accounts: {
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
    document_COI: {
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
    document_GST: {
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
    document_cashFlow: {
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
    document_employmentLetter: {
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
    document_form16: {
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
    document_propertyDoc: {
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
    document_officeAddressProof: {
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
    document_officeOwnershipProof: {
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
    document_proofOfAdmission: {
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
    document_marksheet: {
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
    document_collateralPropertyDocument: {
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
    document_jobContinuityProof: {
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
    document_salarySlip: {
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
})

module.exports = mongoose.model("UserDocuments",userDocumentsSchema)