"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_2 = require("react-native");
var Helpers_1 = require("../Helpers");
var ProductHeader_1 = require("./ProductHeader");
var theme_1 = require("../theme");
var Icons_1 = require("../../Icons");
var Button_1 = require("../../Utils/Button");
var react_redux_1 = require("react-redux");
var productActions_1 = require("../../store/actions/productActions");
var height = react_native_1.Dimensions.get('window').height;
function ProductCheckOut(_a) {
    var navigation = _a.navigation;
    var dispatch = react_redux_1.useDispatch();
    var onBack = function () {
        navigation.pop();
    };
    var onContinue = function () {
        dispatch(productActions_1.clearCart()).then(function () {
            navigation.replace('ProductList');
        });
    };
    return (react_1["default"].createElement(theme_1.Box, { flex: 1, backgroundColor: "primary", justifyContent: "flex-start" },
        react_1["default"].createElement(react_native_2.TouchableWithoutFeedback, { onPress: onBack },
            react_1["default"].createElement(theme_1.Box, { flexDirection: "column", alignItems: "center", backgroundColor: "white" },
                react_1["default"].createElement(ProductHeader_1["default"], { back: false }))),
        react_1["default"].createElement(theme_1.Box, { height: height * 0.4, justifyContent: "center", alignItems: "center" },
            react_1["default"].createElement(theme_1.Text, { variant: "title", fontSize: Helpers_1.CUSTOMFONT(42) }, "Thanks")),
        react_1["default"].createElement(theme_1.Box, { flex: 1, backgroundColor: "white", borderTopLeftRadius: "xl", borderTopRightRadius: "xl", justifyContent: "center", alignItems: "center" },
            react_1["default"].createElement(Icons_1.Check, { size: 90 }),
            react_1["default"].createElement(theme_1.Text, { fontSize: Helpers_1.CUSTOMFONT(15), variant: "title", textAlign: "center", color: "primary", marginTop: "m" }, "Thank you for purchasing this produts."),
            react_1["default"].createElement(theme_1.Text, { fontSize: Helpers_1.CUSTOMFONT(12), textAlign: "center", marginTop: "m", color: "primary", variant: "smtitle" }, "Your order will be shipped in 2-4 international days"),
            react_1["default"].createElement(Button_1["default"], { label: "Continue Shopping", variant: "primary", style: { marginTop: 80 }, onPress: onContinue }))));
}
exports["default"] = ProductCheckOut;
