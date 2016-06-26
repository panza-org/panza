'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Base = require('../Base');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var BaseIcon = function BaseIcon(_ref) {
  var name = _ref.name;
  var size = _ref.size;

  var other = _objectWithoutProperties(_ref, ['name', 'size']);

  return _react2.default.createElement(_Base.TextBase, _extends({
    className: 'ion ion-' + name,
    style: { fontSize: size + 'px' }
  }, other));
};

BaseIcon.displayName = 'BaseIcon';

BaseIcon.propTypes = {
  size: _react.PropTypes.number,
  name: _react.PropTypes.string
};

BaseIcon.defaultProps = {
  size: 25
};

exports.default = BaseIcon;