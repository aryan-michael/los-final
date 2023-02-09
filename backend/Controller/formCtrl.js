const Form = require('../Model/formModel')
const { StatusCodes } = require('http-status-codes');

const createForm = async (req, res) => {
    console.log(req.body);
    const form = await Form.create(req.body);
    res.status(StatusCodes.CREATED).json({ msg: 'Success', form })
}

module.exports = { createForm };