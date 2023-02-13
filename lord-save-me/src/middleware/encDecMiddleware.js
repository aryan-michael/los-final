import CryptoJS from "crypto-js";

export function encJsonData (data){
    console.log(data)
    const message = JSON.stringify(data);
    const secret_Key = process.env.REACT_APP_KEY;
    var encryptedData = CryptoJS.AES.encrypt(message, secret_Key);
    return encryptedData.toString()
}

export function decJsonData (data){
    const secret_Key = process.env.REACT_APP_KEY;
    var decryptedData = CryptoJS.AES.decrypt(data, secret_Key);
    var result = JSON.parse(decryptedData.toString(CryptoJS.enc.Utf8));
    return result
}

export function encString (data){
    const secret_Key = process.env.REACT_APP_KEY;
    var encryptedData = CryptoJS.AES.encrypt(data, secret_Key);
    return encryptedData.toString()
}

export function decString (data){
    const secret_Key = process.env.REACT_APP_KEY;
    var decryptedData = CryptoJS.AES.decrypt(data, secret_Key)
    return decryptedData.toString(CryptoJS.enc.Utf8)
}
