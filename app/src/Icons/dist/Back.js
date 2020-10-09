"use strict";
exports.__esModule = true;
var React = require("react");
var react_native_size_matters_1 = require("react-native-size-matters");
var react_native_svg_1 = require("react-native-svg");
var theme_1 = require("../components/theme");
exports["default"] = (function (_a) {
    var size = _a.size;
    return (React.createElement(react_native_svg_1["default"], { width: react_native_size_matters_1.moderateScale(size), height: react_native_size_matters_1.moderateScale(size), viewBox: "0 0 24 24" },
        React.createElement(react_native_svg_1.Path, { "data-name": "Path 16", d: "M0 0h24v24H0z", fill: "none", strokeWidth: 3 }),
        React.createElement(react_native_svg_1.Path, { "data-name": "Path 17", strokeWidth: 3, d: "M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z", fill: theme_1["default"].colors['primary'] })));
});
