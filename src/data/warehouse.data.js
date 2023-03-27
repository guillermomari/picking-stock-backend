const { Warehouse } = require('../orm/models');

async function getAllWarehouses() {
  const warehouses = await Warehouse.findAll();
  return warehouses;
}

async function getWarehouseById(id) {
  const warehouse = await Warehouse.findByPk(id);
  return warehouse;
}

async function createWarehouse(warehouseData) {
  const warehouse = await Warehouse.create(warehouseData);
  return warehouse;
}

async function updateWarehouse(id, warehouseData) {
  const warehouse = await Warehouse.findByPk(id);
  if (!warehouse) {
    throw new Error(`No se encontró un depósito con el ID ${id}`);
  }
  await warehouse.update(warehouseData);
  return warehouse;
}

async function deleteWarehouse(id) {
  const warehouse = await Warehouse.findByPk(id);
  if (!warehouse) {
    throw new Error(`No se encontró un depósito con el ID ${id}`);
  }
  await warehouse.destroy();
  return warehouse;
}

module.exports = {
  getAllWarehouses,
  getWarehouseById,
  createWarehouse,
  updateWarehouse,
  deleteWarehouse,
};
