const UserDocuments = require('../Model/userDocumentsModel')
const { StatusCodes } = require('http-status-codes')

const createUserDocuments = async (req, res) => {
    const doc = await UserDocuments.create({
        document_pan: {
            file_name:"abc"
        }
    })
    res.status(StatusCodes.OK).json(doc)
}

const changeDetails = async (req, res) => {
    console.log(req.params);
    const {id} = req.params
    const doc = await UserDocuments.findOne({ _id: id })
    doc.document_pan.file_verification = 'verified'
    await doc.save()
    res.status(StatusCodes.OK).json(doc)
}



module.exports = {createUserDocuments,changeDetails}