"use strict";
exports.__esModule = true;
exports.Images = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_redux_1 = require("react-redux");
var Button_1 = require("../../Utils/Button");
var FormTextInput_1 = require("../../Utils/FormTextInput");
var theme_1 = require("../theme");
var ProductHeader_1 = require("./ProductHeader");
/* Actions */
var productActions_1 = require("../../store/actions/productActions");
var native_1 = require("@react-navigation/native");
var Loader_1 = require("../Loader");
var Utils_1 = require("../../Utils");
var width = react_native_1.Dimensions.get('window').width;
exports.Images = function (_a) {
    var src = _a.src, name = _a.name, price = _a.price;
    return null;
};
function AddProduct() {
    var dispatch = react_redux_1.useDispatch();
    var navigate = native_1.useNavigation().navigate;
    var _a = react_1.useState(''), title = _a[0], setTitle = _a[1];
    var _b = react_1.useState(''), price = _b[0], setPrice = _b[1];
    var _c = react_1.useState(Utils_1.defaultImg), imageUrl = _c[0], setImage = _c[1];
    var _d = react_1.useState(''), desc = _d[0], setDesc = _d[1];
    /** Selectors */
    var auth = react_redux_1.useSelector(function (state) { return state.auth; });
    var product = react_redux_1.useSelector(function (state) { return state.product; });
    var error = react_redux_1.useSelector(function (state) { return state.err; });
    var onPostProduct = function () {
        dispatch(productActions_1.addProduct({ title: title, price: price, imageUrl: imageUrl, desc: desc }));
        navigate('ProductList');
    };
    console.log(error);
    return (react_1["default"].createElement(theme_1.Box, { flex: 1, backgroundColor: "white" },
        react_1["default"].createElement(theme_1.Box, { flexDirection: "column", alignItems: "center", backgroundColor: "white" },
            react_1["default"].createElement(ProductHeader_1["default"], { back: false })),
        !product.sending ? (react_1["default"].createElement(theme_1.Box, { flex: 1, padding: "xl", alignItems: "center" },
            error.id === 'PRODUCT_POST_FAIL' ? (react_1["default"].createElement(theme_1.Text, { variant: "smtitle", color: "primary", textAlign: "center", marginBottom: "l" }, error.msg.msg)) : null,
            react_1["default"].createElement(FormTextInput_1["default"], { placeholder: "Item Title", onChangeText: function (title) { return setTitle(title); } }),
            react_1["default"].createElement(FormTextInput_1["default"], { placeholder: "Item Price", keyboardType: "number-pad", onChangeText: function (price) { return setPrice(price); } }),
            react_1["default"].createElement(FormTextInput_1["default"], { placeholder: "Item Image", defaultValue: imageUrl, onChangeText: function (image) { return setImage(image); } }),
            react_1["default"].createElement(FormTextInput_1["default"], { placeholder: "Item Description", numberOfLines: 7, onChangeText: function (desc) { return setDesc(desc); }, onSubmitEditing: onPostProduct }),
            react_1["default"].createElement(theme_1.Box, null,
                react_1["default"].createElement(Button_1["default"], { label: "Add Item", variant: "primary", style: { marginTop: 20 }, onPress: onPostProduct })))) : (react_1["default"].createElement(Loader_1["default"], null))));
}
exports["default"] = AddProduct;
