"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var authReducer_1 = require("./authReducer");
var errorReducer_1 = require("./errorReducer");
var productReducer_1 = require("./productReducer");
exports["default"] = redux_1.combineReducers({
    product: productReducer_1["default"],
    auth: authReducer_1["default"],
    err: errorReducer_1["default"]
});
