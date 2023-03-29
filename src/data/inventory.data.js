const { Inventory } = require('../orm/models');

async function getAllInventories(limit, offset) {
  return await Inventory.findAndCountAll({limit,offset});
}

async function getInventoryById(id) {
  return await Inventory.findByPk(id);
}

async function createInventory(inventoryData) {
  return await Inventory.create(inventoryData);
}

async function updateInventory(id, inventoryData)  {
  const inventory = await getInventoryById(id);
  return await inventory.update(inventoryData);
}

async function deleteInventory(id) {
  const inventory = await getInventoryById(id);
  return await inventory.destroy();
}

module.exports = {
  getAllInventories,
  getInventoryById,
  createInventory,
  updateInventory,
  deleteInventory
};
