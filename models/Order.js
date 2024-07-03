const { Schema } = require('mongoose')

const orderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true
    },
    items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
    payment: String,
    location: String,
    payment: {
      type: Boolean,
      required: true,
      default: false
    },
    location: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = orderSchema
