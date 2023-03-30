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
app.post(`/api/${process.env.API_VERSION}/login`, loginAuthentication);
app.use(`/api/${process.env.API_VERSION}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(`/api/${process.env.API_VERSION}/pdf`, authMiddleware, pdfCreationService);
app.use(`api/${process.env.API_VERSION}/barcode`, authMiddleware, barcodeRoutes);
app.use(`/api/${process.env.API_VERSION}/ingestion`, authMiddleware, ingestionRoutes);
app.use(`/api/${process.env.API_VERSION}/picking`, authMiddleware, orderPickingServiceRoutes);
app.use(`/api/${process.env.API_VERSION}/skus`, authMiddleware, skuRoutes);
app.use(`/api/${process.env.API_VERSION}/customers`, authMiddleware, customerRoutes);
app.use(`/api/${process.env.API_VERSION}/warehouses`, authMiddleware, warehouseRoutes);
app.use(`/api/${process.env.API_VERSION}/positions`, authMiddleware, positionRoutes);
app.use(`/api/${process.env.API_VERSION}/users`, authMiddleware, usersRoutes);
app.use(`/api/${process.env.API_VERSION}/status`, authMiddleware, statusRoutes);
app.use(`/api/${process.env.API_VERSION}/roles`, authMiddleware, rolesRoutes);
app.use(`/api/${process.env.API_VERSION}/orderdetail`, authMiddleware, orderdetailRoutes);
app.use(`/api/${process.env.API_VERSION}/order`, authMiddleware, orderRoutes);
app.use(`/api/${process.env.API_VERSION}/operator`, authMiddleware, operatorsRoutes);
app.use(`/api/${process.env.API_VERSION}/operation`, authMiddleware, operationRoutes);
app.use(`/api/${process.env.API_VERSION}/inventory`, authMiddleware, inventoryRoutes);
app.use(`/api/${process.env.API_VERSION}/report`, authMiddleware, contabilizationReportRoutes);
app.use(`/api/${process.env.API_VERSION}/typeofops`, authMiddleware, typeOfOperationRoutes);



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
