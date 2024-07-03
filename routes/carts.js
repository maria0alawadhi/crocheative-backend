const router = require('express').Router()
const controller = require('../controllers/carts')
const middleware = require('../middleware')

router.get('/cart/:itemId', controller.getCartItems)
router.post(
  '/cart',
  middleware.stripToken,
  middleware.verifyToken,
  controller.addItemInCart
)
router.delete(
  '/cart/:itemId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteItemInCart
)

module.exports = router
