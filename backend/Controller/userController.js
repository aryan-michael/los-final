const User = require('../Model/userModel');
const { StatusCodes } = require('http-status-codes')
const BadRequestError = require('../Error/BadRequest')
const UnauthenticatedError = require('../Error/UnauthorizedError')
const NotFoundError = require('../Error/NotFoundError');
const { findById, findByIdAndUpdate, find, findOne } = require('../Model/userModel');
const refreshJWTToken = require('../database/refreshToken')
const jwt = require('jsonwebtoken')
const sendEmail = require('./emailController');
const crypto = require('crypto');
const { encString, decString,decJsonData } = require('../Middleware/EncDecMiddleware');


const createUser = async (req, res) => {
    const { enc } = req.body;
    const decUserDetail = decJsonData(enc)
    const user = await User.create(decUserDetail);
    const token = await user.createJWT()
    const encToken = encString(token)
    res.status(StatusCodes.CREATED).json({ encToken, msg: "User successfully registered" })
}

const getAllUser = async (req, res) => {
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
    const refreshToken = await refreshJWTToken(user);
    const updatedUser = await User.findOneAndUpdate(user.email, { refreshToken: refreshToken }, { new: true, runValidators: true })
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        maxAge: 72 * 60 * 60 * 1000
    })
    const token = await user.createJWT();
    res.status(StatusCodes.OK).json({ User: { username: user.firstname + " " + user.lastname, token }, msg: "Successfully login" })
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
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    console.log(user)
    if (!user) {
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: true
        });
        return res.sendStatus(StatusCodes.FORBIDDEN)
    }
    await User.findOneAndUpdate({ refreshToken }, { refreshToken: "" }, { new: true, runValidators: true })
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true
    })
    res.sendStatus(StatusCodes.FORBIDDEN)
}

const getUser = async (req, res) => {
    const { id: userId } = req.params;
    const user = await User.findById({ _id: userId });
    if (!user) {
        throw new NotFoundError(`No user found with USER_ID:${userId}`)
    }
    const token = await user.createJWT()
    res.status(StatusCodes.OK).json({ user: user.firstname + " " + user.lastname, token })
}

const updateUser = async (req, res) => {
    const { id: userId } = req.params;
    const user = await User.findOneAndUpdate({ _id: userId }, req.body, { new: true, runValidators: true })
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

module.exports = { createUser, getAllUser, login, getUser, updateUser, deleteUser, getAdmin, blockUser, unblockUser, handleRefreshToken, logout, passwordReset, forgetPasswordToken, resetPassword };

