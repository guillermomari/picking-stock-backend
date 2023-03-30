const { Operators } = require('../orm/models');

async function getAllOperators(limit, offset) {
  return await Operators.findAndCountAll({limit,offset});
}

async function getOperatorById(id) {
  return await Operators.findByPk(id);
}

async function createOperator(operatorData) {
  return await Operators.create(operatorData);
}

async function updateOperator(id, operatorData) {
  const operator = await getOperatorById(id);
  return await operator.update(operatorData);
}

async function deleteOperator(id) {
  const operator = await getOperatorById(id);
  return await operator.destroy();
}

module.exports = {
  getAllOperators,
  getOperatorById,
  createOperator,
  updateOperator,
  deleteOperator
};
