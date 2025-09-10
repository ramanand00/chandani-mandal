const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  sn: String,
  name: String,
  dateIn: String,
  dateOut: String,
  customer: String,
  number: String,
  address: String,
  purpose: String,
  noOfDays: Number,
  transport: String,
  remarks: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FormData', formDataSchema);
