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
exports.Items = exports.allItems = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Icons_1 = require("../../Icons");
var images_1 = require("../../images");
var theme_1 = require("../theme");
var react_navigation_shared_element_1 = require("react-navigation-shared-element");
var native_1 = require("@react-navigation/native");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var react_redux_1 = require("react-redux");
var productActions_1 = require("../../store/actions/productActions");
exports.allItems = [
    { name: 'Sofa', src: images_1.Sofa, price: '₦140' },
    { name: 'Chair', src: images_1.WhiteChair, price: '₦140' },
    { name: 'Table', src: images_1.Table, price: '₦140' },
    { name: 'Wall Shelf', src: images_1.Shelve, price: '₦140' },
];
exports.Items = function (_a) {
    var title = _a.title, price = _a.price, imageUrl = _a.imageUrl, _id = _a._id, cart = _a.cart;
    var dispatch = react_redux_1.useDispatch();
    var navigate = native_1.useNavigation().navigate;
    var onPress = function () {
        navigate('ProductDetails', {
            _id: _id
        });
    };
    var onDelete = function (_id) {
        dispatch(productActions_1.deleteProduct(_id));
    };
    var onCart = function (_id) {
        dispatch(productActions_1.addToCart(_id));
    };
    return (react_1["default"].createElement(react_navigation_shared_element_1.SharedElement, { id: "image" },
        react_1["default"].createElement(theme_1.Box, { width: 157, height: 180, backgroundColor: "white", borderWidth: react_native_1.StyleSheet.hairlineWidth, marginTop: "m", borderRadius: "m", padding: "m", justifyContent: "flex-start", margin: "s" },
            react_1["default"].createElement(theme_1.Box, { flex: 1, height: 60, overflow: "hidden", alignItems: "center", justifyContent: "center", padding: "s" },
                react_1["default"].createElement(react_native_1.Image, { source: {
                        uri: "" + imageUrl.toLowerCase()
                    }, style: __assign({}, react_native_1.StyleSheet.absoluteFillObject), resizeMode: "contain" }),
                react_1["default"].createElement(theme_1.Box, { style: __assign(__assign({}, react_native_1.StyleSheet.absoluteFillObject), { zIndex: 1 }), padding: "s", flexDirection: "row", justifyContent: "flex-end" },
                    react_1["default"].createElement(react_native_gesture_handler_1.BorderlessButton, { style: {
                            height: 20,
                            width: 20,
                            overflow: 'hidden',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 20,
                            marginRight: 10
                        }, onPress: function () { return onDelete(_id); } },
                        react_1["default"].createElement(theme_1.Text, { color: "danger", textTransform: "uppercase", variant: "smtitle" }, "X")))),
            react_1["default"].createElement(theme_1.Box, { flex: 1, paddingBottom: "s" },
                react_1["default"].createElement(react_native_1.TouchableWithoutFeedback, __assign({}, { onPress: onPress }),
                    react_1["default"].createElement(theme_1.Text, { variant: "title", color: "primary", marginTop: "s", fontSize: 13, marginBottom: "s" }, title)),
                react_1["default"].createElement(react_native_1.Image, { source: images_1.Stars }),
                react_1["default"].createElement(theme_1.Box, { flexDirection: "row", justifyContent: "space-between", marginTop: "s", marginBottom: "s" },
                    react_1["default"].createElement(theme_1.Text, { variant: "body" },
                        "\u20A6",
                        price),
                    react_1["default"].createElement(react_native_gesture_handler_1.BorderlessButton, { onPress: function () { return onCart(_id); } },
                        react_1["default"].createElement(Icons_1.Key, __assign({ size: 20 }, { cart: cart }))))))));
};
function ItemList(_a) {
    var navigate = native_1.useNavigation().navigate;
    var products = react_redux_1.useSelector(function (state) { return state.product; }).products;
    return (react_1["default"].createElement(theme_1.Box, { flex: 1, backgroundColor: "cgrey" }, products.length > 0 ? (react_1["default"].createElement(react_native_1.FlatList, { contentContainerStyle: {
            justifyContent: 'center',
            flexDirection: 'column'
        }, showsVerticalScrollIndicator: false, data: products, numColumns: 2, renderItem: function (_a) {
            var _b = _a.item, _id = _b._id, title = _b.title, imageUrl = _b.imageUrl, desc = _b.desc, price = _b.price, cart = _b.cart;
            return (react_1["default"].createElement(react_1.Fragment, null,
                react_1["default"].createElement(exports.Items, __assign({}, { title: title, imageUrl: imageUrl, price: price, desc: desc, _id: _id, cart: cart }))));
        }, keyExtractor: function (_a) {
            var _id = _a._id;
            return _id;
        } })) : (react_1["default"].createElement(react_native_gesture_handler_1.BorderlessButton, { onPress: function () { return navigate('AddProduct'); } },
        react_1["default"].createElement(theme_1.Text, { marginTop: "xl", variant: "smtitle", textAlign: "center", color: "primary" }, "No Products for now, Add Now")))));
}
exports["default"] = ItemList;
