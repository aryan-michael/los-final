const express = require('express')
const { createProxyUser, checkVerficationOtp } = require('../Controller/proxyUserController')
const router = express.Router()

router.post('/create', createProxyUser)
router.post('/create/check-otp', checkVerficationOtp)

module.exports = router