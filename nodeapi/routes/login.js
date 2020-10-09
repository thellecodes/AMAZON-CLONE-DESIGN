const express = require("express");
const User = require("../schema/User");
const bcryptjs = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");

router.post("/", (req, res) => {
  const { email, password } = req.body;

  //* Login simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Enter all fields" });
  }

  //* Validate if user exists
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: `User does not exists` });

    //* Validate the password
    bcryptjs.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

      jwt.sign(
        { id: user._id },
        config.get("amazonsecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
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

router.get("/user", auth, (req, res) => {
  User.findById(req.amazonUser.id)
    .select("-password")
    .then((user) => res.status(200).json(user));
});

module.exports = router;
