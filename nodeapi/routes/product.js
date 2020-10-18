const express = require("express");
const User = require("../schema/User");
const bcryptjs = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");
const Product = require("../schema/Product");

//* Add a product *//
router.post("/", (req, res) => {
  const { title, price, imageUrl, desc, user } = req.body;

  // Product Validation
  if (!title || !price || !imageUrl || !desc) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  if (!user) return res.status(403).json({ msg: "Request is forbidden" });

  const { email, name: added_by } = user;

  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User not found" });

    const newProduct = new Product({
      title,
      price,
      imageUrl: imageUrl.toLowerCase(),
      desc,
      added_by,
      cart: false,
    });

    newProduct.save().then((product) => {
      return res.status(200).json({ ...product, sent: true });
    });
  });
});

router.get("/", (req, res) => {
  Product.find({}, (err, products) => {
    if (products.length > 0) {
      return res.status(200).json(products);
    }

    return res.status(400).json({
      msg: "No product found",
    });
  });
});

router.delete("/", (req, res) => {
  const { _id } = req.body;
  console.log(_id);

  Product.findById(_id)
    .then((product) => {
      product.remove().then(() => res.json({ success: true, _id }));
    })
    .catch((err) => res.status(400).json({ success: false }));
});

router.put("/", (req, res) => {
  const { _id } = req.body;

  Product.findOneAndUpdate({ _id }, { $set: { cart: true } }, (err, doc) => {
    if (err) return res.status(400).json({ msg: JSON.stringify(err) });
    return res.status(200).json(doc);
  });
});

router.put("/clear", (req, res) => {
  Product.updateMany(
    {},
    { cart: false },
    { multi: true, upsert: true },
    (err, products) => {
      
    }
  );
});

module.exports = router;
