const router = require('express').Router()
const ReviewCtrl = require('../controllers/review')
const middleware = require('../middleware')

//show all reviews
router.get(
  '/items/:item_id/reviews',
  middleware.stripToken,
  middleware.verifyToken,
  ReviewCtrl.index
)
//create new review
router.post(
  '/items/:item_id/reviews',
  middleware.stripToken,
  middleware.verifyToken,
  ReviewCtrl.create
)
// update a review
router.put(
  '/items/:item_id/reviews/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  ReviewCtrl.update
)
//delete a review
router.delete(
  '/items/:item_id/reviews/:review_id',
  middleware.stripToken,
  middleware.verifyToken,
  ReviewCtrl.delete
)

module.exports = router
