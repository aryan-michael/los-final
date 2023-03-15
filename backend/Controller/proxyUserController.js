const ProxyUser = require('../Model/proxyUserModel')
const { StatusCodes } = require('http-status-codes')
const crypto = require('crypto')
const sendEmail = require('./emailController')
const NotFoundError = require('../Error/NotFoundError')
const User = require('../Model/userModel')
const { generateOtp } = require('../Middleware/AdditionalFunc')

const createProxyUser = async (req, res) => {
    const proxyUser = await ProxyUser.create(req.body)
    console.log(proxyUser);
    // const otp = await generateOtp()
    const otp = '111111'
    console.log(otp);
    const token = crypto.randomBytes(32).toString("hex")
    proxyUser.otpToken = crypto.createHash("sha256").update(token).digest("hex")
    proxyUser.userOTP = otp
    proxyUser.otpExp = Date.now() + 1000 * 60 * 3
    await proxyUser.save()
    console.log("done");
    const url = `<p> Hello ${proxyUser.first_name} ${proxyUser.last_name},here is the OTP to verify email: ${proxyUser.email}.<br><h1>${proxyUser.userOTP}</h1></br>OTP is valid for 3 minutes. Please do not share your OTP with anyone</p>`
    const data = {
        to: proxyUser.email,
        subject: 'Account verification',
        text: 'Hello user',
        html: url
    }
    const threeMin = 1000*60*3
    res.cookie("otoken", proxyUser.otpToken,{
        httpOnly: true,
        expires: new Date(Date.now() + threeMin)
    })
    sendEmail(data)
    res.status(StatusCodes.CREATED).json({ msg: "User successfully registered" })
}

const checkVerficationOtp = async (req, res) => {
    const { otp } = req.body;
    const { otoken } = req.cookies;
    console.log(otp, otoken);
    const proxyUser = await ProxyUser.findOne({userOTP: otp, otpExp: { $gt: Date.now() }, otpToken: otoken})
    if (!proxyUser) {
        throw new NotFoundError('Invalid OTP')
    }
    const pUser = await ProxyUser.findOne({ email: proxyUser.email, mobile: proxyUser.mobile })
    const u = {
        salutation: pUser.salutation,
        first_name: pUser.first_name,
        middle_name: pUser.middle_name,
        last_name: pUser.last_name,
        gender: pUser.gender,
        dob: pUser.dob,
        address: pUser.address,
        pin: pUser.pin,
        city: pUser.city,
        state: pUser.state,
        country: pUser.country,
        email: pUser.email,
        mobile: pUser.mobile,
        role: pUser.role,
        loanInquiries: pUser.loanInquiries,
    }
    console.log(">>",u);
    const user = await User.create(u)
    res.clearCookie("otoken", {
        httpOnly: true,
        secure:true
    })
    const token = await user.createJWT()
    res.cookie("Token", token, {
        httpOnly: true,
        expires: new Date(Date.now()+1000*60*3)
    })
    res.status(StatusCodes.OK).json({msg:'Success'})
}

module.exports = {createProxyUser,checkVerficationOtp}