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
 * Secondary text input sizing. Composes <TextBase> and
 * <TextInput>
 */

var SecondaryTextInput = function SecondaryTextInput(props) {
  return _react2.default.createElement(_index.TextBase, _extends({}, props, {
    underlineColorAndroid: 'transparent',
    Component: _reactNative.TextInput,
    fontSize: 5
  }));
};

SecondaryTextInput.displayName = 'SecondaryTextInput';

exports.default = SecondaryTextInput;