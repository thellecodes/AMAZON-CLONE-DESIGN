"use strict";
exports.__esModule = true;
var React = require("react");
var react_native_size_matters_1 = require("react-native-size-matters");
var react_native_svg_1 = require("react-native-svg");
var theme_1 = require("../components/theme");
exports["default"] = (function (_a) {
    var size = _a.size;
    return (React.createElement(react_native_svg_1["default"], { width: react_native_size_matters_1.moderateScale(size), height: react_native_size_matters_1.moderateScale(size), viewBox: "0 0 10 2" },
        React.createElement(react_native_svg_1.Path, { "data-name": "Path 18", d: "M0 1h10", fill: "none", stroke: theme_1["default"].colors['black'], strokeWidth: 2 })));
});
