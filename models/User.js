const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true },
    role:{
    num:['admin','client']
    }
  },
  { timestamps: true }
)

module.exports = userSchema
