const BankAccount = require('../Model/bankAccount')
const { StatusCodes } = require('http-status-codes')
const NotFoundError = require('../Error/NotFoundError')
const crypto = require('crypto')
const User = require('../Model/userModel')
const generateOtp = require('./userController')

const createBankAccount = async (req, res) => {
    const bankAcc = await BankAccount.create(req.body)
    res.status(StatusCodes.CREATED).json(bankAcc)
}

const getBanckAccount = async (req, res) => {
    const { userId, email } = req.user
    const bankAcc = await BankAccount.findOne(req.body)
    if (!bankAcc) throw new NotFoundError("bank account not found")
    const otp = '111111'
    const otpToken = crypto.randomBytes(32).toString("hex");
    bankAcc.otp = otp
    bankAcc.otpToken = crypto.createHash("sha256").update(otpToken).digest("hex");
    bankAcc.otpTokenExpiry = Date.now() + 1000 * 60 * 3;
    await bankAcc.save()
    res.cookie("otpToken", bankAcc.otpToken, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000*60*3)
    })
    // const otp = generateOtp()
    // const user = await User.findOneAndUpdate({ _id: userId, email: email }, {
    //     bankAccount : bankAcc._id
    // }, {
    //     new: true,
    //     runValidators:true
    // })
    res.status(StatusCodes.OK).json(bankAcc)
}

const checkOtp = async (req, res) => {
    const { userId, email } = req.user
    const { otp } = req.body
    const { otpToken } = req.cookies
    const bankAcc = await BankAccount.findOne({ otpToken: otpToken, otp: otp, otpTokenExpiry: { $gt: Date.now() } })
    if (!bankAcc) throw new NotFoundError("Inavlid OTP")
    bankAcc.otp = undefined
    bankAcc.otpToken = undefined
    bankAcc.otpTokenExpiry = undefined
    await bankAcc.save()
    res.clearCookie("otpToken",{
        httpOnly: true,
        secure: true
    })
    console.log("herr>>.");
    const user = await User.findOneAndUpdate({ _id: userId, email: email }, {
        bankAccount : bankAcc._id
    }, {
        new: true,
        runValidators:true
    })
    console.log(user);
    if(!user) throw new NotFoundError("No user found")
    res.status(StatusCodes.OK).json({msg:"success"})
}

module.exports = {createBankAccount,getBanckAccount,checkOtp}