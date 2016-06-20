'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Basically copied from the excellent Rebass library
// https://github.com/jxnblk/rebass/blob/master/src/config.js

var _reactNative = require('react-native');

var baseColors = {
  blue: '#08e',
  black: '#111',
  white: '#fff',
  gray: '#fafafa',
  midgray: '#8F8E94',
  red: '#f52',
  orange: '#f70',
  green: '#1c7'
};

var colors = _extends({}, baseColors, {
  primary: baseColors.blue,
  secondary: baseColors.midgray,
  default: baseColors.black,
  info: baseColors.blue,
  success: baseColors.green,
  warning: baseColors.orange,
  error: baseColors.red
});

var fontSizes = [48, 32, 24, 20, 17, 15, 12];

var lineHeights = [0.7, 1, 1.2, 1.5, 2, 2.5, 3];

var scale = [0, 8, 16, 32, 64];

var inverted = colors.white;

var bold = '600';
var borderColor = 'rgba(0, 0, 0, 0.25)';
var borderRadius = 2;
var lineHeightAddition = _reactNative.Platform.select({
  ios: 3,
  android: 6
});

var config = {
  fontSizes: fontSizes,
  lineHeights: lineHeights,
  borderRadius: borderRadius,
  borderColor: borderColor,
  colors: colors,
  inverted: inverted,
  bold: bold,
  scale: scale,
  lineHeightAddition: lineHeightAddition
};

exports.default = config;