const pool = require('../config/db');
const User = require('../models/User');

class UserRepository {
  async createUser(user) {
    const { firstname, lastname, email, password } = user;
    const query = 'INSERT INTO Registration (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [firstname, lastname, email, password];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  async findUserByEmail(email) {
    const query = 'SELECT * FROM Registration WHERE email = $1';
    const values = [email];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
}

module.exports = new UserRepository();