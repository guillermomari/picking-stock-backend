const { Position } = require('../orm/models');

const getAllPositions = async () => {
  const positions = await Position.findAll();
  return positions;
};

const getPositionById = async (id) => {
  const position = await Position.findByPk(id);
  return position;
};

const createPosition = async (data) => {
  const position = await Position.create(data);
  return position;
};

const updatePosition = async (id, data) => {
  await Position.update(data, { where: { id } });
  const updatedPosition = await getPositionById(id);
  return updatedPosition;
};

const deletePosition = async (id) => {
  const position = await getPositionById(id);
  await Position.destroy({ where: { id } });
  return position;
};

module.exports = {
  getAllPositions,
  getPositionById,
  createPosition,
  updatePosition,
  deletePosition,
};
