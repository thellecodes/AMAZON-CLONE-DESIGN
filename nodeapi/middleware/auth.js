const config = require("config");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("x-amazon-token");

  //* Check if there is a token
  if (!token) {
    return res.status(401).json({ msg: "No token found" });
  }

  try {
    //* Verfy the token
    const decoded = jwt.verify(token, config.get("amazonsecret"));

    //* Store the Amazon user
    req.amazonUser = decoded;
    next();
  } catch (err) {
    res.status(400).json({ msg: "Token is invalid" });
  }
}

module.exports = auth;
