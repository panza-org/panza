'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _InputRowCell = require('./InputRowCell');

var _InputRowCell2 = _interopRequireDefault(_InputRowCell);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * InputRow allows the user to input text. It will render an icon or
 * a label if either of the props are provided, and it always
 * renders a TextInput. If a label prop is provided, the TextInput
 * is aligned to the right of the row.
 *
 * InputRow composes InputRowCell, PrimaryText, and PrimaryTextInput. You can
 * use these components to create your own custom InputRow.
 *
 * To have provide borders, wrap this component (and any other rows) in an InputGroup.
 */

var InputRow = function (_React$Component) {
  _inherits(InputRow, _React$Component);

  function InputRow() {
    _classCallCheck(this, InputRow);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputRow).apply(this, arguments));
  }

  _createClass(InputRow, [{
    key: 'focus',
    value: function focus() {
      this.refs.input.focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.refs.input.blur();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var style = _props.style;
      var label = _props.label;
      var value = _props.value;
      var icon = _props.icon;
      var height = _props.height;
      var vertical = _props.vertical;
      var maxLength = _props.maxLength;
      var textAlign = _props.textAlign;
      var customInput = _props.customInput;

      var other = _objectWithoutProperties(_props, ['style', 'label', 'value', 'icon', 'height', 'vertical', 'maxLength', 'textAlign', 'customInput']);

      var alignText = textAlign || (label && !vertical ? 'right' : 'left');
      var fixedHeight = vertical ? 80 : height;

      return _react2.default.createElement(
        _InputRowCell2.default,
        { height: fixedHeight },
        icon && _react2.default.createElement(
          _index.Base,
          { ml: 2 },
          icon
        ),
        _react2.default.createElement(
          _index.Base,
          {
            row: !vertical,
            flex: 1,
            style: {
              alignSelf: 'stretch',
              alignItems: vertical ? 'flex-start' : 'center'
            } },
          label && _react2.default.createElement(
            _index.Base,
            { pl: 2, mt: vertical && 2 },
            _react2.default.createElement(
              _index.SecondaryText,
              { bold: true },
              label
            )
          ),
          customInput ? customInput : _react2.default.createElement(_index.PrimaryTextInput, _extends({
            value: value,
            maxLength: maxLength,
            style: [styles.input, style],
            textAlign: alignText
          }, other))
        )
      );
    }
  }]);

  return InputRow;
}(_react2.default.Component);

InputRow.displayName = 'InputRow';
InputRow.propTypes = {
  onChangeText: _react.PropTypes.func,
  customInput: _react.PropTypes.node,
  value: _react.PropTypes.string,
  icon: _react.PropTypes.node,
  label: _react.PropTypes.string,
  maxLength: _react.PropTypes.number,
  height: _react.PropTypes.number
};
InputRow.defaultProps = {
  editable: true,
  height: 50
};


var styles = _reactNative.StyleSheet.create({
  input: {
    paddingLeft: 16, // this should be configurable
    paddingRight: 16,
    alignSelf: 'stretch',
    flex: 1
  },
  labelText: {}

});

exports.default = InputRow;