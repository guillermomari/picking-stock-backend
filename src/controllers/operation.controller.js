const operationData = require('../data/operation.data');

async function getAllOperationsController(req, res) {
  try {
    const page = req.query.page || 1; 
    const limit = req.query.limit || 10; 
    const offset = (page - 1) * limit; 
    const operations = await operationData.getAllOps(limit,offset);
    res.status(200).json(operations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getOperationByIdController(req, res) {
  try {
    const operation = await operationData.getOpById(req.params.id);
    if (operation) {
      res.status(200).json(operation);
    } else {
      res.status(404).json({ error: 'Operation not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createOperationController(req, res) {
  try {
    const operation = await operationData.createOp(req.body);
    res.status(201).json(operation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateOperationController(req, res) {
  try {
    const operation = await operationData.updateOp(req.params.id, req.body);
    res.status(200).json(operation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteOperationController(req, res) {
  try {
    await operationData.deleteOp(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllOperationsController,
  getOperationByIdController,
  createOperationController,
  updateOperationController,
  deleteOperationController
};
