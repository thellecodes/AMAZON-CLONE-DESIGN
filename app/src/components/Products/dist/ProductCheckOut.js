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
var react_native_2 = require("react-native");
var Helpers_1 = require("../Helpers");
var ProductHeader_1 = require("./ProductHeader");
var theme_1 = require("../theme");
var Icons_1 = require("../../Icons");
var Button_1 = require("../../Utils/Button");
var react_native_reanimated_1 = require("react-native-reanimated");
var react_2 = require("react");
var react_native_redash_1 = require("react-native-redash");
var react_native_reanimated_2 = require("react-native-reanimated");
var height = react_native_1.Dimensions.get('window').height;
function ProductCheckOut(_a) {
    var navigation = _a.navigation;
    var onBack = function () {
        navigation.pop();
    };
    var onContinue = function () {
        navigation.replace('ProductList');
    };
    var _b = react_1.useState(true), paid = _b[0], setPaid = _b[1];
    var thanksValue = react_native_reanimated_1.useValue(0);
    var thanksAnime = react_native_redash_1.withSpringTransition(thanksValue, __assign(__assign({}, react_native_reanimated_1.SpringUtils.makeDefaultConfig()), { overshootClamping: true, damping: new react_native_reanimated_1.Value(10) }));
    react_2.useEffect(function () {
        thanksValue.setValue(1);
        return function () {
            thanksValue.setValue(0);
        };
    }, []);
    return (react_1["default"].createElement(theme_1.Box, { flex: 1, backgroundColor: "primary", justifyContent: "flex-start" },
        react_1["default"].createElement(react_native_2.TouchableWithoutFeedback, { onPress: onBack },
            react_1["default"].createElement(theme_1.Box, { flexDirection: "column", alignItems: "center", backgroundColor: "white" },
                react_1["default"].createElement(ProductHeader_1["default"], { back: false }))),
        react_1["default"].createElement(theme_1.Box, { height: height * 0.4, justifyContent: "center", alignItems: "center" },
            react_1["default"].createElement(react_native_reanimated_2["default"].Text, { style: __assign(__assign({}, theme_1["default"].textVariants.title), { fontSize: Helpers_1.CUSTOMFONT(42), transform: [{ scale: 0, rotate: -45 }] }) }, "Thanks")),
        react_1["default"].createElement(theme_1.Box, { flex: 1, backgroundColor: "white", borderTopLeftRadius: "xl", borderTopRightRadius: "xl", justifyContent: "center", alignItems: "center" },
            react_1["default"].createElement(Icons_1.Check, { size: 90 }),
            react_1["default"].createElement(theme_1.Text, { fontSize: Helpers_1.CUSTOMFONT(15), textAlign: "center", marginTop: "m" }, "Thanks you for purcahsing."),
            react_1["default"].createElement(theme_1.Text, { fontSize: Helpers_1.CUSTOMFONT(12), textAlign: "center", marginTop: "m" }, "Your order will be shipped in 2-4 international days"),
            react_1["default"].createElement(Button_1["default"], { label: "Continue Shopping", variant: "primary", style: { marginTop: 80 }, onPress: onContinue }))));
}
exports["default"] = ProductCheckOut;
