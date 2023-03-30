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
  return await Position.create(data);
   
};

async function updatePosition(id, data) {
  const position = await getPositionById(id);
  return await position.update(data);
}



async function deletePosition(id) {
  const position = await getPositionById(id);
  return await position.destroy();
}

module.exports = {
  getAllPositions,
  getPositionById,
  createPosition,
  updatePosition,
  deletePosition,
};
