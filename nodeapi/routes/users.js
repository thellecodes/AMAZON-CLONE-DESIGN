const express = require("express");
const User = require("../schema/User");
const bcryptjs = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");

//* Post Request *//
router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  //* Small validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  //* Check if this user exists in the database
  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: "User Exists" });

    const newUser = new User({
      email,
      password,
      name,
    });

    //* Create a hashed password *//
    bcryptjs.genSalt(10, (err, salt) => {
      bcryptjs.hash(newUser.password, salt, (err, hash) => {
        if (err)
          return res.status(400).json({ msg: "Error hasing a password" });

        newUser.password = hash;
        newUser.save().then((user) => {
          jwt.sign(
            { id: user._id },
            config.get("amazonsecret"),
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              console.log(user);
              return res.status(200).json({
                token,
                user: {
                  id: user._id,
                  name: user.name,
                  email: user.email,
                },
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router;
