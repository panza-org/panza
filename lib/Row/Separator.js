'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Base = require('../Base');

var _Base2 = _interopRequireDefault(_Base);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A simple component used to separate rows, with an
 * optional inset margin on the left or right.
 */

var RowSeparator = function RowSeparator(_ref, _ref2) {
  var inset = _ref.inset;
  var insetRight = _ref.insetRight;

  var other = _objectWithoutProperties(_ref, ['inset', 'insetRight']);

  var panza = _ref2.panza;

  var _config$panza = _extends({}, _index.config, panza);

  var borderColor = _config$panza.borderColor;


  return _react2.default.createElement(_Base2.default, _extends({
    baseStyle: [styles.separator, { backgroundColor: borderColor }, inset && { marginLeft: inset }, insetRight && { marginRight: insetRight }]
  }, other));
};

RowSeparator.displayName = 'RowSeparator';

RowSeparator.propTypes = {
  inset: _react.PropTypes.number,
  insetRight: _react.PropTypes.number
};

RowSeparator.defaultProps = {
  inset: 0,
  insetRight: 0
};

RowSeparator.contextTypes = {
  panza: _react.PropTypes.object
};

var styles = _reactNative.StyleSheet.create({
  separator: {
    height: _reactNative.StyleSheet.hairlineWidth
  }
});

exports.default = RowSeparator;