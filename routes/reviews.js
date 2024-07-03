const router = require('express').Router()
const ReviewCtrl = require('../controllers/reviews')
const middleware = require('../middleware')

//show all reviews
router.get(
  '/items/:itemId/reviews',
  middleware.stripToken,
  middleware.verifyToken,
  ReviewCtrl.index
)
//create new review
router.post(
  '/items/:itemId/reviews',
  middleware.stripToken,
  middleware.verifyToken,
  ReviewCtrl.create
)
// update a review
router.put(
  '/items/:itemId/reviews/:reviewId',
  middleware.stripToken,
  middleware.verifyToken,
  ReviewCtrl.update
)
//delete a review
router.delete(
  '/items/:itemId/reviews/:reviewId',
  middleware.stripToken,
  middleware.verifyToken,
  ReviewCtrl.delete
)

module.exports = router
