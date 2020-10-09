"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("react");
var react_3 = require("react");
var react_native_1 = require("react-native");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var react_redux_1 = require("react-redux");
var authActions_1 = require("../../store/actions/authActions");
var Button_1 = require("../../Utils/Button");
var FormTextInput_1 = require("../../Utils/FormTextInput");
var Loader_1 = require("../Loader");
var theme_1 = require("../theme");
var _a = react_native_1.Dimensions.get('window'), height = _a.height, width = _a.width;
function Register(_a) {
    var navigation = _a.navigation;
    var dispatch = react_redux_1.useDispatch();
    var auth = react_redux_1.useSelector(function (state) { return state.auth; });
    var error = react_redux_1.useSelector(function (state) { return state.err; });
    var _b = react_3.useState(''), name = _b[0], setName = _b[1];
    var _c = react_3.useState(''), email = _c[0], setEmail = _c[1];
    var _d = react_3.useState(''), password = _d[0], setPassword = _d[1];
    var onLogin = function () {
        navigation.navigate('Login');
    };
    var onRegister = function () {
        dispatch(authActions_1.register({ name: name, email: email, password: password }));
    };
    react_2.useEffect(function () {
        if (auth.isAuthenticated) {
            onLogin();
        }
    }, [auth]);
    return (react_1["default"].createElement(theme_1.Box, { flex: 1, backgroundColor: "primary", padding: "xl", justifyContent: "center", alignItems: "center" },
        react_1["default"].createElement(theme_1.Box, { height: height * 0.65, width: width * 0.9, borderRadius: "l", backgroundColor: "white", padding: "l", alignItems: "center" },
            react_1["default"].createElement(theme_1.Text, { variant: "title", color: "primary", marginBottom: "l" }, "SIGN UP"),
            error.id === 'REGISTER_FAIL' ? (react_1["default"].createElement(react_1["default"].Fragment, null, error.msg.msg ? (react_1["default"].createElement(theme_1.Text, { variant: "smtitle", color: "danger", textTransform: "uppercase", fontSize: 12, marginBottom: "m" }, error.msg.msg)) : null)) : null,
            react_1["default"].createElement(FormTextInput_1["default"], { placeholder: "Fullname", onChangeText: function (name) { return setName(name); } }),
            react_1["default"].createElement(FormTextInput_1["default"], { placeholder: "Email", onChangeText: function (email) { return setEmail(email); } }),
            react_1["default"].createElement(FormTextInput_1["default"], { placeholder: "Password", secureTextEntry: true, onChangeText: function (password) { return setPassword(password); } }),
            react_1["default"].createElement(Button_1["default"], { label: "Register", variant: "primary", onPress: onRegister }),
            react_1["default"].createElement(react_native_gesture_handler_1.BorderlessButton, { style: { marginTop: 30 }, onPress: onLogin },
                react_1["default"].createElement(theme_1.Text, { variant: "smtitle", color: "primary" }, "Login"))),
        auth.regLoading ? react_1["default"].createElement(Loader_1["default"], null) : null));
}
exports["default"] = Register;
