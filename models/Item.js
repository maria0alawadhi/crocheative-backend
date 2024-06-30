const { Schema } = require('mongoose')

const itemSchema = new Schema(
  {
    category: String,
    name: String,
    description: String,
    price: Number,
    quantity: Number
  },
  { timestamps: true }
)

module.exports = itemSchema
