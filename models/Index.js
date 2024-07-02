const mongoose = require('mongoose')
const userSchema = require('./User')
const itemSchema = require('./Item')
const cartSchema = require('./Cart')
const orderSchema = require('./Order')
const reviewSchema = require('./Review')

const User = mongoose.model('User', userSchema)
const Item = mongoose.model('Item', itemSchema)
const Cart = mongoose.model('Cart', cartSchema)
const Order = mongoose.model('Order', orderSchema)
const Review = mongoose.model('Review', reviewSchema)

module.exports = { User, Item, Cart, Order, Review }
