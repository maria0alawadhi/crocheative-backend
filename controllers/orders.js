const { Order } = require('../models/Index')

const getOrderItems = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate('items')
    res.status(200).send({ status: 'ok', orders })
  } catch (err) {
    console.log(err)
    sendResponseError(500, `Error ${err}`, res)
  }
}
const addItemInOrder = async (req, res) => {
  const { item } = req.body
  try {
    let order = await Order.findOne({ userId: req.user._id })
    if (!order) {
      order = new Order({ userId: req.user._id, items: [item] })
    } else {
      order.items.push(item)
    }
    console.log(order)
    await order.save()
    res.status(201).send({ status: 'ok', order })
  } catch (err) {
    console.log(err)
    sendResponseError(500, `Error ${err}`, res)
  }
}
const deleteItemInOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
    if (!order) {
      return res
        .status(404)
        .send({ status: 'error', message: 'Order not found' })
    }
    order.items.pull(req.params.itemId)
    await order.save()
    res.status(200).send({ status: 'ok' })
  } catch (err) {
    console.log(err)
    sendResponseError(500, `Error ${err}`, res)
  }
}
module.exports = { addItemInOrder, deleteItemInOrder, getOrderItems }
