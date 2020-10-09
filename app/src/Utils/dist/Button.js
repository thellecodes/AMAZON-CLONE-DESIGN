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
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var theme_1 = require("../components/theme");
var styles = react_native_1.StyleSheet.create({
    container: {
        borderRadius: 50,
        height: 50,
        width: 245,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    }
});
var Button = function (_a) {
    var variant = _a.variant, label = _a.label, onPress = _a.onPress, textTransform = _a.textTransform, style = _a.style;
    var backgroundColor = variant === 'primary' ? theme_1["default"].colors['primary'] : theme_1["default"].colors.grey;
    var color = variant === 'primary' ? theme_1["default"].colors.white : theme_1["default"].colors.orange;
    return (react_1["default"].createElement(react_native_gesture_handler_1.RectButton, __assign({}, { onPress: onPress }, { style: __assign(__assign(__assign({}, styles.container), { backgroundColor: backgroundColor }), style) }),
        react_1["default"].createElement(theme_1.Text, { style: {
                color: color,
                fontFamily: 'Rubik-Bold'
            }, textTransform: textTransform ? textTransform : 'capitalize', variant: "button" }, label)));
};
Button.defaultProps = { variant: 'default' };
exports["default"] = Button;
