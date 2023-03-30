const { Order } = require('../orm/models');

async function getAllOrders(limit, offset) {
  return await Order.findAndCountAll({limit,offset});
}

async function getOrderById(id) {
  return await Order.findByPk(id);
}

async function createOrder(orderData) {
  return await Order.create(orderData);
}

async function updateOrder(id, orderData) {
  const order = await getOrderById(id);
  return await order.update(orderData);
}

async function deleteOrder(id) {
  const order = await getOrderById(id);
  return await order.destroy();
}

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder
};
