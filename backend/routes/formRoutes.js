const express = require('express');
const { createForm } = require('../Controller/formCtrl');
const router = express.Router();

router.post('/', createForm)

module.exports = router;


