'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RemoveButton = exports.RowAction = exports.RowActions = undefined;

var _StyleSheet$create, _RemovableInput$propT, _RemovableInput$defau;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _index = require('../index');

var _RevealingRow = require('./RevealingRow');

var _RevealingRow2 = _interopRequireDefault(_RevealingRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function noop() {}

var MAX_ACTIONS = 2;

var VerticalDivider = function VerticalDivider() {
  return _react2.default.createElement(_reactNative.View, { style: { width: 1, backgroundColor: 'white' } });
};

/**
 * A collection of RowActions to be displayed behind
 * a revealing row.
 */

var RowActions = exports.RowActions = function RowActions(_ref) {
  var children = _ref.children;
  var style = _ref.style;

  var other = _objectWithoutProperties(_ref, ['children', 'style']);

  var buttons = [];

  if (Array.isArray(children)) {
    children.forEach(function (child, i) {
      var isNotLast = i < children.length - 1;
      buttons.push(child);
      if (isNotLast) {
        buttons.push(_react2.default.createElement(VerticalDivider, { key: 'divider' + i }));
      }
    });
  } else {
    buttons = children;
  }

  return _react2.default.createElement(
    _index.Base,
    _extends({
      baseStyle: [{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }, style]
    }, other),
    buttons
  );
};

/**
 * A row action that hide underneath the row, such
 * as 'Delete', or 'Edit', etc.
 */

var RowAction = exports.RowAction = function RowAction(_ref2) {
  var children = _ref2.children;

  var props = _objectWithoutProperties(_ref2, ['children']);

  return _react2.default.createElement(
    _index.Base,
    _extends({
      justify: 'center',
      underlayColor: 'darken',
      px: 2,
      baseStyle: _reactNative.Platform.select({ web: { outline: 'none' } }),
      Component: _reactNative.TouchableHighlight
    }, props),
    _react2.default.createElement(
      _reactNative.View,
      null,
      children
    )
  );
};

/**
 * Remove button
 */

var RemoveButton = exports.RemoveButton = function RemoveButton(props) {
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
 * A removable input
 */

var RemovableInput = function (_React$Component) {
  _inherits(RemovableInput, _React$Component);

  function RemovableInput(props) {
    _classCallCheck(this, RemovableInput);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RemovableInput).call(this, props));

    _this.state = {
      showingOptions: false
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
          style: [styles.label, this.props.labelWidth && { width: this.props.labelWidth }, this.props.vertical && { marginTop: 16 }],
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
    key: 'render',
    value: function render() {
      var _this3 = this;

      var revealed = _react2.default.createElement(
        RowActions,
        null,
        _react2.default.createElement(
          RowAction,
          {
            key: 'cancel',
            onPress: function onPress() {
              _this3.setState({ showingOptions: false });
            },
            backgroundColor: '#eee' },
          _react2.default.createElement(
            _index.SecondaryText,
            null,
            'Cancel'
          )
        ),
        _react2.default.createElement(
          RowAction,
          {
            key: 'delete',
            onPress: function onPress() {
              _this3.setState({ showingOptions: false });
              _this3.props.onRequestRemove();
            },
            backgroundColor: 'red' },
          _react2.default.createElement(
            _index.SecondaryText,
            { color: 'white' },
            'Remove'
          )
        )
      );

      var height = this.props.height;

      if (this.props.vertical) {
        height = this.props.verticalHeight;
      }

      if (height === 'auto') {
        height = null;
      }

      return _react2.default.createElement(
        _RevealingRow2.default,
        {
          style: { flex: 1, alignSelf: 'stretch' },
          showingOptions: this.state.showingOptions,
          revealedContent: revealed },
        _react2.default.createElement(
          _index.InputRowCell,
          { height: height },
          _react2.default.createElement(
            _index.Base,
            { row: this.props.removable, style: { alignSelf: 'stretch' }, flex: 1, pl: 2 },
            this.props.removable && _react2.default.createElement(RemoveButton, {
              style: { marginRight: 16 },
              onPress: function onPress() {
                _this3.setState({ showingOptions: true });
              }
            }),
            _react2.default.createElement(
              _index.Base,
              {
                flex: 1,
                style: { alignSelf: 'stretch' },
                row: !this.props.vertical },
              this.renderLabel(),
              this.props.editable ? _react2.default.createElement(_index.PrimaryTextInput, {
                autoFocus: this.props.autoFocus,
                disabled: !this.props.editable,
                placeholder: this.props.placeholder,
                style: [styles.input, (this.props.vertical || !this.props.label) && { paddingLeft: 0 }],
                value: this.props.value,
                onChangeText: this.props.onChangeText
              }) : _react2.default.createElement(
                _index.Base,
                { px: 0, flex: 1, justifyContent: 'center' },
                _react2.default.createElement(
                  _index.PrimaryText,
                  { numberOfLines: 1 },
                  this.props.value
                )
              )
            )
          )
        )
      );
    }
  }]);

  return RemovableInput;
}(_react2.default.Component);

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

