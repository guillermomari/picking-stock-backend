const { Users } = require('../orm/models');

async function getAllUsers(limit, offset) {
  return await Users.findAndCountAll({limit,offset});
}

async function getUserById(id) {
  return await Users.findByPk(id);
}

async function createUser(userData) {
  return await Users.create(userData);
}

async function updateUser(id, userData) {
  const user = await getUserById(id);
  return await user.update(userData);
}

async function deleteUser(id) {
  const user = await getUserById(id);
  return await user.destroy();
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
