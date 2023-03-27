const { SKU } = require('../orm/models');

async function getAllSKUs() {
  return await SKU.findAll();
}

async function getSKUById(id) {
  return await SKU.findByPk(id);
}

async function createSKU(skuData) {
  return await SKU.create(skuData);
}

async function updateSKU(id, skuData) {
  const sku = await getSKUById(id);
  return await sku.update(skuData);
}

async function deleteSKU(id) {
  const sku = await getSKUById(id);
  return await sku.destroy();
}

module.exports = {
  getAllSKUs,
  getSKUById,
  createSKU,
  updateSKU,
  deleteSKU
};
