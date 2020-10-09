"use strict";
exports.__esModule = true;
exports.ProductNavigator = exports.ProductStack = void 0;
var React = require("react");
var react_navigation_shared_element_1 = require("react-navigation-shared-element");
var ProductCheckOut_1 = require("./ProductCheckOut");
var ProductCart_1 = require("./ProductCart");
var ProductDetails_1 = require("./ProductDetails");
var ProductList_1 = require("./ProductList");
var AddProduct_1 = require("./AddProduct");
var EditProduct_1 = require("./EditProduct");
exports.ProductStack = react_navigation_shared_element_1.createSharedElementStackNavigator();
exports.ProductNavigator = function () { return (React.createElement(exports.ProductStack.Navigator, { initialRouteName: "ProductList" },
    React.createElement(exports.ProductStack.Screen, { name: "ProductList", options: { headerShown: false }, component: ProductList_1["default"] }),
    React.createElement(exports.ProductStack.Screen, { name: "ProductDetails", component: ProductDetails_1["default"], options: {
            headerShown: false
        } }),
    React.createElement(exports.ProductStack.Screen, { name: "ProductCart", component: ProductCart_1["default"], options: {
            headerShown: false
        } }),
    React.createElement(exports.ProductStack.Screen, { name: "ProductCheckOut", component: ProductCheckOut_1["default"], options: {
            headerShown: false
        } }),
    React.createElement(exports.ProductStack.Screen, { name: "AddProduct", component: AddProduct_1["default"], options: {
            headerShown: false
        } }),
    React.createElement(exports.ProductStack.Screen, { name: "EditProduct", component: EditProduct_1["default"], options: {
            headerShown: false
        } }))); };
