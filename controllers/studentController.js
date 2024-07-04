const studentService = require('../services/studentService');

class StudentController {
  async createStudent(req, res) {
    try {
      const student = await studentService.createStudent(req.body);
      res.status(201).json(student);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new StudentController();