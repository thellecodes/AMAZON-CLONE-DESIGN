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
var react_native_size_matters_1 = require("react-native-size-matters");
var react_redux_1 = require("react-redux");
var Icons_1 = require("../../Icons");
var Helpers_1 = require("../Helpers");
var Loader_1 = require("../Loader");
var theme_1 = require("../theme");
/* Components */
var ProductHeader_1 = require("./ProductHeader");
/* Utils */
var _a = react_native_1.Dimensions.get('window'), width = _a.width, height = _a.height;
function ProductDetails(_a) {
    var navigation = _a.navigation, route = _a.route;
    var _id = route.params._id;
    var products = react_redux_1.useSelector(function (state) { return state.product; }).products;
    var currentProduct = products.filter(function (p) { return p._id === _id; });
    var onBack = function () {
        navigation.pop();
    };
    var onEdit = function () {
        navigation.navigate('EditProduct');
    };
    return (react_1["default"].createElement(react_native_1.View, { style: { flex: 1, backgroundColor: 'white' } }, currentProduct.length > 0 ? (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_native_1.View, { style: { height: height * 0.6 } },
            react_1["default"].createElement(react_native_1.TouchableWithoutFeedback, { onPress: onBack },
                react_1["default"].createElement(theme_1.Box, { flexDirection: "column", alignItems: "center", backgroundColor: "white" },
                    react_1["default"].createElement(ProductHeader_1["default"], { back: true }))),
            react_1["default"].createElement(theme_1.Box, { flex: 1, padding: "m", height: height * 0.6 },
                react_1["default"].createElement(theme_1.Text, { variant: "title", fontSize: Helpers_1.CUSTOMFONT(27), color: "primary", textTransform: "capitalize", fontWeight: "900" }, currentProduct[0].title),
                react_1["default"].createElement(theme_1.Box, { flexDirection: "row", justifyContent: "space-between", marginTop: "m" },
                    react_1["default"].createElement(theme_1.Text, { color: "orange", variant: "title", fontSize: Helpers_1.CUSTOMFONT(20) },
                        "\u20A6",
                        currentProduct[0].price),
                    react_1["default"].createElement(theme_1.Box, { width: 97, height: 30, borderRadius: "s", borderWidth: react_native_1.StyleSheet.hairlineWidth, flexDirection: "row", alignItems: "center", padding: "s", justifyContent: "space-between" },
                        react_1["default"].createElement(Icons_1.Plus, { size: react_native_size_matters_1.moderateScale(18) }),
                        react_1["default"].createElement(theme_1.Text, { variant: "title", color: "primary", fontSize: 15 }, "1"),
                        react_1["default"].createElement(Icons_1.Minus, { size: react_native_size_matters_1.moderateScale(15) }))),
                react_1["default"].createElement(theme_1.Box, { height: react_native_size_matters_1.moderateScale(230), width: react_native_size_matters_1.moderateScale(width * 0.77), alignSelf: "center", marginTop: "m", padding: "s", alignItems: "center", justifyContent: "center" },
                    react_1["default"].createElement(react_native_1.Image, { source: { uri: currentProduct[0].imageUrl }, resizeMode: "contain", style: __assign({}, react_native_1.StyleSheet.absoluteFillObject) })))),
        react_1["default"].createElement(theme_1.Box, { flex: 1, backgroundColor: "white", padding: "xl", position: "relative" },
            react_1["default"].createElement(theme_1.Box, { flex: 1 },
                react_1["default"].createElement(theme_1.Text, { variant: "title", color: "primary", marginBottom: "m" }, "Description"),
                react_1["default"].createElement(theme_1.Text, { variant: "body", fontSize: Helpers_1.CUSTOMFONT(11), color: "primary" }, currentProduct[0].desc)),
            react_1["default"].createElement(react_native_1.TouchableWithoutFeedback, { onPress: onEdit },
                react_1["default"].createElement(theme_1.Box, { position: "absolute", bottom: 0, left: 0, backgroundColor: "primary", height: 57, borderTopLeftRadius: "l", padding: "m" },
                    react_1["default"].createElement(theme_1.Text, { variant: "title", color: "white", fontSize: Helpers_1.CUSTOMFONT(14) }, "Edit"))),
            react_1["default"].createElement(theme_1.Box, { position: "absolute", bottom: 0, right: 0, backgroundColor: "primary", height: 57, borderTopLeftRadius: "l", padding: "m" },
                react_1["default"].createElement(theme_1.Text, { variant: "title", color: "white", fontSize: Helpers_1.CUSTOMFONT(23) }, "ADD CART"))))) : (react_1["default"].createElement(Loader_1["default"], null))));
}
exports["default"] = ProductDetails;
