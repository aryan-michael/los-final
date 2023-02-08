const Detail = require('../Model/personalDetailModel');
const User = require('../Model/userModel')
const { StatusCodes, CREATED } = require('http-status-codes');
const NotFoundError = require('../Error/NotFoundError');

const createPersonalDetail = async (req, res) => {
    const detail = await Detail.create(req.body);
    res.status(StatusCodes.CREATED).json({ msg: "Personal details successfully saved",id:detail._id})
}

const getAllPersonalDetails = async (req, res) => {
    const details = await Detail.find({});
    if (!details) throw new NotFoundError(`No personal details found`);
    res.status(StatusCodes.OK).json({msg:"Success",details})
}

const getPersonalDetails = async (req, res) => {
    const { id: userId } = req.params;
    const detail = await Detail.findById({_id:userId});
    if (!detail) throw new NotFoundError(`No personal details found for ID:${userId}`);
    res.status(StatusCodes.OK).json({msg:"Success",detail})
}

const updatePersonalDetails = async (req, res) => {
    const { id: userId } = req.params;
    const detail = await Detail.findByIdAndUpdate({_id:userId},req.body,{new:true,runValidators:true});
    if (!detail) throw new NotFoundError(`No personal details found for ID:${userId}`);
    res.status(StatusCodes.OK).json({msg:"Success",detail})
}

const deletePersonalDetails = async (req, res) => {
    const { id: userId } = req.params;
    const detail = await Detail.findByIdAndDelete({_id:userId});
    if (!detail) throw new NotFoundError(`No personal details found for ID:${userId}`);
    res.status(StatusCodes.OK).json({msg:"Success",detail})
}

module.exports = {createPersonalDetail,getPersonalDetails,getAllPersonalDetails,updatePersonalDetails,deletePersonalDetails}