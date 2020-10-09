"use strict";

var express = require("express");

var User = require("../schema/User");

var bcryptjs = require("bcryptjs");

var router = express.Router();

var jwt = require("jsonwebtoken");

var config = require("config");

var auth = require("../middleware/auth");

router.post("/", function (req, res) {
  var _req$body = req.body,
      email = _req$body.email,
      password = _req$body.password; //* Login simple validation

  if (!email || !password) {
    return res.status(400).json({
      msg: "Enter all fields"
    });
  } //* Validate if user exists


  User.findOne({
    email: email
  }).then(function (user) {
    if (!user) return res.status(400).json({
      msg: "User does not exists"
    }); //* Validate the password

    bcryptjs.compare(password, user.password).then(function (isMatch) {
      if (!isMatch) return res.status(400).json({
        msg: "Invalid credentials"
      });
      jwt.sign({
        id: user._id
      }, config.get("amazonsecret"), {
        expiresIn: 3600
      }, function (err, token) {
        if (err) throw err;
        res.status(200).json({
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
router.get("/user", auth, function (req, res) {
  User.findById(req.amazonUser.id).select("-password").then(function (user) {
    return res.status(200).json(user);
  });
});
module.exports = router;