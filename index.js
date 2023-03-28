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
const {loginAuthentication} = require ('./src/services/login');
const authMiddleware = require('./src/utils/authenticationMiddleware');

app.use(bodyParser.json());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.post('/login', loginAuthentication);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/pdf', authMiddleware, pdfCreationService);
app.use('/barcode', authMiddleware, barcodeRoutes);
app.use('/ingestion', authMiddleware, ingestionRoutes);
app.use('/order', authMiddleware, orderPickingRoutes);

app.use('/skus', authMiddleware, skuRoutes);
app.use('/costumers', authMiddleware, costumerRoutes);
app.use('/warehouses', authMiddleware, warehouseRoutes);
app.use('/positions', authMiddleware, positionRoutes);


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