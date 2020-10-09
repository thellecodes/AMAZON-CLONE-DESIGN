"use strict";
exports.__esModule = true;
exports.Box = exports.Text = void 0;
var restyle_1 = require("@shopify/restyle");
var react_native_size_matters_1 = require("react-native-size-matters");
var Helpers_1 = require("./Helpers");
var theme = {
    colors: {
        white: '#ffffff',
        primary: '#131A22',
        grey: '#818181',
        sgrey: '#4a4a4a',
        bgrey: '#555555',
        cgrey: '#FAFAFA',
        dgrey: '#AFAFAF',
        text: '#272829',
        orange: '#FEBD69',
        black: '#000000',
        button: '#060039',
        danger: '#ff4500'
    },
    spacing: {
        s: react_native_size_matters_1.moderateScale(8),
        m: react_native_size_matters_1.moderateScale(16),
        l: react_native_size_matters_1.moderateScale(24),
        xl: react_native_size_matters_1.moderateScale(40)
    },
    borderRadii: {
        s: react_native_size_matters_1.moderateScale(4),
        m: react_native_size_matters_1.moderateScale(10),
        l: react_native_size_matters_1.moderateScale(25),
        xl: react_native_size_matters_1.moderateScale(75)
    },
    textVariants: {
        title: {
            fontSize: Helpers_1.CUSTOMFONT(35),
            fontFamily: 'Rubik-Bold',
            color: 'white'
        },
        body: {
            fontSize: Helpers_1.CUSTOMFONT(16),
            lineHeight: Helpers_1.CUSTOMFONT(25),
            fontFamily: 'Rubik-Regular',
            color: 'text'
        },
        button: {
            fontSize: Helpers_1.CUSTOMFONT(15),
            fontFamily: 'Rubik-Bold',
            color: 'text'
        },
        smtitle: {
            fontSize: Helpers_1.CUSTOMFONT(16),
            fontFamily: 'Rubik-Medium',
            color: 'grey'
        }
    },
    breakpoints: {}
};
exports.Text = restyle_1.createText();
exports.Box = restyle_1.createBox();
exports["default"] = theme;
