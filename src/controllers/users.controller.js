const userData = require('../data/users.data');

async function getAllUsersController(req, res) {
  try {
    const page = req.query.page || 1; 
    const limit = req.query.limit || 10; 
    const offset = (page - 1) * limit; 
    const users = await userData.getAllUsers(limit,offset);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getUserByIdController(req, res) {
  try {
    const user = await userData.getUserById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createUserController(req, res) {
  try {
    const user = await userData.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateUserController(req, res) {
  try {
    const user = await userData.updateUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteuserController(req, res) {
  try {
    await userData.deleteUser(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllUsersController,
  getUserByIdController,
  createUserController,
  updateUserController,
  deleteuserController
};
