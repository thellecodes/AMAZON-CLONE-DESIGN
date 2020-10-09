"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var react_native_1 = require("react-native");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var Button_1 = require("../../Utils/Button");
var FormTextInput_1 = require("../../Utils/FormTextInput");
var theme_1 = require("../theme");
var react_redux_1 = require("react-redux");
var async_storage_1 = require("@react-native-community/async-storage");
var _a = react_native_1.Dimensions.get('window'), height = _a.height, width = _a.width;
/* Actions */
var authActions_1 = require("../../store/actions/authActions");
var Loader_1 = require("../Loader");
function Login(_a) {
    var _this = this;
    var navigation = _a.navigation;
    var nNavigate = native_1.useNavigation().navigate;
    var dispatch = react_redux_1.useDispatch();
    var auth = react_redux_1.useSelector(function (state) { return state.auth; });
    var error = react_redux_1.useSelector(function (state) { return state.err; });
    var _b = react_1.useState(''), email = _b[0], setEmail = _b[1];
    var _c = react_1.useState(''), password = _c[0], setPassword = _c[1];
    var onRegister = function () {
        navigation.navigate('Register');
    };
    var onLogin = function () {
        dispatch(authActions_1.login({ email: email, password: password }));
    };
    var setToken = function (token) { return __awaiter(_this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!token) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, async_storage_1["default"].removeItem('@user_token')];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, async_storage_1["default"].setItem('@user_token', token)];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        var isAuthenticated = auth.isAuthenticated, token = auth.token;
        setToken(token);
        if (isAuthenticated) {
            nNavigate('Product');
        }
    }, [auth]);
    return (react_1["default"].createElement(theme_1.Box, { flex: 1, backgroundColor: "primary", padding: "xl", justifyContent: "center", alignItems: "center" },
        react_1["default"].createElement(theme_1.Box, { height: height * 0.6, width: width * 0.9, borderRadius: "l", backgroundColor: "white", padding: "l", alignItems: "center" },
            react_1["default"].createElement(theme_1.Text, { variant: "title", color: "primary", marginBottom: "l" }, "LOGIN"),
            error.id === 'LOGIN_FAIL' ? (react_1["default"].createElement(react_1["default"].Fragment, null, error.msg.msg ? (react_1["default"].createElement(theme_1.Text, { variant: "smtitle", color: "danger", textTransform: "uppercase", fontSize: 12, marginBottom: "m" }, error.msg.msg)) : null)) : null,
            react_1["default"].createElement(FormTextInput_1["default"], { placeholder: "Email", onChangeText: function (email) { return setEmail(email); } }),
            react_1["default"].createElement(FormTextInput_1["default"], { placeholder: "Password", onChangeText: function (password) { return setPassword(password); }, secureTextEntry: true }),
            react_1["default"].createElement(Button_1["default"], { label: "Login", variant: "primary", onPress: onLogin }),
            react_1["default"].createElement(react_native_gesture_handler_1.BorderlessButton, { style: { marginTop: 30 }, onPress: onRegister },
                react_1["default"].createElement(theme_1.Text, { variant: "smtitle", color: "primary" }, "Register"))),
        auth.regLoading ? react_1["default"].createElement(Loader_1["default"], null) : null));
}
exports["default"] = Login;
