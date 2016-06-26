'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Base = require('../Base');

var _Ionicons = require('react-native-vector-icons/Ionicons');

var _Ionicons2 = _interopRequireDefault(_Ionicons);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Our base icon component that all other icons
 * compose. It uses ionicons, as provided by
 * react-native-vector-icons
 */

var BaseIcon = function BaseIcon(props) {
  var name = props.name;
  var size = props.size;

  var other = _objectWithoutProperties(props, ['name', 'size']);

  return _react2.default.createElement(_Base.TextBase, _extends({
    name: name,
    size: size,
    Component: _Ionicons2.default
  }, other));
};

BaseIcon.displayName = 'BaseIcon';

BaseIcon.defaultProps = {
  size: 35
};

exports.default = BaseIcon;