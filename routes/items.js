const router = require('express').Router()
const itemCtrl = require('../controllers/items')
const middleware = require('../middleware')

router.get('/items', itemCtrl.getAllItems)
router.get('/categories', itemCtrl.getDistinctCategories)
router.get('/:categoryName/items', itemCtrl.getItemsByCategory)
router.get('/:categoryName/items/:itemId', itemCtrl.getItemById)
router.post(
  '/items',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.roleCheck(['admin']),
  itemCtrl.createItem
)
router.delete(
  '/items/:itemId',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.roleCheck(['admin']),
  itemCtrl.deleteItem
)
router.put(
  '/items/:itemId',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.roleCheck(['admin']),
  itemCtrl.editItem
)

module.exports = router
