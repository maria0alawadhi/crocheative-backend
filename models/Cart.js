const { Schema } = require('mongoose')

const cartSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true
    },
    itemId: {
      type: Schema.Types.ObjectId,
      ref: 'item',
      required: true
    },
    count: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
)
module.exports = cartSchema
