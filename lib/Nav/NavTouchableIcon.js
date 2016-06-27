'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _index = require('./index');

var _Icons = require('../Icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultColor = _reactNative.Platform.select({
  ios: 'primary',
  android: 'default'
});

var defaultSize = _reactNative.Platform.select({
  ios: 35,
  android: 25
});

/**
 * Wrap Icon components within NavTouchableIcon for display
 * of an Icon in the Navigation bar. You may need to fiddle
 * around with the sizing of the Icon on android and ios devices
 * to ensure that they look right. 
 */

var NavTouchableIcon = function NavTouchableIcon(props) {
  var child = _react2.default.Children.only(props.children);
  var clone = _react2.default.cloneElement(child, {
    color: child.props.color || defaultColor,
    size: typeof child.props.size === 'number' ? child.props.size : defaultSize
  });

  return _react2.default.createElement(
    _index.NavIconContainer,
    null,
    _react2.default.createElement(
      _Icons.TouchableIcon,
      { onPress: props.onPress },
      clone
    )
  );
};

NavTouchableIcon.displayName = 'NavTouchableIcon';

exports.default = NavTouchableIcon;