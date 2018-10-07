'use strict'

const mongoose = require('mongoose');

const modelSchema = mongoose.Schema({
  createdAt    : { type: String, default: new Date() },
  updatedAt    : { type: String, default: new Date() },
	name         : String,
	description  : String  
});


module.exports = mongoose.model('Subscription', modelSchema);