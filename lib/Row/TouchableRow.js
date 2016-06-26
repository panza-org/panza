'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../index');

var _RowImage = require('./RowImage');

var _RowImage2 = _interopRequireDefault(_RowImage);

var _TouchableRowCell = require('./TouchableRowCell');

var _TouchableRowCell2 = _interopRequireDefault(_TouchableRowCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * The basic RowCell that I use about 80% of the time. It displays
 * an image, primary text, secondary text, a value,
 * and an arrow right icon if the respective props are
 * specified.
 */

var TouchableRow = function TouchableRow(_ref) {
  var primaryText = _ref.primaryText;
  var secondaryText = _ref.secondaryText;
  var image = _ref.image;
  var height = _ref.height;
  var onPress = _ref.onPress;
  var value = _ref.value;

  var other = _objectWithoutProperties(_ref, ['primaryText', 'secondaryText', 'image', 'height', 'onPress', 'value']);

  return _react2.default.createElement(
    _TouchableRowCell2.default,
    _extends({
      height: height,
      py: 2,
      onPress: onPress
    }, other),
    image && _react2.default.createElement(_RowImage2.default, { mr: 2, source: image }),
    _react2.default.createElement(
      _index.Base,
      { flex: 1, row: true, align: 'center', justify: 'space-between' },
      _react2.default.createElement(
        _index.Base,
        { flex: 1 },
        primaryText && _react2.default.createElement(
          _index.PrimaryText,
          { numberOfLines: 1 },
          primaryText
        ),
        secondaryText && _react2.default.createElement(
          _index.SecondaryText,
          { light: true, numberOfLines: 1 },
          secondaryText
        )
      ),
      value && _react2.default.createElement(
        _index.PrimaryText,
        { light: true },
        value
      )
    )
  );
};

TouchableRow.displayName = 'TouchableRow';

TouchableRow.propTypes = {
  primaryText: _react.PropTypes.string,
  secondaryText: _react.PropTypes.string,
  value: _react.PropTypes.string,
  onPress: _react.PropTypes.func,
  image: _react.PropTypes.object
};

exports.default = TouchableRow;