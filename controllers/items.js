const { Item } = require('../models/Index')
const middleware = require('../middleware')

//getAllitems
const getAllItems = async (req, res) => {
  try {
    const items = await Item.find({})
    res.send(items)
  } catch (error) {
    console.log(error)
    res.status(500).send('Error fetching items')
  }
}

//getCategoryItems
const getItemsByCategory = async (req, res) => {
  try {
    const categoryName = req.params.categoryName
    const items = await Item.find({ category: categoryName })
    res.send(items)
  } catch (err) {
    console.log(error)
    res.status(500).send('Error fetching items Category')
  }
}

//getOneItemCategory
const getItemById = async (req, res) => {
  try {
    const itemId = req.params.itemId
    const item = await Item.findById(itemId)
    if (!item) {
      return res.status(404).json({ message: 'Item not found.' })
    }
    res.send(item)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error. Please try again later.' })
  }
}

//createItem
const createItem = async (req, res) => {
  try {
    const newItem = new Item(req.body)
    const item = await newItem.save()
    res.send(item)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error. Please try again later.' })
  }
}

//editItem
const editItem = async (req, res) => {
  try {
    const itemId = req.params.itemId
    const updates = req.body
    const updatedItem = await Item.findByIdAndUpdate(itemId, updates)
    res.send(updatedItem)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error. Please try again later.' })
  }
}

//DeleteItem
const deleteItem = async (req, res) => {
  try {
    const itemId = req.params.itemId
    const deletedItem = await Item.findByIdAndDelete(itemId)
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found.' })
    }
    res.status(200).send({ message: 'Item deleted successfully.' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error. Please try again later.' })
  }
}

module.exports = {
  getAllItems,
  getItemsByCategory,
  getItemById,
  createItem,
  editItem,
  deleteItem
}
