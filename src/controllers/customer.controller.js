const customerData = require('../data/customer.data');

const getAllCustomers = async (req, res, next) => {
  try {
    const customers = await customerData.getAllCustomers();
    res.status(200).json(customers);
  } catch (error) {
    next(error);
  }
};

const getCustomerById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const customer = await customerData.getCustomerById(id);
    res.status(200).json(customer);
  } catch (error) {
    next(error);
  }
};

const createCustomer = async (req, res, next) => {
  const customerData = req.body;
  try {
    const customer = await customerData.createCustomer(customerData);
    res.status(201).json(customer);
  } catch (error) {
    next(error);
  }
};

const updateCustomer = async (req, res, next) => {
  const id = req.params.id;
  const customerData = req.body;
  try {
    const customer = await customerData.updateCustomer(id, customerData);
    res.status(200).json(customer);
  } catch (error) {
    next(error);
  }
};

const deleteCustomer = async (req, res, next) => {
  const id = req.params.id;
  try {
    await customerData.deleteCustomer(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
