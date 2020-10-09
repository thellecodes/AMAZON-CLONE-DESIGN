"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var ProductSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  cart: {
    type: Boolean,
    required: true
  },
  date: {
    type: String,
    "default": Date.now
  }
});
module.exports = Product = mongoose.model("product", ProductSchema);