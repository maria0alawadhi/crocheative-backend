const { Review, Item } = require('../models/Index')

const index = async (req, res) => {
  try {
    const reviews = await Review.find({}).populate('user')
    res.send(reviews)
  } catch (error) {
    throw error
  }
}

const create = async (req, res) => {
  try {
    const review = await Review.create(req.body)
    const item = await Item.findById(req.params.itemId)
    item.reviews.push(review._id)
    await item.save()
    res.send(review)
  } catch (error) {
    throw error
  }
}

const updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.reviewId,
      req.body,
      {
        new: true
      }
    )
    res.send(review)
  } catch (error) {
    throw error
  }
}

const deleteReview = async (req, res) => {
  try {
    await Review.deleteOne({ _id: req.params.reviewId })
    await Item.findByIdAndUpdate(req.params.itemId, {
      $pull: { reviews: req.params.reviewId }
    })
    res.send({
      msg: 'Review Deleted',
      payload: req.params.reviewId,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  index,
  create,
  update: updateReview,
  delete: deleteReview
}
