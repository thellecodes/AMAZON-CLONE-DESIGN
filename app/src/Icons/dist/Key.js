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
var React = require("react");
var react_native_1 = require("react-native");
var react_native_size_matters_1 = require("react-native-size-matters");
var react_native_svg_1 = require("react-native-svg");
var theme_1 = require("../components/theme");
exports["default"] = (function (_a) {
    var size = _a.size, onPress = _a.onPress, cart = _a.cart;
    return (React.createElement(react_native_1.TouchableWithoutFeedback, __assign({}, { onPress: onPress }),
        React.createElement(react_native_svg_1["default"], { width: react_native_size_matters_1.moderateScale(size), height: react_native_size_matters_1.moderateScale(size), viewBox: "0 0 20 20" },
            React.createElement(react_native_svg_1.Path, { d: "M0 0h20v20H0z", fill: "none", strokeWidth: 3 }),
            React.createElement(react_native_svg_1.Path, { strokeWidth: 3, d: "M6.111 6.667V5.048A3.971 3.971 0 0110 1a3.971 3.971 0 013.889 4.048v1.619h2.333a.794.794 0 01.778.81v9.713a.794.794 0 01-.778.81H3.778A.794.794 0 013 17.19V7.476a.794.794 0 01.778-.81zm0 1.619H4.556v8.1h10.888v-8.1h-1.555V9.9h-1.556V8.286H7.667V9.9H6.111zm1.556-1.619h4.667V5.048a2.335 2.335 0 10-4.667 0z", fill: theme_1["default"].colors['primary'] }))));
});
