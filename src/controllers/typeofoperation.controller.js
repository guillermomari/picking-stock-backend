const typeOfOpData = require('../data/typeofoperations.data');

async function getAlltypeOfOpsController(req, res) {
  try {
    const page = req.query.page || 1; 
    const limit = req.query.limit || 10; 
    const offset = (page - 1) * limit; 
    const typeOfOps = await typeOfOpData.getAllTypeOfOperations(limit,offset);
    res.status(200).json(typeOfOps);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function gettypeOfOpByIdController(req, res) {
  try {
    const typeOfOp = await typeOfOpData.getTypeOfOperationById(req.params.id);
    if (typeOfOp) {
      res.status(200).json(typeOfOp);
    } else {
      res.status(404).json({ error: 'Type of operation not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createtypeOfOpController(req, res) {
  try {
    const typeOfOp = await typeOfOpData.createTypeOfOperation(req.body);
    res.status(201).json(typeOfOp);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updatetypeOfOpController(req, res) {
  try {
    const typeOfOp = await typeOfOpData.updateTypeOfOperation(req.params.id, req.body);
    res.status(200).json(typeOfOp);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deletetypeOfOpController(req, res) {
  try {
    await typeOfOpData.deleteTypeOfOperation(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAlltypeOfOpsController,
  gettypeOfOpByIdController,
  createtypeOfOpController,
  updatetypeOfOpController,
  deletetypeOfOpController
};
