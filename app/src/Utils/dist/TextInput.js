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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var theme_1 = require("../components/theme");
/* Icons */
var Search_1 = require("../Icons/Search");
var Microphone_1 = require("../Icons/Microphone");
var width = react_native_1.Dimensions.get('window').width;
var TextInput = react_1.forwardRef(function (_a, ref) {
    var props = __rest(_a, []);
    return (react_1["default"].createElement(theme_1.Box, { flexDirection: "row", height: 54, borderRadius: "s", borderColor: "grey", borderWidth: react_native_1.StyleSheet.hairlineWidth, alignItems: "center", style: {
            width: width * 0.85,
            paddingHorizontal: 4,
            borderRadius: 16
        } },
        react_1["default"].createElement(theme_1.Box, { padding: "s" },
            react_1["default"].createElement(Search_1["default"], { size: 20 })),
        react_1["default"].createElement(react_native_1.TextInput, __assign({ underlineColorAndroid: "transparent", placeholderTextColor: theme_1["default"].colors['grey'] }, props, { ref: ref }, { style: {
                flex: 1,
                fontFamily: 'CircularStdMedium',
                color: theme_1["default"].colors['grey'],
                fontSize: 13
            } })),
        react_1["default"].createElement(theme_1.Box, { padding: "s", backgroundColor: "orange", borderRadius: "m" },
            react_1["default"].createElement(Microphone_1["default"], { size: 20 }))));
});
exports["default"] = TextInput;
