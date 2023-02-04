const express = require('express');
const { createPersonalDetail, getAllPersonalDetails, getPersonalDetails, updatePersonalDetails, deletePersonalDetails } = require('../Controller/personalDetailCtrl');
const router = express.Router();

router.post('/create', createPersonalDetail);
router.get('/getAll', getAllPersonalDetails);
router.get('/get/:id', getPersonalDetails);
router.put('/update', updatePersonalDetails);
router.delete('/delete', deletePersonalDetails);

module.exports = router;
