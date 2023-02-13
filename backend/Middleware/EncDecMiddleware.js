const cryptoJS = require("crypto-js")
require('dotenv')

const encJsonData = (data) => {
    const message = JSON.stringify(data);
    const secret_Key = process.env.ENC_KEY;
    var encryptedData = cryptoJS.AES.encrypt(message, secret_Key);
    return encryptedData.toString()
}

const decJsonData = (data) => {
    const secret_Key = process.env.ENC_KEY;
    var decryptedData = cryptoJS.AES.decrypt(data, secret_Key);
    var result = JSON.parse(decryptedData.toString(cryptoJS.enc.Utf8));
    return result
}

const encString = (data) => {
    const secret_Key = process.env.ENC_KEY;
    var encryptedData = cryptoJS.AES.encrypt(data, secret_Key);
    return encryptedData.toString()
}

const decString = (data) => {
    const secret_Key = process.env.ENC_KEY;
    var decryptedData = cryptoJS.AES.decrypt(data, secret_Key)
    return decryptedData.toString(cryptoJS.enc.Utf8)
}

module.exports = {encJsonData,decJsonData,encString,decString}