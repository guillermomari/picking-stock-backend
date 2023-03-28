const orderPicking = require('../services/orderPicking.service');
const express = require('express');
const router = express.Router();

// En la ruta "/posiciones/deducir" se reciben las cantidades a deducir de cada posición
const deducirCantidadesPosiciones = async (req, res) => {
  try {
    const { cantidades, id_almacen } = req.body;
    const res = await orderPicking(cantidades, id_almacen);
    res.json({ mensaje: 'Las cantidades fueron deducidas correctamente de las posiciones' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al deducir las cantidades de las posiciones' });
  }
};

router.post('/posiciones/deducir', deducirCantidadesPosiciones);

module.exports = router;
