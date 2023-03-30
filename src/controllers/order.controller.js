const orderData = require('../data/order.data');

async function getAllOrdersController(req, res) {
  try {
    const page = req.query.page || 1; 
    const limit = req.query.limit || 10; 
    const offset = (page - 1) * limit; 
    const orders = await orderData.getAllOrders(limit,offset);
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getOrderByIdController(req, res) {
  try {
    const order = await orderData.getOrderById(req.params.id);
    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createOrderController(req, res) {
  try {
    const order = await orderData.createOrder(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateOrderController(req, res) {
  try {
    const order = await orderData.updateOrder(req.params.id, req.body);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteOrderController(req, res) {
  try {
    await orderData.deleteOrder(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllOrdersController,
  getOrderByIdController,
  createOrderController,
  updateOrderController,
  deleteOrderController
};
