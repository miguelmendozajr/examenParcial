const express = require('express');

const router = express.Router();
const StudentHttpHandler = require('../handlers/students');
const StudentServiceFactory = require('../db/factory');
const StudentController = require('../controllers/student');

// Create the service and controller
const studentService = StudentServiceFactory.create('fake');
const studentController = new StudentController(studentService);

// Create the handler instance
const studentHandler = new StudentHttpHandler(studentController);

// Set up routes with bound handler methods
router.get('/login', studentHandler.logStudent.bind(studentHandler));


module.exports = router;