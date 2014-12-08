'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ShellSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  address : String
});

module.exports = mongoose.model('Shell', ShellSchema);
