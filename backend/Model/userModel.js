const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

let userSchema = new mongoose.Schema({
    salutation: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: [true, 'Firstname is required']
    },
    middle_name: {
        type: String
    },
    last_name: {
        type: String,
        required: [true, 'Lastname is required']
    },
    gender: {
        type: String,
        required:[true,'Gender is required']
    },
    dob: {
        type: Date,
        required:[true,'Date of birth is required']
    },
    loanAmount: {
        type: String,
        required: [true, 'Loan Amount is required'],
        maxlength: 10
    },
    empStatus: {
        type: String,
        required:[true, 'Employement status required'],
    },
    businessName: {
        type: String,
        required: [true, 'Firm name is required'],
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
    },
    pincode: {
        type: String,
        required:[true,'Pincode is required']
    },
    city: {
        type: String,
        required: [true,'City is required']
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
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    mobile:{
        type: String,
        required: [true,'Mobile is required'],
        // minlength:10,
        unique: true
    },
    firmAddress: {
        type: String,
        required: [true,'Firm address is required']
    },
    password:{
        type: String
    },
    role: {
        type: String,
        default: 'user'
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
    passwordResetTokenExp: Date
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
    return jwt.sign({ userId: this._id, name: this.first_name+" "+this.last_name,email:this.email}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME }) 
}

userSchema.methods.generateResetPasswordToken = async function () {
    const resetToken = crypto.randomBytes(32).toString("hex");
    this.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.passwordResetTokenExp = Date.now() + 30 * 60 * 1000;
    return resetToken;
}

module.exports = mongoose.model('User', userSchema);