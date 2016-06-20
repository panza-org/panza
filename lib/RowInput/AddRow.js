'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _iconButton;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var GreenPlusIcon = function GreenPlusIcon() {
  return _react2.default.createElement(
    _index.Base,
    {
      backgroundColor: 'green',
      mr: 2,
      style: styles.iconButton },
    _react2.default.createElement(_index.Icon, {
      name: 'md-add',
      size: 15,
      color: 'white'
    })
  );
};

/**
 * Arrow row button. Typically the condensed form
 * will be used in conjunction with <RemovableInput />
 */

var AddRow = function AddRow(_ref) {
  var label = _ref.label;
  var onPress = _ref.onPress;
  var backgroundColor = _ref.backgroundColor;
  var disabled = _ref.disabled;

  var other = _objectWithoutProperties(_ref, ['label', 'onPress', 'backgroundColor', 'disabled']);

  return _react2.default.createElement(_index.TouchableInput, _extends({
    disabled: disabled,
    label: label,
    labelColor: 'primary',
    icon: _react2.default.createElement(GreenPlusIcon, null),
    backgroundColor: backgroundColor,
    onPress: onPress
  }, other));
};

AddRow.displayName = 'AddRow';

AddRow.propTypes = {
  backgroundColor: _react.PropTypes.string,
  onPress: _react.PropTypes.func.isRequired,
  label: _react.PropTypes.string.isRequired,
  disabled: _react.PropTypes.bool
};

AddRow.defaultProps = {
  backgroundColor: 'white'
};

exports.default = AddRow;


var styles = _reactNative.StyleSheet.create({
  innerContainer: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  container: {
    height: 40,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center'
  },
  iconButton: (_iconButton = {
    height: 20,
    width: 20,
    borderRadius: 10,
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'center'
  }, _defineProperty(_iconButton, 'alignItems', 'center'), _defineProperty(_iconButton, 'alignSelf', 'center'), _defineProperty(_iconButton, 'justifyContent', 'center'), _defineProperty(_iconButton, 'padding', 4), _iconButton),
  icon: {
    backgroundColor: 'transparent',
    marginTop: 2
  },
  label: {
    paddingLeft: 5
  },
  disabled: {
    opacity: 0.3
  }
});