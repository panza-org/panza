'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * A touchable wrapper for <Icon />
 */

var TouchableIcon = function TouchableIcon(props) {
  var onPress = props.onPress;
  var children = props.children;
  var accessibilityLabel = props.accessibilityLabel;
  var style = props.style;

  var other = _objectWithoutProperties(props, ['onPress', 'children', 'accessibilityLabel', 'style']);

  var child = _react2.default.Children.only(children);

  return _react2.default.createElement(
    _reactNative.TouchableOpacity,
    _extends({
      style: style,
      accessibilityLabel: accessibilityLabel,
      onPress: onPress
    }, other),
    child
  );
};

TouchableIcon.displayName = 'TouchableIcon';

TouchableIcon.propTypes = {
  onPress: _react.PropTypes.func.isRequired,
  accessibilityLabel: _react.PropTypes.string.isRequired
};

exports.default = TouchableIcon;