"use strict";
exports.__esModule = true;
var types_1 = require("../actions/types");
var initialState = {
    msg: {},
    status: null,
    id: null
};
function default_1(state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case types_1.GET_ERRORS:
            return {
                msg: payload.msg,
                status: payload.status,
                id: payload.id
            };
        case types_1.CLEAR_ERRORS:
            return {
                msg: {},
                status: null,
                id: null
            };
        default:
            return state;
    }
}
exports["default"] = default_1;
