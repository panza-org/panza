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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Input row cell
 */

var InputRowCell = function InputRowCell(_ref) {
  var children = _ref.children;

  var other = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    _reactNative.View,
    { style: styles.row },
    _react2.default.createElement(
      _index.Base,
      _extends({ baseStyle: styles.rowContainer }, other),
      children
    )
  );
};

InputRowCell.displayName = 'InputRowCell';

exports.default = InputRowCell;


var HEIGHT = 50;

var styles = _reactNative.StyleSheet.create({
  row: {
    overflow: 'hidden'
  },
  rowContainer: {
    height: HEIGHT,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    paddingRight: 0,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  }
});