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
 * SectionHeader is used for rendering a section header within a ListView.
 * Supply text as the child.  
 */

var SectionHeader = function SectionHeader(_ref) {
  var backgroundColor = _ref.backgroundColor;
  var children = _ref.children;

  var other = _objectWithoutProperties(_ref, ['backgroundColor', 'children']);

  return _react2.default.createElement(
    _index.Base,
    _extends({
      backgroundColor: backgroundColor,
      baseStyle: styles.header }, other),
    _react2.default.createElement(
      _index.SubtitleText,
      { light: true },
      children
    )
  );
};

SectionHeader.displayName = 'SectionHeader';

SectionHeader.propTypes = {
  backgroundColor: _react.PropTypes.string
};

SectionHeader.defaultProps = {
  backgroundColor: 'gray'
};

exports.default = SectionHeader;


var styles = _reactNative.StyleSheet.create({
  header: _extends({
    padding: 7,
    paddingLeft: 15,
    overflow: 'hidden'
  }, _reactNative.Platform.select({
    android: {
      // borderBottomColor: 'transparent',
      // borderBottomWidth: 0,
      // backgroundColor: '#bdc3c7',
      // marginTop: 0
    }
  })),
  headerText: {
    fontWeight: '400',
    color: '#999',
    fontSize: 13,
    letterSpacing: 0.3
  }
});