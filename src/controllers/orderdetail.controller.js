const orderDetailData = require('../data/orderdetail.data');

async function getAllOrdersDetailsController(req, res) {
  try {
    const page = req.query.page || 1; 
    const limit = req.query.limit || 10; 
    const offset = (page - 1) * limit; 
    const orderDetails = await orderDetailData.getAllOrderDetails(limit,offset);
    res.status(200).json(orderDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getOrderDetailByIdController(req, res) {
  try {
    const orderDetail = await orderDetailData.getOrderDetailById(req.params.id);
    if (orderDetail) {
      res.status(200).json(orderDetail);
    } else {
      res.status(404).json({ error: 'orderDetail not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createOrderDetailController(req, res) {
  try {
    const orderDetail = await orderDetailData.createOrderDetail(req.body);
    res.status(201).json(orderDetail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateOrderDetailController(req, res) {
  try {
    const orderDetail = await orderDetailData.updateOrderDetail(req.params.id, req.body);
    res.status(200).json(orderDetail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteOrderDetailController(req, res) {
  try {
    await orderDetailData.deleteOrderDetail(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllOrdersDetailsController,
  getOrderDetailByIdController,
  createOrderDetailController,
  updateOrderDetailController,
  deleteOrderDetailController
};
