"use strict";

var express = require("express");

var mongoose = require("mongoose");

var config = require("config");

var morgan = require("morgan");

var dotenv = require("dotenv");

var app = express(); //* BorderParser Middleware

app.use(express.json()); //* Load Env

dotenv.config({
  path: "./config.env"
}); //* Connect DB

var db = config.get("mongoURI");
mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(function () {
  return console.log("Mongodb is connected...");
})["catch"](function (err) {
  return console.log(err);
}); //* Log route actions

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} //* Use Routes
//* Auth Routes *//


app.use("/api/users", require("./routes/users"));
app.use("/api/login", require("./routes/login"));
app.use("/api/login", require("./routes/login")); //* Product Routes *//

app.use("/api/product", require("./routes/product"));
var port = process.env.PORT || 5000;
app.listen(port, function () {
  return console.log("Server started on port ".concat(port));
});