'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Divider = require('./Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Wrapping components with InputGroup gives you the
 * option of giving Inputs dividing borders, dividing
 * borders with an inset, a top border (with a unique inset value),
 * a bottom border (with a unique inset value), shared background
 * colours, margins, and a label. You could supply your own
 * child components, too.
 */

var InputGroup = function (_React$Component) {
  _inherits(InputGroup, _React$Component);

  function InputGroup() {
    _classCallCheck(this, InputGroup);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputGroup).apply(this, arguments));
  }

  _createClass(InputGroup, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var inset = _props.inset;
      var showBottomBorder = _props.showBottomBorder;
      var backgroundColor = _props.backgroundColor;
      var topInset = _props.topInset;
      var bottomInset = _props.bottomInset;

      var other = _objectWithoutProperties(_props, ['inset', 'showBottomBorder', 'backgroundColor', 'topInset', 'bottomInset']);

      var isArray = Array.isArray(this.props.children);

      var children = _react2.default.Children.map(this.props.children, function (child, i) {
        var isLast = i === _this2.props.children.length - 1 || !isArray;
        if (!child) return null;

        return _react2.default.createElement(
          _reactNative.View,
          { style: { alignSelf: 'stretch' } },
          child,
          _this2.props.showBorder && !isLast && _react2.default.createElement(_Divider2.default, { inset: inset })
        );
      });

      var style = [styles.group, this.props.style];

      return _react2.default.createElement(
        _index.Base,
        _extends({ flex: 1, baseStyle: style }, other),
        this.props.label && _react2.default.createElement(
          _index.SectionHeader,
          { backgroundColor: 'transparent' },
          this.props.label
        ),
        _react2.default.createElement(
          _index.Base,
          { flex: 1, backgroundColor: backgroundColor },
          this.props.showTopBorder && _react2.default.createElement(_Divider2.default, { inset: topInset }),
          children,
          this.props.showBottomBorder && _react2.default.createElement(_Divider2.default, { inset: bottomInset })
        )
      );
    }
  }]);

  return InputGroup;
}(_react2.default.Component);

InputGroup.displayName = 'InputGroup';
InputGroup.propTypes = {
  style: _react.PropTypes.object,

  /** left margin inset for the divider border **/
  inset: _react.PropTypes.number,

  /** whether show the top border **/
  showTopBorder: _react.PropTypes.bool,

  /** whether to show the bottom border **/
  showBottomBorder: _react.PropTypes.bool,

  /** whether to show the dividing border **/
  showBorder: _react.PropTypes.bool,

  /** left margin inset of the top border **/
  topInset: _react.PropTypes.number,

  /** left margin inset of the bottom border **/
  bottomInset: _react.PropTypes.number,

  /** an optional label for the input group **/
  label: _react.PropTypes.string
};
InputGroup.defaultProps = {
  bottomInset: 0,
  topInset: 0,
  showBottomBorder: true,
  showTopBorder: true,
  showBorder: true,
  inset: 0
};


var styles = _reactNative.StyleSheet.create({
  border: {
    borderTopWidth: 1 / _reactNative.PixelRatio.get(),
    borderTopColor: 'rgba(0,0,0,0.25)'
  },
  group: {
    backgroundColor: 'transparent'
  },
  margin: {
    marginTop: 30,
    marginBottom: 30
  }
});

exports.default = InputGroup;