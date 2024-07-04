//const bcrypt = require('bcrypt');
const bcrypt = require('bcryptjs');
const userRepository = require('../repositories/userRepository');

class AuthService {
  async register(user) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    return await userRepository.createUser(user);
  }

  async login(email, password) {
    const user = await userRepository.findUserByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    } else {
      throw new Error('Invalid email or password');
    }
  }
}

module.exports = new AuthService();