const generateOtp = () => {
    var str = 'abcdefghijklmnopqrstuvxyz0123456789ABCDEFGHIJKLMNOPQRSTUVXYZ';
    let otp = ''
    for (i = 0; i < 6; i++){
        otp += str[Math.floor(Math.random()*(str.length))]
    }
    return otp
}

module.exports = {generateOtp}