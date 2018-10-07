'use strict'

const mongoose = require('mongoose');

const modelSchema = mongoose.Schema({
  createdAt    : { type: String, default: new Date() },
  updatedAt    : { type: String, default: new Date() },
  name         : { type: String, required: true },
  description  : String  
});


module.exports = mongoose.model('Subscription', modelSchema);