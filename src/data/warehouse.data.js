const { Warehouse } = require('../orm/models');

async function getAllWarehouses(limit, offset) {
  return await Warehouse.findAndCountAll({limit,offset});
}

async function getWarehouseById(id) {
 return await Warehouse.findByPk(id);
}

async function createWarehouse(warehouseData) {
 return await Warehouse.create(warehouseData);
  
}

async function updateWarehouse(id, warehouseData) {
  const warehouse = await Warehouse.getWarehouseById(id);
  if (!warehouse) {
    throw new Error(`No se encontró un depósito con el ID ${id}`);
  }
  return await warehouse.update(warehouseData);
  
}

async function deleteWarehouse(id) {
  const warehouse = await Warehouse.getWarehouseById(id);
  if (!warehouse) {
    throw new Error(`No se encontró un depósito con el ID ${id}`);
  }
 return await warehouse.destroy();
 
}

module.exports = {
  getAllWarehouses,
  getWarehouseById,
  createWarehouse,
  updateWarehouse,
  deleteWarehouse,
};
