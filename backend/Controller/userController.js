const User = require('../Model/userModel');
const { StatusCodes } = require('http-status-codes')
const BadRequestError = require('../Error/BadRequest')
const UnauthenticatedError = require('../Error/UnauthorizedError')
const NotFoundError = require('../Error/NotFoundError');
const { findById, findByIdAndUpdate, find, findOne } = require('../Model/userModel');
const refreshJWTToken = require('../database/refreshToken')
const jwt = require('jsonwebtoken')
const sendEmail = require('./emailController');
const crypto = require('crypto')
const generateOtp = require('../Middleware/AdditionalFunc')



const createUser = async (req, res) => {
    const user = await User.create(req.body);
    const token = await user.createJWT()
    // const otp = generateOtp()
    const otpToken = crypto.randomBytes(32).toString("hex");
    user.otpToken = crypto.createHash("sha256").update(otpToken).digest("hex");
    user.otpExp = Date.now() + 1000 * 60 * 3;
    const otp = '111111'
    // const otp = generateOtp()
    user.userOTP = otp
    await user.save()
    const url = `<p> Hello ${user.first_name} ${user.last_name},here is the OTP to verify email: ${user.email}.<br><h1>${user.userOTP}</h1></br>OTP is valid for 3 minutes. Please do not share your OTP with anyone</p>`
    const data = {
        to: user.email,
        subject: 'Account verification',
        text: 'Hello user',
        html: url
    }
    const threeMin = 1000*60*3
    res.cookie("otpToken", user.otpToken,{
        httpOnly: true,
        expires: new Date(Date.now() + threeMin)
    })
    // sendEmail(data)
    res.status(StatusCodes.CREATED).json({ user: {userOtp: true,token }, msg: "User successfully registered" })
}

const checkOtp = async (req, res) => {
    const { otp } = req.body;
    const optToken = req.cookies.otpToken;
    const user = await User.findOne({userOTP: otp, otpExp: { $gt: Date.now() }, otpToken: optToken})
    if (!user) {
        throw new NotFoundError('Invalid OTP')
    }
    user.userOTP = undefined
    user.otpExp = undefined
    user.otpToken = undefined
    await user.save()
    const token = await user.createJWT()
    res.clearCookie("otpToken", {
        httpOnly: true,
        secure:true
    })
    res.cookie("Token", token, {
        httpOnly: true,
        expires: new Date(Date.now()+1000*60*3)
    })
    res.status(StatusCodes.OK).json({user:{userPass:true,token},msg:'Success'})
}

const setUserPassword = async (req, res) => {
    const { userId, email } = req.user;
    const { pass } = req.body;
    const user = await User.findOne({ _id: userId, email: email})
    if (!user) throw new NotFoundError('User does not exists')
    user.password = pass
    user.status = 'active'
    await user.save()
    res.clearCookie("Token", {
        httpOnly: true,
        secure: true
    })
    res.status(StatusCodes.OK).json({msg:'Success'})
}

const updateUserLoanDetails = async (req, res) => {
    console.log(req.headers.authorization)
    const { userId, email } = req.user;
    const user = await User.findOneAndUpdate({ _id: userId, email: email }, req.body, { new: true, runValidators: true })
    if (!user) {
        throw new NotFoundError(`No user found with USER_ID:${userId}`)
    }
    const otp = generateOtp()
    res.status(StatusCodes.OK).json({ msg: "User updated" })
}



