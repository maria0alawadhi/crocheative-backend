const { Item, Review } = require('../models/Index')

const index = async (req, res) => {
  try {
    const reviews = await Review.find({})
    res.send(reviews)
  } catch (error) {
    throw error
  }
}

const create = async (req, res) => {
  try {
    const review = await Review.create(req.body)
    // adding the review to the Item
    const item = await Item.findById(req.params.item_id)
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
      req.params.review_id,
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
    await Review.deleteOne({ _id: req.params.review_id })
    //delete the reference
    await Item.findByIdAndUpdate(req.params.item_id, {
      $pull: { reviews: req.params.review_id }
    })
    res.send({
      msg: 'Review Deleted',
      payload: req.params.review_id,
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
