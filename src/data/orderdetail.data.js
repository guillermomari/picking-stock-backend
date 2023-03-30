const { OrderDetail } = require('../orm/models');

async function getAllOrderDetails(limit, offset) {
  return await OrderDetail.findAndCountAll({limit,offset});
}

async function getOrderDetailById(id) {
  return await OrderDetail.findByPk(id);
}

async function createOrderDetail(orderDetailData) {
  return await OrderDetail.create(orderDetailData);
}

async function updateOrderDetail(id, orderDetailData) {
  const orderDetail = await getOrderDetailById(id);
  return await orderDetail.update(orderDetailData);
}

async function deleteOrderDetail(id) {
  const orderDetail = await getOrderDetailById(id);
  return await orderDetail.destroy();
}

module.exports = {
  getAllOrderDetails,
  getOrderDetailById,
  createOrderDetail,
  updateOrderDetail,
  deleteOrderDetail
};
