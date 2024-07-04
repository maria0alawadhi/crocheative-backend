const { Order } = require('../models/Index')

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('items')
    res.send(orders)
  } catch (error) {
    throw error
  }
}

const getUserOrders = async (req, res) => {
  try {
    const { userId } = req.params
    const orders = await Order.find({ user: userId }).populate('items')
    res.send(orders)
  } catch (error) {
    throw error
  }
}

const createOrder = async (req, res) => {
  try {
    const { user, items } = req.body
    const newOrder = new Order({ user: user, items })
    const savedOrder = await newOrder.save()
    res.send(savedOrder)
  } catch (error) {
    throw error
  }
}

const deleteItemInOrder = async (req, res) => {
  try {
    const { orderId, itemId } = req.params

    const updatedOrder = await Order.findOneAndUpdate(
      { _id: orderId, items: itemId },
      { $pull: { items: itemId } },
      { new: true }
    )

    if (updatedOrder.items.length === 0) {
      await Order.deleteOne({ _id: orderId })
      res.send({ message: 'Order deleted' })
    } else {
      res.send(updatedOrder)
    }
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllOrders,
  getUserOrders,
  createOrder,
  deleteItemInOrder
}
