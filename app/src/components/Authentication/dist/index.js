"use strict";
exports.__esModule = true;
exports.AuthNavigator = exports.AuthStack = void 0;
var React = require("react");
var react_navigation_shared_element_1 = require("react-navigation-shared-element");
var Login_1 = require("./Login");
var Register_1 = require("./Register");
exports.AuthStack = react_navigation_shared_element_1.createSharedElementStackNavigator();
exports.AuthNavigator = function () { return (React.createElement(exports.AuthStack.Navigator, { initialRouteName: "Login" },
    React.createElement(exports.AuthStack.Screen, { name: "Login", options: { headerShown: false }, component: Login_1["default"] }),
    React.createElement(exports.AuthStack.Screen, { name: "Register", component: Register_1["default"], options: {
            headerShown: false
        } }))); };
