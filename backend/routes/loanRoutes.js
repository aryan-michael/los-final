const express = require('express')
const { createLoan, getAllLoan, addLoanInquiry } = require('../Controller/loanController')
const { authMiddleware} = require('../Middleware/AuthMiddleware')
const router = express.Router()

router.post('/create', createLoan)
router.get('/getAllLoan', getAllLoan)
router.post('/add-inquiry',authMiddleware,addLoanInquiry)

module.exports = router