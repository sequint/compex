const router = require('express').Router();
const { Item } = require('../models');

// Create a new item
router.post('items', async function (req, res) {
  const item = await Item.create({ ...req.body });
  res.json(item);
});

// Get all items
router.get('items', async function (req, res) {
  const allItems = await Item.find({});
  res.json(allItems);
});
