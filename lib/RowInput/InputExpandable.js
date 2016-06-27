'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _index = require('../index');

var _InputRowCell = require('./InputRowCell');

var _InputRowCell2 = _interopRequireDefault(_InputRowCell);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var screen = _reactNative.Dimensions.get('window');

/**
 * A touchable input field that expands (iOS) or
 * pops up (Android) to reveal a picker widget.
 */

var InputExpandable = function (_React$Component) {
  _inherits(InputExpandable, _React$Component);

  function InputExpandable() {
    _classCallCheck(this, InputExpandable);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputExpandable).apply(this, arguments));
  }

  _createClass(InputExpandable, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var expanded = _props.expanded;
      var Row = _props.Row;
      var children = _props.children;

      var other = _objectWithoutProperties(_props, ['expanded', 'Row', 'children']);

      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1 } },
        Row,
        expanded && _react2.default.createElement(
          _reactNative.View,
          { style: styles.pickerWrapper },
          _react2.default.Children.only(children)
        )
      );
    }
  }]);

  return InputExpandable;
}(_react2.default.Component);

InputExpandable.displayName = 'InputExpandable';
InputExpandable.propTypes = {
  expanded: _react.PropTypes.bool.isRequired,
  Row: _react.PropTypes.node.isRequired
};


var styles = _reactNative.StyleSheet.create({
  pickerWrapper: {
    overflow: 'hidden',
    flexDirection: 'column',
    width: screen.width,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});

exports.default = InputExpandable;