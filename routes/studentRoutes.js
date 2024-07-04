const express = require('express');
const studentController = require('../controllers/studentController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/create-student', authMiddleware, studentController.createStudent);

module.exports = router;