require('dotenv').config()
const swaggerUi  = require('swagger-ui-express');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const skuRoutes = require('./src/routes/sku.route');
const customerRoutes = require('./src/routes/customer.route');
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
const { loginAuthentication } = require('./src/services/login');
const { authMiddleware } = require('./src/utils/authenticationMiddleware');
const swaggerFile = require('./swagger.json'); //VER QUE HOY NO SE HACE AUTOMATICAMENTE EN EL NOTEBOOK DEJE UN INSTRUCTIVO

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/api/v1.0.0/login', loginAuthentication);
app.use('/api/v1.0.0/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use('/api/v1.0.0/pdf', authMiddleware, pdfCreationService);
app.use('/api/v1.0.0/barcode', authMiddleware, barcodeRoutes);
app.use('/api/v1.0.0/ingestion', authMiddleware, ingestionRoutes);
app.use('/api/v1.0.0/picking', authMiddleware, orderPickingServiceRoutes);
app.use('/api/v1.0.0/skus', authMiddleware, skuRoutes);
app.use('/api/v1.0.0/customers', authMiddleware, customerRoutes);
app.use('/api/v1.0.0/warehouses', authMiddleware, warehouseRoutes);
app.use('/api/v1.0.0/positions', authMiddleware, positionRoutes);
app.use('/api/v1.0.0/users', authMiddleware, usersRoutes);
app.use('/api/v1.0.0/status', authMiddleware, statusRoutes);
app.use('/api/v1.0.0/roles', authMiddleware, rolesRoutes);
app.use('/api/v1.0.0/orderdetail', authMiddleware, orderdetailRoutes);
app.use('/api/v1.0.0/order', authMiddleware, orderRoutes);
app.use('/api/v1.0.0/operator', authMiddleware, operatorsRoutes);
app.use('/api/v1.0.0/operation', authMiddleware, operationRoutes);
app.use('/api/v1.0.0/inventory', authMiddleware, inventoryRoutes);
app.use('/api/v1.0.0/report', authMiddleware, contabilizationReportRoutes);
app.use('/api/v1.0.0/typeofops', authMiddleware, typeOfOperationRoutes);



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
