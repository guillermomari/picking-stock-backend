const positionData = require('../data/position.data');

const getAllPositions = async (req, res) => {
  const positions = await positionData.getAllPositions();
  res.status(200).json(positions);
};

const getPositionById = async (req, res) => {
  const { id } = req.params;
  const position = await positionData.getPositionById(id);
  if (!position) {
    return res.status(404).json({ error: 'Position not found' });
  }
  res.status(200).json(position);
};

const createPosition = async (req, res) => {
  const data = req.body;
  const position = await positionData.createPosition(data);
  res.status(201).json(position);
};

const updatePosition = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const position = await positionData.getPositionById(id);
  if (!position) {
    return res.status(404).json({ error: 'Position not found' });
  }
  const updatedPosition = await positionData.updatePosition(id, data);
  res.status(200).json(updatedPosition);
};

const deletePosition = async (req, res) => {
  const { id } = req.params;
  const position = await positionData.getPositionById(id);
  if (!position) {
    return res.status(404).json({ error: 'Position not found' });
  }
  const deletedPosition = await positionData.deletePosition(id);
  res.status(200).json(deletedPosition);
};

module.exports = {
  getAllPositions,
  getPositionById,
  createPosition,
  updatePosition,
  deletePosition,
};
