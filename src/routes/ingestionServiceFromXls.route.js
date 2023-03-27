const ingestionServiceFromXls = require('../services/databaseSkuIngestion.service');
const express = require('express');
const multer = require('multer');
const upload = multer();
const router = express.Router();

const { Sku, Warehouse, Customer, Position } = require('../orm/models');

async function convertFile(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No se recibió ningún archivo' });
    }

    const convertedResult = ingestionServiceFromXls({
      source: req.file.buffer,
      header: {
        rows: 1 // La primera fila del archivo es el encabezado
      },
      columnToKey: {
        A: 'sku',
        B: 'description',
        C: 'price',
        D: 'stock',
        E: 'warehouse_id',
        F: 'customer_id',
        G: 'expected_position_id' // Campo opcional
      }
    });

    const entries = convertedResult['source'];

    // Mapear los registros del archivo a objetos del modelo Sku y guardarlos en la base de datos
    const skuPromises = entries.map(async (entry) => {
      const sku = await Sku.create(entry);

      // Buscar los modelos relacionados (warehouse, customer y position)
      const warehouse = await Warehouse.findByPk(entry.warehouse_id);
      const customer = await Customer.findByPk(entry.customer_id);
      const position = entry.expected_position_id ? await Position.findByPk(entry.expected_position_id) : null;

      // Asignar las relaciones
      await sku.setWarehouse(warehouse);
      await sku.setCustomer(customer);
      if (position) {
        await sku.setPosition(position);
      }

      return sku;
    });

    const skus = await Promise.all(skuPromises);

    return res.json(skus);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Ocurrió un error al procesar el archivo' });
  }
}

router.post('/', upload.single(`xls-${new Date().toISOString()}`),convertFile);

module.exports = router;
