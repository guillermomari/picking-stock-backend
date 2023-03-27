const xlsx = require('xlsx');
const { Sku, Warehouse, Customer, Position } = require('../orm/models');

async function ingestionServiceFromXls(req, res, next) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Debe proporcionar un archivo xls' });
    }

    // Leer el archivo xls y convertirlo a un objeto JSON
    const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = xlsx.utils.sheet_to_json(sheet, { header: 1 });

    // Obtener los nombres de los campos esperados en el archivo
    const atributosSku = Object.keys(Sku.rawAttributes);
    const atributosWarehouse = Object.keys(Warehouse.rawAttributes);
    const atributosCustomer = Object.keys(Customer.rawAttributes);

    // Validar que el archivo contenga todos los campos necesarios
    const encabezados = jsonData[0];
    const columnasFaltantes = [];
    ['sku', 'warehouse_id', 'customer_id', 'expected_position_id'].forEach(campo => {
      if (!encabezados.includes(campo)) {
        columnasFaltantes.push(campo);
      }
    });
    if (columnasFaltantes.length > 0) {
      return res.status(400).json({ error: `El archivo no contiene las columnas necesarias: ${columnasFaltantes.join(', ')}` });
    }

    // Recorrer los registros del archivo y construir el objeto JSON con el formato esperado
    const skus = [];
    for (let i = 1; i < jsonData.length; i++) {
      const fila = jsonData[i];
      const sku = {};
      for (let j = 0; j < encabezados.length; j++) {
        const campo = encabezados[j];
        const valor = fila[j];

        if (atributosSku.includes(campo)) {
          sku[campo] = valor;
        } else if (atributosWarehouse.includes(campo)) {
          sku.warehouse = sku.warehouse || {};
          sku.warehouse[campo] = valor;
        } else if (atributosCustomer.includes(campo)) {
          sku.customer = sku.customer || {};
          sku.customer[campo] = valor;
        } else if (campo === 'expected_position_id') {
          sku.expected_position_id = valor || null;
        }
      }

      // Verificar que el registro contenga todos los campos necesarios
      const camposFaltantes = ['sku', 'warehouse_id', 'customer_id'].filter(campo => !sku[campo]);
      if (camposFaltantes.length > 0) {
        return res.status(400).json({ error: `El registro ${i} del archivo no contiene los campos necesarios: ${camposFaltantes.join(', ')}` });
      }

      skus.push(sku);
    }

    res.json({ data: skus });
//TO DO  AQUI ES DONDE INGESTA EL JSON EN LA BASE DE DATOS O VER SI NO LO HACE ANTES

  } catch (error) {
    next(error);
  }
}

module.exports = ingestionServiceFromXls;
