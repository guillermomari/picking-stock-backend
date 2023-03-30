const operatorData = require('../data/operators.data');

async function getAllOperatorsController(req, res) {
  try {
    const page = req.query.page || 1; 
    const limit = req.query.limit || 10; 
    const offset = (page - 1) * limit; 
    const operators = await operatorData.getAllOperators(limit,offset);
    res.status(200).json(operators);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getOperatorByIdController(req, res) {
  try {
    const operator = await operatorData.getOperatorById(req.params.id);
    if (operator) {
      res.status(200).json(operator);
    } else {
      res.status(404).json({ error: 'Operator not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createOperatorController(req, res) {
  try {
    const operator = await operatorData.createOperator(req.body);
    res.status(201).json(operator);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateOperatorController(req, res) {
  try {
    const operator = await operatorData.updateOperator(req.params.id, req.body);
    res.status(200).json(operator);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteOperatorController(req, res) {
  try {
    await operatorData.deleteOperator(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllOperatorsController,
  getOperatorByIdController,
  createOperatorController,
  updateOperatorController,
  deleteOperatorController
};
