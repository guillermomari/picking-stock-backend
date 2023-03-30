const { TypeOfOperations } = require('../orm/models');

async function getAllTypeOfOperations(limit, offset) {
  return await TypeOfOperations.findAndCountAll({limit,offset});
}

async function getTypeOfOperationById(id) {
  return await TypeOfOperations.findByPk(id);
}

async function createTypeOfOperation(typeofopsData) {
  return await TypeOfOperations.create(typeofopsData);
}

async function updateTypeOfOperation(id, typeofopsData) {
  const typeofops = await getTypeOfOperationById(id);
  return await typeofops.update(typeofopsData);
}

async function deleteTypeOfOperation(id) {
  const typeofops = await getTypeOfOperationById(id);
  return await typeofops.destroy();
}

module.exports = {
  getAllTypeOfOperations,
  getTypeOfOperationById,
  createTypeOfOperation,
  updateTypeOfOperation,
  deleteTypeOfOperation
};
