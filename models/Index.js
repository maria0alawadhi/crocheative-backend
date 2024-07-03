const mongoose = require('mongoose')
const userSchema = require('./User')
const itemSchema = require('./Item')
const orderSchema = require('./Order')
const reviewSchema = require('./Review')

const User = mongoose.model('User', userSchema)
const Item = mongoose.model('Item', itemSchema)
const Order = mongoose.model('Order', orderSchema)
const Review = mongoose.model('Review', reviewSchema)

module.exports = { User, Item, Order, Review }