// class RemovableInput extends React.Component {
//
//   static displayName = 'RemovableInput'
//
//   static propTypes = {
//     label: PropTypes.string,
//     autoFocus: PropTypes.bool,
//     removable: PropTypes.bool,
//     placeholder: PropTypes.string,
//     vertical: PropTypes.bool,
//     amountDecorator: PropTypes.bool,
//     condensed: PropTypes.bool,
//     onSelectLabel: PropTypes.func.isRequired,
//     onRemove: PropTypes.func,
//     autoFocus: PropTypes.bool,
//     onChangeText: PropTypes.func.isRequired,
//     value: PropTypes.string,
//     backgroundColor: PropTypes.string,
//     editable: PropTypes.bool,
//     labelWidth: PropTypes.number
//   }
//
//   static defaultProps = {
//     removable: true,
//     editable: true,
//     backgroundColor: 'white',
//     textAlign: 'right',
//     keyboardType: 'numeric',
//     autoFocus: true,
//     vertical: false,
//     condensed: false,
//     autoFocus: false
//   }
//
//   constructor(props) {
//     super(props)
//     this.state = {
//       translateX: new Animated.Value(0)
//     }
//   }
//
//   renderLabel() {
//     if (!this.props.label) return null
//
//     return (
//       <TouchableOpacity
//         style={[
//           styles.label,
//           this.props.labelWidth && { width: this.props.labelWidth },
//           this.props.vertical && { marginTop: 7 }
//         ]}
//         disabled={(!this.props.editable || !this.props.onSelectLabel)}
//         onPress={() => {
//           if (this.state.showDelete) {
//             this.hideDelete()
//           }
//           this.props.onSelectLabel()
//         }}>
//           <TextBase
//             color={(this.props.editable && this.props.onSelectLabel) ? 'primary' : 'default'}
//             baseStyle={styles.labelText}>
//               {this.props.label}
//           </TextBase>
//         </TouchableOpacity>
//     )
//   }
//
//   showDelete() {
//     Animated.spring(
//       this.state.translateX,
//       { toValue: -150 }
//     ).start()
//   }
//
//   hideDelete() {
//     Animated.spring(
//       this.state.translateX,
//       { toValue: 0 }
//     ).start()
//   }
//
//   render () {
//     return (
//       <View>
//
//         {this.props.removable &&
//           <InputRowRevealOptions
//             height={this.props.vertical ? 80 : 40}
//             options={[
//               {
//                 label: 'Cancel',
//                 onPress: () => {
//                   this.hideDelete()
//                 }
//               },
//               {
//                 label: 'Delete',
//                 onPress: () => this.props.onRemove(),
//                 backgroundColor: 'error'
//               }
//             ]}
//           />
//         }
//
//       <Animated.View
//         style={[
//           styles.container,
//           this.props.styles, {
//             transform: [{ translateX: this.state.translateX }],
//             backgroundColor: this.props.backgroundColor
//           },
//           this.props.vertical && styles.verticalStyle
//         ]}>
//         {(this.props.editable && this.props.removable) && (
//           <RemoveButton
//             style={ { marginRight: 16 } }
//             onPress={() => this.showDelete()}
//           />
//         )}
//         <Base
//           flex={1}
//           pt={this.props.vertical ? 1 : 0}
//           row={!this.props.vertical}>
//
//           {this.props.inputLabel ? this.props.inputLabel :
//             this.renderLabel()
//           }
//
//           {this.props.editable
//             ? (
//               <SecondaryTextInput
//                 autoFocus={this.props.autoFocus}
//                 placeholder={this.props.placeholder}
//                 style={[styles.input, (this.props.vertical || !this.props.label) && { paddingLeft: 0 }]}
//                 value={this.props.value}
//                 onChangeText={this.props.onChangeText}
//               />
//             )
//             : (
//               <Base px={this.props.vertical ? 0 : 2} flex={1} justifyContent='center'>
//                 <SecondaryText numberOfLines={1}>
//                   {this.props.value}
//                 </SecondaryText>
//               </Base>
//             )
//           }
//         </Base>
//
//       </Animated.View>
//       </View>
//     )
//   }
// }

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
}, _defineProperty(_RemovableInput$propT, 'autoFocus', _react.PropTypes.bool), _defineProperty(_RemovableInput$propT, 'onChangeText', _react.PropTypes.func.isRequired), _defineProperty(_RemovableInput$propT, 'value', _react.PropTypes.string), _defineProperty(_RemovableInput$propT, 'backgroundColor', _react.PropTypes.string), _defineProperty(_RemovableInput$propT, 'editable', _react.PropTypes.bool), _defineProperty(_RemovableInput$propT, 'labelWidth', _react.PropTypes.number), _defineProperty(_RemovableInput$propT, 'verticalHeight', _react.PropTypes.number), _RemovableInput$propT);
RemovableInput.defaultProps = (_RemovableInput$defau = {
  removable: true,
  editable: true,
  backgroundColor: 'white',
  textAlign: 'right',
  keyboardType: 'numeric',
  autoFocus: true,
  vertical: false,
  condensed: false
}, _defineProperty(_RemovableInput$defau, 'autoFocus', false), _defineProperty(_RemovableInput$defau, 'onRequestRemove', noop), _defineProperty(_RemovableInput$defau, 'verticalHeight', 80), _defineProperty(_RemovableInput$defau, 'height', 50), _RemovableInput$defau);
var styles = _reactNative.StyleSheet.create((_StyleSheet$create = {
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
  input: _extends({
    flex: 1,
    alignSelf: 'stretch',
    paddingRight: 16,
    paddingLeft: 16
  }, _reactNative.Platform.select({
    web: { height: '100%' }
  })),
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
}, _defineProperty(_StyleSheet$create, 'icon', {
  backgroundColor: 'transparent',
  marginTop: 2
}), _defineProperty(_StyleSheet$create, 'revealContainer', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  top: 0
}), _StyleSheet$create));

exports.default = RemovableInput;