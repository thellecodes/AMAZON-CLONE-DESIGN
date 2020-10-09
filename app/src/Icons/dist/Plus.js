"use strict";
exports.__esModule = true;
var React = require("react");
var react_native_size_matters_1 = require("react-native-size-matters");
var react_native_svg_1 = require("react-native-svg");
var theme_1 = require("../components/theme");
exports["default"] = (function (_a) {
    var size = _a.size;
    return (React.createElement(react_native_svg_1["default"], { width: react_native_size_matters_1.moderateScale(size), height: react_native_size_matters_1.moderateScale(size), viewBox: "0 0 9 15" },
        React.createElement(react_native_svg_1.Text, { "data-name": "+", transform: "translate(0 12)", fill: theme_1["default"].colors['primary'], fontSize: 15, fontFamily: "CircularStd-Bold, Circular Std Bold", fontWeight: 700 },
            React.createElement(react_native_svg_1.TSpan, { x: 0, y: 0 }, '+'))));
});
