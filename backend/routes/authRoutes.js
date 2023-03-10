const express = require('express');
const router = express.Router();
const { createUser, getAllUser, login, getUser, deleteUser, updateUser, getAdmin, blockUser, unblockUser, handleRefreshToken, logout, passwordReset, forgetPasswordToken, resetPassword, updateUserLoanDetails, checkOtp, setUserPassword, checkLoginOtp,getUser1, checkisBankAccountLinked } = require('../Controller/userController');
const { authMiddleware, isAdmin } = require('../Middleware/AuthMiddleware')

router.post('/signup', createUser)
router.post('/check-otp',checkOtp);
router.put('/set-password',authMiddleware,setUserPassword)
router.get('/getAllUser', getAllUser)
router.route('/login').post(login)
router.post('/check-login-otp', checkLoginOtp)
router.get('/getUser', authMiddleware, getUser);
router.route('/admin').get(getAdmin)
router.get('/refresh', handleRefreshToken)
router.get('/logout', logout)
router.post('/forget-password-token', forgetPasswordToken)
// router.put('/reset-password/:token',authMiddleware,resetPassword)
router.put('/reset-password/:token', resetPassword)

router.get('/getUser1', authMiddleware,getUser1);
router.delete('/:id', authMiddleware, deleteUser);
router.put('/update-user',authMiddleware, updateUser);
router.get('/block-user/:id', authMiddleware, isAdmin, blockUser)
router.get('/unblock-user/:id', authMiddleware, isAdmin, unblockUser)
router.put('/password', authMiddleware, passwordReset)
router.get('/cibal',authMiddleware,checkisBankAccountLinked)



module.exports = router;