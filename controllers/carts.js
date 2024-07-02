const Cart = require('../models/Cart')

const getCartItems = async (req, res) => {
  try {
    const carts = await Cart.find({userId: req.user._id}).populate('itemId')
    // console.log(carts)
    res.status(200).send({status: 'ok', carts})
  } catch (err) {
    console.log(err)
    sendResponseError(500, `Error ${err}`, res)
  }
}

const addItemInCart = async (req, res) => {
  const {itemId, count} = req.body
  try {
    const cart = await Cart.findOneAndUpdate(
      {itemId},
      {itemId, count, userId: req.user._id},
      {upsert: true},
    )

    res.status(201).send({status: 'ok', cart})
  } catch (err) {
    console.log(err)
    sendResponseError(500, `Error ${err}`, res)
  }
}
const deleteItemInCart = async (req, res) => {
  try {
    await Cart.findByIdAndRemove(req.params.id)
    res.status(200).send({status: 'ok'})
  } catch (e) {
    console.log(err)
    sendResponseError(500, `Error ${err}`, res)
  }
}
module.exports = {addItemInCart, deleteItemInCart, getCartItems}