"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var types_1 = require("../actions/types");
var intialState = {
    sending: false,
    loading: true,
    products: [],
    product: null,
    cartProducts: []
};
exports["default"] = (function (state, _a) {
    if (state === void 0) { state = intialState; }
    var payload = _a.payload, type = _a.type;
    switch (type) {
        case types_1.SENDING_PRODUCT:
            return __assign(__assign({}, state), { sending: true });
        case types_1.LOADING_PRODUCTS:
            return __assign(__assign({}, state), { loading: false });
        case types_1.SENT_PRODUCT:
            return __assign(__assign({}, state), { sending: false, products: __spreadArrays([payload], state.products), payload: payload });
        case types_1.LOADED_PRODUCTS:
            return __assign(__assign({}, state), { products: payload, loading: false });
        case types_1.DELETE_PRODUCT:
            return __assign(__assign({}, state), { products: state.products.filter(function (p) { return p._id !== payload; }) });
        case types_1.ADD_TO_CART:
            var updatedCart = state.cartProducts.filter(function (p) { return p._id !== payload._id; });
            var updatedProducts = state.cartProducts.filter(function (p) { return p._id !== payload._id; });
            return __assign(__assign({}, state), { cartProducts: __spreadArrays([payload], updatedCart), products: __spreadArrays([payload], updatedProducts) });
        case types_1.CHECK_OUT:
            return __assign(__assign({}, state), { cartProducts: [], products: payload });
        default:
            return state;
    }
});
