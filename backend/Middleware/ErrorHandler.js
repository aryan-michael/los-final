const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('../Error/CustomAPIError')
const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCodes).json({msg:err.message})
    }
    let customError = {
        Statucodes: err.StatusCodes || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.msg || ('Something went wrong, please try again later')
    }
    if (err.name === 'ValidationError') {
        customError.msg = Object.values(err.errors).map((item) => item.message).join(', ');
        customError.Statucodes = 400;
    }
    if (err.code && err.code === 11000) {
        customError.msg = `${Object.keys(err.keyValue)} already in use, please use any other ${Object.keys(err.keyValue)}`;
        customError.Statucodes = 400;
    }
    
    return res.status(customError.Statucodes).json({ msg: customError.msg })
}

module.exports = errorHandlerMiddleware