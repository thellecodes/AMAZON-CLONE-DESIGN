"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require("express");

var User = require("../schema/User");

var bcryptjs = require("bcryptjs");

var router = express.Router();

var jwt = require("jsonwebtoken");

var config = require("config");

var Product = require("../schema/Product"); //* Add a product *//


router.post("/", function (req, res) {
  var _req$body = req.body,
      title = _req$body.title,
      price = _req$body.price,
      imageUrl = _req$body.imageUrl,
      desc = _req$body.desc,
      user = _req$body.user; // Product Validation

  if (!title || !price || !imageUrl || !desc) {
    return res.status(400).json({
      msg: "Please enter all fields"
    });
  }

  if (!user) return res.status(403).json({
    msg: "Request is forbidden"
  });
  var email = user.email,
      added_by = user.name;
  User.findOne({
    email: email
  }).then(function (user) {
    if (!user) return res.status(400).json({
      msg: "User not found"
    });
    var newProduct = new Product({
      title: title,
      price: price,
      imageUrl: imageUrl.toLowerCase(),
      desc: desc,
      added_by: added_by,
      cart: false
    });
    newProduct.save().then(function (product) {
      return res.status(200).json(_objectSpread({}, product, {
        sent: true
      }));
    });
  });
});
router.get("/", function (req, res) {
  Product.find({}, function (err, products) {
    if (products.length > 0) {
      return res.status(200).json(products);
    }

    return res.status(400).json({
      msg: "No product found"
    });
  });
});
router["delete"]("/", function (req, res) {
  var _id = req.body._id;
  console.log(_id);
  Product.findById(_id).then(function (product) {
    product.remove().then(function () {
      return res.json({
        success: true,
        _id: _id
      });
    });
  })["catch"](function (err) {
    return res.status(400).json({
      success: false
    });
  });
});
router.put("/", function (req, res) {
  var _id = req.body._id;
  Product.findOneAndUpdate({
    _id: _id
  }, {
    $set: {
      cart: true
    }
  }, function (err, doc) {
    if (err) return res.status(400).json({
      msg: JSON.stringify(err)
    });
    return res.status(200).json(doc);
  });
});
router.put("/clear", function (req, res) {
  Product.updateMany({}, {
    cart: false
  }, {
    multi: true,
    upsert: true
  }, function (err, products) {});
});
module.exports = router;