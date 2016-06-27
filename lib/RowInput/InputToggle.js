'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../index');

var _config2 = require('../config');

var _config3 = _interopRequireDefault(_config2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = require('react-native');

var View = _require.View;
var Switch = _require.Switch;
var Platform = _require.Platform;
var Text = _require.Text;
var StyleSheet = _require.StyleSheet;


/**
 * An basic input row with a label and Switch, allowing
 * the user to toggle a boolean value.
 */

var InputToggle = function (_React$Component) {
  _inherits(InputToggle, _React$Component);

  function InputToggle() {
    _classCallCheck(this, InputToggle);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputToggle).apply(this, arguments));
  }

  _createClass(InputToggle, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var style = _props.style;
      var label = _props.label;
      var value = _props.value;
      var editable = _props.editable;
      var onValueChange = _props.onValueChange;
      var switchProps = _props.switchProps;
      var onTintColor = _props.onTintColor;
      var backgroundColor = _props.backgroundColor;

      var other = _objectWithoutProperties(_props, ['style', 'label', 'value', 'editable', 'onValueChange', 'switchProps', 'onTintColor', 'backgroundColor']);

      var panza = this.context.panza;

      var _config = _extends({}, _config3.default, panza || {});

      var colors = _config.colors;

      var tintColor = colors[onTintColor];

      return _react2.default.createElement(
        _index.InputRowCell,
        null,
        _react2.default.createElement(
          _index.Base,
          { pl: 2 },
          _react2.default.createElement(
            _index.PrimaryText,
            null,
            label
          )
        ),
        _react2.default.createElement(
          _index.Base,
          { flex: 1 },
          _react2.default.createElement(Switch, _extends({
            style: styles.switch,
            value: value,
            edisabled: !editable,
            onTintColor: tintColor
          }, switchProps, {
            onValueChange: onValueChange
          }))
        )
      );
    }
  }]);

  return InputToggle;
}(_react2.default.Component);

InputToggle.displayName = 'InputToggle';
InputToggle.propTypes = {
  style: _react.PropTypes.any,
  value: _react.PropTypes.bool.isRequired,
  backgroundColor: _react.PropTypes.string,
  label: _react.PropTypes.string.isRequired,
  onValueChange: _react.PropTypes.func.isRequired,
  editable: _react.PropTypes.bool
};
InputToggle.defaultProps = {
  backgroundColor: 'transparent',
  editable: true,
  onTintColor: 'success'
};
InputToggle.contextTypes = {
  panza: _react.PropTypes.object
};


var styles = StyleSheet.create({
  switch: _extends({
    alignSelf: 'flex-end',
    marginRight: 16
  }, Platform.select({
    android: {
      marginVertical: 13
    }
  }))
});

module.exports = InputToggle;