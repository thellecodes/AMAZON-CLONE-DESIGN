"use strict";
exports.__esModule = true;
exports.ItemImage = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_2 = require("react-native");
var Button_1 = require("../../Utils/Button");
var FormTextInput_1 = require("../../Utils/FormTextInput");
var theme_1 = require("../theme");
var ItemList_1 = require("./ItemList");
var ProductHeader_1 = require("./ProductHeader");
exports.ItemImage = function (_a) {
    var src = _a.src, name = _a.name, price = _a.price;
    return (react_1["default"].createElement(theme_1.Box, { width: 157, height: 150, backgroundColor: "white", borderWidth: react_native_1.StyleSheet.hairlineWidth, marginTop: "m", borderRadius: "m", padding: 'm', justifyContent: "flex-start", margin: "s" },
        react_1["default"].createElement(theme_1.Box, { height: 100, overflow: "hidden", alignItems: "center", justifyContent: "center", padding: "s" },
            react_1["default"].createElement(react_native_2.Image, { source: src, resizeMode: "contain", height: 50 }))));
};
function AddProduct() {
    return (react_1["default"].createElement(theme_1.Box, { flex: 1, backgroundColor: "white" },
        react_1["default"].createElement(theme_1.Box, { flexDirection: "column", alignItems: "center", backgroundColor: "white" },
            react_1["default"].createElement(ProductHeader_1["default"], { back: false })),
        react_1["default"].createElement(theme_1.Box, { flex: 1, padding: "xl", alignItems: "center" },
            react_1["default"].createElement(FormTextInput_1["default"], { placeholder: "Item Title", defaultValue: "Item name value" }),
            react_1["default"].createElement(FormTextInput_1["default"], { placeholder: "Item Price", keyboardType: "number-pad", defaultValue: "Item price value" }),
            react_1["default"].createElement(FormTextInput_1["default"], { placeholder: "Item Description", numberOfLines: 7, defaultValue: "Item description value" }),
            react_1["default"].createElement(exports.ItemImage, { name: ItemList_1.allItems[0].name, src: ItemList_1.allItems[0].src, price: "400" }),
            react_1["default"].createElement(theme_1.Box, null,
                react_1["default"].createElement(Button_1["default"], { label: "Edit Item", variant: "primary", style: { marginTop: 20 } })))));
}
exports["default"] = AddProduct;
