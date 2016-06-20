'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Used by <InputGroup /> to divide inputs, and apply
 * a pseudo border between them.
 */

var Divider = function Divider(_ref, _ref2) {
  var style = _ref.style;
  var inset = _ref.inset;

  var other = _objectWithoutProperties(_ref, ['style', 'inset']);

  var panza = _ref2.panza;

  var _config$panza = _extends({}, _config2.default, panza);

  var borderColor = _config$panza.borderColor;

  return _react2.default.createElement(_reactNative.View, { style: [styles.divider, style, inset && { marginLeft: inset }, { backgroundColor: borderColor }] });
};

Divider.displayName = 'Divider';

Divider.propTypes = {
  inset: _react.PropTypes.number
};

Divider.contextTypes = {
  panza: _react.PropTypes.object
};

var styles = _reactNative.StyleSheet.create({
  divider: {
    height: 1 / _reactNative.PixelRatio.get()
  }
});

exports.default = Divider;