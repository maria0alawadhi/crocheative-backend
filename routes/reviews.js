const router = require('express').Router()
const ReviewCtrl = require('../controllers/reviews')
const middleware = require('../middleware')

//show all reviews
router.get(
  '/:itemId/reviews',
  // middleware.stripToken,
  // middleware.verifyToken,
  ReviewCtrl.index
)
//create new review
router.post(
  '/:itemId/reviews',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.roleCheck(['client']),
  ReviewCtrl.create
)
// update a review
router.put(
  '/:itemId/reviews/:reviewId',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.roleCheck(['client']),
  ReviewCtrl.update
)
//delete a review
router.delete(
  '/:itemId/reviews/:reviewId',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.roleCheck(['client']),
  ReviewCtrl.delete
)

module.exports = router
