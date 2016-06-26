'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoreIcon = exports.SearchIcon = exports.BackIcon = exports.CloseIcon = exports.PlusIcon = exports.ArrowRightIcon = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowRightIcon = exports.ArrowRightIcon = function ArrowRightIcon(props) {
  return _react2.default.createElement(_index.Icon, _extends({
    color: 'midgray',
    name: 'ios-arrow-forward',
    size: 25
  }, props));
};

var PlusIcon = exports.PlusIcon = function PlusIcon(props) {
  return _react2.default.createElement(_index.Icon, _extends({
    name: _reactNative.Platform.select({
      ios: 'ios-add-outline',
      android: 'md-add',
      web: 'ios-add-outline'
    })
  }, props));
};

// on android we use 'back', on ios we use 'close'
var CloseIcon = exports.CloseIcon = function CloseIcon(props) {
  return _react2.default.createElement(_index.Icon, _extends({
    name: _reactNative.Platform.select({
      ios: 'ios-close',
      android: 'md-arrow-back',
      web: 'ios-close'
    })
  }, props));
};

var BackIcon = exports.BackIcon = function BackIcon(props) {
  return _react2.default.createElement(_index.Icon, _extends({
    name: _reactNative.Platform.select({
      ios: 'ios-arrow-back',
      android: 'md-arrow-back',
      web: 'ios-arrow-back'
    }),
    size: 30
  }, props));
};

var SearchIcon = exports.SearchIcon = function SearchIcon(props) {
  return _react2.default.createElement(_index.Icon, _extends({
    name: _reactNative.Platform.select({
      ios: 'ios-search',
      android: 'md-search',
      web: 'ios-search'
    }),
    size: 25
  }, props));
};

var MoreIcon = exports.MoreIcon = function MoreIcon(props) {
  return _react2.default.createElement(_index.Icon, {
    name: _reactNative.Platform.select({
      ios: 'ios-more',
      android: 'md-more',
      web: 'ios-more'
    })
  });
};