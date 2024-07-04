const studentRepository = require('../repositories/studentRepository');

class StudentService {
  async createStudent(student) {
    return await studentRepository.createStudent(student);
  }
}

module.exports = new StudentService();