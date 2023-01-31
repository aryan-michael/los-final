const express = require('express');
const router = express.Router();
const { generateStatement, getAllStatements } = require('../controller/statementController'); //Here we are importing all the functionalities from controller


router.route('/').get(generateStatement); //Here generate statemtent functionality is assigned to route: http://localhost:5000/

router.get('/getAll', getAllStatements);  //Here get all statement functionality is assigned to route:http/localhost:5000/getAll


module.exports = router;