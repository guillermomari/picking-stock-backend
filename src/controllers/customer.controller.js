const customerData = require('../data/customer.data');

const getAllCustomersController = async (req, res, next) => {
  try {
    const customers = await customerData.getAllCustomers();
    res.status(200).json(customers);
  } catch (error) {
    next(error);
  }
};

const getCustomerByIdController = async (req, res, next) => {
  const id = req.params.id;
  try {
    const customer = await customerData.getCustomerById(id);
    res.status(200).json(customer);
  } catch (error) {
    next(error);
  }
};

const createCustomerController = async (req, res, next) => {
  const data = req.body;
  try {
    const customer = await customerData.createCustomer(data);
    res.status(201).json(customer);
  } catch (error) {
    next(error);
  }
};

const updateCustomerController = async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const customer = await customerData.updateCustomer(id, data);
    res.status(200).json(customer);
  } catch (error) {
    next(error);
  }
};

const deleteCustomerController = async (req, res, next) => {
  const id = req.params.id;
  try {
    await customerData.deleteCustomer(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCustomersController,
  getCustomerByIdController,
  createCustomerController,
  updateCustomerController,
  deleteCustomerController,
};
