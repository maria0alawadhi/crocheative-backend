const { Schema } = require('mongoose')

const cartSchema = new Schema(
  {
    items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
    totalPrice: Number
  },
  { timestamps: true }
)

module.exports = cartSchema
