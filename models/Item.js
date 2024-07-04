const { Schema } = require('mongoose')
const itemSchema = new Schema(
  {
    category: String,
    name: String,
    description: String,
    price: Number,
    countInStock: Number,
    imgs: [String],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
  },
  { timestamps: true }
)
module.exports = itemSchema
