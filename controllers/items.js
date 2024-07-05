const { Item } = require('../models/Index')
const middleware = require('../middleware')




const getDistinctCategories = async (req, res) => {
  try {
    const categoryNames = await Item.distinct('category')
    res.send(categoryNames)
  } catch (error) {
    throw error
  }
}

//getAllitems
const getAllItems = async (req, res) => {
  try {
    const items = await Item.find({})
    res.send(items)
  } catch (error) {
    throw error
  }
}

//getCategoryItems
const getItemsByCategory = async (req, res) => {
  try {
    const categoryName = req.params.categoryName
    const items = await Item.find({ category: categoryName })
    res.send(items)
  } catch (error) {
    throw error
  }
}

//getOneItemCategory
const getItemById = async (req, res) => {
  try {
    const itemId = req.params.itemId
    const item = await Item.findById(itemId)
    res.send(item)
  } catch (error) {
    throw error
  }
}

//createItem
const createItem = async (req, res) => {
  try {
    const newItem = new Item(req.body)
    const item = await newItem.save()
    res.send(item)
  } catch (error) {
    throw error
  }
}

//editItem
const editItem = async (req, res) => {
  try {
    const itemId = req.params.itemId
    const updates = req.body
    const updatedItem = await Item.findByIdAndUpdate(itemId, updates)
    res.send(updatedItem)
  } catch (error) {
    throw error
  }
}

//DeleteItem
const deleteItem = async (req, res) => {
  try {
    const itemId = req.params.itemId
    await Item.findByIdAndDelete(itemId)
    res.status(200).send({ message: 'Item deleted successfully.' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getDistinctCategories,
  getAllItems,
  getItemsByCategory,
  getItemById,
  createItem,
  editItem,
  deleteItem
}
