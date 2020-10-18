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
var react_native_2 = require("react-native");
var native_1 = require("@react-navigation/native");
var react_redux_1 = require("react-redux");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var productActions_1 = require("../../store/actions/productActions");
var cartItems = [
    { name: 'Sofa', src: images_1.Sofa, price: '₦140' },
    { name: 'Chair', src: images_1.WhiteChair, price: '₦140' },
    { name: 'Table', src: images_1.Table, price: '₦140' },
    { name: 'Wall Shelf', src: images_1.Shelve, price: '₦140' },
];
var CartItem = function (_a) {
    var title = _a.title, imageUrl = _a.imageUrl, price = _a.price, _id = _a._id;
    var navigate = native_1.useNavigation().navigate;
    var onPress = function () {
        navigate('ProductDetails', {
            _id: _id
        });
    };
    return (react_1["default"].createElement(react_native_2.TouchableWithoutFeedback, __assign({}, { onPress: onPress }),
        react_1["default"].createElement(theme_1.Box, { alignItems: "center", height: 116, marginBottom: "m", borderRadius: "s", borderWidth: react_native_1.StyleSheet.hairlineWidth, flexDirection: "row", padding: "s" },
            react_1["default"].createElement(theme_1.Box, { height: react_native_size_matters_1.moderateScale(84), width: react_native_size_matters_1.moderateScale(84), overflow: "hidden", justifyContent: "center", alignItems: "center", padding: "m" },
                react_1["default"].createElement(react_native_1.Image, { source: { uri: "" + imageUrl }, style: __assign({}, react_native_1.StyleSheet.absoluteFillObject) })),
            react_1["default"].createElement(theme_1.Box, { width: react_native_size_matters_1.moderateScale(84), marginLeft: "m" },
                react_1["default"].createElement(theme_1.Text, { variant: "title", fontSize: 15, color: "primary" }, title),
                react_1["default"].createElement(theme_1.Text, { variant: "smtitle", marginTop: "s", color: "primary" },
                    "\u20A6",
                    price)))));
};
function ProductCart(_a) {
    var navigation = _a.navigation;
    var dispatch = react_redux_1.useDispatch();
    var _b = react_redux_1.useSelector(function (state) { return state.product; }), cartProducts = _b.cartProducts, products = _b.products;
    var onCheckOut = function () {
        dispatch(productActions_1.productCheckOut());
        navigation.replace('ProductCheckOut');
    };
    var allCartProducts = cartProducts.filter(function (p) { return p.cart === true; });
    var prices = allCartProducts.map(function (p) { return parseInt(p.price); });
    var totalPrice = prices.reduce(function (prev, cur) { return (prev += cur); }, 0);
    return (react_1["default"].createElement(theme_1.Box, { flex: 1, backgroundColor: "white" },
        react_1["default"].createElement(theme_1.Box, { height: height * 0.82, paddingHorizontal: "l" },
            react_1["default"].createElement(ProductHeader_1["default"], { back: true }),
            allCartProducts.length > 0 ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(theme_1.Box, { marginTop: "m", flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
                    react_1["default"].createElement(theme_1.Text, { variant: "title", color: "primary", fontSize: 23 }, "Amazon Cart"),
                    react_1["default"].createElement(theme_1.Text, { variant: "title", color: "primary", fontSize: 23 },
                        "Total \u20A6",
                        totalPrice)),
                react_1["default"].createElement(theme_1.Box, { marginTop: "m", padding: "m" },
                    react_1["default"].createElement(react_native_1.FlatList, { contentContainerStyle: {
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }, showsVerticalScrollIndicator: false, data: allCartProducts, numColumns: 1, renderItem: function (_a) {
                            var _b = _a.item, title = _b.title, imageUrl = _b.imageUrl, price = _b.price, _id = _b._id;
                            return (react_1["default"].createElement(react_2.Fragment, { key: _id },
                                react_1["default"].createElement(CartItem, __assign({}, { title: title, imageUrl: imageUrl, price: price, _id: _id }))));
                        }, keyExtractor: function (_a) {
                            var title = _a.title;
                            return title;
                        } })))) : (react_1["default"].createElement(theme_1.Box, { flex: 1, justifyContent: "center", alignItems: "center" },
                react_1["default"].createElement(theme_1.Text, { variant: "title", color: "danger", marginBottom: "m" }, "Cart Empty"),
                react_1["default"].createElement(react_native_gesture_handler_1.BorderlessButton, { onPress: function () { return navigation.pop(); } },
                    react_1["default"].createElement(theme_1.Text, { variant: "smtitle", color: "primary" }, "Start Shopping"))))),
        allCartProducts.length > 0 ? (react_1["default"].createElement(theme_1.Box, { flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center" },
            react_1["default"].createElement(Button_1["default"], { label: "Check out", variant: "primary", onPress: onCheckOut }))) : null));
}
exports["default"] = ProductCart;
