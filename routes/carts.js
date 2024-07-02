const express = require('express')
const {
  addItemInCart,
  deleteItemInCart,
  getCartItems
} = require('../controller/cart.controller')
const { verifyUser } = require('../middleware/middleware')
const router = express.Router()

router
  .route('/')
  .get([verifyUser], getCartItems)
  .post([verifyUser], addItemInCart)

router.route('/:id').delete([verifyUser], deleteItemInCart)

module.exports = router
