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
 * An input row that is typically used when you want to allow
 * the user to select a value from another ListView. In essence,
 * this is very similar to a standard TouchableRow. In the future,
 * we may consider combining the two.
 * 
 */

var TouchableInput = function TouchableInput(_ref) {
  var label = _ref.label;
  var icon = _ref.icon;
  var showMore = _ref.showMore;
  var backgroundColor = _ref.backgroundColor;
  var labelColor = _ref.labelColor;
  var value = _ref.value;
  var condensed = _ref.condensed;
  var onPress = _ref.onPress;
  var disabled = _ref.disabled;

  var other = _objectWithoutProperties(_ref, ['label', 'icon', 'showMore', 'backgroundColor', 'labelColor', 'value', 'condensed', 'onPress', 'disabled']);

  var height = condensed ? 40 : 50;

  var TextStyle = condensed ? _index.SecondaryText : _index.PrimaryText;

  return _react2.default.createElement(
    _index.Base,
    _extends({
      Component: _reactNative.TouchableHighlight,
      disabled: disabled,
      backgroundColor: backgroundColor,
      underlayColor: 'darken',
      baseStyle: [styles.container, { height: height }],
      onPress: onPress
    }, other),
    _react2.default.createElement(
      _reactNative.View,
      { style: styles.innerContainer },
      icon,
      _react2.default.createElement(
        TextStyle,
        { color: labelColor },
        label
      ),
      _react2.default.createElement(
        _index.Base,
        { flex: 1, justifyContent: 'flex-end' },
        value && _react2.default.createElement(
          TextStyle,
          { textAlign: 'right', light: true },
          value
        )
      ),
      showMore && _react2.default.createElement(
        _index.Base,
        { ml: 1 },
        _react2.default.createElement(_index.ArrowRightIcon, null)
      )
    )
  );
};

TouchableInput.displayName = 'TouchableInput';

TouchableInput.propTypes = {
  labelColor: _react.PropTypes.string,
  backgroundColor: _react.PropTypes.string,
  label: _react.PropTypes.string.isRequired,
  icon: _react.PropTypes.node,
  value: _react.PropTypes.string,
  showMore: _react.PropTypes.bool
};

TouchableInput.defaultProps = {
  labelColor: 'default',
  backgroundColor: 'white',
  showMore: false
};

exports.default = TouchableInput;


var styles = _reactNative.StyleSheet.create({
  innerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  },
  container: {
    height: 60,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center'
  }
});