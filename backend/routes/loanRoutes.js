const express = require('express')
const { createLoan, getAllLoan } = require('../Controller/loanController')
const router = express.Router()

router.post('/create', createLoan)
router.get('/getAllLoan', getAllLoan)

module.exports = router