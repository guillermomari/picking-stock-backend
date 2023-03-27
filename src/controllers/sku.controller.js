const skuData = require('../data/sku.data');

async function getAllSKUs(req, res) {
  try {
    const skus = await skuData.getAllSKUs();
    res.status(200).json(skus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getSKUById(req, res) {
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

async function createSKU(req, res) {
  try {
    const sku = await skuData.createSKU(req.body);
    res.status(201).json(sku);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateSKU(req, res) {
  try {
    const sku = await skuData.updateSKU(req.params.id, req.body);
    res.status(200).json(sku);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteSKU(req, res) {
  try {
    await skuData.deleteSKU(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllSKUs,
  getSKUById,
  createSKU,
  updateSKU,
  deleteSKU
};
