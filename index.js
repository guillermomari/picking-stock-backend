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
const orderPickingServiceRoutes = require('./src/routes/orderPicking.route');
const contabilizationReportRoutes = require('./src/routes/contabilizationreport.route');
const inventoryRoutes = require('./src/routes//inventory.route');
const operationRoutes = require('./src/routes/operation.route');
const operatorsRoutes = require('./src/routes/operators.route');
const orderRoutes = require('./src/routes/order.route');
const orderdetailRoutes = require('./src/routes/orderdetail.route');
const rolesRoutes = require('./src/routes/roles.route');
const statusRoutes = require('./src/routes/status.route');
const usersRoutes = require('./src/routes/users.route');
const typeOfOperationRoutes = require('./src/routes/typeofoperation.route');





const {loginAuthentication} = require ('./src/services/login');
const {authMiddleware} = require('./src/utils/authenticationMiddleware');

app.use(bodyParser.json());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.post('/login', loginAuthentication);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/pdf', authMiddleware, pdfCreationService);
app.use('/barcode', authMiddleware, barcodeRoutes);
app.use('/ingestion', authMiddleware, ingestionRoutes);
app.use('/picking', authMiddleware, orderPickingServiceRoutes);

app.use('/skus', authMiddleware, skuRoutes);
app.use('/costumers', authMiddleware, costumerRoutes);
app.use('/warehouses', authMiddleware, warehouseRoutes);
app.use('/positions', authMiddleware, positionRoutes);
app.use('/users', authMiddleware, usersRoutes);
app.use('/status', authMiddleware, statusRoutes);
app.use('/roles', authMiddleware, rolesRoutes);
app.use('/orderdetail', authMiddleware, orderdetailRoutes);
app.use('/order', authMiddleware, orderRoutes);
app.use('/operator', authMiddleware, operatorsRoutes);
app.use('/operation', authMiddleware, operationRoutes);
app.use('/inventory', authMiddleware, inventoryRoutes);
app.use('/report', authMiddleware, contabilizationReportRoutes);
app.use('/typeofops', authMiddleware, typeOfOperationRoutes);



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