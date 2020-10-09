"use strict";
exports.__esModule = true;
exports.clearErrors = exports.returnErrors = void 0;
var types_1 = require("./types");
// RETURN ERRORS
exports.returnErrors = function (msg, status, id) {
    return {
        type: types_1.GET_ERRORS,
        payload: { msg: msg, status: status, id: id }
    };
};
// CLEAR ERRORS
exports.clearErrors = function () {
    return {
        type: types_1.CLEAR_ERRORS
    };
};
