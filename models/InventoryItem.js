const { model, Schema } = require('mongoose');

const InventoryItem = new Schema({
  quantityInPounds: Number,
  daysStored: Number,
  itemRef: {
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }
});

module.exports = model('InventoryItem', InventoryItem);
