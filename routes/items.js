const router = require('express').Router()
const itemCtrl = require('../controllers/items')
const middleware = require('../middleware')

router.get('/', itemCtrl.getAllItems)
router.get('/:categoryName/items', itemCtrl.getItemsByCategory)
router.post(
  '/:categoryName/items',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.roleCheck(['admin']),
  itemCtrl.createItem
)
router.delete(
  '/:categoryName/items/:itemId',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.roleCheck(['admin']),
  itemCtrl.deleteItem
)
router.put(
  '/:categoryName/items/:itemId',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.roleCheck(['admin']),
  itemCtrl.editItem
)

module.exports = router
