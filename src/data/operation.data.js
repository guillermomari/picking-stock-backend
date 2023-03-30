const { Operation } = require('../orm/models');

async function getAllOps(limit, offset) {
  return await Operation.findAndCountAll({limit,offset});
}

async function getOpById(id) {
  return await Operation.findByPk(id);
}

async function createOp(opData) {
  return await Operation.create(opData);
}

async function updateOp(id, opData) {
  const op = await getOpById(id);
  return await op.update(opData);
}

async function deleteOp(id) {
  const op = await getOpById(id);
  return await op.destroy();
}

module.exports = {
  getAllOps,
  getOpById,
  createOp,
  updateOp,
  deleteOp
};
