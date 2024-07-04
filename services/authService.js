const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');
const secret = 'my_jwt_secret'; // Use an environment variable for this in a real application

class AuthService {
  async register(user) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    return await userRepository.createUser(user);
  }

  async login(email, password) {
    const user = await userRepository.findUserByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ id: user._id }, secret, { expiresIn: '1h' });
      return { user, token };
    } else {
      throw new Error('Invalid email or password');
    }
  }
}

module.exports = new AuthService();
