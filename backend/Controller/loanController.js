const Loan = require('../Model/loanModel')
const User  =  require('../Model/userModel')
const { StatusCodes } = require("http-status-codes")
const NotFoundError = require('../Error/NotFoundError')

const createLoan = async (req, res) => {
    console.log(req.body)
    const { email, loanDetails } = req.body
    console.log(loanDetails)
    const loan = await Loan.create(loanDetails)
    const user = await User.findOneAndUpdate({ email: email }, {
        $push:{loanInquiries:loan._id}
    }, {
        new: true,
        runValidators: true
    })
    if (!user) throw new NotFoundError('User not found')
    res.status(StatusCodes.CREATED).json({loan}) 
}

const getAllLoan = async (req, res) => {
    const loan = await Loan.find({})
    res.status(StatusCodes.OK).json({loan})
}

module.exports = {createLoan,getAllLoan}