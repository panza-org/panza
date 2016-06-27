'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Uses an 'info' backgroundColor
 */

var DefaultButton = function DefaultButton(props) {
  return _react2.default.createElement(_Button2.default, _extends({ backgroundColor: 'info', textColor: 'white' }, props));
};

DefaultButton.displayName = 'DefaultButton';

DefaultButton.propTypes = {
  disabled: _react.PropTypes.bool,
  label: _react.PropTypes.string,
  underlayColor: _react.PropTypes.string
};

exports.default = DefaultButton;