
const barcodeService = require('../services/barcodeGenerator.service');
const express = require('express');
const router = express.Router();


async function generateBarcode(req, res, next) {
  const barcodeString = req.params.barcodeString;
  try {
    const png = await barcodeService.generateBarcode(barcodeString);
    res.set('Content-Type', 'image/png');
    res.send(png);
  } catch (error) {
    next(error);
  }
}

router.get('/:barcodeString',generateBarcode);

module.exports = router
