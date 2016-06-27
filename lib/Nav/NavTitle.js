'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Renders text stylized for the Navigation Bar title.
 *
 * On iOS it composes PrimaryText.
 *
 * On Android, it composes LargeText.
 */

var NavTitle = function NavTitle(_ref) {
  var label = _ref.label;
  var color = _ref.color;
  var children = _ref.children;
  var style = _ref.style;

  var other = _objectWithoutProperties(_ref, ['label', 'color', 'children', 'style']);

  return _react2.default.createElement(
    _reactNative.View,
    { style: [styles.container, style] },
    _reactNative.Platform.OS === 'ios' ? _react2.default.createElement(
      _index.PrimaryText,
      { color: color, bold: true },
      label || children
    ) : _react2.default.createElement(
      _index.LargeText,
      { color: color },
      label || children
    )
  );
};

NavTitle.displayName = 'NavTitle';

var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

exports.default = NavTitle;