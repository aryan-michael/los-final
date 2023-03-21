const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../Error')
const path = require('path');
const mv = require('mv')
const cloudinary = require('cloudinary').v2
var fs = require('fs');
const Document = require('../Model/documentModel')
const User = require('../Model/userModel')
const UserDocuments = require('../Model/userDocumentsModel')

const uploadFile = async (req, res) => {
    const {userId} = req.user
    try {
        req.files.fileList.forEach(file => {
            console.log("here");
            console.log(file);
            const productImage = file;
            const maxSize = 1024 * 1024;
            if (productImage.size > maxSize) {
                throw new BadRequestError(`${file.name}Please upload file smaller than 1MB`);
            }
            const imagePath = path.join(
                __dirname,
                '../../lord-save-me/public/uploads/' + `${userId}_` + `${productImage.name}`
            );
            console.log(imagePath);
            productImage.mv(imagePath)
        })
    }
    catch {
        console.log("done2");
        const productImage = req.files.fileList;
        console.log("sdsd",productImage);
        const maxSize = 1024 * 1024;
        if (productImage.size > maxSize) {
            throw new BadRequestError(`${file.name}Please upload file smaller than 1MB`);
        }
        const imagePath = path.join(
            __dirname,
            '../../lord-save-me/public/uploads/' + `${userId}_` + `${productImage.name}`
        );
        console.log(imagePath);
        productImage.mv(imagePath)
    }
    return res
    .status(StatusCodes.OK)
    .json({msg:"Success"});
};

const fileuploadfnc = async (file) => {
    const maxSize = 1024 * 1024;
    if (file.size > maxSize) {
        throw new BadRequestError(`${file.name}Please upload file smaller than 1MB`);
    }
    const result = await cloudinary.uploader.upload(
        file.tempFilePath,
        {
            use_filename: true,
            folder: 'los-final',
        }
    );
    fs.unlinkSync(file.tempFilePath);
    return result
}

const uploadFileCloud = async (req, res) => {
    const { userId } = req.user
    console.log(req.files.fileList);
    try {
        let pictureFiles = req.files.fileList;
        if (!pictureFiles) return res.status(400).json({ message: "No picture attached!" });
        let multiplePicturePromise = pictureFiles.map((picture) => {
            return cloudinary.uploader.upload(
                picture.tempFilePath,
                {
                    use_filename: true,
                    filename_override: `${picture.name}`,
                    folder: 'los-final',
                }
            );
        
        }
        );
        const imageResponses = await Promise.all(multiplePicturePromise);
        let documents = imageResponses.map((document) => {
            Document.create({
                file_name: `${userId}_${document.original_filename}.${document.format}`,
                file_location: `${document.secure_url}`
            })
        })
        await Promise.all(documents)
        res.status(200).json({ msg:"done" });
        
}
    
    
    catch {
        console.log("HEre");
        console.log(req.files.fileList.tempFilePath);
        const result = await cloudinary.uploader.upload(
            req.files.fileList.tempFilePath,
            {
                use_filename: true,
                filename_override:`${req.files.fileList.name}`,
                folder: 'los-final',
            }   
            );
        fs.unlinkSync(req.files.fileList.tempFilePath);
        console.log(result);
        await Document.create({
                file_name: `${userId}_${result.original_filename}.${result.format}`,
                file_location: `${result.secure_url}`
            })
}
    res.status(StatusCodes.OK).json({ msg:"Success"});
};

const getFileDetails = async (req, res) => {
    const { userId, email } = req.user
    const user = await User.findOne({ _id: userId, email: email })
    if (!user) throw new NotFoundError('No user Found')
    console.log(user.userDocuments);
    try {
        let documents = req.body.map((document) => {
            console.log(document.file_name);
            let update = {
                [document.documentType]: {
                    file_name: `${userId}_${document.file_name}`,
                    file_verification: 'unverified',
                    file_status:'uploaded'
                }
                    
            }
            console.log(update);
            return UserDocuments.findOneAndUpdate({
                _id: user.userDocuments
            },update , {
                new: true,
                runValidators: true
            })
        })
        const doc = await Promise.all(documents)
        console.log(doc);
    } catch {
        const doc = await UserDocuments.findOneAndUpdate({
                _id: user.userDocuments
            },
                {
                    [req.body.documentType]: {
                        file_name: [req.body.file_name]
                    }
                }, {
                new: true,
                runValidators: true
        })
        console.log(doc);
    }
    
    console.log(">>",req.body);
    res.status(StatusCodes.OK).json({
        msg: req.body})
}


module.exports = {uploadFile,getFileDetails,uploadFileCloud}