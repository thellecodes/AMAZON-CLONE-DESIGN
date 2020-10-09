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
exports.__esModule = true;
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var react_native_1 = require("react-native");
var Icons_1 = require("../../Icons");
var theme_1 = require("../theme");
var react_redux_1 = require("react-redux");
var authActions_1 = require("../../store/actions/authActions");
var sWidth = react_native_1.Dimensions.get('window').width;
function ProductHeader(_a) {
    var back = _a.back;
    var dispatch = react_redux_1.useDispatch();
    var width = sWidth * 0.9;
    var navigate = native_1.useNavigation().navigate;
    var gotoCart = function () {
        navigate('ProductCart');
    };
    var onLogOut = function () {
        dispatch(authActions_1.logout());
        navigate('Auth');
    };
    return (react_1["default"].createElement(theme_1.Box, __assign({ flexDirection: "row", justifyContent: "space-between" }, { width: width }, { alignItems: "center" }),
        back ? react_1["default"].createElement(Icons_1.Back, { size: 25 }) : react_1["default"].createElement(Icons_1.Hamburger, { size: 20, onPress: onLogOut }),
        react_1["default"].createElement(Icons_1.AmazonLogo, { size: 70 }),
        react_1["default"].createElement(Icons_1.Key, { size: 20, onPress: gotoCart })));
}
exports["default"] = ProductHeader;
