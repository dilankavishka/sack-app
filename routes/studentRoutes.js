const express = require('express');
const studentController = require('../controllers/studentController');
const router = express.Router();

router.post('/create-student', studentController.createStudent);

module.exports = router;