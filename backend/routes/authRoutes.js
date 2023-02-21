const express = require('express');
const router = express.Router();
const { createUser, getAllUser, login, getUser, deleteUser, updateUser, getAdmin, blockUser, unblockUser, handleRefreshToken, logout, passwordReset, forgetPasswordToken, resetPassword, updateUserLoanDetails, checkOtp, setUserPassword, checkLoginOtp } = require('../Controller/userController');
const { authMiddleware, isAdmin } = require('../Middleware/AuthMiddleware')

router.post('/signup', createUser)
router.post('/check-otp', authMiddleware, checkOtp);
router.put('/set-password',authMiddleware,setUserPassword)
router.get('/getAllUser', getAllUser)
router.route('/login').post(login)
router.post('/check-login-otp',authMiddleware,checkLoginOtp)
router.route('/admin').get(getAdmin)
router.get('/refresh', handleRefreshToken)
router.get('/logout', logout)
router.post('/forget-password-token', forgetPasswordToken)
// router.put('/reset-password/:token',authMiddleware,resetPassword)
router.put('/reset-password/:token', resetPassword)
router.get('/:id', authMiddleware, isAdmin, getUser);
router.delete('/:id', authMiddleware, deleteUser);
router.put('/update-user',authMiddleware, updateUser);
router.get('/block-user/:id', authMiddleware, isAdmin, blockUser)
router.get('/unblock-user/:id', authMiddleware, isAdmin, unblockUser)
router.put('/password', authMiddleware, passwordReset)




module.exports = router;