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
var react_2 = require("react");
var react_native_1 = require("react-native");
var images_1 = require("../../images");
var theme_1 = require("../theme");
var ProductHeader_1 = require("./ProductHeader");
var height = react_native_1.Dimensions.get('window').height;
var Button_1 = require("../../Utils/Button");
var react_native_size_matters_1 = require("react-native-size-matters");
var Icons_1 = require("../../Icons");
var react_native_2 = require("react-native");
var native_1 = require("@react-navigation/native");
var cartItems = [
    { name: 'Sofa', src: images_1.Sofa, price: '₦140' },
    { name: 'Chair', src: images_1.WhiteChair, price: '₦140' },
    { name: 'Table', src: images_1.Table, price: '₦140' },
    { name: 'Wall Shelf', src: images_1.Shelve, price: '₦140' },
];
var CartItem = function (_a) {
    var name = _a.name, src = _a.src, price = _a.price;
    var navigate = native_1.useNavigation().navigate;
    var onPress = function () {
        navigate('ProductDetails');
    };
    return (react_1["default"].createElement(react_native_2.TouchableWithoutFeedback, __assign({}, { onPress: onPress }),
        react_1["default"].createElement(theme_1.Box, { alignItems: "center", height: 116, marginBottom: "m", borderRadius: 's', borderWidth: react_native_1.StyleSheet.hairlineWidth, flexDirection: "row", padding: "s" },
            react_1["default"].createElement(theme_1.Box, { height: react_native_size_matters_1.moderateScale(84), width: react_native_size_matters_1.moderateScale(84), overflow: "hidden", justifyContent: "center", padding: "m", alignItems: "center" },
                react_1["default"].createElement(react_native_1.Image, { source: src, resizeMode: "contain", style: { flex: 1, width: 80 } })),
            react_1["default"].createElement(theme_1.Box, { height: react_native_size_matters_1.moderateScale(84), width: react_native_size_matters_1.moderateScale(84), marginLeft: "m" },
                react_1["default"].createElement(theme_1.Text, { variant: "title", fontSize: 15, color: "primary" }, name),
                react_1["default"].createElement(theme_1.Text, { variant: "smtitle", marginTop: "s", color: "primary" }, price),
                react_1["default"].createElement(theme_1.Box, { width: 70, height: 30, marginTop: "m", borderRadius: "s", borderWidth: react_native_1.StyleSheet.hairlineWidth, flexDirection: "row", alignItems: "center", padding: "s", justifyContent: "space-between" },
                    react_1["default"].createElement(Icons_1.Plus, { size: react_native_size_matters_1.moderateScale(15) }),
                    react_1["default"].createElement(theme_1.Text, { variant: "title", color: "primary", fontSize: 9 }, "1"),
                    react_1["default"].createElement(Icons_1.Minus, { size: react_native_size_matters_1.moderateScale(8) }))))));
};
function ProductCart(_a) {
    var navigation = _a.navigation;
    var onCheckOut = function () {
        navigation.replace('ProductCheckOut');
    };
    return (react_1["default"].createElement(theme_1.Box, { flex: 1, backgroundColor: "white" },
        react_1["default"].createElement(theme_1.Box, { height: height * 0.82, paddingHorizontal: "l" },
            react_1["default"].createElement(ProductHeader_1["default"], { back: true }),
            react_1["default"].createElement(theme_1.Box, { marginTop: "m", flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
                react_1["default"].createElement(theme_1.Text, { variant: "title", color: "primary", fontSize: 23 }, "Amazon Cart"),
                react_1["default"].createElement(theme_1.Text, { variant: "title", color: "primary", fontSize: 23 }, "Total \u20A6140")),
            react_1["default"].createElement(theme_1.Box, { marginTop: "m", padding: "m" },
                react_1["default"].createElement(react_native_1.FlatList, { contentContainerStyle: {
                        justifyContent: 'center',
                        flexDirection: 'column'
                    }, showsVerticalScrollIndicator: false, data: cartItems, numColumns: 1, renderItem: function (_a) {
                        var _b = _a.item, name = _b.name, src = _b.src, price = _b.price;
                        return (react_1["default"].createElement(react_2.Fragment, null,
                            react_1["default"].createElement(CartItem, __assign({}, { name: name, src: src, price: price }))));
                    }, keyExtractor: function (_a) {
                        var name = _a.name;
                        return name;
                    } }))),
        react_1["default"].createElement(react_native_2.TouchableWithoutFeedback, { onPress: onCheckOut },
            react_1["default"].createElement(theme_1.Box, { flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center" },
                react_1["default"].createElement(Button_1["default"], { label: "Check Out", variant: "primary" })))));
}
exports["default"] = ProductCart;
