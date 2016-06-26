'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Base = require('../Base');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Secondary Text Size
 */

var SecondaryText = function SecondaryText(_ref) {
  var children = _ref.children;

  var props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    _Base.TextBase,
    _extends({ fontSize: 5 }, props),
    children
  );
};

SecondaryText.displayName = 'SecondaryText';

exports.default = SecondaryText;