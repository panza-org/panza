'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RevealOption = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../index');

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Input Option
 */

var RevealOption = exports.RevealOption = function RevealOption(_ref) {
  var label = _ref.label;
  var textColor = _ref.textColor;
  var onPress = _ref.onPress;

  var other = _objectWithoutProperties(_ref, ['label', 'textColor', 'onPress']);

  return _react2.default.createElement(
    _index.Base,
    _extends({
      Component: _reactNative.TouchableHighlight,
      px: 1,
      baseStyle: styles.slideOption,
      onPress: onPress
    }, other),
    _react2.default.createElement(
      _reactNative.View,
      { style: styles.inputContainer },
      _react2.default.createElement(
        _index.PrimaryText,
        { color: textColor },
        label
      )
    )
  );
};

RevealOption.propTypes = {
  onPress: _react.PropTypes.func.isRequired,
  backgroundColor: _react.PropTypes.string,
  label: _react.PropTypes.string.isRequired,
  textColor: _react.PropTypes.string
};

RevealOption.defaultProps = {
  textColor: 'white',
  backgroundColor: 'midgray'
};

/**
 * Revealable row options container. Typically used
 * to delete a row.
 */

var InputRowRevealOptions = function InputRowRevealOptions(_ref2) {
  var options = _ref2.options;
  var height = _ref2.height;

  var other = _objectWithoutProperties(_ref2, ['options', 'height']);

  return _react2.default.createElement(
    _reactNative.View,
    { style: styles.slideOptions },
    _react2.default.createElement(
      _index.Base,
      _extends({ flex: 1, row: true, style: { height: height } }, other),
      options.map(function (opt) {
        var label = opt.label;
        var onPress = opt.onPress;
        var backgroundColor = opt.backgroundColor;

        var other = _objectWithoutProperties(opt, ['label', 'onPress', 'backgroundColor']);

        return _react2.default.createElement(RevealOption, _extends({
          key: label,
          onPress: onPress,
          backgroundColor: backgroundColor,
          underlayColor: 'darken',
          label: label
        }, other));
      })
    )
  );
};

InputRowRevealOptions.propTypes = {
  height: _react.PropTypes.number
};

InputRowRevealOptions.defaultProps = {
  height: 40
};

exports.default = InputRowRevealOptions;


var styles = _reactNative.StyleSheet.create({
  slideOptions: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row'
  },
  inputContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1
  }
});