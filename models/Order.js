const { Schema } = require('mongoose')

const orderSchema = new Schema(
  {
    items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
    payment:String,
    location:String
  },
  { timestamps: true }
)

module.exports = orderSchema
