"use strict";

var express = require("express");

var User = require("../schema/User");

var bcryptjs = require("bcryptjs");

var router = express.Router();

var jwt = require("jsonwebtoken");

var config = require("config"); //* Post Request *//


router.post("/", function (req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      email = _req$body.email,
      password = _req$body.password; //* Small validation

  if (!name || !email || !password) {
    return res.status(400).json({
      msg: "Please enter all fields"
    });
  } //* Check if this user exists in the database


  User.findOne({
    email: email
  }).then(function (user) {
    if (user) return res.status(400).json({
      msg: "User Exists"
    });
    var newUser = new User({
      email: email,
      password: password,
      name: name
    }); //* Create a hashed password *//

    bcryptjs.genSalt(10, function (err, salt) {
      bcryptjs.hash(newUser.password, salt, function (err, hash) {
        if (err) return res.status(400).json({
          msg: "Error hasing a password"
        });
        newUser.password = hash;
        newUser.save().then(function (user) {
          jwt.sign({
            id: user._id
          }, config.get("amazonsecret"), {
            expiresIn: 3600
          }, function (err, token) {
            if (err) throw err;
            console.log(user);
            return res.status(200).json({
              token: token,
              user: {
                id: user._id,
                name: user.name,
                email: user.email
              }
            });
          });
        });
      });
    });
  });
});
module.exports = router;