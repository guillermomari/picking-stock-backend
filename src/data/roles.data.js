const { Roles } = require('../orm/models');

async function getAllRoles(limit, offset) {
  return await Roles.findAndCountAll({limit,offset});
}

async function getRoleById(id) {
  return await Roles.findByPk(id);
}

async function createRole(roleData) {
  return await Roles.create(roleData);
}

async function updateRole(id, roleData) {
  const role = await getRoleById(id);
  return await role.update(roleData);
}

async function deleteRole(id) {
  const role = await getRoleById(id);
  return await role.destroy();
}

module.exports = {
  getAllRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole
};
