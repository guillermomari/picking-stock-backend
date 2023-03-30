const inventoryData = require('../data/inventory.data');

async function getAllInventoriesController(req, res) {
  try {
    const page = req.query.page || 1; 
    const limit = req.query.limit || 10; 
    const offset = (page - 1) * limit; 
    const inventories = await inventoryData.getAllInventories(limit,offset);
    res.status(200).json(inventories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getInventoryByIdController(req, res) {
  try {
    const inventory = await inventoryData.getInventoryById(req.params.id);
    if (Inventory) {
      res.status(200).json(inventory);
    } else {
      res.status(404).json({ error: 'Inventory not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createInventoryController(req, res) {
  try {
    const inventory = await inventoryData.createInventory(req.body);
    res.status(201).json(inventory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateInventoryController(req, res) {
  try {
    const inventory = await inventoryData.updateInventory(req.params.id, req.body);
    res.status(200).json(inventory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteInventoryController(req, res) {
  try {
    await inventoryData.deleteInventory(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllInventoriesController,
  getInventoryByIdController,
  createInventoryController,
  updateInventoryController,
  deleteInventoryController
};
