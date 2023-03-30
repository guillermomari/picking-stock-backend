const skuData = require('../data/sku.data');

async function getAllSKUsController(req, res) {
  try {
    const page = req.query.page || 1; 
    const limit = req.query.limit || 10; 
    const offset = (page - 1) * limit; 
    const skus = await skuData.getAllSKUs(limit,offset);
    res.status(200).json(skus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getSKUByIdController(req, res) {
  try {
    const sku = await skuData.getSKUById(req.params.id);
    if (sku) {
      res.status(200).json(sku);
    } else {
      res.status(404).json({ error: 'SKU not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createSKUController(req, res) {
  try {
    const sku = await skuData.createSKU(req.body);
    res.status(201).json(sku);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateSKUController(req, res) {
  try {
    const sku = await skuData.updateSKU(req.params.id, req.body);
    res.status(200).json(sku);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteSKUController(req, res) {
  try {
    await skuData.deleteSKU(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllSKUsController,
  getSKUByIdController,
  createSKUController,
  updateSKUController,
  deleteSKUController
};
