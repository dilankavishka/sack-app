const pool = require('../config/db');
const Student = require('../models/Student');

class StudentRepository {
  async createStudent(student) {
    const { firstname, lastname, date_of_birth, admission_number } = student;
    const query = 'INSERT INTO Student (firstname, lastname, date_of_birth, admission_number) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [firstname, lastname, date_of_birth, admission_number];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
}

module.exports = new StudentRepository();