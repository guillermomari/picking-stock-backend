const express = require('express');
const router = express.Router();
const pdfService = require('../services/pdfCreation.service');

router.get('/', (req, res) => {
   const content = req.query.content;
  const image = req.query.image;
  const routePDF = pdfService.generarPDF(content, image);

  res.sendFile(routePDF);
});

module.exports = router;
