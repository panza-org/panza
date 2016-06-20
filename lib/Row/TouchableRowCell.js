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

var _Icon = require('../Icons/Icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var noop = function noop() {};

/**
 * A touchable row cell container, typically used
 * rendering rows in a <ListView>.
 */

var TouchableRowCell = function TouchableRowCell(props) {
  var onPress = props.onPress;
  var highlighted = props.highlighted;
  var underlayColor = props.underlayColor;
  var showMore = props.showMore;
  var children = props.children;
  var height = props.height;
  var disabled = props.disabled;

  var other = _objectWithoutProperties(props, ['onPress', 'highlighted', 'underlayColor', 'showMore', 'children', 'height', 'disabled']);

  var heightStyle = {
    height: height === 'auto' ? null : height
  };

  return _react2.default.createElement(
    _reactNative.TouchableHighlight,
    {
      touchEvents: disabled ? 'none' : 'auto',
      onPress: onPress,
      underlayColor: underlayColor,
      style: [styles.row, disabled && styles.disabled],
      onPressIn: function onPressIn() {
        return highlighted();
      },
      onPressOut: function onPressOut() {
        return highlighted(null);
      } },
    _react2.default.createElement(
      _reactNative.View,
      { style: { flex: 1 } },
      _react2.default.createElement(
        _Base2.default,
        _extends({ flex: 1, baseStyle: [styles.rowContainer, heightStyle] }, other),
        children,
        showMore && _react2.default.createElement(
          _Base2.default,
          { px: 2 },
          _react2.default.createElement(_Icon.ArrowRightIcon, { size: 20 })
        )
      )
    )
  );
};

TouchableRowCell.displayName = 'TouchableRowCell';

TouchableRowCell.propTypes = {
  onPress: _react.PropTypes.func.isRequired,
  disabled: _react.PropTypes.bool,
  highlighted: _react.PropTypes.func,
  showMore: _react.PropTypes.bool,
  underlayColor: _react.PropTypes.string
};

TouchableRowCell.defaultProps = {
  showMore: true,
  highlighted: noop,
  height: _reactNative.Platform.OS === 'ios' ? 60 : 65,
  disabled: false,
  underlayColor: 'rgba(0,0,0,0.1)'
};

var styles = _reactNative.StyleSheet.create({
  row: {
    overflow: 'hidden',
    justifyContent: 'center',
    flex: 1,
    alignSelf: 'stretch'
  },
  disabled: {
    opacity: 0.5
  },
  rowContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 16,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  }
});

exports.default = TouchableRowCell;