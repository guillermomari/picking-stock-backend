const statusData = require('../data/status.data');

async function getAllstatusesController(req, res) {
  try {
    const page = req.query.page || 1; 
    const limit = req.query.limit || 10; 
    const offset = (page - 1) * limit; 
    const status = await statusData.getAllStatuses(limit,offset);
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getstatusByIdController(req, res) {
  try {
    const status = await statusData.getStatusById(req.params.id);
    if (status) {
      res.status(200).json(status);
    } else {
      res.status(404).json({ error: 'Status not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createStatusController(req, res) {
  try {
    const status = await statusData.createStatus(req.body);
    res.status(201).json(status);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateStatusController(req, res) {
  try {
    const status = await statusData.updateStatus(req.params.id, req.body);
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteStatusController(req, res) {
  try {
    await statusData.deleteStatus(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllstatusesController,
  getstatusByIdController,
  createStatusController,
  updateStatusController,
  deleteStatusController
};
