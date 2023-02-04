const express = require('express');
const { createForm } = require('../controller/formCtrl');
const router = express.Router();

router.post('/', createForm)

module.exports = router;


