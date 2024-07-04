const { Schema } = require('mongoose')
const orderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
    location: String,
    payment: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  { timestamps: true }
)
module.exports = orderSchema
