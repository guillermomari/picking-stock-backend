require('dotenv').config()
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const express = require('express');
const bodyParser = require('body-parser');
const app =express();
const PORT = process.env.PORT || 3000;
const skuRoutes = require('./src/routes/sku.route');
const costumerRoutes = require('./src/routes/customer.route');
const warehouseRoutes = require('./src/routes/warehouse.route');
const positionRoutes = require('./src/routes/position.route');
const pdfCreationService = require('./src/routes/pdfCreationService.route');
const barcodeRoutes = require('./src/routes/barcodeService.route');
const ingestionRoutes = require('./src/routes/ingestionServiceFromXls.route');
const orderPickingRoutes = require('./src/routes/orderPicking.route');

app.use(bodyParser.json());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/pdf', pdfCreationService);
app.use('/barcode', barcodeRoutes);
app.use('/ingestion', ingestionRoutes);
app.use('/order', orderPickingRoutes);

app.use('/skus', skuRoutes);
app.use('/costumers', costumerRoutes);
app.use('/warehouses', warehouseRoutes);
app.use('/positions', positionRoutes);


app.use((req, res, next) => {
    const error = new Error('Route not found');
    error.status = 404;
    next(error);
  });
  
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
  });



app.listen(PORT, () => {
    console.log(`Server initiated on port:  ${PORT}`);
  });