const { Schema } = require('mongoose')

const reviewSchema = new Schema(
  {
    review: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    item: { type: Schema.Types.ObjectId, ref: 'Item' }
  },
  { timestamps: true }
)

module.exports = reviewSchema
