const router = require('express').Router()
const itemCtrl = require('../controllers/items')
const middleware = require('../middleware')

// router.get(
//   '/admin',
//   middleware.stripToken,
//   middleware.verifyToken,
//   roleCheck(['admin']),
//   controller.getItems

// )

router.get('/', itemCtrl.getAllItems)
router.get('/:categoryName/items', itemCtrl.getItemsByCategory)
router.post('/:categoryName/items', itemCtrl.createItem)
router.delete('/:categoryName/items/:itemId', itemCtrl.deleteItem)
router.put('/:categoryName/items/:itemId', itemCtrl.editItem)

module.exports = router
