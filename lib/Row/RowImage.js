'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FadeImage = require('../Image/FadeImage');

var _FadeImage2 = _interopRequireDefault(_FadeImage);

var _Base = require('../Base');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = require('react-native');

var View = _require.View;
var Text = _require.Text;
var StyleSheet = _require.StyleSheet;


/**
 * RowImage composes FadeImage, providing it with
 * sensible defaults for display within a row. 
 */

var RowImage = function (_React$Component) {
  _inherits(RowImage, _React$Component);

  function RowImage() {
    _classCallCheck(this, RowImage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(RowImage).apply(this, arguments));
  }

  _createClass(RowImage, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var source = _props.source;
      var height = _props.height;
      var width = _props.width;
      var style = _props.style;
      var rounded = _props.rounded;

      var other = _objectWithoutProperties(_props, ['source', 'height', 'width', 'style', 'rounded']);

      return _react2.default.createElement(
        _Base2.default,
        other,
        _react2.default.createElement(_FadeImage2.default, {
          fade: true,
          width: width,
          height: height,
          rounded: rounded,
          source: source
        })
      );
    }
  }]);

  return RowImage;
}(_react2.default.Component);

RowImage.displayName = 'RowImage';
RowImage.propTypes = {
  source: _react.PropTypes.object.isRequired,
  height: _react.PropTypes.number,
  width: _react.PropTypes.number,
  rounded: _react.PropTypes.bool
};
RowImage.defaultProps = {
  height: 48,
  width: 48,
  rounded: true
};
exports.default = RowImage;