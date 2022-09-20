const { model, Schema } = require('mongoose');

const Item = new Schema({
  name: String,
  icon: String,
  value: Number,
  valChange: Number,
  upArrowClass: String,
  downArrowClass: String,
  changeColorClass: String,
  type: String,
  tradeVolumeRank: Number
});

module.exports = model('Item', Item);
