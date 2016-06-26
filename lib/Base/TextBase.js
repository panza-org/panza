'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _reactNative = require('react-native');

var _Base = require('./Base');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/** Props to text-size conversions **/
var size = function size(fontSize, fontSizes, lineHeight, lineHeights, lineHeightAddition) {

  var style = {};

  // 0, 1, 2, 3, 4, 5, 6
  if (typeof fontSize === 'number') {
    style.fontSize = fontSizes[fontSize];
    style.lineHeight = Math.round(fontSizes[fontSize] * lineHeights[lineHeight] + lineHeightAddition);
  }

  return style;
};

/** Custom text styling conversions **/
var propsToStyle = function propsToStyle(props, bold, colors) {

  var style = {};

  if (props.bold) {
    style.fontWeight = bold;
  }

  if (props.light) {
    style.color = colors.midgray;
  } else if (props.color && colors[props.color]) {
    style.color = colors[props.color];
  } else if (typeof props.color === 'string') {
    style.color = props.color;
  }

  if (props.textAlign) {
    style.textAlign = props.textAlign;
  }

  return style;
};

/**
 * A general purpose text component which
 * converts props into styles defined in the configuration.
 */

var BaseText = function BaseText(_ref, _ref2) {
  var style = _ref.style;
  var fontSize = _ref.fontSize;
  var lineHeight = _ref.lineHeight;
  var baseStyle = _ref.baseStyle;
  var Component = _ref.Component;

  var props = _objectWithoutProperties(_ref, ['style', 'fontSize', 'lineHeight', 'baseStyle', 'Component']);

  var panza = _ref2.panza;

  var _config$panza = _extends({}, _config2.default, panza);

  var fontSizes = _config$panza.fontSizes;
  var lineHeights = _config$panza.lineHeights;
  var bold = _config$panza.bold;
  var colors = _config$panza.colors;
  var lineHeightAddition = _config$panza.lineHeightAddition;
  var scale = _config$panza.scale;


  var sx = [baseStyle, (0, _Base.margins)(props, scale), (0, _Base.paddings)(props, scale), size(fontSize, fontSizes, lineHeight, lineHeights, lineHeightAddition), propsToStyle(props, bold, colors), style];

  var Element = Component || _reactNative.Text;

  return _react2.default.createElement(
    Element,
    _extends({ style: sx }, props),
    props.children
  );
};

BaseText.displayName = 'TextBase';

BaseText.propTypes = {
  fontSize: _react.PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  lineHeight: _react.PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  color: _react.PropTypes.string
};

BaseText.defaultProps = {
  color: 'default',
  lineHeight: 1
};

BaseText.contextTypes = {
  panza: _react.PropTypes.object
};

exports.default = BaseText;