const { Status } = require('../orm/models');

async function getAllStatuses(limit, offset) {
  return await Status.findAndCountAll({limit,offset});
}

async function getStatusById(id) {
  return await Status.findByPk(id);
}

async function createStatus(statusData) {
  return await Status.create(statusData);
}

async function updateStatus(id, statusData) {
  const status = await getStatusById(id);
  return await status.update(statusData);
}

async function deleteStatus(id) {
  const status = await getStatusById(id);
  return await status.destroy();
}

module.exports = {
  getAllStatuses,
  getStatusById,
  createStatus,
  updateStatus,
  deleteStatus
};
