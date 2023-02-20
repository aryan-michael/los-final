const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../Error/UnauthorizedError');
const NotFoundError = require('../Error/NotFoundError')
require('dotenv').config
const User = require('../Model/userModel')

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthorizedError('Unauthorized');
    } else {
        const token = authHeader.split(' ')[1]
        try {
            const decoded = await jwt.verify(token, process.env.JWT_SECRET);
            req.user = { userId: decoded.userId, email:decoded.email }
            next()
        } catch (error) {
            throw new UnauthorizedError('Unauthorized');
        }
    }
}

const isAdmin = async (req, res, next) => {
    const { email } = req.user;
    const findUser = await User.findOne({ email });
    if (!findUser) {
        throw new NotFoundError('Admin not found')
    } else {
        if (findUser.role !== 'admin') {
            throw new UnauthorizedError('You are not Authorized for this task')
        } else {
            next();
        }
    }
}

module.exports = { authMiddleware, isAdmin }