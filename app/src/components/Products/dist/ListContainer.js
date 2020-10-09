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
var theme_1 = require("../theme");
var images_1 = require("../../images");
var ItemList_1 = require("./ItemList");
var imgStyle = react_native_1.StyleSheet.create({
    img: {
        width: 5,
        height: 5,
        opacity: 0,
        marginTop: 7
    }
});
var ListContainer = function () {
    return (react_1["default"].createElement(theme_1.Box, { flex: 1, padding: "m", style: { marginTop: 20, borderTopLeftRadius: 50 }, backgroundColor: "cgrey", justifyContent: "center" },
        react_1["default"].createElement(theme_1.Box, { flexDirection: "row", alignItems: "center", justifyContent: "center", height: 50 },
            react_1["default"].createElement(theme_1.Box, { flexDirection: "column", alignItems: "center", margin: "s", backgroundColor: "cgrey" },
                react_1["default"].createElement(theme_1.Text, { fontSize: 13, color: "primary", variant: "smtitle" }, "Wood"),
                react_1["default"].createElement(react_native_1.Image, { source: images_1.Dot, style: __assign(__assign({}, imgStyle.img), { opacity: 1 }) })),
            react_1["default"].createElement(theme_1.Box, { flexDirection: "column", alignItems: "center", margin: "s" },
                react_1["default"].createElement(theme_1.Text, { variant: "smtitle" }, "Electronic"),
                react_1["default"].createElement(react_native_1.Image, { source: images_1.Dot, style: __assign({}, imgStyle.img) })),
            react_1["default"].createElement(theme_1.Box, { flexDirection: "column", alignItems: "center", margin: "s" },
                react_1["default"].createElement(theme_1.Text, { variant: "smtitle" }, "Glasses"),
                react_1["default"].createElement(react_native_1.Image, { source: images_1.Dot, style: __assign({}, imgStyle.img) }))),
        react_1["default"].createElement(ItemList_1["default"], null)));
};
exports["default"] = ListContainer;
