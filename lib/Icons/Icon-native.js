'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoreIcon = exports.SearchIcon = exports.BackIcon = exports.CloseIcon = exports.PlusIcon = exports.ArrowRightIcon = undefined;

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
  var androidName = props.androidName;
  var size = props.size;
  var androidSize = props.androidSize;

  var other = _objectWithoutProperties(props, ['name', 'androidName', 'size', 'androidSize']);

  var iconName = name;
  var iconSize = size;

  if (_reactNative.Platform.OS === 'android') {
    if (androidName) iconName = androidName;
    if (androidSize) iconSize = androidSize;
  }

  return _react2.default.createElement(_Base.TextBase, _extends({
    name: iconName,
    size: iconSize,
    Component: _Ionicons2.default
  }, other));
};

BaseIcon.displayName = 'BaseIcon';

BaseIcon.defaultProps = {
  size: _reactNative.Platform.select({ ios: 35, android: 25 })
};

exports.default = BaseIcon;
var ArrowRightIcon = exports.ArrowRightIcon = function ArrowRightIcon(props) {
  return _react2.default.createElement(BaseIcon, _extends({
    color: 'midgray',
    name: 'ios-arrow-forward',
    size: 25
  }, props));
};

var PlusIcon = exports.PlusIcon = function PlusIcon(props) {
  return _react2.default.createElement(BaseIcon, _extends({
    name: 'ios-add-outline',
    androidName: 'md-add'
  }, props));
};

// on android we use 'back', on ios we use 'close'
var CloseIcon = exports.CloseIcon = function CloseIcon(props) {
  return _react2.default.createElement(BaseIcon, _extends({
    androidName: 'md-arrow-back',
    name: 'ios-close'
  }, props));
};

var BackIcon = exports.BackIcon = function BackIcon(props) {
  return _react2.default.createElement(BaseIcon, _extends({
    androidName: 'md-arrow-back',
    name: 'ios-arrow-back',
    size: 30
  }, props));
};

var SearchIcon = exports.SearchIcon = function SearchIcon(props) {
  return _react2.default.createElement(BaseIcon, _extends({
    name: 'ios-search',
    androidName: 'md-search',
    size: 25
  }, props));
};

var MoreIcon = exports.MoreIcon = function MoreIcon(props) {
  return _react2.default.createElement(BaseIcon, {
    name: 'ios-more',
    androidName: 'md-more'
  });
};