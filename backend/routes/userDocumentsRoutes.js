const express = require('express')
const { createUserDocuments, changeDetails } = require('../Controller/userDocumentsCtrl')
const router = express.Router()

router.post('/create', createUserDocuments)
router.get('/update/:id',changeDetails)

module.exports = router