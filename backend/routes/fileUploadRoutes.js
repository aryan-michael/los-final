const express = require('express')
const { uploadFile, getFileDetails, uploadFileCloud } = require('../Controller/fileUploadController')
const router = express.Router()
const { authMiddleware} = require('../Middleware/AuthMiddleware')

router.post('/upload', authMiddleware, uploadFile)
router.post('/upload/cloud',authMiddleware, uploadFileCloud)
router.post('/upload/details',authMiddleware,getFileDetails)

module.exports = router