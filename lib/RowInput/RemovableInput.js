'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RemovableInput$propT;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Remove button
 */

var RemoveButton = function RemoveButton(props) {
  return _react2.default.createElement(
    _index.Base,
    _extends({
      Component: _reactNative.TouchableOpacity,
      backgroundColor: 'error',
      baseStyle: styles.iconButton
    }, props),
    _react2.default.createElement(_index.Icon, {
      name: 'md-remove',
      size: 15,
      color: 'white'
    })
  );
};

/**
 * An input row typically used for inputing lists of
 * things, and lists of things with changeable labels, such
 * as a list of phone numbers, addresses, etc. You can see
 * this ui-pattern used in Apple's address book app.
 *
 * By default, these inputs are removable. 
 *
 * This needs a refactor.
 */

var RemovableInput = function (_React$Component) {
  _inherits(RemovableInput, _React$Component);

  function RemovableInput(props) {
    _classCallCheck(this, RemovableInput);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RemovableInput).call(this, props));

    _this.state = {
      showDelete: false,
      translateX: new _reactNative.Animated.Value(0)
    };
    return _this;
  }

  _createClass(RemovableInput, [{
    key: 'renderLabel',
    value: function renderLabel() {
      var _this2 = this;

      if (!this.props.label) return null;

      return _react2.default.createElement(
        _reactNative.TouchableOpacity,
        {
          style: [styles.label, this.props.labelWidth && { width: this.props.labelWidth }, this.props.vertical && { marginTop: 7 }],
          disabled: !this.props.editable || !this.props.onSelectLabel,
          onPress: function onPress() {
            if (_this2.state.showDelete) {
              _this2.hideDelete();
            }
            _this2.props.onSelectLabel();
          } },
        _react2.default.createElement(
          _index.TextBase,
          {
            color: this.props.editable && this.props.onSelectLabel ? 'primary' : 'default',
            baseStyle: styles.labelText },
          this.props.label
        )
      );
    }
  }, {
    key: 'showDelete',
    value: function showDelete() {
      this.setState({ showDelete: true });
      _reactNative.Animated.spring(this.state.translateX, { toValue: -150 }).start();
    }
  }, {
    key: 'hideDelete',
    value: function hideDelete() {
      this.setState({ showDelete: false });
      _reactNative.Animated.spring(this.state.translateX, { toValue: 0 }).start();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        _reactNative.View,
        null,
        this.props.removable && _react2.default.createElement(_index.InputRowRevealOptions, {
          height: this.props.vertical ? 80 : 40,
          options: [{
            label: 'Cancel',
            onPress: function onPress() {
              _this3.hideDelete();
            }
          }, {
            label: 'Delete',
            onPress: function onPress() {
              return _this3.props.onRemove();
            },
            backgroundColor: 'error'
          }]
        }),
        _react2.default.createElement(
          _reactNative.Animated.View,
          {
            style: [styles.container, this.props.styles, {
              transform: [{ translateX: this.state.translateX }],
              backgroundColor: this.props.backgroundColor
            }, this.props.vertical && styles.verticalStyle] },
          this.props.editable && this.props.removable && _react2.default.createElement(RemoveButton, {
            style: { marginRight: 16 },
            onPress: function onPress() {
              return _this3.showDelete();
            }
          }),
          _react2.default.createElement(
            _index.Base,
            {
              flex: 1,
              pt: this.props.vertical ? 1 : 0,
              row: !this.props.vertical },
            this.props.inputLabel ? this.props.inputLabel : this.renderLabel(),
            this.props.editable ? _react2.default.createElement(_index.SecondaryTextInput, {
              autoFocus: this.props.autoFocus,
              placeholder: this.props.placeholder,
              style: [styles.input, (this.props.vertical || !this.props.label) && { paddingLeft: 0 }],
              value: this.props.value,
              onChangeText: this.props.onChangeText
            }) : _react2.default.createElement(
              _index.Base,
              { px: this.props.vertical ? 0 : 2, flex: 1, justifyContent: 'center' },
              _react2.default.createElement(
                _index.SecondaryText,
                { numberOfLines: 1 },
                this.props.value
              )
            )
          )
        )
      );
    }
  }]);

  return RemovableInput;
}(_react2.default.Component);

RemovableInput.displayName = 'RemovableInput';
RemovableInput.propTypes = (_RemovableInput$propT = {
  label: _react.PropTypes.string,
  autoFocus: _react.PropTypes.bool,
  removable: _react.PropTypes.bool,
  placeholder: _react.PropTypes.string,
  vertical: _react.PropTypes.bool,
  amountDecorator: _react.PropTypes.bool,
  condensed: _react.PropTypes.bool,
  onSelectLabel: _react.PropTypes.func.isRequired,
  onRemove: _react.PropTypes.func
}, _defineProperty(_RemovableInput$propT, 'autoFocus', _react.PropTypes.bool), _defineProperty(_RemovableInput$propT, 'onChangeText', _react.PropTypes.func.isRequired), _defineProperty(_RemovableInput$propT, 'value', _react.PropTypes.string), _defineProperty(_RemovableInput$propT, 'backgroundColor', _react.PropTypes.string), _defineProperty(_RemovableInput$propT, 'editable', _react.PropTypes.bool), _defineProperty(_RemovableInput$propT, 'labelWidth', _react.PropTypes.number), _RemovableInput$propT);
RemovableInput.defaultProps = _defineProperty({
  removable: true,
  editable: true,
  backgroundColor: 'white',
  textAlign: 'right',
  keyboardType: 'numeric',
  autoFocus: true,
  vertical: false,
  condensed: false
}, 'autoFocus', false);


var styles = _reactNative.StyleSheet.create(_defineProperty({
  container: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    paddingLeft: 15
  },
  verticalStyle: {
    height: 80
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    borderRadius: 10
  },
  input: {
    flex: 1,
    padding: 10,
    paddingRight: 16,
    paddingLeft: 16
  },
  label: {
    flex: 0,
    alignItems: 'center',
    flexDirection: 'row'
  },
  labelText: {
    marginRight: 5
  },
  iconButton: {
    height: 20,
    width: 20,
    overflow: 'hidden',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginRight: 5
  }
}, 'icon', {
  backgroundColor: 'transparent',
  marginTop: 2
}));

exports.default = RemovableInput;