const express = require('express');
const { getAllUserDetails, getUserDetails, getUserLoanInquiries, getLoanInquiryDetails, createProxyUser, checkVerficationDetails, getLoanDocumentDetails, getLoanDocumentLink, setLoanDocumentVerify, setLoanStatus, setDocumentStatus, getLoanDetailsForSanction } = require('../Controller/adminController');
const router = express.Router();
const { createUser, getAllUser, login, getUser, deleteUser, updateUser, getAdmin, blockUser, unblockUser, handleRefreshToken, logout, passwordReset, forgetPasswordToken, resetPassword, updateUserLoanDetails, checkOtp, setUserPassword, checkLoginOtp,getUser1, checkisBankAccountLinked, checkIfAvailable, getBankDetails, checkAuth } = require('../Controller/userController');
const { authMiddleware, isAdmin } = require('../Middleware/AuthMiddleware')

router.get('/getAll',authMiddleware, isAdmin, getAllUserDetails)
router.get('/getUser/:id/:email', authMiddleware, isAdmin, getUserDetails)
router.get('/getUser/loan/:id/:email', authMiddleware, isAdmin, getUserLoanInquiries)
router.get('/getUser/loan/details/:userId/:email/:id', getLoanInquiryDetails)
router.post('/create/user', authMiddleware, isAdmin, createProxyUser)
router.post('/verify/user/:userToken', checkVerficationDetails)
router.get('/getUser/loan/documents/:userId/:email/:id', authMiddleware, isAdmin, getLoanDocumentDetails)
router.get('/getUser/loan/document/get-link/:userId/:email/:doc',authMiddleware,isAdmin, getLoanDocumentLink)
router.post('/getUser/loan/document/set/:userId/:email/:doc',authMiddleware,isAdmin, setLoanDocumentVerify)
router.get('/getUser/loan/send/mail/:userId/:email/:loanId',authMiddleware,isAdmin,setDocumentStatus)
router.post('/getUser/loan/status/set/:userId/:email/:loanId',authMiddleware,isAdmin, setLoanStatus)
router.get('/getUser/loan/details/saction/:userId/:email/:loanId',getLoanDetailsForSanction)
module.exports = router