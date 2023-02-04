const CustomAPIError = require('./CustomAPIError');
const { StatusCodes } = require('http-status-codes');

class UnauthenticatedError extends CustomAPIError{
    constructor(message) {
        super(message)
        this.statusCodes = StatusCodes.UNAUTHORIZED;
    }
}

module.exports = UnauthenticatedError;