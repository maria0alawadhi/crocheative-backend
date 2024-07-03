const { Order } = require('../models/Index')

const getOrderItems = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id }).populate('items')
    // console.log(orders)
    res.status(200).send({ status: 'ok', orders })
  } catch (err) {
    console.log(err)
    sendResponseError(500, `Error ${err}`, res)
  }
}

const addItemInOrder = async (req, res) => {
  const { itemId, count } = req.body
  try {
    const order = await Order.findOneAndUpdate(
      { itemId },
      { itemId, count, userId: req.user._id },
      { upsert: true }
    )

    res.status(201).send({ status: 'ok', order })
  } catch (err) {
    console.log(err)
    sendResponseError(500, `Error ${err}`, res)
  }
}
const deleteItemInOrder = async (req, res) => {
  try {
    await Order.findByIdAndRemove(req.params.id)
    res.status(200).send({ status: 'ok' })
  } catch (e) {
    console.log(err)
    sendResponseError(500, `Error ${err}`, res)
  }
}
module.exports = { addItemInOrder, deleteItemInOrder, getOrderItems }
