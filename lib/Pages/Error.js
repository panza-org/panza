'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Display an error, with messages and actions depending
 * upon the user state. Particularly useful with Relay.Renderer
 * when an error state and retry function are provided.
 */

var ErrorPage = function (_React$Component) {
  _inherits(ErrorPage, _React$Component);

  function ErrorPage() {
    _classCallCheck(this, ErrorPage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ErrorPage).apply(this, arguments));
  }

  _createClass(ErrorPage, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var error = _props.error;
      var retry = _props.retry;
      var message = _props.message;
      var isOffline = _props.isOffline;
      var children = _props.children;
      var offlineMessage = _props.offlineMessage;
      var detailMessage = _props.detailMessage;

      var other = _objectWithoutProperties(_props, ['error', 'retry', 'message', 'isOffline', 'children', 'offlineMessage', 'detailMessage']);

      return _react2.default.createElement(
        _index.Base,
        _extends({ baseStyle: styles.container }, other),
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.messageContainer },
          _react2.default.createElement(
            _index.Base,
            { pb: 2 },
            _react2.default.createElement(
              _index.LargeText,
              { light: true, textAlign: 'center' },
              'Hmm, loading appears to be taking a while.'
            )
          ),
          _react2.default.createElement(
            _index.SecondaryText,
            { light: true, textAlign: 'center' },
            isOffline ? offlineMessage : detailMessage
          )
        ),
        _react2.default.createElement(
          _reactNative.View,
          null,
          !isOffline && retry && _react2.default.createElement(_index.PrimaryButton, {
            style: { width: 150 },
            primary: true,
            onPress: retry,
            label: 'Try again'
          })
        ),
        children
      );
    }
  }]);

  return ErrorPage;
}(_react2.default.Component);

ErrorPage.displayName = 'ErrorPage';
ErrorPage.propTypes = {
  error: _react.PropTypes.object.isRequired,
  retry: _react.PropTypes.func.isRequired,
  message: _react.PropTypes.string,
  detailMessage: _react.PropTypes.string,
  offlineMessage: _react.PropTypes.string,
  style: _react.PropTypes.any,
  isOffline: _react.PropTypes.bool
};
ErrorPage.defaultProps = {
  isOffline: false,
  message: 'Hmm, loading appears to be taking a while.',
  offlineMessage: 'Please ensure that you are connected to the internet.',
  detailMessage: 'It\'s possible that our server are under heavy load, or that your internet connection is slow. Please try again.'
};


var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center'
  },
  messageContainer: {
    width: 325,
    marginBottom: 30
  }
});

exports.default = ErrorPage;