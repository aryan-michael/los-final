const jwt = require('jsonwebtoken');

const refreshJWTToken = (user) => {
    return jwt.sign({ userId: user._id}, process.env.JWT_SECRET, { expiresIn:'1d' })
}

module.exports = refreshJWTToken;