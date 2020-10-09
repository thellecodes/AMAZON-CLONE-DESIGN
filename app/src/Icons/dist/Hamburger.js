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
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var react_native_size_matters_1 = require("react-native-size-matters");
var react_native_svg_1 = require("react-native-svg");
var theme_1 = require("../components/theme");
exports["default"] = (function (_a) {
    var size = _a.size, onPress = _a.onPress;
    return (React.createElement(react_native_gesture_handler_1.BorderlessButton, __assign({}, { onPress: onPress }),
        React.createElement(react_native_svg_1["default"], { width: react_native_size_matters_1.moderateScale(size), height: react_native_size_matters_1.moderateScale(size), viewBox: "0 0 19 9.401" },
            React.createElement(react_native_svg_1.G, { "data-name": "Group 18", fill: "none", stroke: "#131a22", strokeLinecap: "round", strokeWidth: 3 },
                React.createElement(react_native_svg_1.Path, { "data-name": "Path 1", fill: theme_1["default"].colors['primary'], stroke: theme_1["default"].colors['primary'], strokeWidth: 3, d: "M1 1h17" }),
                React.createElement(react_native_svg_1.Path, { "data-name": "Path 2", strokeWidth: 3, fill: theme_1["default"].colors['primary'], stroke: theme_1["default"].colors['primary'], d: "M1 8.401h10" })))));
});
