'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorStyle = exports.paddings = exports.margins = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.radii = radii;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _reactNative = require('react-native');

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
* The below functions are taken from rebass
* https://github.com/jxnblk/rebass/tree/master/src/util
**/

var n = function n(key, x, s) {
  return typeof x === 'number' ? _defineProperty({}, key, s[x]) : null;
};

var margins = exports.margins = function margins(props, scale) {

  var s = scale || [];

  var _ref2 = props || {};

  var m = _ref2.m;
  var mx = _ref2.mx;
  var my = _ref2.my;
  var mt = _ref2.mt;
  var mr = _ref2.mr;
  var mb = _ref2.mb;
  var ml = _ref2.ml;


  var result = Object.assign({}, n('margin', m, s), n('marginTop', mt, s), n('marginBottom', mb, s), n('marginTop', my, s), n('marginBottom', my, s), n('marginLeft', ml, s), n('marginRight', mr, s), n('marginLeft', mx, s), n('marginRight', mx, s));

  return result;
};

var paddings = exports.paddings = function paddings(props, scale) {
  var s = scale || [];

  var _ref3 = props || {};

  var p = _ref3.p;
  var px = _ref3.px;
  var py = _ref3.py;
  var pt = _ref3.pt;
  var pr = _ref3.pr;
  var pb = _ref3.pb;
  var pl = _ref3.pl;


  var result = Object.assign({}, n('padding', p, s), n('paddingTop', pt, s), n('paddingBottom', pb, s), n('paddingTop', py, s), n('paddingBottom', py, s), n('paddingLeft', pl, s), n('paddingRight', pr, s), n('paddingLeft', px, s), n('paddingRight', px, s));

  return result;
};

var getColor = function getColor(color, colors) {
  if (color && colors[color]) {
    return colors[color];
  } else if (typeof color === 'string') {
    return color;
  }
};

function radii(props) {
  var r = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];

  var _ref4 = props || {};

  var rounded = _ref4.rounded;


  var borderRadius = void 0;

  if (rounded === true) {
    borderRadius = r;
  } else if (rounded === false) {
    borderRadius = 0;
  } else if (typeof rounded === 'number') {
    borderRadius = rounded;
  }

  if (typeof borderRadius === 'undefined') {
    return {};
  } else {
    return { borderRadius: borderRadius };
  }
}

var colorStyle = exports.colorStyle = function colorStyle(props) {
  var colors = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var _ref5 = props || {};

  var backgroundColor = _ref5.backgroundColor;


  var result = {};

  if (backgroundColor) {
    result.backgroundColor = getColor(backgroundColor, colors);
  }

  return result;
};

/**
 * A general purpose component that converts our props into styles
 * defined by the user. Heavily inspired by (and somewhat directly copied)
 * from rebass.
 */

var Base = function (_React$Component) {
  _inherits(Base, _React$Component);

  function Base() {
    _classCallCheck(this, Base);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Base).apply(this, arguments));
  }

  _createClass(Base, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var style = _props.style;
      var Component = _props.Component;
      var _props$baseStyle = _props.baseStyle;
      var baseStyle = _props$baseStyle === undefined ? {} : _props$baseStyle;
      var wrap = _props.wrap;
      var underlayColor = _props.underlayColor;
      var flex = _props.flex;
      var row = _props.row;
      var column = _props.column;
      var auto = _props.auto;
      var align = _props.align;
      var justify = _props.justify;

      var props = _objectWithoutProperties(_props, ['style', 'Component', 'baseStyle', 'wrap', 'underlayColor', 'flex', 'row', 'column', 'auto', 'align', 'justify']);

      var panza = this.context.panza;

      var _config$panza = _extends({}, _config2.default, panza);

      var scale = _config$panza.scale;
      var colors = _config$panza.colors;
      var borderRadius = _config$panza.borderRadius;


      var sx = [baseStyle, style, margins(props, scale), paddings(props, scale), colorStyle(props, colors, panza), radii(props, borderRadius), flex ? { flex: flex } : null, wrap ? { flexWrap: 'wrap' } : null, column ? { flexDirection: 'column' } : null, row ? { flexDirection: 'row' } : null, align ? { alignItems: align } : null, justify ? { justifyContent: justify } : null];

      var underlay = underlayColor === 'darken' && props.backgroundColor ? (0, _color2.default)(getColor(props.backgroundColor, colors)).darken(0.1).hexString() : underlayColor;

      var Element = Component || _reactNative.View;

      return _react2.default.createElement(Element, _extends({}, props, { underlayColor: underlay, style: sx }));
    }
  }]);

  return Base;
}(_react2.default.Component);

Base.propTypes = {

  /** Margin **/
  m: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Margin top **/
  mt: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Margin right **/
  mr: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Margin bottom **/
  mb: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Margin left **/
  ml: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Margin x-axis **/
  mx: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Margin y-asix **/
  my: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Padding **/
  p: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Padding top **/
  pt: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Padding right **/
  pr: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Padding bottom **/
  pb: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Padding left **/
  pl: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Padding x-axis **/
  px: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Padding y-axis **/
  py: _react.PropTypes.oneOf([0, 1, 2, 3, 4]),

  /** Background color **/
  backgroundColor: _react.PropTypes.string,

  /** Border radius **/
  rounded: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.number]),

  /** flex property **/
  flex: _react.PropTypes.number,

  /** flex-wrap property **/
  wrap: _react.PropTypes.bool,

  /** set flex-direction to column **/
  column: _react.PropTypes.bool,

  /** set flex-direction to row **/
  row: _react.PropTypes.bool,

  /** set align-items property **/
  align: _react.PropTypes.string,

  /** set justify-content property **/
  justify: _react.PropTypes.string
};
Base.displayName = 'Base';
Base.contextTypes = {
  panza: _react.PropTypes.object
};
exports.default = Base;