const warehouseData = require('../data/warehouse.data');

async function getAllWarehouses(req, res, next) {
  try {
    const warehouses = await warehouseData.getAllWarehouses();
    res.status(200).json(warehouses);
  } catch (error) {
    next(error);
  }
}

async function getWarehouseById(req, res, next) {
  const { id } = req.params;
  try {
    const warehouse = await warehouseData.getWarehouseById(id);
    if (warehouse) {
      res.status(200).json(warehouse);
    } else {
      res.status(404).json({ message: `No se encontró un depósito con el ID ${id}` });
    }
  } catch (error) {
    next(error);
  }
}

async function createWarehouse(req, res, next) {
  const { body } = req;
  try {
    const warehouse = await warehouseData.createWarehouse(body);
    res.status(201).json(warehouse);
  } catch (error) {
    next(error);
  }
}

async function updateWarehouse(req, res, next) {
  const { id } = req.params;
  const { body } = req;
  try {
    const warehouse = await warehouseData.updateWarehouse(id, body);
    res.status(200).json(warehouse);
  } catch (error) {
    next(error);
  }
}

async function deleteWarehouse(req, res, next) {
  const { id } = req.params;
  try {
    const warehouse = await warehouseData.deleteWarehouse(id);
    res.status(200).json(warehouse);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllWarehouses,
  getWarehouseById,
  createWarehouse,
  updateWarehouse,
  deleteWarehouse,
};
