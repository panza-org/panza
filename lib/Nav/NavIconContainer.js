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
 * A wrapper for <Icon /> that positions it correctly
 * in a navigation bar.
 */

var NavIconContainer = function NavIconContainer(props) {
  var children = props.children;

  var other = _objectWithoutProperties(props, ['children']);

  var child = _react2.default.Children.only(children);
  var padding = _reactNative.Platform.OS === 'android' ? 10 : 15;

  var cloned = _react2.default.cloneElement(child, {
    style: {
      padding: 10,
      paddingLeft: padding,
      paddingRight: padding
    }
  });

  return _react2.default.createElement(
    _reactNative.View,
    _extends({ style: styles.container }, other),
    cloned
  );
};

NavIconContainer.displayName = 'NavIconContainer';

exports.default = NavIconContainer;


var styles = _reactNative.StyleSheet.create({
  container: _extends({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }, _reactNative.Platform.select({
    android: {
      width: 40
    },
    ios: {
      width: 50
    }
  }))
});