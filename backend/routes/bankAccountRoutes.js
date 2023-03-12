const express = require('express')
const { createBankAccount, getBanckAccount, checkOtp } = require('../Controller/bankController')
const { authMiddleware } = require('../Middleware/AuthMiddleware')
const router = express.Router()

router.post("/create", createBankAccount)
router.post("/getBankAccount", authMiddleware, getBanckAccount)
router.post("/check-otp",authMiddleware,checkOtp)

module.exports = router