const getAllUser = async (req, res) => {
    console.log(req.cookies)
    const users = await User.find({});
    res.status(StatusCodes.OK).json({ users })
}

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        throw new BadRequestError('Please enter both email and password');
    }
    const user = await User.findOne({ email });
    if (!user) {
        throw new UnauthenticatedError('Invalid Credentials')
    }
    console.log(password)
    const isPasswordCorrect = await user.checkPassword(password);
    if (!isPasswordCorrect) {
        throw new UnauthenticatedError('Invalid Credentials')
    }
    const token = await user.createJWT();
    const refreshToken = await refreshJWTToken(user);
    const updatedUser = await User.findOneAndUpdate(user.email, { refreshToken: refreshToken }, { new: true, runValidators: true })
    console.log(refreshToken)
    const otp ='111111'
    // const otp = generateOtp()
    const oneDay = 1000 * 60 * 60 * 24
    const otpToken = crypto.randomBytes(32).toString("hex");
    user.otpToken = crypto.createHash("sha256").update(otpToken).digest("hex");
    user.userOTP = otp
    user.otpExp = Date.now() + 1000 * 60 * 3
    await user.save()
    // res.setHeader("Access-Control-Allow-Origin", "*")
    // res.setHeader("Access-Control-Allow-Credentials", "true");
    res.cookie('otpToken', user.otpToken, {
        httpOnly: true,
        expires: new Date( Date.now() + 1000*60*3)
    })
    // const otp = generateOtp()
    console.log(user.userOTP);
    const url = `<h1> Hello ${user.first_name} ${user.last_name}</h1><br></br><p>Here is your otp. Please do not share it with anyone.<br></br><h1>${user.userOTP}</h1>`
    const data = {
        to: user.email,
        subject: 'Account Verification',
        text: 'Hello user',
        html:url
    }
    // sendEmail(data)
    res.status(StatusCodes.OK).json({ user: { username: `${user.first_name} ${user.last_name}`, token }, msg: "Otp sent" })
}

const checkLoginOtp = async (req, res) => {
    const { otp } = req.body
    const otpToken = req.cookies.otpToken
    console.log(otp);
    const user = await User.findOne({otpToken:otpToken,userOTP: otp, otpExp: { $gt: Date.now() } })
    if (!user) throw new NotFoundError(`Invalid OTP`)
    user.otpToken = undefined
    user.userOTP = undefined
    user.otpExp = undefined
    await user.save()
    console.log('here')
    const token = await user.createJWT()
    console.log("..."+token)
    res.clearCookie("otpToken", {
        httpOnly: true,
        secure:true
    })
    res.cookie("Token",token, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000*60*60*24)
    })
    res.status(StatusCodes.OK).json({ user: token ,msg:'Success'})
}

const handleRefreshToken = async (req, res) => {
    const cookie = req.cookies;
    if (!cookie.refreshToken) throw new NotFoundError('No refresh token found');
    const refreshToken = cookie.refreshToken;
    const findUser = await User.findOne({ refreshToken });
    if (!findUser) throw new NotFoundError('No user found');
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
    if (findUser.id !== decoded.userId) {
        throw new UnauthenticatedError('Not authorized')
    }
    const accessToken = await findUser.createJWT();
    res.status(StatusCodes.OK).json({ accessToken })
}

const logout = async (req, res) => {
    const cookie = req.cookies;
    console.log(cookie)
    if (!cookie) throw new NotFoundError('Cookie not found');
    const refreshToken = cookie.Token;
    const user = await User.findOne({ refreshToken });
    console.log(user)
    if (!user) {
        res.clearCookie("Token", {
            httpOnly: true,
            secure: true
        });
        return res.sendStatus(StatusCodes.FORBIDDEN)
    }
    await User.findOneAndUpdate({ refreshToken }, { refreshToken: "" }, { new: true, runValidators: true })
    res.clearCookie("Token", {
        httpOnly: true,
        secure: true
    })
    res.sendStatus(StatusCodes.FORBIDDEN)
}

const getUser = async (req, res) => {
    const { userId,email } = req.user;
    const user = await User.findById({ _id: userId, email: email },{_id:false}).select("salutation first_name middle_name last_name gender dob mobile email address pin city state country");
    if (!user) {
        throw new NotFoundError(`No user found with USER_ID:${userId}`)
    }
    const token = await user.createJWT()
    res.status(StatusCodes.OK).json({ user:user})
}

const getUser1 = async (req, res) => {
    const { userId,email } = req.user;
    const user = await User.findById({ _id: userId, email: email }).populate("loanInquiries").select("loanInquiries");
    if (!user) {
        throw new NotFoundError(`No user found with USER_ID:${userId}`)
    }
    const token = await user.createJWT()
    res.status(StatusCodes.OK).json({ user:user})
}

const updateUser = async (req, res) => {
    console.log(req.headers.authorization)
    const { userId,email} = req.user;
    const user = await User.findOneAndUpdate({ _id: userId,email:email }, req.body, { new: true, runValidators: true })
    if (!user) {
        throw new NotFoundError(`No user found with USER_ID:${userId}`)
    }
    res.status(StatusCodes.OK).json({ msg: "User updated" })
}

