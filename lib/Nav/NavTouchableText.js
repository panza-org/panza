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
 * Makes a touchable text component for the NavBar. Typically
 * used on iOS.
 */

var NavTouchableText = function NavTouchableText(_ref) {
  var children = _ref.children;
  var disabled = _ref.disabled;
  var color = _ref.color;

  var other = _objectWithoutProperties(_ref, ['children', 'disabled', 'color']);

  return _react2.default.createElement(
    _reactNative.View,
    { style: { flex: 1, justifyContent: 'center' } },
    _react2.default.createElement(
      _index.TextBase,
      _extends({
        Component: _reactNative.TouchableOpacity,
        baseStyle: { paddingLeft: 16, paddingRight: 16, paddingBottom: 5, paddingTop: 5, opacity: disabled ? 0.3 : 1 },
        disabled: disabled
      }, other),
      _react2.default.createElement(
        _index.PrimaryText,
        { color: color, style: { opacity: disabled ? 0.5 : 1 } },
        children
      )
    )
  );
};

NavTouchableText.displayName = 'NavTouchableText';

NavTouchableText.defaultProps = {
  color: 'primary'
};

exports.default = NavTouchableText;