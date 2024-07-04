const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordDigest: { type: String, required: true },
    role: {
      type: String,
      enum: ['admin', 'client']
    }
  },
  { timestamps: true }
)

module.exports = userSchema
