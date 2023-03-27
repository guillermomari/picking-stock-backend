const { Customer } = require('../orm/models');

const getAllCustomers = async () => {
  try {
    const customers = await Customer.findAll();
    return customers;
  } catch (error) {
    throw new Error(error);
  }
};

const getCustomerById = async (id) => {
  try {
    const customer = await Customer.findByPk(id);
    if (!customer) throw new Error('Customer not found');
    return customer;
  } catch (error) {
    throw new Error(error);
  }
};

const createCustomer = async (customerData) => {
  try {
    const customer = await Customer.create(customerData);
    return customer;
  } catch (error) {
    throw new Error(error);
  }
};

const updateCustomer = async (id, customerData) => {
  try {
    const customer = await Customer.findByPk(id);
    if (!customer) throw new Error('Customer not found');
    await customer.update(customerData);
    return customer;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteCustomer = async (id) => {
  try {
    const customer = await Customer.findByPk(id);
    if (!customer) throw new Error('Customer not found');
    await customer.destroy();
    return;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
