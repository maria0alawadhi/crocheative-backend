const router = require('express').Router()
const orderCtrl = require('../controllers/orders')
const middleware = require('../middleware')
router.get('/order', orderCtrl.getOrderItems)
router.post(
  '/order',
  orderCtrl.addItemInOrder
)
router.delete(
  '/order/:itemId',
  orderCtrl.deleteItemInOrder
)
module.exports = router