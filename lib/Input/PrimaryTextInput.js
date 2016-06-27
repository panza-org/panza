'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Text input with primary text sizing. Composes
 * <TextBase> and <TextInput>
 */

var PrimaryTextInput = function PrimaryTextInput(props) {
  return _react2.default.createElement(_index.TextBase, _extends({}, props, {
    Component: _reactNative.TextInput,
    underlineColorAndroid: 'transparent',
    fontSize: 4
  }));
};

PrimaryTextInput.displayName = 'PrimaryTextInput';

exports.default = PrimaryTextInput;