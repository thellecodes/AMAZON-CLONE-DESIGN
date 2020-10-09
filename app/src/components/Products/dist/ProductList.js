"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_redux_1 = require("react-redux");
var productActions_1 = require("../../store/actions/productActions");
var theme_1 = require("../theme");
/* Components */
var ListContainer_1 = require("./ListContainer");
var ProductCard_1 = require("./ProductCard");
var ProductHeader_1 = require("./ProductHeader");
var ProductSearch_1 = require("./ProductSearch");
/* Utils */
var _a = react_native_1.Dimensions.get('window'), width = _a.width, height = _a.height;
function ProductList() {
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        dispatch(productActions_1.loadProducts());
    }, []);
    return (react_1["default"].createElement(theme_1.Box, { flex: 1 },
        react_1["default"].createElement(theme_1.Box, { height: height * 0.5, flexDirection: "column", alignItems: "center", backgroundColor: "white" },
            react_1["default"].createElement(ProductHeader_1["default"], { back: false }),
            react_1["default"].createElement(ProductSearch_1["default"], null),
            react_1["default"].createElement(ProductCard_1["default"], null)),
        react_1["default"].createElement(ListContainer_1["default"], null)));
}
exports["default"] = ProductList;
