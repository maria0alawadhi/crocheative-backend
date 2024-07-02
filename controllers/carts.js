// const Cart = require('../models/Cart')

// const getCartItems = async (req, res) => {
//   try {
//     const carts = await Cart.find({ userId: req.user._id }).populate('itemId')
//     // console.log(carts)
//     res.status(200).send({ status: 'ok', carts })
//   } catch (err) {
//     console.log(err)
//     res.status(500).send({ status: 'Error' })
//   }
// }

// const addItemInCart = async (req, res) => {
//   const { itemId, count } = req.body
//   try {
//     const cart = await Cart.findOneAndUpdate(
//       { itemId },
//       { itemId, count, userId: req.user._id },
//       { upsert: true }
//     )

//     res.status(201).send({ status: 'ok', cart })
//   } catch (err) {
//     console.log(err)
//     res.status(500).send({ status: 'Error' })
//   }
// }
// const deleteItemInCart = async (req, res) => {
//   try {
//     await Cart.findByIdAndRemove(req.params.id)
//     res.status(200).send({ status: 'ok' })
//   } catch (e) {
//     console.log(err)
//     res.status(500).send({ status: 'Error' })
//   }
// }
// module.exports = { addItemInCart, deleteItemInCart, getCartItems }



