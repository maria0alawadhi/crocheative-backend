const { Schema } = require('mongoose')

const cartSchema = new Schema(
  {
    items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
    totalPrice: Number
  },
  { timestamps: true }
)

module.exports = cartSchema

// const mongoose = require('mongoose')

// const cartSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Types.ObjectId,
//       ref: 'user',
//       required: true,
//     },
//     productId: {
//       type: mongoose.Types.ObjectId,
//       ref: 'product',
//       required: true,
//     },
//     count: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   },
// )

// const Cart = mongoose.model('cart', cartSchema)
// module.exports = Cart