const router = require('express').Router()
const orderCtrl = require('../controllers/orders')
const middleware = require('../middleware')

router.get(
  '/orders',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.roleCheck(['admin']),
  orderCtrl.getAllOrders
)
router.get(
  '/orders/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.roleCheck(['client']),
  orderCtrl.getUserOrders
)
router.post(
  '/orders',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.roleCheck(['client']),
  orderCtrl.createOrder
)
router.delete(
  '/orders/:orderId/items/:itemId',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.roleCheck(['client']),
  orderCtrl.deleteItemInOrder
)
module.exports = router