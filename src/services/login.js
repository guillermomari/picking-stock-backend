const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {User} = require('../orm/models');


async function loginAuthentication (req,res) {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
  }
  let token = user.token;
  if (!token) {
    token = jwt.sign({ userId: user._id, roleId: user.roleId }, process.env.JWT_SECRET, { expiresIn: process.env.TOKEN_EXPIRATION_TIME });
    user.token = token;
    await user.save();
  }
  res.send({ token });
}

module.exports = {loginAuthentication}