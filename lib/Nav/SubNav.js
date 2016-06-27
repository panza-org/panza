'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _index = require('../index');

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * SubNav is typically used directly below the primary
 * Navigation Bar, and displays three touchable text options.
 * This is typically used only on iOS devices. On Android,
 * you'd supply icons for these options instead, and display
 * them on the right side of the primary Navigation Bar.
 */

var SubNav = function SubNav(_ref, _ref2) {
  var options = _ref.options;
  var backgroundColor = _ref.backgroundColor;
  var borderBottom = _ref.borderBottom;
  var textColor = _ref.textColor;

  var other = _objectWithoutProperties(_ref, ['options', 'backgroundColor', 'borderBottom', 'textColor']);

  var panza = _ref2.panza;

  var _config$panza = _extends({}, _config2.default, panza);

  var borderColor = _config$panza.borderColor;


  return _react2.default.createElement(
    _index.Base,
    _extends({
      flex: 1,
      row: true,
      style: [borderBottom && { borderBottomWidth: 1 / _reactNative.PixelRatio.get() }, { borderBottomColor: borderColor }],
      justify: 'space-between',
      p: 1,
      px: 2,
      backgroundColor: backgroundColor
    }, other),
    options.map(function (opt, i) {

      var justify = 'flex-start';
      if (i === 1) justify = 'center';else if (i === 2) justify = 'flex-end';

      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1, alignItems: justify } },
        _react2.default.createElement(
          _reactNative.TouchableOpacity,
          {
            style: { flex: 0 },
            onPress: opt.onPress,
            key: opt.label },
          _react2.default.createElement(
            _index.SecondaryText,
            { color: textColor },
            opt.label
          )
        )
      );
    })
  );
};

SubNav.displayName = 'SubNav';

SubNav.propTypes = {
  textColor: _react.PropTypes.string,
  borderBottom: _react.PropTypes.bool,
  backgroundColor: _react.PropTypes.string,
  options: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    label: _react.PropTypes.string.isRequired,
    onPress: _react.PropTypes.func.isRequired
  }))
};

SubNav.defaultProps = {
  backgroundColor: 'white',
  textColor: 'primary',
  borderBottom: true
};

SubNav.contextTypes = {
  panza: _react.PropTypes.object
};

exports.default = SubNav;