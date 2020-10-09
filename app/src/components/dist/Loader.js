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
var react_native_1 = require("react-native");
var theme_1 = require("./theme");
var native_base_1 = require("native-base");
function Loader() {
    return (react_1["default"].createElement(theme_1.Box, { flex: 1, backgroundColor: "primary", justifyContent: "center", alignItems: "center", style: __assign({}, react_native_1.StyleSheet.absoluteFillObject) },
        react_1["default"].createElement(native_base_1.Spinner, { color: theme_1["default"].colors.white })));
}
exports["default"] = Loader;
