const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

let userSchema = new mongoose.Schema({
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
    status: {
        type: String,
        default: 'inactive'
    },
    loanInquiries: [{
        type: mongoose.Types.ObjectId,
        ref: "Loan"
    }],
    bankAccount: {
        type: mongoose.Types.ObjectId,
        ref:"BankAccount"
    },
    userDocuments: {
        type: mongoose.Types.ObjectId,
        ref : "UserDocuments"
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    refreshToken: {
        type: String
    },
    passwordChangeAt: Date,
    passwordResetToken: String,
    passwordResetTokenExp: Date,
    userOTP: String,
    otpExp: Date,
    otpToken: String,
}, {
    timestamps:true
}
)

userSchema.pre('save', async function (next) {
    if (!this.isModified("password")) {
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    next()
})

userSchema.methods.checkPassword = async function (enteredPassword) {
    const isMatch = await bcrypt.compare(enteredPassword,this.password)
    return isMatch
}

userSchema.methods.createJWT = async function () {
    return jwt.sign({ userId: this._id,email:this.email}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME }) 
}

userSchema.methods.generateResetPasswordToken = async function () {
    const resetToken = crypto.randomBytes(32).toString("hex");
    this.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.passwordResetTokenExp = Date.now() + 30 * 60 * 1000;
    return resetToken;
}

module.exports = mongoose.model('User', userSchema);