const deleteUser = async (req, res) => {
    const { id: userId } = req.params;
    const user = await User.findOneAndDelete({ _id: userId })
    if (!user) {
        throw new NotFoundError(`No user found with USER_ID:${userId}`)
    }
    res.status(StatusCodes.OK).json({ user: user.firstname + " " + user.lastname + " deleted" })
}

const getAdmin = async (req, res) => {
    const user = await User.findOne({ role: 'admin' })
    const token = await user.createJWT();
    res.status(StatusCodes.OK).json({ Admin: { name: user.firstname + " " + user.lastname, user: user.email }, token })
}

const blockUser = async (req, res) => {
    const { id: userId } = req.params;
    const user = await User.findByIdAndUpdate({ _id: userId }, { isBlocked: true }, { new: true });
    if (!user) {
        throw new NotFoundError(`No user found with USER_ID:${userId}`);
    }
    res.status(StatusCodes.OK).json({ msg: 'User blocked' })
}

const unblockUser = async (req, res) => {
    const { id: userId } = req.params;
    const user = await User.findByIdAndUpdate({ _id: userId }, { isBlocked: false }, { new: true });
    if (!user) {
        throw new NotFoundError(`No user found with USER_ID:${userId}`);
    }
    res.status(StatusCodes.OK).json({ msg: 'User unblocked' })
}

const passwordReset = async (req, res) => {
    const { password } = req.body;
    const { userId } = req.user;
    const user = await User.findById({ _id: userId })
    if (!user) throw new NotFoundError(`No user found with ID:${userId}`);
    user.password = password;
    const updateUser = await user.save();
    res.status(StatusCodes.OK).json({ msg: "Password updated", updateUser })
}

const forgetPasswordToken = async (req, res) => {
    const { email } = req.body;
    console.log(email);
    const user = await User.findOne({ email });
    if (!user) throw new NotFoundError(`No user found with EMAIL:${email}`)
    const token = await user.generateResetPasswordToken();
    await user.save();
    const url = `<h1>Hi Please follow this link to change your password. This link is valid for 10 minutes. <a href='http://localhost:3000/reset-password/${user.passwordResetToken}'>Password Reset</a>`;
    const data = {
        to: email,
        subject: 'Password Reset',
        text: 'Hey User',
        html: url
    };
    res.status(StatusCodes.OK).json({ token, msg: "Mail sent" })
    console.log(process.env.MAIL_ID, process.env.MAIL_PASS)
    sendEmail(data);
}

const resetPassword = async (req, res) => {
    const { password } = req.body;
    const { token } = req.params;
    console.log(token)
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
    console.log(hashedToken)
    const user = await User.findOne(
        {
            passwordResetToken: token,
            passwordResetTokenExp: { $gt: Date.now() }
        });
    console.log(user);
    if (!user) throw new NotFoundError('Token expired, please try again later');
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetTokenExp = undefined;
    user.passwordChangeAt = Date.now();
    await user.save();
    res.status(StatusCodes.OK).json({ msg: "Password Updated" })
}

const checkisBankAccountLinked = async (req, res) => {
    const { userId, email } = req.user
    const user = await User.findOne({ _id: userId, email: email })
    if (!user) throw new NotFoundError('No user found')
    if (user.bankAccount) {
        return res.status(StatusCodes.OK).json({bankAccount: true})
    }
    res.status(StatusCodes.OK).json({bankAccount: false})
}

const checkIfAvailable = async (req, res) => {
    console.log(req.body);
    const user = await User.findOne(req.body);
    if (!user) {
        return res.status(StatusCodes.OK).json({available:true})
    }
    res.status(StatusCodes.OK).json({available:false})
}

module.exports = { createUser, getAllUser, login, getUser, updateUser, deleteUser, getAdmin, blockUser, unblockUser, handleRefreshToken, logout, passwordReset, forgetPasswordToken, resetPassword,updateUserLoanDetails,checkOtp,setUserPassword,checkLoginOtp,getUser1,checkisBankAccountLinked,checkIfAvailable };

