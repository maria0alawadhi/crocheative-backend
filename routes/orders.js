const router = require('express').Router()
const controller = require('../controllers/orders')
const middleware = require('../middleware')

router.get('/order/:itemId', controller.getOrderItems)
router.post(
  '/order',
  middleware.stripToken,
  middleware.verifyToken,
  controller.addItemInOrder
)
router.delete(
  '/order/:itemId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteItemInOrder
)

module.exports = router
