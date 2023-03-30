const rolesData = require('../data/roles.data');U

async function getAllRolessController(req, res) {
  try {
    const page = req.query.page || 1; 
    const limit = req.query.limit || 10; 
    const offset = (page - 1) * limit; 
    const roles = await rolesData.getAllRoles(limit,offset);
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getRolesByIdController(req, res) {
  try {
    const roles = await rolesData.getRoleById(req.params.id);
    if (roles) {
      res.status(200).json(roles);
    } else {
      res.status(404).json({ error: 'Roles not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createRolesController(req, res) {
  try {
    const roles = await rolesData.createRole(req.body);
    res.status(201).json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateRolesController(req, res) {
  try {
    const role = await rolesData.updateRole(req.params.id, req.body);
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteRolesController(req, res) {
  try {
    await rolesData.deleteRole(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllRolessController,
  getRolesByIdController,
  createRolesController,
  updateRolesController,
  deleteRolesController
};
