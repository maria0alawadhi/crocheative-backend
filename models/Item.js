const { Schema } = require('mongoose')
const itemSchema = new Schema(
  {
    category: String,
    name: String,
    description: String,
    price: Number,
    countInStock: Number,
    imgs: [String]
  },
  { timestamps: true }
)
module.exports = itemSchema
