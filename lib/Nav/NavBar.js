'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Base = require('../Base');

var _Base2 = _interopRequireDefault(_Base);

var _NavTitle = require('./NavTitle');

var _NavTitle2 = _interopRequireDefault(_NavTitle);

var _NavTouchableText = require('./NavTouchableText');

var _NavTouchableText2 = _interopRequireDefault(_NavTouchableText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var defaultNavbarStyle = _extends({}, _reactNative.Platform.select({
  ios: {

    backgroundColor: 'white',
    borderBottomWidth: 1 / _reactNative.PixelRatio.get(),
    borderBottomColor: 'rgba(0,0,0,0.3)'
  },
  android: {

    backgroundColor: 'white',
    borderBottomWidth: 1 / _reactNative.PixelRatio.get(),
    borderBottomColor: 'rgba(0,0,0,0.3)'
  },
  web: {
    backgroundColor: 'white',
    borderBottomWidth: 1 / _reactNative.PixelRatio.get(),
    borderBottomColor: 'rgba(0,0,0,0.3)'
  }
}));

/**
 * Static navigation bar that mimics that found
 * within ReactNative. To be used when you want a static
 * representation of the NavBar, without transitions.
 */

var Navbar = function Navbar(props) {
  var style = props.style;
  var children = props.children;
  var title = props.title;
  var transparent = props.transparent;
  var backgroundColor = props.backgroundColor;
  var titleColor = props.titleColor;
  var LeftButton = props.LeftButton;
  var RightButton = props.RightButton;

  var other = _objectWithoutProperties(props, ['style', 'children', 'title', 'transparent', 'backgroundColor', 'titleColor', 'LeftButton', 'RightButton']);

  return _react2.default.createElement(
    _Base2.default,
    _extends({
      baseStyle: styles.navWrapper,
      style: style,
      backgroundColor: backgroundColor
    }, other),
    _react2.default.createElement(
      _reactNative.View,
      { style: [styles.navBar, children && styles.hasChildren, transparent && styles.transparent] },
      _react2.default.createElement(
        _reactNative.View,
        { style: styles.navTopRow },
        title && _react2.default.createElement(_NavTitle2.default, { color: titleColor, style: styles.titleStyle, label: title }),
        _react2.default.createElement(
          _reactNative.View,
          null,
          LeftButton
        ),
        _react2.default.createElement(
          _reactNative.View,
          null,
          RightButton
        )
      ),
      children && _react2.default.createElement(
        _reactNative.View,
        { style: styles.children },
        children
      )
    )
  );
};

Navbar.displayName = 'NavBar';

Navbar.defaultStyles = defaultNavbarStyle;

Navbar.propTypes = {
  title: _react.PropTypes.string,
  LeftButton: _react.PropTypes.node,
  RightButton: _react.PropTypes.node
};

var TOTAL_NAV_HEIGHT = 56;

exports.default = Navbar;


var styles = _reactNative.StyleSheet.create({
  hasChildren: {
    height: TOTAL_NAV_HEIGHT + 80
  },
  children: _extends({
    height: 80
  }, _reactNative.Platform.select({
    android: { marginTop: 0 }
  })),
  navTopRow: _extends({
    flexDirection: 'row',
    flex: 1,
    height: TOTAL_NAV_HEIGHT,
    justifyContent: 'space-between'
  }, _reactNative.Platform.select({
    web: {
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'red'
    }
  })),
  navBar: _extends({}, defaultNavbarStyle, {
    height: TOTAL_NAV_HEIGHT,
    flexDirection: 'column',
    backgroundColor: 'transparent',

    justifyContent: 'flex-start'
  }, _reactNative.Platform.select({
    ios: { paddingTop: 20 },
    android: {
      paddingTop: 0,
      paddingLeft: 5,
      paddingRight: 5
    }
  })),
  titleStyle: _extends({}, _reactNative.Platform.select({
    android: {
      position: 'absolute',
      left: 70,
      right: 0,
      bottom: 15
    },
    ios: {
      position: 'absolute',
      alignItems: 'center',
      right: 0,
      bottom: 13,
      left: 0,
      justifyContent: 'center'
    },
    web: {
      position: 'absolute',
      alignItems: 'center',
      right: 0,
      bottom: 13,
      left: 0,
      justifyContent: 'center'
    }
  })),
  transparent: {
    borderBottomWidth: 0,
    backgroundColor: 'transparent'
  },
  close: {
    height: 40,
    width: 40
  },
  navBarIcon: {
    marginVertical: 25
  },
  navWrapper: {
    // borderBottomWidth: 1 / PixelRatio.get(),
    // borderBottomColor: 'rgba(0,0,0,0.25)'
  }
});